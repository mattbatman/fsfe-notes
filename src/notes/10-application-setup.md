---
path: '/application-setup'
title: 'Application Setup'
order: 'j'
---

```bash
# Change ownership of the www directory to the current user
sudo chown -R $USER:$USER /var/www # can literally use $USER:$USER

# Create application directory
mkdir /var/www/app

# Move into app directory and initialize empty git repo
# Jem starts coding the project on the server itself, but you may want to clone into here
# He also starts the node (skeleton Express) app (e.g. node ./app.js)
cd /var/www/app && git init
```
