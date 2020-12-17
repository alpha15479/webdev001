import * as request from 'request';
request.get('https://api.exchangeratesapi.io/latest')
    .on('response', res => {
        console.log(`response statusCode : ${res.statusCode}`)
        // console.log(res.headers)
    })