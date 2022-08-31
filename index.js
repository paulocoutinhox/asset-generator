#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const generate = require('./generate.js');

program
    .option('-a, --android [path]', 'android path')
    .option('-i, --ios [path]', 'iOS Path')
    .parse(process.argv);

generate(program.args, program.opts().android, program.opts().ios);
