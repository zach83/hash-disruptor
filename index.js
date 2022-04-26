// const chalk = require("chalk");
const fs = require("fs");
const process = require("process");
// Maybe a hash module to show before and after?

const fileName = process.argv[2];
const file = fs.readFile(fileName);

const fileTypes = []
// If there is a file that does not have a commenting syntax, but can have data inserted, have its index contain a note.
// If there is a file that does not have a commenting syntax, and cannot have data inserted, have its index contain a note
const fileTypeCommentStart = []
const fileTypeCommentEnd = []
