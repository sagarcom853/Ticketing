import type { ValidationError } from "express-validator";
import { CustomError } from "./customError.js"

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.filter((err) => err.type === "field").map((err) => ({ message: err.msg, field: err.path }));
  }
}
