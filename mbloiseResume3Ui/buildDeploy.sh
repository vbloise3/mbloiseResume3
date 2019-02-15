#!/usr/bin/env bash
#/bin/bash
#build the chalice-javascript-jdk
#cd ~/mbloiseResume3/mbloiseResume3Ui/src/chalice-javascript-sdk/
#rm -r *
#cd ~/mbloiseResume3/mbloiseResume3Ui/src/
#rmdir chalice-javascript-sdk
#cd ~/mbloiseResume3/
#chalice generate-sdk ./mbloiseResume3Ui/src
#build the site
cd ~/mbloiseResume3/mbloiseResume3Ui/
#build the site
ng build --prod --aot
#upload files
aws s3 cp ./dist/mbloiseResume3Ui s3://marinbloise.com --recursive --acl public-read
aws s3 cp ./dist/mbloiseResume3Ui s3://www.marinbloise.com --recursive --acl public-read
