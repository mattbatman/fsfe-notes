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

The base directory for requests is specified in the Nginx configuration with the line: `root /var/www/html;`. The location block specifies what files to serve. The `try_files` command is the directive. So, if you created a file out-of-the-gate at `/var/www/html/index.html`, it should be reachable by visiting your domain.

```bash
# Show nginx configuration
sudo less /etc/nginx/sites-available/default
```
