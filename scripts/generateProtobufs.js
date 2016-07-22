var clone = require('git-clone');

clone('git@github.com:AeonLucid/POGOProtos.git', 'build', function() {
    var spawn = require('child_process').spawn;

    var proc = spawn('node_modules/.bin/pbjs', [
        'build/**/*.proto',
        '--target', 'commonjs',
        '--using', 'convertFieldsToCamelCase',
        '--path', 'build/src',
        '--exports', 'POGOProtos',
        '--out', 'index.js'
    ], {
        stdio: 'inherit'
    });

    proc.on('error', function(error) {
        console.log(error);
    });
});
