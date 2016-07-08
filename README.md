# react-workshop-byjam

## usage
```console
$ npm install
$ jest
$ webpack
$ npm start
$ open http://localhost:3000
```

## log
```console
$ vim .gitignore ### ignore: compiled javascript files
$ mkdir public src __tests__
$ mkdir public/javascripts public/javascripts/lib
$ mkdir public/images public/stylesheets ### optional

$ npm ls --global --depth=0 ### check: jest-cli and webpack

$ npm init

$ npm install --save react react-dom
$ npm install --save-dev babel-core babel-preset-react babel-preset-es2015
$ npm install --save-dev webpack babel-loader
$ npm ls --depth=0

$ npm install express --save-dev
$ vim test-server.js
$ vim public/index.html
$ vim package.json ### make "start" script: "node test-server.js"
$ npm start

$ npm install --save-dev jest-cli babel-jest babel-polyfill react-addons-test-utils
$ vim package.json ### jest section
$ vim __tests__/sum-test.js
$ vim __tests__/CheckboxWithLabel-test.js
$ jest

$ vim src/index.js
$ vim src/sum.js
$ vim src/HelloMessage.js
$ vim src/CheckboxWithLabel.js
$ vim webpack.config.js
$ vim .babelrc
$ webpack
$ cat public/javascripts/lib/app.js
```

## checklist
* test React.js
    - [x] precompile
    - [x] jest
    - [x] webpack
    - [x] test server

* test Git
    - [ ] flow

* test gh
    - [x] GFM
    - [x] BTS

