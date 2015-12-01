var gulp = require('gulp');
var babel = require("gulp-babel");
var jshint = require('gulp-jshint');

gulp.task('default', function () {

    return gulp.src("src/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('lint', function() {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {

    var watcher = gulp.watch('src/*.js', ['default', 'lint']);

    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});
