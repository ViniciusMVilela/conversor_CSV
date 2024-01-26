class Processor {
  static Process(data) {
    var csvData = data.split("\r\n"); // ambas são maneiras de quebra de linha
    var rows = [];

    csvData.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });

    return rows;
  }
}

module.exports = Processor;
