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

## Bundling CSS

-   add css file to src and import it in App.tsx
-   to process css files, webpack needs loaders. Once installed wbepack is instructed to use those files for every css file it encounters
-   `yarn add -D css-loader style-loader`
-   in webpack config file add instructions in module rules
    -   test for css extension
    -   use style-loader and css-loader

```js
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
},
```

## Dealing with images

-   if you import an image in App.tsx you get the following error :
    -   `Cannot find module './react.png' or its corresponding type declarations.`
-   to fix the problem, add a `declarations.d.ts` file in the src folder
-   edit the file and add `declare module '*.png'` or the same for svg
-   with webpack 4 you had to include specific loaders for media types. With webpack 5, you do not have to. The type 'asset/resource' or 'asset/inline' does the job for you.
-   'asset/inline' also handles font formats
-   in webpack config file add instructions in module rules
    -   test for image extensions
    -   add type

```js
{
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
},
```

## Multi environment builds

-   create a `webpack.common.js` where resides the common config for all environments
-   `webpack.prod.js` and `webpack.dev.js` hold the config for dev and prod environments
-   `webpack.config.js` merges the commonn config with the specific env config chosen at build time
-   edit start script in `package.json` to include the environment variable env : `--env env=dev`
-   add a build command

### Creating custom env variables with webpack

-   require webpack
-   add plugin property (which takes an array)
-   instantiate a webpack DefinePlugin :

```js
plugins: [
    new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('Name you want to pass'),
    }),
]
```

### Running a build

-   go to build folder and run `npx serve`
