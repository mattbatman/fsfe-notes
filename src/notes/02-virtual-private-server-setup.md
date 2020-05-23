---
path: '/virtual-private-server-setup'
title: 'Virtual Private Server Setup'
order: 'b'
---

Jem uses Digital Ocean in the course. He created a droplet running Ubuntu v18.04.3 (LTS) x64 on the datacenter region closest to him.

He used Digital Ocean because their UI is much easier to navigate than AWS, and felt it would have been a mess to try to demonstrate AWS in a lecture. However, he seemed to feel AWS is a better choice for professional applications.

He chose to authenticate with the server using SSH, rather than a username and password. SSH is a superior security choice, and using a username and password instead would be something akin to profesisonal malpractice. You'll generate an SSH key pair on your own machine, then copy the public key into Digital Ocean's UI.
