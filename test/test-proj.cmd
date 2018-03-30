SET OrigLocation=%CD%

SET ProjName=%1

CD src/Ivy.Angular.%ProjName%

yarn install

:: Need to be ensure this command is homogenized everywhere
:: Perhaps we should homogenize everything to yarn test as well...
yarn test

CD %OrigLocation%