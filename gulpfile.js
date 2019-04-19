// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
  var stream = nodemon({
    script: './server.js',
    ext: 'html js',
    ignore: ['src/*', 'dist/*', 'e2e/*'],
    tasks: []
  })

  stream
    .on('restart', function () {
      console.log('restarted!')
    })
    .on('crash', function () {
      console.error('Application has crashed!\n')
      stream.emit('restart', 10)  // restart the server in 10 seconds
    })
})
