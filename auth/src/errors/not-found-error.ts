import { CustomError } from "./customError.js";

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super('Not Found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: "Route Not Found" }];
  }
}
