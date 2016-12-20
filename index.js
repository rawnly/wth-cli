#!/usr/bin/env node

const ora = require('ora');
const colors = require('colors');
const chalk = require('chalk');
const fs = require('fs');
const program = require('commander');
const clear = require('clear');

const pkg = require('./package.json');
const info = require('./libs/descriptions');

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

          console.log("");
          console.log(info.js);
          console.log("");

          console.log("=>".red + " See more here: " + url + "JavaScript");
          console.log("");
        }, 250);
        break;

      case 'html':
        setTimeout(function () {
          spinner.text = "It's a " + "HTML".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.html);
          console.log("");

          console.log("=>".red + " See more here: " + url + "HTML");
          console.log("");
        }, 250);
        break;

      case 'css':
        setTimeout(function () {
          spinner.text = "It's a " + "CSS".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.css);
          console.log("");

          console.log("=>".red + " See more here: " + url + "CSS");
          console.log("");
        }, 250);
        break;

      case 'sass':
      case 'scss':
        setTimeout(function () {
          spinner.text = "It's a " + "SASS".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.sass);
          console.log("");

          console.log("=>".red + " See more here: " + url + "scss");
          console.log("");
        }, 250);
        break;

      case 'less':
        setTimeout(function () {
          spinner.text = "It's a " + "LESS".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.less);
          console.log("");

          console.log("=>".red + " See more here: " + url + "Less_(stylesheet_language)");
          console.log("");
        }, 250);
        break;

      case 'md':
        setTimeout(function () {
          spinner.text = "It's a " + "MarkDown".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.markdown);
          console.log("");

          console.log("=>".red + " See more here: " + url + "Markdown");
          console.log("");
        }, 250);
        break;

      case 'txt':
        setTimeout(function () {
          spinner.text = "It's a " + "text".rainbow.bold.underline + " file";
          spinner.succeed()
        }, 250);
        break;

      case 'json':
        setTimeout(function () {
          spinner.text = "It's a " + "JSON".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.json);
          console.log("");

          console.log("=>".red + " See more here: " + url + "JSON");
          console.log("");
        }, 250);
        break;

      case 'lock':
        setTimeout(function () {
          spinner.text = "It's a " + ".lock".rainbow.bold.underline + " file";
          spinner.succeed()
          console.log("=>".red + " See more here: https://yarnpkg.com/");
          console.log("");
        }, 250);
        break;

      case 'php':
        setTimeout(function () {
          spinner.text = "It's a " + "PHP".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.php);
          console.log("");

          console.log("=>".red + " See more here: " + url + "Php");
          console.log("");
        }, 250);
        break;

      case 'cpp':
        setTimeout(function () {
          spinner.text = "It's a " + "CPP".rainbow.bold.underline + " file";
          spinner.succeed()

          console.log("");
          console.log(info.php);
          console.log("");

          console.log("=>".red + " See more here: " + url + "C");
          console.log("");
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
