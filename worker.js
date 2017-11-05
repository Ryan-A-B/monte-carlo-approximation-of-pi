const numeral = require("numeral");

exports.handler = () => {
    const size = numeral(process.argv[2]).value();
    const diameter = numeral(process.argv[3]).value();
    const n = numeral(process.argv[4]).value();

    process.send(require("./index").handler(size, diameter, n));
    process.exit();
};