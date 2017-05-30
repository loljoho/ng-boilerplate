const path = require('path');

const ghPages = require('gulp-gh-pages');

const conf = require('../conf/gulp.conf');

gulp.task('deploy', deploy);

function deploy() {
  var ghPagesOptions = {
    cacheDir: '.deploy',
    message: 'Deploy to gh-pages [timestamp]'
  };

  return gulp.src(
      path.join(conf.paths.dist, '/**/*')
    )
    .pipe(ghPages(ghPagesOptions));
}
