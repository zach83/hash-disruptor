const crypto = require("crypto");
const fs = require("fs");
const process = require("process");

var amount = 0;
var hashMethod = "md5";
var targetDir = ".";

if () {

}

if () {
  
}

if (process.argv.includes("-h") || process.argv.includes("--help") || process.argv.length <= 2) {
  console.log("----------");
  console.log("hash-disruptor - Disrupt a file's hash signature by injecting random data!");
  console.log("USAGE: `node index.js <target file name> <arguments (optional)>`");
  console.log("-a, --amount: Makes a certain amount of unique copies/editions of the target file.");
  console.log("-d, --dir: Specifies a target directory to put the copies in.");
  console.log("-e, --encryption: Specifies the type of hash you would like to ");
  console.log("-h, --help: Displays this prompt.");
  console.log("----------");
}

const targetFileName = process.argv[2];
const targetFileType = targetFileName.split(".").pop();
const targetFileContent = fs.readFile(fileName);
const targetFileOriginalHash = crypto.createHash(hashMethod, targetFileContent);

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
