#!/usr/bin/env node

require('shelljs/global');
var program = require('commander');

if(!which('git')) {
    console.log('Sorry, this script requires git');
    exit(1);
}

var list = ['java', '.net', 'php'];


program
    .version('0.0.6')
    .option('-p, --platform [platform]', 'platform which you are')
    .option('-l, --language [language]', 'language of generate files')
    .parse(process.argv);


var platform = program.platform || 'java';
var language = program.language || 'chin';

var libUrl = 'git://192.168.84.52/paradigm.git';


exec('git clone ' + libUrl);
