#!/bin/sh

# @file: backup.sh
# @brief: 备份重要文件夹
# @author: feihu1996.cn
# @date: 20-14-41
# @version: 1.0

# 备份下载目录
zip -q -r /tmp/downloads.zip /home/gaosx/Downloads && mv -f /tmp/downloads.zip /mnt/usb/backup/ && rm -f /tmp/downloads.zip

# 备份图片目录
zip -q -r /tmp/pictures.zip /home/gaosx/Pictures && mv -f /tmp/pictures.zip /mnt/usb/backup/ && rm -f /tmp/pictures.zip

# 备份应用目录
zip -q -r /tmp/app.zip /opt/app && mv -f /tmp/app.zip /mnt/usb/backup/ && rm -f /tmp/app.zip
