{
    "_id" : "7bd99070-94ec-11ea-a886-6b7b2d32a872",
    "Account" : "N00000002751",
    "Exten" : "10102",
    "PBX" : "gz.zj.7.3",
    "DisplayName" : "默认日程",
    "Order" : 999,
    "StartDate" : "*",
    "EndDate" : "*",
    "StartTime" : "*",
    "EndTime" : "*",
    "WeekMon" : true,
    "WeekTue" : true,
    "WeekWed" : true,
    "WeekThu" : true,
    "WeekFri" : true,
    "WeekSat" : true,
    "WeekSun" : true,
    "IsDefault" : "1",
    "ServiceNo" : "075781286361",
    "FlowId" : "dfb86280-724e-11ea-b313-71df2c9f070a",
    "ToPeerType" : "system",
    "ToPeer" : "0",
    "ServiceNoID" : "7bcb1180-94ec-11ea-a886-6b7b2d32a872",
    "AnnouncementId" : null,
    "MatchedPeer" : null,
    "UnmatchedPeer" : null,
    "Times" : "*,mon&tue&wed&thu&fri&sat&sun,*,*",
    "UpdateTime" : "2020-05-13 15:36:39",
    "UpdateUser" : "2da6f700-94e5-11ea-a886-6b7b2d32a872"
}
db.manager_ivr_schedule.update({_id: "7bd99070-94ec-11ea-a886-6b7b2d32a872"}, {
    $set: {
        "AnnouncementId": "cac6b400-1fdf-11eb-b806-c793964eb175"
    }
})
db.manager_ivr_announcement.insert({
    "_id" : "cac6b400-1fdf-11eb-b806-c793964eb175",
    "Account" : "N00000002751",
    "Exten" : "10102",
    "PBX" : "gz.zj.7.3",
    "ServiceNo" : "075781286361",
    "ToPeerType" : "ivr_node_twowaycall",
    "DisplayName" : "中继号：0660446292默认日程语音",
    "ToPeer" : "10011",
    "UpdateTime" : "2017-05-11",
    "UpdateUser" : "5baf1560-361a-11e7-a474-85dcfb743888",
    "Filename" : ""
})