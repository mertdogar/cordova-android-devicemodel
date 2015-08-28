var deviceModelExport = {};

deviceModelExport.identify = function(callback) {
    cordova.exec(function(data) {
        callback(null, data);
    }, function() {
        callback(true);
    }, 'DeviceModel', 'identify', []);
};

module.exports = deviceModelExport;
