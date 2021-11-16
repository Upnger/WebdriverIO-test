# WebdriverIO-test

## Why

This repo was created because one of my potential client wanted to see if I’m good enough.

## Known issues

- The language is not tested properly. It only checks that text is correct to the document language. It never makes sure to load one version for each language.

## How to run

running this test suit is super easy since it uses docker container. So make sure to have docker then run the following

  `docker build -t webdriverio -f Dockerfile .`
  `docker run -it webdriverio`

this will run all test and show the report for the tests in the console.

if you are only writing/updating test and running local I recommend using since it will use the test in your local folder instead of the one in the container. you then only need to run the build step once and save some time.

`docker run -it --mount type=bind,source="$(pwd)"/test,target=/app/test webdriverio`
