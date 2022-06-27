module.exports = class NumberError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid number`);
    this.name = 'InvalidNumber';
  }
}
