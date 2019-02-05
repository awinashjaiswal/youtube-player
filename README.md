# Youtube Player

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve player` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Clone the directory in your local pc and open the command promt in the app folder and follow the steps mention below.

1.    Type `npm install` which will load all the modules for angular.
2.    Type `ng build youtube-player`  which will build the module in dist folder.
3.    Type `npm install dist/youtube-player` which will install the module for use in app
4.    Type `ng serve player -o` to serve the application slideplayer which is present inside the projects directory
5.    To make any changes to slider Module move to projects/youtube-player/lib/ folder and to rebuild it follow step2 and serve the player again to see the changes.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.



## Use the code in your application

1. Add the code 
```html
<ng6-youtube-player 
[width]="'100%'"
[url]="'link from youtube embed code'"
[height]="'200px'"
></ng6-youtube-player>

```
### Note
 
You Can change the value of width and height  and url link as per your requirement

// -------------------------- enjoy conding ----------------------//
