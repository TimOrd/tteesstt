// Move WHAT?
let files = [
    '*.html',
    'dist/**/*'
];

// Add output path (weirdly copyfile needs the output dir as the last index??)
files.push('build')

// Copy globs to /build
require('copyfiles')(files, {}, () => {
    console.log("Moved globs to /build")
})