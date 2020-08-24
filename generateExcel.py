#!/usr/bin/env python3

"""
@file: generateExcel.py
@brief: generate excel file
@author: feihu1996.cn
@date: 20-08-22
@version: 1.0
"""


import xlwt
import json
import re
import sys

sys.setrecursionlimit(1000000)


style = xlwt.easyxf('align: vertical center, horizontal center')
appKmCatalog = None
appKmCatalogMap = {}
appKmCatalogPidMap = {}
appKmCatalogClass = {}
appKmCatalogClassLayer = {}
outerHeads = []


def getMaxDepth():
    _maxDepth = 1
    for (_k, _v) in appKmCatalogClassLayer.items():
        if _v >_maxDepth:
            _maxDepth = _v
    return _maxDepth


def getRootKey(k):
    exitFlag = False
    for (_k, _v) in appKmCatalogClass.items():
        _currentRootKey = _k
        while not exitFlag:
            for (_k1, _v1) in _v.items():
                if _k1 == k:
                    exitFlag = True
                    del _k1
                    del _v1
                    break
                del _k1
                del _v1
        if exitFlag:
            del _k
            del _v
            break               
        del _k
        del _v
        return _currentRootKey


def setKV(cl):
    for (_k, _v) in cl.items():
        # if getRootKey(_k) not in appKmCatalogClassLayer:
        #     appKmCatalogClassLayer[getRootKey(_k)] = 0
        # appKmCatalogClassLayer[getRootKey(_k)] = appKmCatalogClassLayer[getRootKey(_k)] + 1        
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
    # wBook1 = xlwt.Workbook()
    # wSheet1 = wBook1.add_sheet("sheet1")
    with open("/home/gaosx/Downloads/实地地产知识库/app_km_catalog.json", "r") as _f:
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
    with open("res.json", "wb") as _f:
        _f.write(json.dumps(appKmCatalogClass).encode("utf-8"))
        del _f
    print(getRootKey("e6e0c0c7-a254-4b88-8d88-4b8f28d8ac01"))
    # wBook.save(targetFile)
