// const chalk = require("chalk");
const fs = require("fs");
const process = require("process");
// Maybe a hash module to show before and after?

const targetFileName = process.argv[2];
const targetFileType = targetFileName.split(".").pop();
const targetFileContent = fs.readFile(fileName);

// When adding file information, leave out the "." in the fileTypes array.
const fileTypes = ["html"]
// If there is a file that does not have a commenting syntax, but can have data inserted, have its index contain "bin".
// If there is a file that does not have a commenting syntax, and cannot have data inserted, have its index contain null.
const fileTypeCommentStart = ["<!--"]
const fileTypeCommentEnd = ["-->"]

if ()
{
  
} else {

}
