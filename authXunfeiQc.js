db.platform_user.update({
    "account" : "N00000020170",
    "exten": {
        $in: ["8885", "8002", "8008"]
    }
}, {
    $set: {
        "xunfeiQualityCheckSystemUsername": "yqhq01",
        "xunfeiQualityCheckSystemAddress": "http://10.124.25.134:20901/",
    }
}, { multi: true })
db.platform_user.find({
    "account" : "N00000020170",
    "exten": {
        $in: ["8885", "8002", "8008"]
    }
})