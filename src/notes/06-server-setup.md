---
path: '/server-setup'
title: 'Server Setup'
order: 'f'
---

After connecting to the server via SSH, Jem's first steps in setting up the server were to:

1. Update and upgrade the software
2. Create a new user
3. Make the new user a super user
4. Switch to the new user
5. Enable login for the new user by pasting the public key you used in Digital Ocean to an `authorized_keys` file
6. Log out from root and log back in as the new user
7. Disable root login by locking permissions to the `authorized_keys` file and modifying a login configuration file

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
# ... then find and change the line:
PermitRootLogin no # was "yes"

# then restart
sudo service sshd restart
```
