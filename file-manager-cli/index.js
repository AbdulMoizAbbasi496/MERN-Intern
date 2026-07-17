const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];
const new_name = process.argv[4]; //for rename command

const getFilePath = (filename) => path.join(__dirname, filename);

switch (command) {
    case 'create':
        fs.writeFile(getFilePath(filename), content || '', (err) => {
            if (err) return console.error('Error creating file:', err);
            console.log(`File '${filename}' created successfully.`);
        });
        break;

    case 'read':
        fs.readFile(getFilePath(filename), 'utf8', (err, data) => {
            if (err) return console.error('Error reading file:', err);
            console.log(`Content of '${filename}':\n${data}`);
        });
        break;

    case 'append':
        fs.appendFile(getFilePath(filename), content, (err) => {
            if (err) return console.error('Error appending to file:', err);
            console.log(`Content appended to '${filename}'.`);
        });
        break;

    case 'delete':
        fs.unlink(getFilePath(filename), (err) => {
            if (err) return console.error('Error deleting file:', err);
            console.log(`File '${filename}' deleted successfully.`);
        });
        break;
    case 'rename':
        fs.rename(getFilePath(filename),path.join(__dirname, new_name), (err)=>{
            if (err) return console.error('Error renaming file:', err);
            console.log(`File '${filename}' renamed successfully. New name : ${new_name}`);
        });
        break;    
    default:
        console.log('Invalid command. Use: create, read, append, delete');
}
