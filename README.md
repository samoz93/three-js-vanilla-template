# Three.js Boilerplate

A boilerplate/starter project for quickly building three.js app using Vite & Three.

## Quick Start:

**Clone the repo:**

```
git clone --depth 1 https://github.com/bibashmgr/three-js-boilerplate
cd three-js-boilerplate
```

**Install the dependencies:**

```
npm install
```

## Commands:

**Run app in development:**

```
npm run dev
```

## Packages:

| Package                                       | Version                                                                      |
| --------------------------------------------- | :--------------------------------------------------------------------------- |
| [vite](packages/vite)                         | ![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)             |
| [three](packages/three)                       | ![three](https://img.shields.io/npm/v/three?label=%20)                       |
| [events](packages/events)                     | ![events](https://img.shields.io/npm/v/events?label=%20)                     |
| [vite-plugin-glsl](packages/vite-glsl-plugin) | ![vite-plugin=glsl](https://img.shields.io/npm/v/vite-plugin-glsl?label=%20) |

## Project Structure:

```
public\
  |--models\
  |--textures\
src\
  |--config\        # Environment variables and configuration related things
  |--helpers\       # Helper classes and functions
  |--scenes\        # Scenes and Objects logic
  |--shaders\       # Shaders
  |--utils\         # Utility classes and functions
  |--camera.js
  |--experience
  |--renderer.js
index.html
main.js
style.css
```
