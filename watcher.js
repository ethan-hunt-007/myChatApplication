var watch = require('glob-watcher');

var watcher = watch(['./*.js']);

watcher.on('change', function(path,stat) {
	console.log("File change at path : " + path);
});

watcher.on('add', function(path,stat) {
	console.log("Other files added... ");
});



/*var chokidar = require('chokidar');
var watcher = chokidar.watch(__dirname, {ignored: /^\./, persistent: true});

watcher
.on('add', function(path) {console.log('File', path, 'has been added');})
.on('change', function(path) {console.log('File', path, 'has been changed');})
.on('unlink', function(path) {console.log('File', path, 'has been removed');})
.on('error', function(error) {console.error('Error happened', error);})
*/
