## Website Performance Optimization portfolio project

### Changes made to Pizzeria Site
1. Make use of RequestAnimationFrame whenever possible (lines 566 & 541)
2. Made use of getElementById and getElementsByClassName instead of query selector (lines 406,407,456,481, 517,552)
3. Moved variable declarations & property lookups outside of loops whenever possible to avoid unneccesary recreation/recalculation of variables and values (lines 461,462,521,522)
4. Lowered pizza count from 200 to 24 (Line 555)


### Build the dist version of the project
You will need Node.js and Node Package Manager in order to build the distribution version of the project. Once those are properly in place, run the following in the root of the project to install the needed dependencies:

```javascript
npm install
```

Gulp was used as part of the build process. To build the dist version of the project simply run the following in the root of the project:

```javascript
gulp buildEntireProject
```

The source files of the project reside in the app folder.


### Special Thanks
The following was profoundly helpful in learning how to setup a proper build process for this project

[Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)