var Generator = require('yeoman-generator');
var Case = require('case');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {

    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Need the name of the project
        this.argument('name', { type: String, required: true });

        this.getModuleName = function () {
            return Case.kebab(this.options.name);
        }

        this.getProjectName = function () {
            return 'Ivy.Angular.' + this.options.name;
        }
    }

    setDestinationRoot() {

        this.log('Directory name is ' + this.getProjectName());

        this.destinationRoot(this.getProjectName());
    }

    logInputs() {

        this.log('Project name is ' + this.options.name);
        this.log('Module name is ' + this.getModuleName());
    }

    configureNsProj() {

        let src = this.templatePath('Ivy.Angular.Sample.njsproj-template');
        let dst = this.destinationPath(this.getProjectName() + '.njsproj');

        this.log('Template Path is ', src);
        this.log('Destination Path is ', dst);

        this.fs.copyTpl(src, dst,
            { name: this.options.name, moduleName: this.getModuleName() }
        );
    }

    configureProjectJson() {

        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            { moduleName: this.getModuleName() }
        );
    }

    configureReadMe() {

        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            { projectName: this.getProjectName() }
        );
    }

    configureTsConfig() {

        this.fs.copyTpl(
            this.templatePath('tsconfig.json'),
            this.destinationPath('tsconfig.json')
        );
    }

    configureTypeScriptIndex() {

        this.fs.copyTpl(
            this.templatePath('index.ts'),
            this.destinationPath('index.ts'),
            { name: this.options.name, moduleName: this.getModuleName() }
        );
    }

    configureTypeScriptModule() {

        let typeScriptModuleName = 'ivy.angular.' + this.getModuleName() + '.module.ts';

        this.log('TS Module Name is: ', typeScriptModuleName);

        this.fs.copyTpl(
            this.templatePath('template.module.ts'),
            this.destinationPath(typeScriptModuleName),
            { name: this.options.name }
        );
    }

    configureKarma() {

        this.fs.copyTpl(
            this.templatePath('karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
    }

    configureWebpack() {

        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
    }

    setupTestFolder() {

        this.fs.copyTpl(
            this.templatePath('test-index.ts'),
            this.destinationPath('test/index.ts')
        );
    }

    setupProjectRequirements() {

        let projectRequirements = [
            '@angular/core',
            'rxjs',
            'core-js',
            'zone.js@git://github.com/JiaLiPassion/zone.js#jasmine-dist'
        ];

        this.yarnInstall(projectRequirements);
    }

    setupTestRequirements() {

        let testRequirements = [
            '@angular/common',
            '@angular/compiler',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@types/jasmine',
            'angular2-template-loader',
            'awesome-typescript-loader@5.0.0-1',
            'css-loader',
            'html-loader',
            'jasmine',
            'jasmine-core',
            'karma',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-jasmine-html-reporter',
            'karma-sourcemap-loader',
            'karma-webpack',
            'typescript',
            'webpack'
        ];

        this.yarnInstall(testRequirements, { 'dev': true });
    }

};