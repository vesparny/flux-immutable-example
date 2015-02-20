# flux-immutable-example


**Brought to you by [Alessandro Arnodo](http://alessandro.arnodo.net) [[@vesparny](https://twitter.com/vesparny)]**

[![Dependency status](https://david-dm.org/vesparny/flux-immutable-example
/status.png)](https://david-dm.org/vesparny/flux-immutable-example
 "Dependency status")

**This is just my attempt to dig into flux, React, webpack, es6 syntax and immutability**

It's an app written in few days while learning those technologies.

#### See a [working demo](http://vesparny.github.io/flux-immutable-example/).

![flux](https://cloud.githubusercontent.com/assets/82070/6288351/a64feb16-b918-11e4-970e-4d11bc7cfdbe.gif)

#### Install dependencies

```shell
npm install
```

#### Run

```shell
npm start
```

then open http://localhost:3333

#### Build for production with Webpack 

```shell
npm run build
```

#### Technology stack

* [React](http://facebook.github.io/react/), of course
* flux stuff handled by [flummox](https://github.com/acdlite/flummox) by [acdlite](https://github.com/acdlite/) (which is the best flux library I played with)
* Stores classification based on [gaearon](https://github.com/gaearon/flux-react-router-example) example.
* [webpack](https://github.com/webpack/webpack)
* [Immutable.js](https://github.com/facebook/immutable-js)
* [react-router](https://github.com/rackt/react-router)
* [react-immutable-render-mixin](https://www.npmjs.com/package/react-immutable-render-mixin)
* Persistence uses [Parse](https://parse.com/) and localStorage

#### Useful links

* http://stackoverflow.com/questions/23591325/in-flux-architecture-how-do-you-manage-store-lifecycle
* http://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html
* http://stackoverflow.com/questions/23931416/react-flux-state-and-stores


### License

See LICENSE file
