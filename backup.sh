#!/bin/sh

# @file: backup.sh
# @brief: 备份重要文件夹
# @author: feihu1996.cn
# @date: 20-08-09
# @version: 1.0

BASEDIR=`dirname ${0}`

# 备份下载目录
sudo zip -q -r $BASEDIR/downloads.zip /home/gaosx/Downloads && sudo mv -f $BASEDIR/downloads.zip /mnt/usb/backup/

# 备份图片目录
sudo zip -q -r $BASEDIR/pictures.zip /home/gaosx/Pictures && sudo mv -f $BASEDIR/pictures.zip /mnt/usb/backup/

# 备份应用目录
sudo zip -q -r $BASEDIR/app.zip /home/gaosx/Apps && sudo mv -f $BASEDIR/app.zip /mnt/usb/backup/

# 备份文档目录
sudo zip -q -r $BASEDIR/documents.zip /home/gaosx/Documents && sudo mv -f $BASEDIR/documents.zip /mnt/usb/backup/

# 备份视频目录
sudo zip -q -r $BASEDIR/videos.zip /home/gaosx/Videos && sudo mv -f $BASEDIR/videos.zip /mnt/usb/backup/

