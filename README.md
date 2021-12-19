# microfrontends-tailor

## Description
Web page with two microfrontends that send events to each other

The frontends are builded in Angular and use Angular Universal for SSR.

The orchestrator use [Tailor](https://github.com/zalando/tailor) as a layout service.

## Installation

```bash
# Fragment One
cd header
npm install
cd ..

# Fragment Two
cd content
npm install
cd .. 

# Orchestrator 
cd tailor
npm instal
cd ..
```

## Running the app

```bash
# Fragment One http://localhost:4500/ 
cd header
npm run build:ssr
npm run serve:ssr
cd ..

# Fragment Two http://localhost:4600/
cd content
npm run build:ssr
npm run serve:ssr
cd .. 

# Orchestrator http://localhost:8080/
cd tailor
node tailor.js
cd ..
```