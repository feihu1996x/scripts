var fs = require('fs');
var readline = require('readline');
var path = require("path");

var root = path.join(__dirname);
var data = {};

readDirSync(root);

function readDirSync(path) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            readDirSync(path + "/" + ele);
        } else {
            read_file(ele, function (arr) {
                for (var arrItem of arr) {
                    if ((/8195@gzjs/).test(arrItem) && (/2020-11-04/).test(arrItem)) {
                        try {
                            var res = JSON.parse(arrItem.replace(/\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d{3}\] \[INFO\] app - get request service\[.*?-.*?-.*?-.*?-.*?\] from\[127.0.0.1\]:/i, ""));
                            var datetime = arrItem.replace(/ \[INFO\] app - get request service\[.*?-.*?-.*?-.*?-.*?\] from\[127.0.0.1\]:.*/i, "").replace(/\[|\]/g, "");
                            var ipAddr = arrItem.replace(/\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d{3}\] \[INFO\] app - get request service\[.*?-.*?-.*?-.*?-.*?\] from\[/i, "").replace(/{.*}/g, "").replace(/]:/g," ");
                            if (!data[res.data.ApnsDeviceId]) {
                                data[res.data.ApnsDeviceId] = [];
                            }
                            data[res.data.ApnsDeviceId].push((datetime + "," + res.data.ApnsDeviceId + "," + ipAddr + "," + res.data.Platform).replace(" ,iOS", ",iOS"));
                            fs.writeFileSync("demo/res.json", JSON.stringify(data));
                        } catch (error) {
                            fs.appendFileSync("demo/err.json", arrItem);
                        }
                    }
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