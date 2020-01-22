const fs = require('fs');

// Create /build
fs.existsSync("build") || fs.mkdirSync("build");

// Get files
let files = fs.readFileSync('build.txt').toString().split("\n");

// Add output path
files.push('build')

// Copy globs to /build
require('copyfiles')(files, {}, () => {
    console.log("Moved globs to /build")
})