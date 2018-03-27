 //1. console.log("HELLO WORLD")//

 /*2.baby steps
 var sum = 0
 for (var n = 2; n < process.argv.length; n++)
  sum += Number(process.argv[n])
  console.log(sum)*/


/*3. My first I/O
var fs = require('fs')
var readfiles = fs.readFileSync(process.argv[2])
var newlines = readfiles.toString().split('\n').length - 1

console.log(newlines)*/


/*4.
My first Async I//0
var fs= require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, readfiles) {
    var newlines = readfiles.toString().split('\n').length - 1
    console.log(newlines)
})
*/


/*5.Filtered list
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3]) {
            console.log(file)
        }
    })
})
*/



//6.Make it modular
/*var filterFn = require('./program.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('Error occured', err)
    }

    list.forEach(function (file) {
        console.log(file)
    })
})

//program.js
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
    })
}*/


/*7.http CLIENT
 var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})*/

/*8. HTTP COLLECT
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
})
*/


/*9. Juggling Async

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function Results () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
          Results()
    }))
  })
}

for (var i = 0; i < 3; i++)
httpGet(i)
*/



/* 10. Time server

var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})
server.listen(Number(process.argv[2]))
*/




/*
//11.HTTP FILE SERVER
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(400, {'content-type': 'text/plain'})

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/



/*12.
 //Http Uppercaser
 var http = require('http')
 var map = require('through2-map')

 var server = http.createServer(function (req, res) {
     if (req.method != 'POST') {
         return res.end('this is not POST request')
     }

     req.pipe(map(function (chunk) {
         return chunk.toString().toUpperCase();
     })).pipe(res);
 })

 server.listen(Number(process.argv[2]))

 */



/*
 //13.Http Json Api Server
 var net = require('net')

 function zeroPadding(nb) {
     return (nb < 10) ? ('0' + nb) : (nb)
 }

 function formatDate(date) {
     return date.getFullYear()
         +'-'+zeroPadding((date.getMonth() + 1))
         +'-'+zeroPadding(date.getDate())
         +' '+zeroPadding(date.getHours())
         +':'+zeroPadding(date.getMinutes())
 }

 var server = net.createServer(function(socket) {
     var date = new Date();
     socket.end(formatDate(date) + '\n')
 })

 server.listen(Number(process.argv[2]))
*/
