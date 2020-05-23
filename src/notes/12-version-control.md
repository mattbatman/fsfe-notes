---
path: '/version-control'
title: 'Version Control'
order: 'l'
---

Your goal will be to develop locally, push from your machine to GitHub, and pull from GitHub to your server. In this course, you first created the repository on your server, then set up a repo in GitHub, pushed code from your server to GitHub, and finally cloned from GitHub to your local machine.

The steps to sync your server with GitHub via this course were:

1. Create a git repository in GitHub
2. Create an SSH key
3. Add the SSH key to GitHub in Github
4. Add remote repo
5. Push local repository to GitHub

```bash
# Step 2 on your server
cd ~/.ssh/
ssh-keygen
# ... choose a file name, such as the default id_rsa

# Step 3 for copying and pasting into GitHub
cat id_rsa.pub

# Step 4 if you've already ran git init in that directory (otherwise, you could clone, I think)
cd /var/www/app/
git remote add origin git@github.com:<your-username>/<your-repo-name>.git

# Step 5
git commit -am "Modify git ignore"
git push origin master
```

After completing these steps, you can clone the same project to your local machine.
