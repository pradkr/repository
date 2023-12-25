//const chalk = require('chalk');
import chalk from 'chalk';
const date = new Date().toLocaleString();
console.log(`${chalk.red('Today is')} ${chalk.blue.bold(date)}`);