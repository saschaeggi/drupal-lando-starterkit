'use strict';
const yosay = require('yosay');
const chalk = require('chalk');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.log(yosay(
      'Hi there!' + '\n' +
      chalk.yellow(`Let's create a new storybook folder`)
    ));

    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'storyName',
        message: 'What should be the name of your story?',
        // No empty strings and only letters allowed
        validate(val) {
          if (val.length == 0) {
            return 'Please provide a name for your story';
          }
          return /^[a-zA-Z]+$/.test(val) ? true : 'Only letters are allowed';
        },
        // Make sure first letter is uppercase
        filter: function (val) {
          return val.charAt(0).toUpperCase() + val.slice(1);
        }
      },
      {
        type: 'list',
        name: 'storyType',
        message: 'Where should your new story go?',
        choices: [ '1 Base', '2 Components', '3 Modules', '4 Layouts', '5 Pages']
      },
      {
        type: 'confirm',
        name: 'createGraphQLFile',
        message: 'Should I create a GraphQL file?',
        default: false
      },
    ]);
  }

  writing() {
    const camelToSnake = (string) => {
      return string.replace(/[\w]([A-Z])/g, function(m) {
          return m[0] + '-' + m[1];
      }).toLowerCase();
    }
    var name = this.answers.storyName,
        storyType = this.answers.storyType,
        storyTypeNoNumber = storyType.substring(2),
        storyTypeSingular = '',
        className = storyTypeNoNumber.charAt(0).toLowerCase() + '-' + camelToSnake(name),
        gql = this.answers.createGraphQLFile,
        filetypes = [];

    // remove plural s
    if (storyType == '2 Components' || '3 Modules' || '4 Layouts' || '5 Pages') {
      storyTypeSingular = storyTypeNoNumber.substring(0, storyTypeNoNumber.length - 1);
    } else {
      storyTypeSingular = storyTypeNoNumber;
    }

    gql ? filetypes = ['js', 'scss', 'twig', 'twig.gql'] : filetypes = ['js', 'scss', 'twig'];

    filetypes.forEach(filetype => {
      this.fs.copyTpl(
        this.templatePath('Template.' + filetype),
        this.destinationPath(`./src/${storyTypeNoNumber.toLowerCase()}/${name}/${name}.${filetype}`),
        {
          storyName: name,
          storyClass: className,
          storyType: storyType,
          storyTypeSingular: storyTypeSingular
        }
      );
    });
  }

  end() {
    this.log(
      '\n' + `🍾🍾🍾 We're all set. Run ${chalk.green(
        'npm run storybook'
      )} and go check out your new story!` + '\n'
    );
  }
};
