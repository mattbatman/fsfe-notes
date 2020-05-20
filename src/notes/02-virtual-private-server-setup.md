---
path: '/virtual-private-server-setup'
title: 'Virtual Private Server Setup'
order: 'b'
---

Jem uses Digital Ocean in the course because of how much better their UI is than AWS. He created a droplet running Ubuntu v18.04.3 (LTS) x64 on the datacenter region closest to him.

He chose to authenticate with the server using SSH, rather than a username and password, because of the improved security. You'll generate an SSH key pair on your own machine, then copy the public key into Digital Ocean's UI.
