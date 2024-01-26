const fs = require("fs");
const util = require("util");

class Reader {
  constructor() {
    // retorna a função readFile na variável
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filepath) {
    try {
      return await this.reader(filepath, "utf8");
    } catch (err) {
      return undefined;
    }
  }
}

module.exports = Reader;
