let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');


gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
});

gulp.task('default', () => {
    return gulp.watch('scss/*.scss', gulp.series('sass'))
})