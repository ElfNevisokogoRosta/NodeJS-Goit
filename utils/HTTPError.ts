class ErrorWithStatus extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

function HTTPError(status: number, message: string) {
  const e = new ErrorWithStatus(message, status);
  console.log(e);
  return e;
}
export { HTTPError };
