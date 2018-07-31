# Contributing to purr-react

Thank you so much for contributing to my project <3

Please take a moment to review this document to make the process easy for me.

## Bug reports

If you want to report a bug please make sure you've read the guidelines. Again, it's very helpful for me!

Guidelines:

  1. Look through existing [open](https://github.com/Manoz/purr-react/issues) issues to see if the issue has already been reported.
  2. Check if the issue has been fixed in the [closed](https://github.com/Manoz/purr-react/issues?q=is%3Aissue+is%3Aclosed) issues.

Please try to be as concise as possible and give as much informations as you can about your environment, how to reproduce the bug... .
Here's a template you can use:

> **Describe the bug**
> 
> A description of what the bug is.
> 
> **To Reproduce**
> 
> Steps to reproduce the issue:
> 
> 1. Do this
> 2. Click on this link
> 3. ...
> 
> **Expected behavior**
> 
> A description of what is expected
> 
> **Screenshots**
> 
> Add screenshots if possible
> 
> **Versions**
> - purr-starter (see `package.json`):
> - Node/NPM: [e.g. Node v10.4.0, Npm v6.1.0]
> - Browser: [e.g. chrome v22, safari]
> - Operating system: [e.g. iOS, windows 10, linux Ubuntu]
> 
> **Additional**
> 
> Add anything about the issue here

## Feature requests

Feature requests are very welcome and will help me improving this project. Please take a moment to find out whether your idea fits with the aims of the project. The main goal is to keep this boilerplate as simple and clean as possible.

There's a template for Feature Requests, simply open a new issue and follow the lead :)

## Pull requests

Pull requests are the best way for me (and for you) to improve this project and improve my skills too.

Before you open a PR please ask first with an issue otherwise you risk spending time working on something that might not end up being merged into the project. AS I said I'm trying to keep this project as simple as possible.

The `master` branch is what people use in production. Before I merge your PR into it, I'll try to test it in the `dev` branch first.

Here's some steps before you send you work and send your PR:

1. Fork the project, clone your fork, and configure the remotes:

    ```bash
    # Clone your fork of the repo into the current directory
    git clone https://github.com/<your-username>/purr-react.git
    cd purr-react
    # Assign the original repo to a remote called "upstream"
    git remote add upstream https://github.com/Manoz/purr-react.git
    ```

2. If you cloned a while ago, get the latest changes from upstream:

    ```bash
    git checkout dev
    git pull upstream dev
    ```

3. Create a new topic branch (off the `dev` branch) to contain your feature, change, or fix:

    ```bash
    git checkout -b <topic-branch-name>
    ```

4. Commit your changes in logical chunks.
5. Locally merge (or rebase) the upstream dev branch into your topic branch:
   ```bash
   git pull [--rebase] upstream dev
   ```

6. Push your topic branch up to your fork:
   ```bash
   git push origin <topic-branch-name>
   ```
7. Open a Pull Request with a clear title and description.

**IMPORTANT:** By submitting your PR, you agree to allow me to license your work under the terms of the [MIT License](https://github.com/Manoz/purr-react/blob/master/LICENSE). I'll still try to credit you in any case.

Thank you very much. Feel free to open an issue to discuss and propose improvements to this guideline ❤️
