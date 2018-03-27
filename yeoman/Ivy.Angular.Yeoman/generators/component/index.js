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

    copyComponentTypeScript() {

        this.fs.copyTpl(
            this.templatePath('template.component.ts'),
            this.destinationPath('src/Component/' + this.options.name + '/' + this.getModuleName() + '.component.ts'),
            { name: this.options.name, moduleName: this.getModuleName() }
        );
    }

    copyComponentHtml() {

        this.fs.copyTpl(
            this.templatePath('template.component.html'),
            this.destinationPath('src/Component/' + this.options.name + '/' + this.getModuleName() + '.component.html'),
            { name: this.options.name }
        );
    }

    copyComponentTest() {

        this.fs.copyTpl(
            this.templatePath('template.component.spec.ts'),
            this.destinationPath('test/' + this.getModuleName() + '.component.spec.ts'),
            { name: this.options.name, moduleName: this.getModuleName() }
        );
    }
};