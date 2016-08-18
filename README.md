# Starter - Angular 2 Vendor Dll

## Introduction

Webpack's CommonsChunkPlugin is a popular way to pack vendor, polyfills modules for nodejs, npm or Angular2 project. However webpack will go through the whole vendor, polyfills tree each time you recompile your project.

Webpack's Dll and DllReference plugins come in as a rescue. You can read the following article by Rob Knight

[Optimizing Webpack build times and improving caching with DLL bundles](https://robertknight.github.io/posts/webpack-dll-plugins/)

## Angular 2 Vendor Dll

This project aim to be a basic starting point to create Angular2 application using a vendor dll (vendor.js) containing the base Angular2 modules.

### Usage
Git clone
```
git clone https://github.com/J-Siu/Angular-2-Vendor-Dll.git
cd Angular-2-Vendor-Dll
```

Install global packages:
```
npm -g install webpack
npm -g install webpack-dev-middleware
npm -g install webpack-dev-server
```

Install local packages:
```
npm install
```

Create Dll
```
npm run vendor
```

Start Webpack dev server
```
npm start
```

Build
```
npm run build
```

### Files
##### webpack.config.vendor.js

`npm run vendor` will use webpack.config.vendor.js to create vendor.js, and put it into src/public/js/.

>__To inculde more modules in vendor.js, modify `webpack.config.vendor.js`, `src/main.ts` and `package.json`.__

##### webpack.config.app.js 

`npm run build` will use webpack.config.app.js to transiple your Angular2 application. 

## ChangeLog
- 2.0.0-RC4 - Use Angular2 RC4
- 2.0.0-RC4-fix - Fix webpack config files
- 2.0.0-RC5 - Use Angular2 RC5
- 2.0.0-RC5-V2
	- webpack.config.*.js: Set `mangle:false` for webpack.optimize.UglifyJsPlugin. [NG2 RC5 issue 10618](https://github.com/angular/angular/issues/10618)
	- package.json: Use `postinstall` for typings install
	- Update app to demostrate Angular2 module import

## Thank You

This project is heavily inspired by [AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

## License

The MIT License

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
