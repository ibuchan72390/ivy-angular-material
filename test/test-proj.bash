OrigLocation=$PWD

ProjName=$1

cd src/Ivy.Angular.$ProjName

yarn install

yarn test

cd $PWD

exit 1;