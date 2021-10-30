#Teewt

Teewt is built using react native cli with typescript.

You must install required sdk, development environment in order to run the project.
If you have not please go through the react-native docs to setup the development environment.
https://reactnative.dev/docs/environment-setup

To run Teewt locally in android first
1. Go to your React-native Project(Teewt) -> Android
2. Create a file local.properties
3. Open the file
4. Paste your Android SDK path like below:
    in Windows sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
    in macOS sdk.dir = /Users/USERNAME/Library/Android/sdk
    in linux sdk.dir = /home/USERNAME/Android/Sdk
5. Replace USERNAME with your user name

Now we have to install required packages
To do so
in project directory terminal, type
i)  ``yarn``
    or
    ``npm install``
ii) Once the packages are installed. You can start the server
    type the given code in terminal
    ``yarn start``
    or 
    ``npm start``

iii) Once the server has started, you can run the project in your mobile device(or simulator). Open another terminal on the project directory and type the given code in terminal

to run in android:
``npx react-native run-android``

to run in ios:
``npx react-native run-ios``

