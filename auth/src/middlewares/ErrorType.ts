export class RequestValidationError extends Error {
  constructor(public errors: any[]) {
    super('Invalid request parameters');
    
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}