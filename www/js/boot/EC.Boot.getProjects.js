/*jslint vars: true , nomen: true devel: true, plusplus: true*/
/*global $, jQuery, cordova, device, onDeviceReady*/
var EC = window.EC || {};
EC.Boot = EC.Boot || {};

EC.Boot.getProjects = function () {
    'use strict';

    var prefs = window.plugins.appPreferences;

    /** we check if the db is ready on the device already searching for a flag in user preferences,
     *  which is file based and native to the platform via the plugin appPreferences
     */
    function _isDBSet() {

        var deferred = new $.Deferred();

        function ok(value) {

            console.log('value is: ' + value);
            console.log(typeof value);
            console.log(value);

            if (window.device.platform === EC.Const.IOS) {

                if (typeof value === 'object') {
                    deferred.resolve(false);
                }
                else {
                    deferred.resolve(true);
                }
            }
            else {
                //database is set
                deferred.resolve(true);
            }
        }

        function fail(error) {
            console.log(error);
            deferred.resolve(false);
        }

        // fetch value by key (value will be delivered through "ok" callback)
        prefs.fetch(ok, fail, 'is_db_set');

        return deferred.promise();
    }

//check if database is set already
    $.when(_isDBSet()).then(function (response) {

        if (response) {
            //if db already set, just list projects
            EC.Project.getList();
        }
        else {

            EC.Notification.showProgressDialog();

            //Initialise database BEFORE creating project
            $.when(EC.DBAdapter.init()).then(function () {

                //generate project from local project xml ('www/xml/<project_name>.xml')
                $.when(EC.Boot.createSingleProject()).then(function () {

                    function success(value) {
                        console.log('project created');
                    }

                    function error(the_error) {
                        console.log(the_error);
                    }

                    //database is set, remember it and list project
                    prefs.store(success, error, 'is_db_set', '1');
                    EC.Notification.hideProgressDialog();
                    EC.Project.getList();
                });
            });
        }
    });
};
