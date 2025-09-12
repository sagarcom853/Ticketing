import express from "express";
import type { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/RequestValidationError.js";
import { DatabaseConnectionError } from "../errors/databaseConnection-error.js";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }).withMessage("Password must be valid"),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {      // ✅ Send validation errors to middleware
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    // Simulating DB error
    return next(new DatabaseConnectionError());
  }
);

export { router as SignupRouter };
