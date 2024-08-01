<div align="center">

# Sync Note

[![License: MIT](https://img.shields.io/badge/License-MIT-darkgreen.svg)](https://opensource.org/licenses/MIT)
![CSS3 Badge](https://img.shields.io/badge/css-1572B6?logo=css3&logoColor=fff&style=flat)
![JavaScript Badge](https://img.shields.io/badge/js-F7DF1E?logo=javascript&logoColor=000&style=flat)
![JSON Badge](https://img.shields.io/badge/json-FF0000?logo=json&logoColor=fff&style=flat)
![npm Badge](https://img.shields.io/badge/npm-A020F0?logo=npm&logoColor=fff&style=flat)
![Node.JS Badge](https://img.shields.io/badge/node-orange?logo=node.js&logoColor=fff&style=flat)

</div>

## Description

Sync Note is a Progressive Web Application (PWA) designed to provide a seamless text editing experience both online and offline. It allows users to create, edit, and save notes or code snippets directly in their browser. Utilizing IndexedDB for data persistence and service workers for offline functionality, Sync Note ensures that your content is always available, even when you're not connected to the internet.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

1.  **Clone the repository:**

```bash
git clone https://github.com/haartmuhn/sync-note.git
cd sync-note
```

2.  **Install the dependencies:**

Install the dependencies for both the client and server:

```bash
cd client
npm install

cd ../server
npm install
```

3.  **Build the client**

```bash
cd client
npm run build
```

4.  **Start the server:**

```bash
cd ../server
npm start
```

## Usage

-   **Run Locally:**

Open your browser and go to `http://localhost:3000` to start using Sync Note.

-   **Features:**

    -   Create and edit notes or code snippets.
    -   Save content to IndexedDB for offline access.
    -   Installable PWA for easy access.
    -   Works offline with cached assets.


<div align="center">

[Visit my website](https://sync-note.onrender.com/)

</div>

## Features

-   **Offline Functionality:** Work with your notes even when you're offline, thanks to IndexedDB and service workers.
-   **Installable PWA:** Install the app on your device and use it like a native application.
-   **Data Persistence:** Your notes are saved and can be retrieved even after closing the app.
-   **Modern JavaScript:** Built with modern JavaScript features and Webpack for efficient bundling.

## Contributing

Contributions to Sync Note are welcome! Here’s how you can contribute:

1. **Fork the repository** on GitHub.
2. **Create a branch** for your feature `git checkout -b new-feature`.
3. **Make changes** and commit them `git commit -m "Add some feature"`.
4. **Push to the branch** `git push origin new-feature`.
5. **Create a new Pull Request** against the main.

Please ensure your code adheres to the existing style of the project to make your changes easy to understand and integrate!

## Tests

To run tests, execute the following command:

```
npm test
```

(Note: You will need to write the tests based on the endpoints and operations your application performs, as this is not set up by default.)

## License

Sync Note is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this application according to the terms of the license.