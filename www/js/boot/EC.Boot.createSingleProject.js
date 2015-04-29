/*jslint vars: true , nomen: true devel: true, plusplus: true*/
/*global $, jQuery, cordova, device, onDeviceReady*/
var EC = window.EC || {};
EC.Boot = EC.Boot || {};

EC.Boot.createSingleProject = function () {
    'use strict';

    var deferred = new $.Deferred();
    //todo path should be the app name (lowercase) we get at run time
    var project_xml_URL = 'xml/bestpint.xml';

    //todo get file in www/xml folder, easier would be to name the file with the app name, and show error and exit if the file is not found
    $.when(EC.Project.request(project_xml_URL)).then(function () {
        // Commit project to database
        $.when(EC.Structure.commitAll()).then(function () {
            deferred.resolve();
        });
    }, function () {
        //request failed
        //TODO
        deferred.reject();
        console.log('request failed');
    });
    return deferred.promise();
}
