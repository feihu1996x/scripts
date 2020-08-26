#!/usr/bin/env python3

"""
@file: generateExcel.py
@brief: generate excel file
@author: feihu1996.cn
@date: 20-08-22
@version: 1.0
"""


import xlsxwriter
import json
import re
import sys

sys.setrecursionlimit(1000000)


appKmCatalog = []
appKmItem = []
appKmContent = []
appKmCatalogMap = {}
appKmCatalogPidMap = {}
appKmCatalogClass = {}
outerHeads = []
appKm = []


def getClassFromHead(head):
    res = None
    try:
        res = int(re.sub("级目录", "", head))
    except:
        return res
    else:
        return res


def _keyIsInDict(keyIsInDictRes, k, c):
    for (_k, _v) in c.items():
        if _k == k:
            keyIsInDictRes["value"] = True
            break
        _keyIsInDict(keyIsInDictRes, k, _v)
    

def keyIsInDict(k, c):
    _keyIsInDictRes = { "value": False }
    _keyIsInDict(_keyIsInDictRes, k, c)
    return _keyIsInDictRes.get("value")


def _getAppKmClass(cidListByLayer, c, cid):
    for (_k, _v) in c.items():
        if keyIsInDict(cid, _v) or cid == _k:
            cidListByLayer.append(_k)
        _getAppKmClass(cidListByLayer, _v, cid)
        del _k
        del _v


def getAppKmClass(c, cid):
    _cidListByLayer = []
    _getAppKmClass(_cidListByLayer, c, cid)
    return _cidListByLayer


def findMaxLayer(d):
    return max(findMaxLayer(v) if isinstance(v, dict) and len(v.keys()) else 0 for v in d.values()) + 1


def setKV(cl):
    for (_k, _v) in cl.items():
        _v1 = appKmCatalogPidMap.get(_k)
        if _v1 is None:
            continue
        for _i in range(len(_v1)):
            _v[_v1[_i].get("_id")] = {}
            setKV(_v)
            del _i
        del _k
        del _v


if "__main__" == __name__:
    with open("./app_km_catalog.json", "r") as _f:
        _content = re.sub("}\n{", "},{", _f.read())
        _content = "[" + _content + "]"
        appKmCatalog = json.loads(_content)
        del _f
        del _content
    for _i in range(len(appKmCatalog)):
        appKmCatalogMap[appKmCatalog[_i].get("_id")] = appKmCatalog[_i]
        if not appKmCatalogPidMap.get(appKmCatalog[_i].get("pid")):
            appKmCatalogPidMap[appKmCatalog[_i].get("pid")] = []
        appKmCatalogPidMap[appKmCatalog[_i].get("pid")].append(appKmCatalog[_i])
        del _i
    for _j in range(len(appKmCatalog)):
        if appKmCatalog[_j].get("pid") == "0":
            appKmCatalogClass[appKmCatalog[_j].get("_id")] = {}
        del _j
    setKV(appKmCatalogClass)
    dictMaxDepth = findMaxLayer(appKmCatalogClass)
    for _i in range(dictMaxDepth):
        outerHeads.append("{0}级目录".format(_i+1))
    outerHeads.append("标题")
    outerHeads.append("内容")
    with open("./app_km_item.json", "r") as _f:
        _content = re.sub("}\n{", "},{", _f.read())
        _content = "[" + _content + "]"
        appKmItem = json.loads(_content)
        del _f
        del _content
    with open("./app_km_content.json", "r") as _f:
        _content = re.sub("}\n{", "},{", _f.read())
        _content = "[" + _content + "]"
        appKmContent = json.loads(_content)
        del _f
        del _content
    for _i in range(len(appKmContent)):
        _id = appKmContent[_i].get("_id")
        _content = appKmContent[_i].get("content")
        for _j in range(len(appKmItem)):
            if _id == appKmItem[_j].get("_id"):
                _title = appKmItem[_j].get("title")
                _cid = appKmItem[_j].get("cid")
                appKm.append({
                    "cid": _cid,
                    "title": _title,
                    "content": _content
                })
                del _title
                del _cid
            del _j
        del _id
        del _content
        del _i
    for _i in range(len(appKm)):
        _cid = appKm[_i].get("cid")
        appKm[_i].pop("cid")
        _cids = getAppKmClass(appKmCatalogClass, _cid)
        for _j in range(len(_cids)):
            appKm[_i]["{}cid".format(_j+1)] = appKmCatalogMap.get(_cids[_j]).get("name")
            del _j
        del _cid
        del _i
    workBook = xlsxwriter.Workbook('实地地产知识库(内部).xlsx')
    workSheet = workBook.add_worksheet()
    for _i in range(len(outerHeads)):
        workSheet.write(0, _i, outerHeads[_i])
        del _i
    for _i in range(len(appKm)):
        for _j in range(len(outerHeads)):
            _head = outerHeads[_j]
            if _head == "标题":
                workSheet.write(_i+1, _j, appKm[_i].get("title"))
            elif _head == "内容":
                workSheet.write(_i+1, _j, appKm[_i].get("content"))
            elif getClassFromHead(_head):
                workSheet.write(_i+1, _j, appKm[_i].get("{}cid".format(getClassFromHead(_head))))
            else:
                workSheet.write(_i+1, _j, "")
            del _j
            del _head
        del _i
    workBook.close()
