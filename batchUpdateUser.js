var request = require('request');
var fs = require("fs");
fs.readFile("./platform_user.json", function (error, data) {
    if (error) {
        console.error(error);
    } else {
        const users = JSON.parse(data);
        for (let _user of users) {
            var user = {
                "status": _user.status || "",
                "action": "update",
                "_id": _user._id || "",
                "salt": _user.salt || "",
                "displayName": _user.displayName || "",
                "exten": _user.exten || "",
                "type": _user.type || "",
                "mobile": _user.mobile || "",
                "workPhoneAccount": _user.workPhoneAccount || "",
                "email": _user.email || "",
                "callerIDNum": _user.callerIDNum || "",
                "AutoBusyTime": _user.AutoBusyTime || "",
                "uversion": _user.uversion || "",
                "Account": _user.account || "",
                "PBX": _user.pbx || "",
            };
            var options = {
                'method': 'POST',
                'url': 'https://ccdx.chem99.com/action',
                'headers': {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                form: {
                    'action': 'config.ivr.agent.updateAgent',
                    'data': JSON.stringify(user),
                    'sessionId': '85e36650-24e7-11eb-963f-cb013fb66bbe'
                }
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
        }        
    }
});
