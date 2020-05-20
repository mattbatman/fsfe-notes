---
path: '/nginx-configuration'
title: 'Nginx Configuration'
order: 'h'
---

```bash
# Show nginx configuration
sudo less /etc/nginx/sites-available/default
```

The base directory for requests is specified in the Nginx configuration with the line: `root /var/www/html;`. The location block specifies what files to serve. The `try_files` command is the directive. So, if you created a file out-of-the-gate at `/var/www/html/index.html`, it should be reachable by visiting your domain.
