---
path: '/nginx-overview-and-installation'
title: 'Nginx Overview and Installation'
order: 'g'
---

Jem uses Nginx in this course. He says that if you're using PHP, you should use Apache. Configuring the two are quite a bit different.

Nginx will help route requests to your server.

```bash
# Install nginx
sudo apt install nginx

# Start nginx
sudo service nginx start
```

After completing the above, you should be able to visit your domain and see the Nginx "Welcome to nginx!" page.
