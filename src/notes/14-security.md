---
path: '/security'
title: 'Security'
order: 'n'
---

```bash
# Read your auth.log
sudo cat /var/log/auth.log
# visiting maxmind.com/en/geoip-demo can show where the IP address is located
```

A security checklist includes:

- SSH
- Firewalls
- Updates
- Two factor authentication
- VPN

## Unattended Upgrades

```bash
# Install unattended ugprades
sudo apt install unattended-upgrades

# View conf file
cat /etc/apt/apt.conf.d/50unattended-upgrades
```

## nmap

nmap will show the ports at the given IP address. It allows you to port scan an IP address. This is open source software that can expose your vulnerabilities. The best practice for ports is to keep them closed unless you need them.

```bash
# Install nmap
sudo apt install nmap

# See nmap instructions
man nmap

# Run nmap
nmap YOUR_SERVER_IP_ADDRESS

# Run nmap with more service/version info
nmap -sV YOUR_SERVER_IP_ADDRESS
```

## Uncomplicated Firewall

UFW is open source software that makes blocking ports and traffic easier than dealing with IP tables. Keep in mind that it is possible to lock yourself out of your own server.

```bash
# Check firewall status
sudo ufw status

# Enable firewall
sudo ufw enable

# Enable ssh
sudo ufw allow ssh

# Enable http
sudo ufw allow http

# If you wanted to close http...
sudo ufw reject http
```

## Upgrade Node.js

The apt repo will always have an older version of node. To upgrade, install node from nodesource.

```bash
# Download setup script from nodesource
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh

# Run script
sudo bash nodesource_setup.sh

# Install nodejs
sudo apt install nodejs

# Update outdates global packages
sudo npm update -g
```
