# Ivy/Web

A series of Angular 4 helpers for working with some basic web services.  
Currently, this module supports the following:
* OsDetectionService
* BrowserDetectionService
* WindowRefService

## Getting Started


To install, simply download the NPM package 'ivy/web'

NPM

```
npm install ivy/web
```

Yarn

```
yarn add ivy/web
```


### Installing

Installing the module to your Angular application is as simple as including it in the Module Imports.
```
// Angular
import { NgModule } from '@angular/core';

// Ivy Material
import { IvyWebModule } from 'ivy/web';

// NgModule
@NgModule({
    providers: providers
})
export class TestModule {
    imports: [
        IvyWebModule.forRoot()
    ]
}
```

After you've installed the Module, you can simply inject the services into your application as necessary.
```
import { WindowRefService } from 'ivy/web';

export class TestClass {
    constructor(windowRef: WindowRefService) {
    }
}

```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ian Buchan** - *Initial work*