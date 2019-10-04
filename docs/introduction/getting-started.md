---
id: getting-started
title: Getting Started with Neutron JS
sidebar_label: Getting Started
---

Neutron is a <b>Command Line Interface</b> developed to help developers create new react projects with <a href="https://redux.js.org/" target="_blank">Redux</a> + <a href="https://redux-saga.js.org/" target="_blank">Redux Saga</a>, as well as providing a well-structured code organization.

This page will help you install and build your first react project using Neutron JS and it's very important to explain that to work with mobile, you must have installed the `expo-cli` in your development environment.

We chose <a href="https://expo.io/tools" target="_blank">Expo</a> due to maturity that it's reached and because it's not necessary to configure and install SDKs, emulators and other common requirements for iOS and Android development.

To learn more about `expo-cli`, check: <a href="https://expo.io/learn" target="_blank">https://expo.io/learn</a>.

## Installation

This is simple and easy because Neutron JS is available as a package in <a href="https://www.npmjs.com/package/@neutron.js/cli" target="_blank">Node Package Manager</a>, so you can enter in your terminal with:

```shell
yarn global add @neutron.js/cli
```

To confirm the installation, you can write `neutron` into your terminal. The result in your terminal will be just like this:

```text
---------------------------------------------------------------
 _   _            _                       _ ____
|:\ | | ___ _   _|:|_ _ __ ___  _ __     | /:___|
|  \| |/ _ \ | | | __| '__/ _ \| '_ \ _  | \___ \
| |\  |  __/ |_| | |_| | | (_) | | | |:|_| |___) |
|_| \_|\___|\__,_|\__|_|  \___/|_| |_|\___/|____/

React & React Native Flux Architecture CLI vX.Y.Z

---------------------------------------------------------------

For more information:
https://www.neutronjs.com

---------------------------------------------------------------
```

## Creating a new project

To create a new project, you must use command with this format:

```shell
neutron create <appName> <platform>
```

Available platforms:

- `--web`<small>: create a new project with <b>React JS</b></small>
- `--mobile`<small>: create a new project with <b>React Native</b></small>

#### Usage example:

```shell
neutron create my-app --web
```

After a while you will see the success message and be able to start the application with a development server using:

```shell
cd my-app && yarn start || npm run start
```
