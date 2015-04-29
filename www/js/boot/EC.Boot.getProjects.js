/*jslint vars: true , nomen: true devel: true, plusplus: true*/
/*global $, jQuery, cordova, device, onDeviceReady*/
var EC = window.EC || {};
EC.Boot = EC.Boot || {};

EC.Boot.getProjects = function () {
    'use strict';

    var prefs = window.plugins.appPreferences;

    function _isProjectLoaded() {

        var deferred = new $.Deferred();

        function ok(value) {
            deferred.resolve(true);
        }

        function fail(error) {
            console.log(error);
            deferred.resolve(false);
        }

        // fetch value by key (value will be delivered through "ok" callback)
        prefs.fetch(ok, fail, 'is_db_set');

        return deferred.promise();
    }

    //check if local project is loaded already
    $.when(_isProjectLoaded()).then(function (response) {

        if (response) {
            //if project already set, just list projects
            EC.Project.getList();
        }
        else {

            EC.Notification.showProgressDialog();

            //Initialise database BEFORE creating project
            $.when(EC.DBAdapter.init()).then(function () {

                //generate project from local project xml
                $.when(EC.Boot.createSingleProject()).then(function () {

                    function success(value) {
                        console.log('project created');
                    }

                    function error(the_error) {
                        console.log(the_error);
                    }

                    //database is set
                    prefs.store(success, error, 'is_db_set', '1');
                    EC.Notification.hideProgressDialog();
                    EC.Project.getList();
                });
            });
        }
    });
};
