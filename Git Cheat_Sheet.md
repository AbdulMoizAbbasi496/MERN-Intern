# Git Command Cheat Sheet

A concise reference to the **most commonly used Git commands** you’ll need as a student and early-stage developer. Copy, print, or save.

---

## Setup & Identity

```bash
git --version                 # Check installed version
git config --global user.name "Your Name"      # Set commit author name
git config --global user.email "you@example.com" # Set commit author email
git config --global init.defaultBranch main     # Default branch name for new repos
git config --global core.editor "code --wait"   # Set VS Code as default editor (example)
git config --list --show-origin                 # View all config + where set
```

---

## Starting a Repository

```bash
mkdir myproject && cd myproject           # Create and enter project folder
git init                                  # Initialize empty repo
# OR clone existing
git clone <url>                           # Clone (HTTPS or SSH)
git clone <url> myproject-folder          # Clone into named folder
```

---

## Checking Status & Files

```bash
git status                # What changed? staged? unstaged?
git diff                  # Show unstaged changes
git diff --staged         # Show staged changes
git ls-files              # List tracked files
```

---

## Staging & Unstaging

```bash
git add <file>            # Stage file
git add .                 # Stage all changes in current dir
git add -p                # Patch/interactive stage
git restore --staged <file>   # Unstage (keep working copy)
```

---

## Committing

```bash
git commit -m "message"              # Commit staged changes
git commit                          # Opens editor for full message
git commit -am "msg"                # Stage tracked + commit (skip new untracked files)
git commit --amend                  # Edit last commit (msg + staged content)
```

---

## Branching

```bash
git branch                            # List local branches
git branch -r                         # List remote branches
git branch <new>                      # Create branch
git checkout <branch>                 # Switch branch (older syntax)
git checkout -b <new>                 # Create + switch
git switch <branch>                   # Newer, clearer switch
git switch -c <new>                   # Create + switch (newer syntax)
```

---

## Merging & Rebasing

```bash
git merge <branch>                    # Merge into current branch
git merge --no-ff <branch>            # Always create merge commit
git rebase <base-branch>              # Replay commits onto base
git rebase -i <base>                  # Interactive rebase (squash, edit, reorder)
```

---

## Work with Remotes

```bash
git remote -v                         # Show remotes
git remote add origin <url>           # Add remote named origin
git remote set-url origin <url>       # Change remote URL
git fetch origin                      # Fetch remote updates (no merge)
```

---

## Push & Pull

```bash
git push -u origin main               # First push: set upstream
git push                              # Push current branch to its upstream
git push origin <branch>               # Push named branch
git pull                              # Fetch + merge upstream into current branch
git pull --rebase                     # Fetch + rebase
```

---

## Sync Forks / Upstream Workflow (Optional)

```bash
git remote add upstream <url>         # Add original repo as upstream
git fetch upstream                    # Get branches from upstream
git checkout main                     # Switch to main
git merge upstream/main               # Merge upstream into local main
# or
git rebase upstream/main              # Rebase your main on upstream
```

---

## View History

```bash
git log                               # Full history
git log --oneline                     # One-line summary
git log --graph --oneline --all       # Branch graph
git show <commit>                     # Show commit details
git blame <file>                      # Who last changed each line
```

---

## Tagging Releases

```bash
git tag                               # List tags
git tag v1.0                          # Lightweight tag
git tag -a v1.0 -m "Release v1.0"     # Annotated tag
git push origin v1.0                  # Push single tag
git push origin --tags                # Push all tags
```

---

## Stash Work-in-Progress

```bash
git stash                            # Save dirty state
git stash -u                         # Include untracked files
git stash list                       # Show stashes
git stash show -p stash@{0}          # Diff stash
git stash apply stash@{0}            # Reapply (keep in stash)
git stash pop                        # Reapply + drop
```

---

## Undo & Fix Mistakes

> Read carefully; these commands change history.

```bash
git restore <file>                    # Restore from last commit
git restore --source=HEAD~1 <file>    # Restore from older commit
git checkout -- <file>                # Older syntax (restore file)

git reset HEAD <file>                 # Unstage file

git reset --soft HEAD~1               # Undo last commit, keep staged
git reset --mixed HEAD~1              # Undo commit, keep changes (unstaged)
git reset --hard HEAD~1               # Reset commit AND working tree (destructive)

git revert <commit>                   # Make new commit that undoes changes (safe)
```

---

## Clean Untracked Files

```bash
git clean -n                         # Preview what would be removed
git clean -f                         # Remove untracked files
git clean -fd                        # Remove untracked files + dirs
git clean -fx                        # Include ignored files (danger)
```

---

## .gitignore Quick Tips

* Create a `.gitignore` file in repo root.
* Patterns match files to exclude from Git.
* Common templates: [https://github.com/github/gitignore](https://github.com/github/gitignore)

Example:

```gitignore
node_modules/
*.pyc
.env
.DS_Store
```

---

## GitHub-Specific Shortcuts

```bash
git clone git@github.com:USERNAME/REPO.git     # SSH clone
# After creating empty repo on GitHub:
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

---

## Delete Remote & Local Repos

```bash
# Remove local folder (Linux/macOS/Git Bash)
rm -rf git-test

# Remove remote branch
git push origin --delete <branch>

# Delete GitHub repo via API (danger)
curl -X DELETE -H "Authorization: token <TOKEN>" \
  https://api.github.com/repos/USERNAME/REPO
```

---

## Quick Start Example (Copy/Paste Practice)

```bash
# create project
mkdir git-practice && cd git-practice

echo "Hello Git" > README.md
git init
git add README.md
git commit -m "Initial commit"

# add GitHub remote (replace URL!)
git remote add origin https://github.com/USERNAME/git-practice.git
git branch -M main
git push -u origin main
```

---

### Tips for Working Clean

* Commit early, commit often.
* Write clear commit messages: verb + scope ("Add data loader", "Fix login bug").
* Pull before you push when collaborating.
* Use branches for features; merge via pull requests.

---

**Need a printable PDF or a shorter beginner-only version? Let me know and I’ll generate it.**

**Delete .git on windows:**
* rmdir /s /q .git
