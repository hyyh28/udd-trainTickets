var gulp = require('gulp'); 

var spritesmith = require('gulp.spritesmith'); 

var minimist = require('minimist');

var knownOptions = {
  string: 'env',
  //default: { envv: process.env.NODE_ENV || 'production' }
};
var TASK_PATH = minimist(process.argv.slice(2), knownOptions).env;
console.log(TASK_PATH);
//var TASK_PATH = "index"; 

//css拼图任务
gulp.task('integral_sprite', function () {
  var spriteData = gulp.src('train/static/img/'+TASK_PATH+'/sprite/*').pipe(spritesmith({
      imgName: 'sprite'+TASK_PATH+'.png',
      cssName: 'sprite'+TASK_PATH+'.css'
  }));
  return spriteData.pipe(gulp.dest('train/static/css/sprite'));
});



//gulp integral_sprite --env index