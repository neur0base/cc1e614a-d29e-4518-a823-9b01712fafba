# create ReactNative project
```
$ APP_NAME=MyApp BASE_DIR=hoge docker-compose up
```
then, you can see the following structure:

```
docker
├── rn
    ├── MyApp
        ├── hoge <- this is react-native project
```

# launch android emulator
```
$ cd MyApp/hoge
$ npx react-native run-android
```