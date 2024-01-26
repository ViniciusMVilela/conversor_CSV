const Reader = require("./classes/Reader");
const Writer = require("./classes/Writer");
const Processor = require("./classes/Processor");
const Table = require("./classes/Table");
const HtmlParser = require("./classes/HtmlParser");
const PdfWriter = require("./classes/PdfWriter");

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  var data = await leitor.Read("./user.csv");
  var dadosProcessados = Processor.Process(data);

  var userData = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(userData);

  escritor.Write(Date.now() + ".html", html);
  PdfWriter.WritePdf(Date.now() + ".PDF", html);
}

main();
