Ionic

ionic serve
ionic cap add android
ionic cap copy
ionic cap sync
ionic cap open android
ionic cap run android -l --external


To install Capacitor, refer this Capacitor's documentation for Android development
https://capacitorjs.com/docs/android

To run the android version
use 'npx cap run android', ensure that you have a connected device running with "developer options" with debug mode enabled in your Android Device. 
Refer to this instructions to have "developer options" with debug mode enabled:
https://www.digitaltrends.com/mobile/how-to-get-developer-options-on-android/#dt-heading-how-to-access-developer-options-on-your-android-phone

If you encountered this issue while running the android application, be sure to run 'ionic build' in your terminal to create the html file.
× copy android - failed!
[error] Could not find the web assets directory: .\dist.
        Please create it and make sure it has an index.html file. You can change the path of this directory in
        capacitor.config.ts (webDir option). You may need to compile the web assets for your app (typically npm run
        build). More info: https://capacitorjs.com/docs/basics/workflow#sync-your-project

ionic build

Capacitor

npm i @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
ionic capacitor add android
ionic capacitor add ios
