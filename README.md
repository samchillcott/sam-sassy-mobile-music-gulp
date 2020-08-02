# Sassy Mobile Music Gulp

- Cloned repo (via jh1992jh) adding my own Gulp.js build system.
- Set as challenge by mentor - original spec below.
- Not built using a follow along tutorial.

## Tech Used

- JavaScript.
- Sass.
- Gulp.js

## Features

- I added a build system to the original cloned repo:
  - Compile SASS files to CSS, then minify the CSS.
  - Minify and uglify JavaScript files.
  - Move remaining required files to build directory.

## What I learned

- Great practice with: 
  - Cloning a repo.
  - Working with (installing and importing) node modules.
  - Using official docs and what to do when they are insufficient.
- Understand project structure way more now:
  - Diff between source and dist/build.
  - Static files.
- Understand diff between processes :
  - Minify.
  - Uglify.
  - Concat .
- Challenge seemed simple on the surface and could have copied a vid but learned a looooot of the peripheral stuff.
- Following anything other than the official docs can lead you to outdated tech and best practices so you then have to install newer ones and refactor the code = some experience with migration. 
- To check dates on SO answers.
- Should put me in good stead to learn webpack
- How to sort my old projects that struggle to be hosted (because the folder structure is off somehow).
- Feel more comfortable knowing what each part of my project folders do and how I can manage them. As someone with OCD, this makes me feel better/less on edge.
- Enjoying spending hours tweaking to get things working.

## Challenges

- Limited official docs - only took me so far.
- Using Stack Overflow answers that lead me to outdated/deprecated packages and methods.
- Understanding npm and packages - and which one to use for which job.
- Understanding the project structure and code written by someone else (the cloned repo). I could get what it was doing but took a while to figure how it all interacted.

## Improvements

- Checking the original repo worked would have helped me verify the JS conversion worked! The aim of this challenge was to learn gulp and I think I have done the basics now so moving on.
- Do a similar challenge but in webpack so I could have covered tasks and bundling.

## Watch Me Build This

- #100daysofcode 97-99.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)

## Original Spec

Create a crude web app - some simple HTML, SASS, JavaScript and a couple of images. Just bare minimum to have something to work with. For now, avoid using React.

Then, create two gulp tasks - build and clear. All steps should be executed with Gulp pipeline.

'build' task:

1. Create a ./build directory.
2. Ensure all following files are written to that build directory. 
3. Compile SASS files to CSS, then minify the CSS.
4. Minify and uglify JavaScript files.
5. Copy remaining required files to the ./build directory, such as HTML, images, etc.

(Test that the website works as expected within the build directory and that all functionalities are intact.)

'clear' task:

1. Delete all files in the ./build directory

Try to maintain a correct folder structure within that build dir. So CSS, images, js, etc. - all should land in some appropriate subdirectory of 'build' folder.

