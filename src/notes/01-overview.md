---
path: '/'
title: 'Overview'
order: 'a'
---

These are my notes from Jem Young's _Full Stack for Front-End Engineers, v2_ on [Frontend Masters](https://frontendmasters.com/courses/fullstack-v2/). They specifically cover what he did to stand-up a server. My intention in taking, editing, and publishing these notes is to create a loose guide for myself on how to deploy a server-side Node application from a Linux environment.

Jem's general steps included:

1. Buying and configuring a droplet from Digital Ocean
2. Creating an SSH key pair (for authenticating to your server)
3. Buying a domain and configuring your DNS to point to your server
4. Creating a new user and disabling the root user
5. Installing Nginx
6. Installing Node.js
7. Creating a directory to hold your application
8. Configuring Nginx to use a custom port and direct traffic to your application
9. Configuring GitHub so you can work locally and deploy remotely
10. Installing a process manager
11. Using a firewall and unattended upgrades for security
12. Configuring HTTPS with Certbot
