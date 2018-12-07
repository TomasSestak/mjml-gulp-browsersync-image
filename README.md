# mjml-gulp-browsersync-image

Mjml complete starter pack (gulp, browsersync, image)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. [NodeJS](http://nodejs.org) - use the installer.

### Installing

Run npm install in mjml folder

### Usage

Create *.mjml file and run gulp watch, on change *.html file will be generated
To optimize images run gulp watch, change optimalization level in gulpfile.js
Browsersync will look for index.html, if your template has different name, just add /different_file.html after generated URL

```
localhost:3000 for index.mjml
localhost:3000/different_file.html for different_file.mjml
```

Read about and learn [MJML](https://mjml.io/documentation/)

### Notes

When using media queries, move them in the first style tag in generated .html file due gmail using only first media declaration.
Custom fonts are not supported in every client (looking at you gmail and oulook), so I would recommend using only fonts that are similar to system fonts fallbacks.
