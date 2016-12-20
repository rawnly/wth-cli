#!/usr/bin/env node

const ora = require('ora');
const colors = require('colors');
const chalk = require('chalk');
const fs = require('fs');
const program = require('commander');
const clear = require('clear');

const pkg = require('./package.json');

const url = 'https://wikipedia.org/wiki/';

var spinner = new ora({
  text: 'Getting file-type...',
  color: 'yellow',
  spinner: 'dots'
});

var type;

program
.version(pkg.version);

if ( !program.args ) {
  spinner.text = "Nothing cool here. Try hell -h.";
  spinner.fail();
}

program
  .arguments('<file>')
  .action(function (file) {
    clear();
    spinner.start();
    type = file.split('.')[1];

    switch (type) {
      case 'js':
        setTimeout(function () {
          spinner.text = "It's a " + "JavaScript".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "JavaScript");
        }, 250);
        break;

      case 'html':
        setTimeout(function () {
          spinner.text = "It's a " + "HTML".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "HTML");
        }, 250);
        break;

      case 'css':
        setTimeout(function () {
          spinner.text = "It's a " + "CSS".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "CSS");
        }, 250);
        break;

      case 'sass':
      case 'scss':
        setTimeout(function () {
          spinner.text = "It's a " + "SASS".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "scss");
        }, 250);
        break;

      case 'less':
        setTimeout(function () {
          spinner.text = "It's a " + "LESS".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "Less_(stylesheet_language)");
        }, 250);
        break;

      case 'md':
        setTimeout(function () {
          spinner.text = "It's a " + "MarkDown".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "Markdown");
        }, 250);
        break;

      case 'txt':
        setTimeout(function () {
          spinner.text = "It's a " + "text".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "JavaScript");
        }, 250);
        break;

      case 'json':
        setTimeout(function () {
          spinner.text = "It's a " + "JSON".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "JSON");
        }, 250);
        break;

      case 'lock':
        setTimeout(function () {
          spinner.text = "It's a " + ".lock".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: https://yarnpkg.com/");
        }, 250);
        break;

      case 'php':
        setTimeout(function () {
          spinner.text = "It's a " + "PHP".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "Php");
        }, 250);
        break;

      case 'cpp':
        setTimeout(function () {
          spinner.text = "It's a " + "CPP".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: " + url + "C");
        }, 250);
        break;

      case 'app':
        setTimeout(function () {
          spinner.text = "It's a simple " + "Application".rainbow.bold;
          spinner.color = 'green';
          spinner.succeed()
        }, 250);
        break;

      default:
        spinner.text = "Unknown filetype ".red;
        spinner.fail();
    }
  });

program.parse(process.argv);
