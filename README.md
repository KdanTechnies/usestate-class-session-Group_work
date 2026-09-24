# React Group Learning Project

A collaborative React project created for learning **how to work as a team on GitHub**.

This project is not only about building a React application. The main goal is to give students practical experience working together on the same codebase while following a proper Git and GitHub workflow.

## What Students Are Learning

Students will learn how to:

* Clone an existing GitHub repository
* Work with Git branches
* Create feature branches
* Build their assigned pages or features
* Commit changes properly
* Push their branches to GitHub
* Create Pull Requests
* Review code
* Fix issues from feedback
* Merge approved changes
* Keep their local project updated
* Work with other developers without directly modifying `main`

## Team Workflow

Everyone works from the same repository.

The `main` branch contains the approved version of the project.

Students should **never push directly to `main`**.

The workflow is:

```text
Clone Repository
       ↓
Create Feature Branch
       ↓
Build Assigned Feature
       ↓
Commit Changes
       ↓
Push Branch
       ↓
Create Pull Request
       ↓
Code Review
       ↓
Approval
       ↓
Merge into main
```

## Branch Examples

Each student should create a branch based on the feature they are working on.

```text
feature/home-page
feature/about-page
feature/contact-page
feature/products-page
```

Example:

```bash
git switch -c feature/home-page
```

## Pushing Changes

After completing a feature:

```bash
git add .
```

```bash
git commit -m "Build home page"
```

```bash
git push -u origin feature/home-page
```

The student then creates a Pull Request from their branch into `main`.

## Keeping Your Branch Updated

Before starting new work, students should make sure they have the latest version of `main`.

```bash
git switch main
git pull origin main
```

Then create a new feature branch:

```bash
git switch -c feature/your-feature
```

## Project Rules

1. Do not push directly to `main`.
2. Every task should have its own branch.
3. Keep commits clear and meaningful.
4. Test your work before creating a Pull Request.
5. Do not overwrite another student's work.
6. Ask questions when you are unsure instead of randomly changing files.
7. Review your own changes before pushing.
8. Pull the latest `main` before starting new work.
9. Pull Requests should clearly explain what was changed.
10. Respect other people's code and contributions.

## Purpose of This Project

This project is designed to move students beyond writing code alone.

In a real development team, developers have to work with other developers, manage branches, review code, resolve conflicts, communicate changes, and contribute to a shared codebase.

This project gives students an opportunity to practice that workflow while building a real React application together.

## Technologies

* React
* JavaScript
* CSS
* Git
* GitHub

## Learning Goal

By the end of this project, students should understand that building software as a team is not just about writing code.

They should be comfortable with:

```text
Git
Branches
Commits
Pull Requests
Code Reviews
Merging
Team Collaboration
```

**This is a learning project. Everyone is here to learn, contribute, make mistakes, fix them, and improve together.**
