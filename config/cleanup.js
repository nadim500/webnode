// Object to capture process exits and call app specific cleanup function

function noOp() { };

function cleanup(callback) {
  let self = this;
  // attach user callback to the process event emitter
  // if no callback, it will still exit gracefully on Ctrl-C
  callback = callback || noOp;
  process.on('cleanup', callback);

  // do app specific cleaning before exiting
  process.on('exit', function () {
    process.emit('cleanup');
  });

  // catch ctrl+c event and exit normally
  process.on('SIGINT', function () {
    console.log('Ctrl-C...');
    self.server.close();
    process.exit(2);
  });

  //catch uncaught exceptions, trace, then exit normally
  process.on('uncaughtException', function (e) {
    console.log('Uncaught Exception...');
    console.log(e.stack);
    self.server.close();
    process.exit(99);
  });

  // catch kill event and exit normally
  process.on('SIGTERM', function () {
    console.log('Ctrl-C...');
    self.server.close();
    process.exit();
  });
};

module.exports = { cleanup: cleanup };
