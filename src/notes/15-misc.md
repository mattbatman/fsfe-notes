---
path: '/misc-commands'
title: 'Misc. Commands'
order: 'o'
---

```bash
# Find all log files in /var/log
find /var/log/nginx -type f -name "*.log"

# Find all directories with the name 'log'
find / -type d -name log

# Look at your auth log
sudo cat /var/log/auth.log

# Find running node processes
ps aux | grep node

# Find every instance where Jem logged into your server
sudo cat /var/log/auth.log | grep jem

# See standard ports
less /etc/services
```
