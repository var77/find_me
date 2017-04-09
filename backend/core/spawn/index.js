const path = require('path');
const spawn = require('child_process').spawn;

module.exports = number => (new Promise((resolve, reject) => {
    let childArgs = [
        path.join(__dirname, '../casper/fb.js'),
        number
    ];

    let child = spawn('casperjs', childArgs);
    // console.log(child);
    child.stdout.on('data', function (data) {
        resolve(data.toString());
    });

    child.stderr.on('data', function (data) {
        console.error(data);
        reject(data);
    });
}));

