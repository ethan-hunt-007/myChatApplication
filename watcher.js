var watch = require('glob-watcher');
var nodeCLI = require('shelljs-nodecli');

var watcher = watch(['./*.*','./dir1/*']);

watcher.on('change', function(path,stat) {
	nodeCLI('/Users/JayantJaiswal/Desktop/Work/mine_testing/node_modules/ttab/bin/ttab');
	//nodeCLI.exec('git','add',path);
	//nodeCLI.exec('git','commit','-m','"' + path  + 'updated"');
	//nodeCLI.exec('git','push','origin','master');
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
