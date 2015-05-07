# Powered By Epicollect+ - Mobile Client
Epicollect+ Mobile Client HTML5 modified to be a framework for building a branded version with its own graphics and logos and working with a single specified project (loading the xml locally from `www/xml/{project name}.xml`). 
The app can have whatever name, just the package name needs to be unique for distribution on the Android Play Store or iOS App Store. The app will neeed to be signed with a proper valid certificate for distribution
The project to be used can be create on <a href="http://plus.epicollect.net/">Epicollect+</a> server and downloaded locally

## Dependencies
- Cordova CLI 5.0 resolving to Cordova 3.8 on iOS and Cordova 4.0.0 on Android
- jQuery Mobile 1.3.2
 
## Platforms supported
 - Android 4.1+ (Jelly Bean, released in July 2012)
 - iOS 7+ (Released in September 2013)

## Installation 

#### 
Clone repo (png resources were added manually using `git add res/ios/*.png -f`)

####
Add Android using Cordova CLI `cordova platform add android` adn iOS `cordova platform add ios`

####
Plugins dependencies are added automatically via Cordova hooks when adding Android (see `hooks` folder)

####
Copy `res/android/` files to proper folder under `platform/android`

####
Run `cordova prepare` to copy file per each platform

####
Open project in Android Studio (Android) or Xcode (iOS)

####
Fix deployment info, Java import ect. if needed

####
Icons and graphics are copied automatically when running `cordova prepare`, so just replace the existing one with the one you want to use.
In `res/graphics/sources` the are the source files to create the icons and logo  with correct size.

####
Modify config.xml to add the custom app details like name, package name etc...

####
Run on device

####
Look for log errors about missing plugins and fix (I am looking into this...)

