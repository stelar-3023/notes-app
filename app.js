import chalk from 'chalk';
import { argv } from 'process';
import yargs from 'yargs';

import { getNotes } from './notes.js';
import { addNote, removeNote } from './notes.js';


const msg = getNotes();
console.log(msg);

// console.log(chalk.blue.inverse.bold('Success!'));

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Removing note');
    removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    console.log('Listing out all notes');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading all notes');
  },
});

yargs.parse();


// console.log(process.argv);
// console.log(yargs.argv);
// console.log(process.argv[2]);
// const command = process.argv[2];

// if (command === 'add') {
//   console.log('Adding note');
// } else if (command === 'remove') {
//   console.log('Removing note');
// }

// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Steve.');

// Challenge: Append a message to notes.txt
// 1. Use appendFileSync to append to the file
// 2. Run the script
//. 3. Check your work by opening the file and viewing the appended

// try {
//   fs.appendFileSync('notes.txt', ' My last name is Larsen.');
//   console.log('The data was appended to the file!');
// } catch (err) {
//   console.log('An error occurred:', err);
// }

// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);

// Challenge: Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing to the console

// Challenge: Use the chalk library in your project
// 1. Install chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" in green
// 4. Test your work
