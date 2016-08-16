# Powered By Epicollect+ - Mobile Client
Epicollect+ Mobile Client HTML5 modified to be a framework for building a branded version with its own graphics and logos and working with a single specified project (loading the xml locally from `www/xml/{project name}.xml`).

The app can have whatever name, just the package name needs to be unique for distribution on the Android Play Store or iOS App Store. 

The app will neeed to be signed with a proper valid certificate for distribution

The project to be used can be create on <a href="http://plus.epicollect.net/">Epicollect+</a> server and downloaded locally

## Dependencies
- Tested with Cordova 6.1.1, resolving to Android 5.1.1 and iOS 4.1.0
- jQuery Mobile 1.3.2
 
## Platforms supported
 - Android 4.4+ (Kitkat)
 - iOS 8+ 

## Installation 

#### 
Clone repo (png resources were added manually using `git add res/ios/*.png -f`)

####
Add Android using Cordova CLI `cordova platform add android` adn iOS `cordova platform add ios` 

####
Plugins dependencies are added automatically via Cordova hooks when adding Android (see `hooks` folder)

####
Run `cordova prepare` to copy file per each platform

####
Icons and graphics are copied automatically when running `cordova prepare`, so just replace the existing one with the one you want to use.
In `res/graphics/sources` the are the source files to create the icons and logo  with correct size.

####
Modify config.xml to add the custom app details like name, package name etc...
```
<?xml version='1.0' encoding='utf-8'?>
<widget xmlns:cdv="http://cordova.apache.org/ns/1.0"
        id="net.application.my" //change this
        version="1.0.0"
        xmlns="http://www.w3.org/ns/widgets">
    <name>
        App Name //change this
    </name>
    <description>
        App Description //change this
    </description>
    ...
    ...

```

###
Replace the content of `/www/xml/project.xml` with the xml of the project you created on plus.epicollect.net

####
Run on device `cordova run android --device` (device attached via usb and usb debugging on)

####
Look for log errors about missing plugins and fix (I am looking into this...)

