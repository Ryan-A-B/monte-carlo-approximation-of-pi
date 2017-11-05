const cluster = require("cluster");
const maxProcesses = require('os').cpus().length;

const async = require("async");
const lodash = require("lodash");
const numeral = require("numeral");

exports.handler = () => {
    const iterations = numeral(process.argv[5]).value();
    
    const getApproximation = (callback) => {
        const worker = cluster.fork();
    
        worker.on('message', (message) => {
            callback(null, message);
        });
    }

    async.parallelLimit(
        Array(iterations).fill(getApproximation),
        maxProcesses,
        (err, data) => {console.log(lodash.sum(data) / data.length)}
    );
};