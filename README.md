<p align="center">
  <a href="https://www.whozinberg.org">
    <img alt="Whozinberg.org" src="http://www.whozinberg.org/favicon.png" width="60" />
  </a>
</p>
<h1 align="center">
  Open Source "Community Isolation Map"
</h1>

## 👓 Check out the demo
⛱ [Who'zinberg.org
](https://www.whozinberg.org "The Muizenberg Community Map")

## 📚 Read the tutorial
[How to build a fast and reliable community mapping tool with GatsbyJS and Firebase
](https://medium.com/@marcfehr/how-to-build-a-fast-and-reliable-community-mapping-tool-with-gatsbyjs-and-firebase-74a0fa6b5b83 "Article on Medium")

This project was built to bring communities closer together in these extraordinary, isolated times. Please fork the project and create a community isolation map for your own neighbourhood.

_If you have any questions about how to set up the project – or any feedback – please let me know: marc.fehr@gmail.com_

## 🚀 Quick start

0.  **Note: USE THE MASTER BRANCH FOR YOUR DEVELOPMENT**

0.  **Fork or clone your own project from this repository**

1.  **Create a Gatsby site.**

    This site was built with GatsbyJS, a static site generator working with the React Framwork. For more about GatsbyJS, go to https://www.gatsbyjs.org/. The documentation is here: https://www.gatsbyjs.org/docs/

    ```shell
    # open the project folder in your terminal
    cd ~/project-name

    # I suggest to install the Node Version Manager (nvm), first: https://github.com/nvm-sh/nvm
    # ... if you have nvm installed, run
    nvm use

    # If you don't want to work with NVM, make sure your local Node version works with the dependencies

    # then run either
    yarn install

    #or
    npm install
    ```

1.  **Start developing.**

    To launch the site, navigate into your new site’s directory and start it up.

    ```shell
    cd ~/project-name/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── yarn.lock
    ├── yarn-error.log
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

7.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

8.  **`LICENSE`**: Gatsby is licensed under the MIT license.

9. **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

11. **`README.md`**: A text file containing useful reference information about your project.

12. **`.nvmrc`**: Contains the Node Version manager variable 13.11.0 (this is what the projet was built on)

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

The original project (https://www.whozinberg.org) was deployed through https://www.netlify.com. Host your own repository on Gitlab or Github, sign up n Netlify.com and start deploying your GatsbyJS project.
