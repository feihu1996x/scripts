var fs = require('fs');
var readline = require('readline');
var path = require("path");

var root = path.join(__dirname);
var data = [];
var sessionIds = ["1732620","1732644","1732712","1732798","1732978","1732968","1733141","1733155"];

readDirSync(root);

function readDirSync(path) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            readDirSync(path + "/" + ele);
        } else {
            var lastLine = null;
            read_file(ele, function (arr) {
                for (var arrItem of arr) {
                    var pattern = 'Got message from .*?"LoginName":"8195@gzjs"';
                    if (lastLine && (/2020-11-05.*?/).test(lastLine) && (new RegExp(pattern)).test(arrItem)) {
                        data.push(lastLine + "\n" + arrItem);
                        fs.writeFileSync("demo/res.json", data.join("\n"));
                    }
                    lastLine = arrItem;
                }
            });

        }
    })
}


function read_file(path, callback) {
    var fRead = fs.createReadStream(path);
    var objReadline = readline.createInterface({
        input: fRead
    });
    var arr = new Array();
    objReadline.on('line', function (line) {
        arr.push(line);
    });
    objReadline.on('close', function () {
        callback(arr);
    });
}