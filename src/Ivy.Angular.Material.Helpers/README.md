# Ivy/Material

A series of Angular 4 helpers for our framework project that are specifically tooled to work with @angular/material.

## Getting Started


To install, simply download the NPM package 'ivy/material'

NPM

```
npm install ivy/material
```

Yarn

```
yarn add ivy/material
```


### Installing

Installing the module to your Angular application is as simple as including it in the Module Imports.
```
// Angular
import { NgModule } from '@angular/core';

// Ivy Material
import { IvyMaterialModule } from 'ivy.material';

// NgModule
@NgModule({
    providers: providers
})
export class TestModule {
    imports: [
        IvyMaterialModule.forRoot()
    ]
}
```

After you've installed the Module, you can simply inject the services into your application as necessary.
```
import { MaterialsWidthHelper } from 'ivy.material';

export class TestClass {
    constructor(widthHelper: MaterialsWidthHelper) {
    }
}

```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ian Buchan** - *Initial work*