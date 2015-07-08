/**
 * Node Dependencies
 * remember to have dependencies installed with
 * npm install (dependency-name) --save
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/**
 * Variables
 */

// var sassPath = "../../appPublic/css/sass/main.scss";
var sassPath = "./build/sass/main.scss";
var outputDir = "./";


/**
 * Error Handling
 * Usage:
 * .on('error', handleError);
 * Use this line where you want to log if an error occurs
 */

function handleError(err){
  console.log(err.toString());
  this.emit('end');
}


/**
 * The Sass Task
 * compiles Sass Files from Sass Folder into Css
 */

gulp.task('sass', function(){
  var config = {};
  config.sourceComments = 'map';
  // config.outputStyle = 'compressed';

  return gulp.src(sassPath)
    .on('error', handleError)
    .pipe(sass(config))
    .on('error', handleError)
    .pipe(gulp.dest(outputDir))
    .pipe(reload({stream: true}));
});


/**
 * The Serve Task
 * calls other Gulp tasks
 */

gulp.task('serve', ['sass'], function(){

  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

  gulp.watch('./build/sass/**/*.scss' , ['sass']);
  gulp.watch('./index.html').on('change', browserSync.reload);
});


/**
 * Default Gulp Task
 * This task will run when you call 'gulp' in the Command Line
 */

gulp.task('default', ['serve']);