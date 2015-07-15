Following are the few useful git commands ==>>

1. Tell Git who you are
	Configure the author name and email address to be used with your commits.
	
   Syntax:
	git config --global user.name "akshaym-webonise"
	git config --global user.email akshay.mayekar@weboniselab.com
	


2. Create a new local repository
	Using this command we can create a new local repository. In order to use this repository on github, it has to be linked with online repository.

   Syntax:
	git init



3. Check out a repository
	This command is used to create a copy of already existing repository

   Syntax:
	Create a working copy of a local repository:	
	git clone /path/to/repository

	For a remote server, use:
	git clone username@host:/path/to/repository



4. Add files
	Add one or more files to staging (index):	
	
   Syntax:
	git add <filename>
	git add *



5. Commit
	This command commit changes to head (but not yet to the remote repository):
	
   Syntax:
	git commit -m "Commit message"



6. Push
	Send changes to the master branch of your remote repository:

   Syntax:
	git push origin master



7. Status 
	List the files you've changed and those you still need to add or commit:	

   Syntax:
	git status



8. Connect to a remote repository
	If you haven't connected your local repository to a remote server, add the server to be able to push to it:

   Syntax:
	git remote add origin <server>



9. Create a new branch and switch to it:	
	This command creates a new branch and switch to it at the same time.

    Syntax:
	git checkout -b <branchname>



10. Switch from one branch to another:
	This command lets you to switch to another branch.	

    Syntax:
	git checkout <branchname>



11. List all the branches in your repo, and also tell you what branch you're currently in:	
    Syntax:
	git branch

12. Delete the feature branch:	
	This command is used to delete any branch. But for that you have to be in master branch.

    Syntax:
	git branch -d <branchname>


13. Push all branches to your remote repository:
	git push --all origin

14. git diff
	git diff --base <filename>
	git diff <sourcebranch> <targetbranch>

