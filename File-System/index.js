// create a new empty file
const fs = require('fs')

fs.open('mynewfile.txt','w',function(err,file)
{
    if(err) throw err;
    console.log("mynewfile.txt is created.")
});

// Write in file, mynewfile1.txt is also created.
// const fs = require('fs')

fs.writeFile('mynewfile1.txt','Hello world, THis is node Js.', function (err)
{
    if(err) throw err;
    console.log("written in mynewfile1.txt");
});

// Update file, write/update in mynewfile1.

fs.appendFile('mynewfile1.txt','\nthis is my new updated text.', function (err)
{
    if(err) throw err;
    console.log("\nFile is updated in mynewfile1.");
});

// Create newfile mynewfile2 for delete operation.

fs.open('mynewfile2.txt','w',function(err,file)
{
    if(err) throw err;
    console.log("mynewfile2.txt is created.")
});

//Delete previously created mynewfile2.

fs.unlink('mynewfile2.txt',function(err)
{
    if(err) throw err;
    console.log('File is deleted.');
});



