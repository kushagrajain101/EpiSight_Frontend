// middleware/validation.js - Input validation middleware
const { z } = require("zod");

const signupSchema = z.object({
  username: z.string()
    .min(5, "Username must be at least 5 characters long")
    .max(30, "Username must be at most 30 characters long")
    .trim(),
  email: z.string()
    .email("Invalid email format")
    .max(50, "Email must be at most 50 characters long")
    .trim()
    .toLowerCase(),
  password: z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(15, "Password must be at most 15 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character")
});

const validateSignup = (req, res, next) => {
  try {
    const result = signupSchema.safeParse(req.body);
    
    if (!result.success) {
      const formattedErrors = result.error.format();
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: formattedErrors
      });
    }
    
    // Add validated data to request
    req.validatedData = result.data;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Validation error",
      error: error.message
    });
  }
};

module.exports = { validateSignup };