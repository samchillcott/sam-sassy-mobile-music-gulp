var gulp = require("gulp");
const { series, parallel } = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var terser = require("gulp-terser");
var clean = require("gulp-clean");

gulp.task("clean", function () {
	return gulp.src("dist", { read: false }).pipe(clean());
});

gulp.task("sass", function () {
	return gulp
		.src("src/css/*.scss")
		.pipe(sass()) // Using gulp-sass
		.pipe(cssnano()) // using css nano
		.pipe(gulp.dest("dist/css"));
});

gulp.task("js", function () {
	return gulp
		.src("src/scripts/*.js")
		.pipe(concat("all.js")) // Using gulp-concat into 1 new file all.js
		.pipe(terser()) //  uglify
		.pipe(gulp.dest("dist/scripts"));
});

gulp.task("copy", async function () {
	return gulp.src("src/static/**/*", { base: "src" }).pipe(gulp.dest("dist"));
});

exports.default = series("clean", parallel("sass", "js", "copy"));
