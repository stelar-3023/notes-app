import * as fs from 'fs';
import chalk from 'chalk';

export const getNotes = function () {
  return 'Your notes...';
};

export const addNote = function (title, body) {
  const notes = loadNotes();

  // check if note already exists
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse.bold('Note added!'));
    return notes;
  } else {
    console.log(chalk.red.inverse.bold('Note title taken!'));
  }
  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
};

export const removeNote = function (title) {
  // load notes
  const notes = loadNotes();
  // filter notes, removing the one with title of argument
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  // check if a note is removed
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
  console.log('Removing note', title);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    // read the file
    const dataBuffer = fs.readFileSync('notes.json');
    // convert the buffer to a string
    const dataJSON = dataBuffer.toString();
    // convert the string to an object
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
