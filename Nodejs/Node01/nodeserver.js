const http = require('http');
http
    .createServer((req, res) => {
        console.log('request มาอีกแล้ว')
        res.write('สวัสดีจาก node web server');
        res.end();
    })
    .listen(80);
console.log('one');
console.log('two');
console.log('three');