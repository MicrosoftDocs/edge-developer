# Contributing to the Microsoft Edge documentation  

Thank you for your interest in the Microsoft Edge documentation.  The Microsoft Edge team appreciates your feedback, edits, additions, and help with improving the Microsoft Edge docs.  This page covers the basic steps and guidelines for contributing.  

## Sign a CLA  

If you want to contribute more than a couple lines and you are not a Microsoft employee, you must [sign a Microsoft Contribution Licensing Agreement (CLA)][MicrosoftOpensourceClaMain].  

If you are a Microsoft Employee, please follow the internal guidance.  

## Proposing a change  

To suggest a change to the docs, follow these steps.  

1.  If you are viewing the [docs.microsoft.com/microsoft-edge][Main] page, select the **Edit** button in the upper-right of the page.  You are redirected to the corresponding Markdown source file in the [GitHub repository][GithubMicrosoftdocsEdgedeveloperMain].  If you are already in the GitHub repo, just navigate to the source file that you are changing.  
1.  If you do not already have a GitHub account, select **Sign Up** in the upper-right and create a new account.  
1.  From the GitHub page you are changing, select the **pencil** icon.  
1.  Modify the file and use the **preview** tab to ensure the changes look good.  
1.  When you are done, commit your changes and open a pull request.  

After you create the pull request, a member of the Microsoft Edge web docs team reviews it.  If your request is accepted, updates are published to [docs.microsoft.com/microsoft-edge][Main].  

## Making more substantial changes  

To make substantial changes to an existing article, add or change images, or contribute a new article, the Microsoft Edge team recommends forking the repo into your GitHub account, and then creating a local clone.  
You may select the **Fork** button in the top-right corner of the [GitHub repo][GithubMicrosoftdocsEdgedeveloperMain].  
You may select the green **Clone or download** button, copy to your clipboard, then run the following code in your command-line.  

```shell
git clone {paste_your_repo_clone_link}
```  

For more info, see [Fork a Repo][GithubHelpGettingStartedForkRepo].  

If you are unfamiliar with using Git, visit [Lynda.com Git Essentials training][LyndaGitTutorialsEssentialTraining102222].  

## Authoring your contribution  

After you have cloned the repo to your local machine, begin authoring with the text editor of your choice.  The Microsoft Edge team, of course, recommends [Visual Studio Code][VisualstudioCodeMain], a free lightweight open source editor from Microsoft.  

## Submitting your contribution and filing a Pull Request (PR)  

After you are ready to add your changes to the remote repo so that the changes are staged for publishing, enter the following code in the command-line.  

| Step | Command | Details |  
|:--- |:--- |:--- |  
| 1 | `git status` | This command displays the files you have changed so that you may confirm that you intended to make those changes. |  
| 2 | `git add -A` | This command tells git to add all of your changes.  If you prefer to only add the changes you have made to one particular file, instead enter the command: `git add {file.md}`, where `file.md` represents the name the file containing your changes. |  
| 3 | `git commit -m "Fixed a few typos"` | This command tells git to commit the changes that you added in the previous step, along with a short message describing the changes that you made. |  
| 4 | `git push origin {your_branch_name}` | This command pushes your changes to the remote repo that you forked on GitHub \(the `origin`\) into the branch that you have specified.  Because you have forked the repo to your own GitHub account, you are welcome to do your work in the `master` branch. |  

When you are happy with your changes and ready to submit a PR:  

1.  Go to your fork of the edge-develop repo:  
    
    ```https
    https://github.com/{your_github_alias}/edge-developer
    ```  
    
1.  Select the **New pull request** button.  \(The `base fork` is listed as `MicrosoftDocs/edge-developer`, the `head fork` should show your fork of the repo, and the branch in which you made your changes.\)  You may review your changes here as well.  
1.  Select the green **Create pull request** button.  You must give your Pull Request a title and description, then select the **Create pull request** button again.  
1.  After pushing your contribution to the remote repo, you are sent an email from **Open Publishing Build Service** informing whether your contribution built successfully and linking to any error warnings such as broken links, select the links to see your content staged on the site.  
1.  After your PR is submitted, a member of the Microsoft Edge docs team reviews it.  
    
## Working with Branches  

The [Microsoft Edge Docs GitHub repository][GithubMicrosoftdocsEdgedeveloperMain] utilizes the following two main parent branches.  

| Branch  | Details  |  
|:--- |:--- |  
| [master][GithubMicrosoftdocsEdgedeveloperMaster]  | The content is internally reviewed.  |  
| [live][GithubMicrosoftdocsEdgedeveloperLive]  |  The content has been published on the [live site][Main].  |  

When making contributions, please submit your Pull Request \(PR\) to the `master` branch.  This branch is viewable internally and should only contain contributions that are ready to publish live.  

## Using issues to provide feedback on Microsoft Edge documentation  

To provide feedback rather than directly modifying actual documentation pages, [create an issue][GithubMicrosoftdocsEdgedeveloperNewIssue].  

Be sure to include the topic title and the URL for the page.  

## See also  

### Additional resources  

*   [Getting started with writing and formatting on GitHub][GithubHelpWritingGettingStarted]  

<!-- image links -->  

<!-- links -->  

[Main]: https://docs.microsoft.com/microsoft-edge "Microsoft Edge documentation | Microsoft Docs"  

[GithubHelpGettingStartedForkRepo]: https://help.github.com/github/getting-started-with-github/fork-a-repo "Fork a repo | GitHub Help"  
[GithubHelpWritingGettingStarted]: https://help.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github "Getting started with writing and formatting on GitHub | GitHub Help"  

[GithubMicrosoftdocsEdgedeveloperMain]: https://github.com/MicrosoftDocs/edge-developer "MicrosoftDocs/edge-developer | GitHub"  
[GithubMicrosoftdocsEdgedeveloperNewIssue]: https://github.com/MicrosoftDocs/edge-developer/issues/new "New Issue - MicrosoftDocs/edge-developer | GitHub" 
[GithubMicrosoftdocsEdgedeveloperLive]: https://github.com/MicrosoftDocs/edge-developer/tree/live "MicrosoftDocs/edge-developer @ live | GitHub"  
[GithubMicrosoftdocsEdgedeveloperMaster]: https://github.com/MicrosoftDocs/edge-developer/tree/master "MicrosoftDocs/edge-developer @ master | GitHub"  

[LyndaGitTutorialsEssentialTraining102222]: https://www.lynda.com/Git-tutorials/Git-Essential-Training/100222-2.html "Git Essential Training (2012) | Lynda.com"  

[MicrosoftOpensourceClaMain]: https://cla.opensource.microsoft.com "Contributor License Agreement | Microsoft Open Source"  

[VisualstudioCodeMain]: https://code.visualstudio.com "Visual Studio Code"  
