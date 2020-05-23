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

You'll be prompted to enter a file name. If you already have a key named `id_rsa`, choose something else (he used `fsfe2`). When prompted, it's a better to a password, though you can leave this blank.

Two keys will have been created as two separate files, such as `fsfe2` and `fsfe2.pub`. The `.pub` file is the public key. The one without an extension is the private key. Anytime you're prompted by some other service for an SSH key, you'll be providing the public one.

If you're setting up a droplet on Digital Ocean, for instance, and want to authenticate with SSH, you can use the command below to copy the contents of your public key to your clipboard and paste it into their site.

```bash
# Get the contents of your public key for copying and pasting
cat fsfe2.pub
```
