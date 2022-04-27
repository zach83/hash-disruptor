const crypto = require("crypto");
const fs = require("fs");
const process = require("process");

const targetFileName = process.argv[2];
const targetFileType = targetFileName.split(".").pop();
const targetFileContent = fs.readFile(fileName);
const targetFileHash = crypto.createHash("md5", targetFileContent);

// When adding file information, leave out the "." in the fileTypes array.
// If there is a file that does not have a commenting syntax, and cannot have data inserted, do not include it.
const fileTypes = ["html"]
// If there is a file that does not have a commenting syntax, but can have data inserted, have its index contain "bin".
const fileTypeCommentStart = ["<!--"]
const fileTypeCommentEnd = ["-->"]

const isFileTypeRecognizable = fileTypes.includes(targetFileType);
const isFileCommentBinary = fileTypeCommentStart[fileTypes.indexOf(targetFileType)];

// Disrupt file hash
if (isFileTypeRecognizable && (isFileCommentBinary !== "bin")) {
  
} else if (isFileTypeRecognizable && (isFileCommentBinary === "bin")) {

} else {
  console.error("Could not recognize this type of file.")
  return;
}
