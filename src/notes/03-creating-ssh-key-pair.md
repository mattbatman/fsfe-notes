---
path: '/creating-an-ssh-key-pair'
title: 'Creating an SSH Key Pair'
order: 'c'
---

On your own machine:

```bash
# Move into .ssh directory
cd ~/.ssh

# Generate a new ssh key
ssh-keygen
```

You'll be prompted to enter a file name. If you already have a key named `is_rsa`, choose something else. He used `fsfe2`. When prompted, it's a better to a password, though you can just leave this blank.

You'll have two keys created, such as `fsfe2` and `fsfe2.pub`. The `.pub` key is the public key, the one without an extension is the private key. Anytime you're prompted by some other service for an SSH key, you'll be giving them the public one.

```bash
# Get the contents of your public key for copying and pasting
cat fsfe2.pub
```
