## Website Performance Optimization portfolio project

### Changes made to Pizzeria Site
1. Make use of RequestAnimationFrame whenever possible
2. DRY principle: removed duplicate instances of code and recalculations where not neccesary.
3. Moved variable declarations outside of loops whenever possible to avoid unneccesary recreation of variables.
4. Modified calculation of pizza sizes to only calculate new size once and apply it to all pizzas since they are all of the same size when the slider changes. Original code was calculating new sizes for each pizza individually.


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