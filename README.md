# scripts
daily scripts

> 结合contab

```bash
crontab -e
```

```bash
# 表示8点到18点之间每隔2小时执行备份脚本
0 8-18/2 * * * /opt/app/scripts/backup.sh
```
