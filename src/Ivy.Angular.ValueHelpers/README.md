# Ivy/Value-Helpers

A series of Angular 4 helpers for working with some basic value manipulation.  Currently, this module supports the StringHelper.

## Getting Started


To install, simply download the NPM package 'ivy/value-helpers'

NPM

```
npm install ivy/value-helpers
```

Yarn

```
yarn add ivy/value-helpers
```


### Installing

Installing the module to your Angular application is as simple as including it in the Module Imports.
```
// Angular
import { NgModule } from '@angular/core';

// Ivy Material
import { IvyValueHelpersModule } from 'ivy/value-helpers';

// NgModule
@NgModule({
    providers: providers
})
export class TestModule {
    imports: [
        IvyValueHelpersModule.forRoot()
    ]
}
```

After you've installed the Module, you can simply inject the services into your application as necessary.
```
import { StringHelper } from 'ivy/value-helpers';

export class TestClass {
    constructor(stringHelper: StringHelper) {
    }
}

```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ian Buchan** - *Initial work*