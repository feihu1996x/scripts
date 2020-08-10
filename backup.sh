#!/bin/sh

# @file: backup.sh
# @brief: 备份重要文件夹
# @author: feihu1996.cn
# @date: 20-08-09
# @version: 1.0

# 备份下载目录
zip -q -r /tmp/downloads.zip /home/gaosx/Downloads && mv -f /tmp/downloads.zip /mnt/usb/backup/

# 备份图片目录
zip -q -r /tmp/pictures.zip /home/gaosx/Pictures && mv -f /tmp/pictures.zip /mnt/usb/backup/

# 备份应用目录
zip -q -r /tmp/app.zip /opt/app && mv -f /tmp/app.zip /mnt/usb/backup/

# 备份文档目录
zip -q -r /tmp/documents.zip /home/gaosx/Documents && mv -f /tmp/documents.zip /mnt/usb/backup/

# 备份视频目录
zip -q -r /tmp/videos.zip /home/gaosx/Videos && mv -f /tmp/videos.zip /mnt/usb/backup/
