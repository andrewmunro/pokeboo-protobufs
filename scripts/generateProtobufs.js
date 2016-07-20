var clone = require('git-clone');

var walkSync = function(dir, filter, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filter, filelist);
        }
        else if(!filter || file.indexOf(filter) != -1) {
            filelist.push('./' + dir + '/' + file);
        }
    });
    return filelist;
};

console.log('Cloning POGOProtos ...');
clone('git@github.com:AeonLucid/POGOProtos.git', 'build', function() {
    var fs = fs || require('fs');
    var exec = require('child_process').exec;

    var protos = walkSync('build', '.proto');

    var cmd = 'pbjs ' + protos.join(' ') + ' --source proto --target commonjs --using convertFieldsToCamelCase --path build/src --exports POGOProtos --out index.js';

    exec(cmd, function(error, stdout, stderr) {
        if (error) {
            console.error('exec error: ' + error);
            return;
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    })
});
