export class CustomException {
  static message(text) {
    throw new Error(text);
  }
}