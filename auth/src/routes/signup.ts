import express from "express";
import type { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }).withMessage("Password must be valid"),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // ✅ Send validation errors to middleware
      return next(new Error("Invalid request parameters"));
    }

    const { email, password } = req.body;

    // Simulating DB error
    return next(new Error("Error connecting to database"));
  }
);

export { router as SignupRouter };
