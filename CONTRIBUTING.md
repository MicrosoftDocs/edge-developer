# Contributing to the Microsoft Edge Developer documentation

Thank you for your interest in the Microsoft Edge Developer documentation.  The Microsoft Edge team appreciates your feedback, edits, additions, and help with improving the Microsoft Edge docs.  This page covers the basic steps and guidelines for contributing.


<!-- ====================================================================== -->
## Sign a CLA

If you want to contribute more than a couple lines and you are not a Microsoft employee, you must [sign a Microsoft Contribution Licensing Agreement (CLA)](https://cla.opensource.microsoft.com).

If you are a Microsoft Employee, follow the internal guidance.


<!-- ====================================================================== -->
## Proposing a change

To suggest a change to the docs:

1.  If you are viewing the [docs.microsoft.com/microsoft-edge](https://docs.microsoft.com/microsoft-edge) page, click the **Edit** button in the upper right of the page.  You are redirected to the corresponding Markdown source file in the [GitHub repository](https://github.com/MicrosoftDocs/edge-developer).  If you are already in the GitHub repo, navigate to the source file that you are changing.

1.  If you do not already have a GitHub account, click **Sign Up** in the upper-right corner and create a new account.

1.  From the GitHub page you are changing, click the **pencil** icon.

1.  Modify the file and use the **preview** tab to ensure the changes look good.

1.  When you are done, commit your changes and open a pull request.

After you create the pull request, the Microsoft Edge Developer Docs team reviews it.  If your pull request is approved, updates are published to [Microsoft Edge Developer documentation](https://docs.microsoft.com/en-us/microsoft-edge/developer/).


<!-- ====================================================================== -->
## Making more substantial changes

To make substantial changes to an existing article, add or change images, or contribute a new article, the Microsoft Edge team recommends forking the repo into your GitHub account, and then creating a local clone.

1. Click the **Fork** button in the top-right corner of the [edge-developer repo](https://github.com/MicrosoftDocs/edge-developer).

2. Click the green **Clone or download** button, copy to your clipboard, then run the following code at your command prompt:

```shell
git clone {paste_your_repo_clone_link}
```

For more info, see [Fork a Repo](https://help.github.com/github/getting-started-with-github/fork-a-repo).

If you are unfamiliar with using Git, visit [Lynda.com Git Essentials training](https://www.lynda.com/Git-tutorials/Git-Essential-Training/100222-2.html).


<!-- ====================================================================== -->
## Authoring your contribution

After you have cloned the repo to your local machine, begin authoring with the text editor of your choice.  The Microsoft Edge team recommends [Visual Studio Code](https://code.visualstudio.com), a free lightweight open-source code editor and integrated development environment from Microsoft.


<!-- ====================================================================== -->
## Submitting your contribution and filing a Pull Request (PR)

After you are ready to add your changes to the remote repo so that the changes are staged for publishing, enter the following code in the command-line.

| Step | Command | Details |
|:--- |:--- |:--- |
| 1 | `git status` | This command displays the files you have changed so that you can confirm that you intended to make those changes. |
| 2 | `git add -A` | This command tells git to add all of your changes.  If you prefer to only add the changes you have made to one particular file, instead enter the command: `git add {file.md}`, where `file.md` represents the name the file containing your changes. |
| 3 | `git commit -m "Fixed a few typos"` | This command tells git to commit the changes that you added in the previous step, along with a short message describing the changes that you made. |
| 4 | `git push origin {your_branch_name}` | This command pushes your changes to the remote repo that you forked on GitHub (the `origin`) into the branch that you have specified.  Because you have forked the repo to your own GitHub account, you are welcome to do your work in the `master` branch. |

When you are happy with your changes and ready to submit a PR:

1.  Go to your fork of the `edge-developer` repo:

    ```https
    https://github.com/{your_github_alias}/edge-developer
    ```

1.  Click the **New pull request** button.  (The `base fork` is listed as `MicrosoftDocs/edge-developer`, the `head fork` should show your fork of the repo, and the branch in which you made your changes.)  You can review your changes here as well.

1.  Click the green **Create pull request** button.  Give your Pull Request a title and description, then click the **Create pull request** button again.

1.  After pushing your contribution to the remote repo, you receive an email from **Open Publishing Build Service** indicating whether your commit built successfully.  The email contains links to any errors or warnings, such as broken links.  Click the **View** links to see your content staged on the `review.docs.microsoft.com` site.

1.  After your PR is submitted, the Microsoft Edge Developer Docs team reviews the PR, approves the PR, merges the PR into the `master` branch, and then merges the PR's commits into the `live` branch.


<!-- ====================================================================== -->
## Working with Branches

When making contributions, submit your Pull Request (PR), requesting to merge from your working branch (such as a branch in your forked copy of the repo) into the `master` branch of the `edge-developer` repo.

The [Microsoft Edge Docs GitHub repository](https://github.com/MicrosoftDocs/edge-developer) uses the following two main parent branches:

| Branch  | Details  |
|:--- |:--- |
| [master](https://github.com/MicrosoftDocs/edge-developer/tree/master)  | The content in the `master` branch has been internally reviewed. |
| [live](https://github.com/MicrosoftDocs/edge-developer/tree/live)  |  The content in the `live` branch has been published on the [live site](https://docs.microsoft.com/microsoft-edge). |

The series of branches is as follows:

1. Fork the `edge-developer` repo, using GitHub.com.

1. Create a working branch and make your changes there, rather than making your changes in the `master` branch of a fork of the repo.  It works OK, though, if you do end up using the `master` branch of a fork of the repo.

1. Edit a `.md` file.  If you create a new `.md` file, add it to `toc.yml`.

1. Push your commits up to the repo at GitHub.com.

1. Create a PR at GitHub.com, requesting to merge the commits from your working branch into the `master` branch of the `edge-developer` repo.

1. The Microsoft Edge Developer Docs team reviews the PR, approves the PR, and then merges the PR's commits from the PR's working branch into the `master` branch of the `edge-developer` repo.

1. The Microsoft Edge Developer Docs team merges commits from the `master` branch into the `live` branch of the `edge-developer` repo.

1. The build process publishes the PR's commits at the public site, [Microsoft Edge Developer documentation](https://docs.microsoft.com/microsoft-edge/developer/).


<!-- ====================================================================== -->
## Using issues to provide feedback on Microsoft Edge documentation

To provide feedback, rather than directly modifying actual documentation pages, [create an issue](https://github.com/MicrosoftDocs/edge-developer/issues/new).

Be sure to include the topic title and the URL for the page.


<!-- ====================================================================== -->
## See also

*  [Getting started with writing and formatting on GitHub](https://help.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)
*  [Docs Contributor Guide](https://docs.microsoft.com/en-us/contribute/)
*  [README](README.md)
