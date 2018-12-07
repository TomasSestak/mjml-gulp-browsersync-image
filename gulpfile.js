const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const mjml = require('gulp-mjml');
const mjmlEngine = require('mjml');
const image = require('gulp-image');

function browserSyncFire(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function images() {
  return gulp.src('img/*')
    .pipe(image({
      optipng: false,
      pngquant: ['--quality', 85],
      zopflipng: false,
      jpegRecompress: ['--quality', 85],
      mozjpeg: false,
      guetzli: false,
      gifsicle: false,
      svgo: false,
      concurrent: 1,
    },))
    .pipe(gulp.dest('img'))
}


function mjmlBuild() {
  return gulp.src('./*.mjml')
    .pipe(mjml(mjmlEngine, {
      minify: true
    }))
    .pipe(gulp.dest('./'))
}


function watchFiles() {
  gulp.watch('./*.mjml', mjmlBuild);
  gulp.watch('./*.html', browserSyncReload);
}

gulp.task('watch', gulp.parallel(watchFiles, browserSyncFire, images));
