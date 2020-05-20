---
path: '/https'
title: 'HTTPS'
order: 'o'
---

In the course, certbot is used to add HTTPS on your website.

https://certbot.eff.org

Before following the instructions, add your domain in the Nginx configuration:

```bash
sudo vim /etc/nginx/sites-available/defaults

##
# server_name jemisthe.best www.jemisthe.best;
#
##
```

The instructions are followed exactly on the website, after entering "My HTTP website is running Nginx on Ubuntu 18.04 LTS (bionic)." He says he does want it to automatically redirect to HTTPS.

The firewall also needs to allow https:

```bash
# allow https with uncomplicated firewall
sudo ufw allow https
```
