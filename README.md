Android DeviceModel Plugin
====================
The purpose of the plugin is to provide a consumer friendly device model of Android devices.
I used [jaredrummler](https://gist.github.com/jaredrummler/16ed4f1c14189375131d)'s gist to crete the plugin.

Usage:
====================
Using the plugin is so simple. After installation, you will have an object called `devicemodel` in the global context.
In order to get the device model, use the `identify` method as below:


	devicemodel.identify(function(err, data) {
		if (err) return console.log('Opps, error');
		console.log(data.model);
	});

Installation
---
In order to install the plugin you can simply use the following Cordova CLI command:

	cordova plugin add https://github.com/mertdogar/cordova-android-devicemodel


Important Note
---
The plugin only works for Android platform. In iOS, device model can easy be obtained using [this](https://github.com/apache/cordova-plugin-device) plugin.

Licence
---
It is Apache License, Version 2.0. Feel free to fork the project and send pull requests if you have any.

