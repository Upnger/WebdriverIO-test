# WebdriverIO-test

## Why

This repo was created because one of my potential client wanted to see if i'm good enough.

## Known issues

- The language is not tested properly. It only check that text is correct to the documents language. It never make sure to load one version for each language.

## How to run

running this test suit is super easy since it uses docker container. So make sure to have docker then run the following
docker build -t mytest -f Dockerfile .

  `docker build -t webdriverio -f Dockerfile .`
  `docker run -it webdriverio`

this will run all test and show the report for the tests in the console.

if you are only writing/updating test and runing local i reccomend using since it will use the test in your local folder instead of the one in the container. you then only need to run the build step once and save som time.

`docker run -it --mount type=bind,source="$(pwd)"/test,target=/app/test webdriverio`
