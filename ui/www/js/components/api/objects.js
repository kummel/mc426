(function (angular) {

    'use strict';

    angular
        .module('app.components.api.objects', [])
        //.service('doorApi', ['$http', DoorApi])
        .service('doorApi', ['$q', DoorApiMockup])
        //.service('lightsApi', ['$http', LightsApi])
        .service('lightsApi', ['$q', LightsApiMockup]);

    function DoorApiMockup($q) {

        var status = {};

        this.getStatus = function (id) {
            var deferred = $q.defer();
            deferred.resolve(!!status[id]);
            return deferred.promise;
        };

        this.toggle = function (id) {
            var that = this;
            return this.getStatus(id).then(function (status) {
                if (status) {
                    return that.open(id);
                }

                return that.close(id);
            });
        };

        this.open = function (id) {
            status[id] = false;
            return this.getStatus(id);
        };

        this.close = function (id) {
            status[id] = true;
            return this.getStatus(id);
        };
    }

    function LightsApiMockup($q) {

        var status = {};

        this.getStatus = function (id) {
            var deferred = $q.defer();
            deferred.resolve(!!status[id]);
            return deferred.promise;
        };

        this.toggle = function (id) {
            var that = this;
            return this.getStatus(id).then(function (status) {
                if (status) {
                    return that.open(id);
                }

                return that.close(id);
            });
        };

        this.open = function (id) {
            status[id] = false;
            return this.getStatus(id);
        };

        this.close = function (id) {
            status[id] = true;
            return this.getStatus(id);
        };
    }

})(window.angular);