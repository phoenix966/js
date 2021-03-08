const gulp = require('gulp'); // commonjs  подключает другой js код
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const include = require('gulp-include')

const path = {
    dev: {
        sass:"src/sass/**/*.{sass,scss}"
    },
    build: {
        css: "src/**/*.html"
    }
};

function move(){
    return gulp.src(path.build.css) // Берет файлы
        .pipe(gulp.dest('build')) // Перетаскивает в другую папку
}




function styles() {
    return gulp.src(path.dev.sass)
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(cleanCss({
            level: 2
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css'))  //Подключили плагин sass
}

function scripts() {
    return gulp.src('src/js/main.js')
        .pipe(include())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('build/js'))
}

function watcher(done) {
    gulp.watch(path.dev.sass, styles)
    gulp.watch(path.build.css, move)
    done();
}

exports.move = move; // экспортирует функцию
exports.styles = styles;
exports.watcher = watcher;
exports.scripts = scripts;