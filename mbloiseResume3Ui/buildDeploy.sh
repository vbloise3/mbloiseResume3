#!/usr/bin/env bash
#/bin/bash
#build the site
ng build --prod --aot
#upload files
aws s3 cp ./dist/mbloiseResume3Ui s3://mbloiseResume3Ui --recursive --acl public-read
