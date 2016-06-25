var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat');


gulp.task('js', function () {
	return gulp.src('./frontend/*.js')
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest("./"));
});

gulp.task("watch", function () {
	gulp.watch("./frontend/**/*.js", ["js"]);
});

gulp.task("default", ["js"]);


// var gulp = 				require("gulp");
// 		less = 				require("gulp-less"),
// 		sass =				require("gulp-sass"),
// 		concat = 			require("gulp-concat"),
// 		path = 				require("path"),
// 		watch =				require("gulp-watch")
// 		plumber =			require("gulp-plumber"),
// 		spritesmith = require("gulp.spritesmith"),
// 		csso = 				require("gulp-csso"),
// 		buffer = 			require("vinyl-buffer"),
// 		imagemin = 		require("gulp-imagemin"),
// 		merge = 			require("merge-stream"),
// 		replace = 		require("gulp-replace"),
// 		del = 				require("del"),
// 		vinylPaths = 	require("vinyl-paths"),
// 		runSequence = require("run-sequence"),
// 		uglify = 			require("gulp-uglify")
//
// gulp.task("less", function () {
//   return gulp.src("./src/styles/main.less")
// 		.pipe(plumber())
//     .pipe(less({
//       paths: [ path.join(__dirname, "src", "styles", "includes") ]
//     }))
// 		.pipe(csso())
//     .pipe(gulp.dest("./public/css"));
// });
//
// gulp.task("sass", function () {
// 	return gulp.src("./src/styles/bootstrap.scss")
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('./public/css/'))
// });
//
// gulp.task("sprites", function () {
//   var spriteData = gulp.src("./src/assets/images/sprites/*.png").pipe(spritesmith({
//     imgName: "/public/assets/images/sprites.png",
//     cssName: "sprites.css",
// 		padding: 100
//   }));
//
// 	// Pipe image stream through image optimizer and onto disk
//   var imgStream = spriteData.img
//     .pipe(buffer())
//     .pipe(imagemin())
//     .pipe(gulp.dest("./public/assets/images/sprites"));
//
// 	// Pipe CSS stream through CSS optimizer and onto disk
//   var cssStream = spriteData.css
// 		.pipe(replace("/public/assets", "/assets"))
//     .pipe(csso())
//     .pipe(gulp.dest("./public/css"));
//
// 	// Return a merged stream to handle both `end` events
//   return merge(imgStream, cssStream);
// });
//
// gulp.task("css", ["less", "sass", "sprites"], function() {
//   return gulp.src("./public/css/*.css")
//     .pipe(concat("main.css"))
//     .pipe(gulp.dest("./public/css/"));
// });
//
// gulp.task('js', function () {
// 	return gulp.src('./src/js/**/*.js')
// 		.pipe(concat('bundle.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest("./public/js/"));
// });
//
// gulp.task("pre:clean", function () {
// 	return del([
// 		"./public/assets",
// 		"./public/css"
// 	])
// });
//
// gulp.task("post:clean", function () {
// 	return del([
// 		"./public/css/bootstrap.css",
// 		"./public/css/sprites.css"
// 	]);
// });
//
// gulp.task("copy:assets", function () {
// 		gulp.src("./src/assets/fonts/**/*")
// 			.pipe(gulp.dest("./public/assets/fonts"));
//
// 		var filesToCopy = [
// 			"./src/assets/images/meta/**/*",
// 			"./src/assets/images/logos/**/*"
// 		]
//
// 		gulp.src(filesToCopy, { base: './src/assets/' })
// 			.pipe(gulp.dest("public/assets"))
// });
//
// gulp.task("watch", ["dev"], function () {
// 	gulp.watch("./src/styles/**/*.less", ["css"]);
// 	gulp.watch("./src/js/*.js", ["js"]);
// });
//
// gulp.task("build", function (callback) {
// 	runSequence(
// 		"pre:clean",
// 		["css", "sass", "sprites", "js"],
// 		"copy:assets",
// 		"post:clean",
// 		callback
// 	);
// });
//
// gulp.task("dev", function (callback) {
// 	runSequence(
// 		"pre:clean",
// 		["css", "sass", "sprites", "js"],
// 		"copy:assets",
// 		callback
// 	)
// });
//
// gulp.task("default", ["build"]);
