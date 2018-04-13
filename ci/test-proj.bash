OrigLocation=$PWD

ProjName=$1

cd src/Ivy.Angular.$ProjName

yarn install

yarn test

cd $OrigLocation

chmod 777 ./*

exit 0;