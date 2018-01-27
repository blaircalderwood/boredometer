import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import browserify from 'gulp-browserify';

const dir = {
    src: './src',
    dist: './static'
};

gulp.task('styles', () => {
    gulp.src(`${dir.src}/scss/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${dir.dist}/css/`));
});

gulp.task('scripts', () => {
    gulp.src(`${dir.src}/js/main.js`)
        .pipe(browserify({
            transform: ['babelify'],
            debug: true
        }))
        .pipe(gulp.dest(`${dir.dist}/js/`));
});

gulp.task('default', ['styles', 'scripts'], () => {
    gulp.watch(`${dir.src}/scss/*.scss`,['styles']);
    gulp.watch(`${dir.src}/js/*.js`,['scripts']);
});
