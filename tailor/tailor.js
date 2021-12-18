'use strict';

const http = require('http');
const Tailor = require('node-tailor');

const tailor = new Tailor({
    templatesPath: './templates/index.html'
    // The place to define a custom Opentracing tracer like Jaeger, for ex.
    // tracer: initTracer(config, options)
});

// Root Server
http
    .createServer((req, res) => {
        tailor.requestHandler(req, res);
    })
    .listen(8080, function() {
        console.log('Tailor server listening on port 8080');
    });

// // Fragment server - Any http server that can serve fragments
// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.end('<div>Header</div>');
//     })
//     .listen(4300, function() {
//         console.log('Fragment Server listening on port 4300');
//     });

//     // Fragment server - Any http server that can serve fragments
//     http
//         .createServer((req, res) => {
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             });
//             res.end('<div>Content</div>');
//         })
//         .listen(4200, function() {
//             console.log('Fragment Server listening on port 4200');
//         });