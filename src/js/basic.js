// Homework ajs_8.2
export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors
      .set(0, 'typeError')
      .set(1, 'syntax error')
      .set(2, 'wrong value error');
  }

  translate(code) {
    const extractedError = this.errors.get(code);
    if (extractedError) return extractedError;
    return 'Unknown error';
  }
}
