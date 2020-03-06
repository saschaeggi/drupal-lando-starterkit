# Listings
alias ll='ls -al'
function t {
	if [ -z "$1" ]; then
		tree -d -L 1 -C;
	else
		tree -d -L "$1" -C;
	fi
}

# GIT Shortcuts
alias gs='git status'
alias log1="git log --abbrev-commit --decorate --date=relative --format=format:'%C(auto)%h%C(reset) %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset)
%C(green)<%an>%C(reset)%C(auto)%d%C(reset)'"
alias log2="git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(auto)%h%C(reset) %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset)
%C(green)<%an>%C(reset)%C(auto)%d%C(reset)'"
