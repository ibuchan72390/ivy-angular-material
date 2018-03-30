OrigLocation=$PWD

ProjName=$1

cd src/Ivy.Angular.$ProjName

yarn install

:: Need to be ensure this command is homogenized everywhere
:: Perhaps we should homogenize everything to yarn test as well...
yarn test

cd $PWD

:: This is required for us to ensure Bamboo acknowledges it as "passing"
exit 1;