---
path: '/proxy-passing-traffic'
title: 'Proxy Passing Traffic'
order: 'k'
---

The default port for an app will be 80. You'll want to change the location directive to point to the correct location and port. The location directive will also allow you to run different apps on the same server.

```bash
# Edit nginx config
sudo vim /etc/nginx/sites-available/default

##
# location / {
#   proxy_pass http://127.0.0.1:3000/;
# }
##

# You'll need to restart the server when making config changes
sudo service nginx reload
```
