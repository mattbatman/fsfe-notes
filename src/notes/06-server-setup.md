---
path: '/server-setup'
title: 'Server Setup'
order: 'f'
---

1. Update software
2. Create a new user
3. Make that user a super user
4. Enable login for new user
5. Disable root login

```bash
# Update software
apt update

# Upgrade software
apt upgrade

# Add new user (e.g. adduser jem)
adduser $USERNAME

# Add user to "sudo" (superuser do) group
usermod -aG sudo $USERNAME

# Switch user
su $USERNAME

# Check sudo access (/var/log/auth.log generally requires sudo access)
sudo cat /var/log/auth.log

# Change to home directory
cd ~

# Create a new directory if it doesn't exist
mkdir -p ~/.ssh

# Create authorized_keys file and paste public key
vim ~/.ssh/authorized_keys
# cat fsfe2.pub on the public key you made on your local machine
# paste into file and save

# exit and log in with new username
exit
exit
ssh jem@000.00.000.000

# disabling the root user...
# Change file permissions...
chmod 644 ~/.ssh/authorized_keys

# Disable root login
sudo vi /etc/ssh/sshd_config
# ... then find and change:
PermitRootLogin no # was "yes"

# then restart
sudo service sshd restart
```
