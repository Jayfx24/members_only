<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/members_only">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Members only</h3>

  <p align="center">
A private clubhouse app where members can create and view other members messages.

Built as part of the The Odin Project curriculum to practice authentication, authorization, sessions, and role-based permissions. <br />
<a href="https://github.com/github_username/members_only"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/github_username/members_only">View Demo</a>
&middot;
<a href="https://github.com/github_username/members_only/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
&middot;
<a href="https://github.com/github_username/members_only/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>

  </p>
</div>


<!-- ABOUT THE PROJECT -->

## About The Project


`jay24fx`, `members_only`, 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Express
- Node.js
- PostgreSQL
- Passport.js
- EJS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a DB URL at
2. Clone the repo
   ```sh
   git clone https://github.com/jay24fx/members_only.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your DATABASE URL in `.env`
   ```js
   const DATABASE_URL = "LINK";
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->


## Features

- User signup and login
- Password hashing with bcrypt
- Authentication using Passport.js
- Create and view messages (Member Only)
- Secret member and admin passcode
- Admin-only delete functionality

## User Roles

- Logged-in User
  - Can read messages anonymously

- Member
    - Can create messages
    - Can see message authors and timestamps
- Admin 
    - Can delete messages

<!-- CONTACT -->

## Contact

Jay - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/jay24fx/members_only](https://github.com/jay24fx/members_only)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
