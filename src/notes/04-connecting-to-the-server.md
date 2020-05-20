---
path: '/connecting-to-the-server'
title: 'Connecting to the Server'
order: 'd'
---

```bash
# SSH into your server
# something like ssh root@000.00.000.000
ssh root@YOUR_IP

# Exit the server
exit
```

If you're denied, it's likely that you don't have your SSH keys loaded (look for a "Permission Denied (publickey)" error).

```bash
# specify an SSH key
ssh -i fsfe2 root@000.00.000.000

# Or list the key in your config
vim ~/.ssh/config

### At the top of ~/.ssh/config, add:
# Host *
# AddKeysToAgent yes
# UseKeychain yes
###

# Add private key to keychain
ssh-add -K ~/.ssh/fsfe2
```
