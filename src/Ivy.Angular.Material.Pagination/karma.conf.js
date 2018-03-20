// Karma configuration
// Generated on Wed Mar 14 2018 15:19:36 GMT-0700 (US Mountain Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'karma-typescript'],


    // list of files / patterns to load in the browser
    files: [

        // My Files
        'src/Components/**/*.html',
        'src/Components/**/*.css',
        'src/Components/**/*.ts',
        'test/*.spec.ts',


        /*
         * Angular Testing File Requirements
         * https://github.com/angular/quickstart/blob/master/karma.conf.js#L42
         */

        // zone.js
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        'node_modules/zone.js/dist/proxy.js',
        'node_modules/zone.js/dist/sync-test.js',
        'node_modules/zone.js/dist/jasmine-patch.js',
        'node_modules/zone.js/dist/async-test.js',
        'node_modules/zone.js/dist/fake-async-test.js',

        // RxJs
        { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
        { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

        // Paths loaded via module imports:
        // Angular itself
        { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
        { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
    ],


    // list of files / patterns to exclude
    exclude: [
        'src/Components/**/*.d.ts',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/Components/**/*.ts': ['karma-typescript'],
        'test/*.spec.ts': ['karma-typescript']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'karma-typescript'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    karmaTypescriptConfig: {
        tsconfig: './tsconfig.test.json',
        bundlerOptions: {
            transforms: [
                require("karma-typescript-angular2-transform"),
                require("karma-typescript-es6-transform")()
            ]
        }
    }
  })
}
