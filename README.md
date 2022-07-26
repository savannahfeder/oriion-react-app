# Oriion ✨
Oriion is an accountability chrome extension developed to reduce the low retention rates of self-paced online courses.


<img src="https://user-images.githubusercontent.com/71240740/153739991-75b70b26-d36c-416a-8fd2-518703b703fc.png" width="250"/>

# React Chrome Extension Boilerplate Instructions

[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/vivek9patel/chrome-extension-react-boilerplate)
[![License](https://img.shields.io/github/license/yilber/readme-boilerplate.svg)](https://github.com/vivek9patel/chrome-extension-react-boilerplate/blob/master/LICENCE)

Boilerplate for your chrome extension with react.js and webpack

## Background

> Creating a file structure for developing chrome-extension takes forever, especially if you want to integrate react to generate popup starting off from scratch. So, I decided to make a template to help me speed up things a little bit.

## Installation

Open your terminal and type...

### Clone in your system

```sh
git clone https://github.com/vivek9patel/chrome-extension-react-boilerplate.git
```

```sh
cd chrome-extension-react-boilerplate
```

### Install dependencies & compile code with webpack

```sh
yarn
```

```sh
yarn run dev
```

## File structure

After all the above steps, you should able to see this file strucutre in the root directory:

```text
chrome-extension-react-boilerplate
├── README.md
├── node_modules
├── dist
│   ├── background.js
│   ├── icons
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── popup.js.LICENSE.txt
├── package.json
├── public
│   ├── icons
│   │   ├── 128.png
│   │   ├── 16.png
│   │   └── 48.png
│   ├── manifest.json
│   └── popup.html
├── src
│   ├── chrome
│   │   └── background.js
│   ├── popup.css
│   └── popup.jsx
├── webpack.config.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

## How to use

- By running the above commands webpack will generate `dist` folder in the root directory.
- Now, open up your chrome browser and type `chrome://extensions` in the URL bar.
- Toggle developer mode to on and click on the _Load Unpacked_ button.
- This will open a window to select folder. Go ahed and open the `dist` folder from the root directory, and that will load this extension in the chrome!
