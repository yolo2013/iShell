#!/usr/bin/env node

require('shelljs/global');
var program = require('commander');

if(!which('git')) {
    console.log('Sorry, this script requires git');
    exit(1);
}

var list = ['java', '.net', 'php'];

program
    .version('0.0.1')
    .option('-p, --platform [platform]', 'platform which you are')
    .option('-l, --language [language]', 'language of generate files')
    .parse(process.argv);


var platform = program.platform || 'java';
var language = program.language || 'chin';

mkdir('-p', 'release/');
cd('release');

var libUrl;

switch(platform) {
case 'java':
    libUrl = 'git@192.168.4.125:D:/Generics';
    break;
case '.net':
    libUrl = 'https://github.com/JimLiu/angular-ui-tree';
    break;
case 'php':
    break;
}

exec('git clone ' + libUrl);
