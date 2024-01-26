class Table {
  constructor(arr) {
    this.header = arr[0]; // cabeçalho
    arr.shift(); // desse modo removemos o cabeçalho, e tudo que sobra são os dados, então podemos capturar todo o array
    this.rows = arr;
  }

  // campos virtuais
  get RowCount() {
    return this.rows.length;
  }

  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;
