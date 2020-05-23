---
path: '/process-manager'
title: 'Process Manager'
order: 'k'
---

A process manager is used to continually run the app. He uses PM2.

```bash
# Install PM2
# sudo is used because this is installed globally
sudo npm i -g pm2

# Start PM2
pm2 start app.js

# Setup auto restart
pm2 startup
```
