const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
function appHTML(){
    return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWithespace:false}))
    .pipe(gulp.dest('build'))
}
function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
            .pipe(sass().on('error',sass.logError))
            .pipe(uglifycss({'uglyComments':false}))
            .pipe(concat('index.min.css'))
            .pipe(gulp.dest('build/assets/css'))
}
function appJS(){
    return gulp.src('src/assets/js/**/*.js')
            .pipe(babel({presets:['ENV']}))
            .pipe(uglify())
            .pipe(concat('app.min.js'))
            .pipe(gulp.dest('build/assets/js'))
}
function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*')
            .pipe(gulp.dest('build/assets/img'))
}
gulp.task('appHTML',appHTML)

module.exports = {
    appHTML,
    appCSS,
    appIMG,
    appJS
}

