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


style = xlwt.easyxf('align: vertical center, horizontal center')
appKmCatalog = None
appKmCatalogMap = {}
appKmCatalogPidMap = {}
appKmCatalogClass = {}
outerHeads = []
sourceCatagory = input("请输入源分类文件:")
targetFile = input("请输入目标文件:")


def setClassKV(_c, _key, _k):
    _c = _c.get(_key)
    if not len(_c.keys()):
        _c[_k] = {}
        return
    setClassKV(_key, _k)


def getAppKmCatagoryByPid(pid):
    if not appKmCatalogPidMap.get(pid):
        return
    for _i in range(len(appKmCatalogPidMap.get(pid))):
        _k = appKmCatalogPidMap.get(pid)[_i].get("_id")
        setClassKV(appKmCatalogClass, pid, _k)
        del _k
        getAppKmCatagoryByPid(appKmCatalogPidMap.get(pid)[_i].get("_id"))
        del _i


if "__main__" == __name__:
    # wBook1 = xlwt.Workbook()
    # wSheet1 = wBook1.add_sheet("sheet1")
    with open(sourceCatagory, "r") as _f:
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
    for (_k, _v) in appKmCatalogClass.items():
        getAppKmCatagoryByPid(_k)
        del _k
        del _v
    print(appKmCatalogClass)   
    # wBook.save(targetFile)

