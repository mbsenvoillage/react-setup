# How to Set up React From Scratch

## Basic setup (folder structure, git, npm)

-   git init
-   Source code => /src
-   Bundled code => /build
-   Add /build in gitignore
-   npm init
-   Create src/index.html with a root div to mount React app
-   Add /node_modules to gitignore

## Essential Dependencies

-   yarn add react, react-dom
-   yarn add -D typescript @types/react @types/react-dom

## Typescript Compiler config (tsconfig.json)

-   compilerOptions focus on typechecking and not code transpilation. Babel’s the transpiler

## Setting up entry points

-   add App.tsx in /src (where you React App code resides)
-   add index.tsx in /src (entry point for you React App)
    -   reference mount point
    -   if no mount point, throw err
    -   instantiate root => React.createRoot(mountPoint)
    -   render root => root.render(<React.StrictMode> <App />)

## Transpiling code (Babel)

-   The code written so far cannot be understood by the browser as it is. Babel will transpile the typescript and react code into js code that the browser can understand.
-   install babel and plugins as dev dependency :
    -   yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime
-   add babel config file => .babelrc

## Bundling the code (Webpack)

-   the bundled code is then referenced in the index.html file
-   install webpack related packages as dev dependencies => yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
-   install babel-loader package which allows transpiling js files using babel and webpack => yarn add -D babel-loader
-   add /webpack/webpack.config.js

## webpack.config.js

-   it is an object
-   you reference the entry point (index.tsx)
-   resolve extensions allows to omit the extension when importing
-   module rules
    -   should use babel loader for
-   output :
    -   where bundled code should be
-   mode :
    -   dev or prod
-   plugins :
    -   htmlwebpackplugin => injects bundled js file into index.html and places that html file in build folder (you do not have to specify it yourself)

## Add a start script

-   `"start": "webpack serve --config webpack/webpack.config.js --open"`
-   specify path of webpack config file and `--open`to automate browser open upon start

### Questions for later :

-   what is react
-   what is a framework
-   what is prettier
-   what is a linter
-   what is babel
-   what is webpack
-   what does the react library contain
-   what does the react-dom library contain
-   why do you need types for librairies ? only need them if you’re using typescript

### TODO :

-   learn more about tsconfig.json
