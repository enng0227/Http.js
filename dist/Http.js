'use strict';

var Http = (function (window) {

    var XMLHttpRequest = window.XMLHttpRequest;

    /**
     * Http GET
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function get(url) {
        var params = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();

            if (params !== undefined) {

                var queryString = [];
                for (var param in params) {
                    queryString.push(param + '=' + params[param]);
                }
                queryString = queryString.join('&');
                xhr.open('GET', url + '?' + queryString);
            } else {

                xhr.open('GET', url);
            }

            var onreadystatechange = function onreadystatechange() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.onreadystatechange = onreadystatechange;
            xhr.send();
        });
    }

    /**
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function post(url, params) {

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            for (var param in params) {
                formData.append(param, params[param]);
            }

            var onreadystatechange = function onreadystatechange() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.open('POST', url);
            xhr.onreadystatechange = onreadystatechange;
            xhr.send(formData);
        });
    }

    /**
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function put(url, params) {

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();

            var formData = new FormData();

            for (var param in params) {
                formData.append(param, params[param]);
            }

            var onreadystatechange = function onreadystatechange() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.open('PUT', url);
            xhr.onreadystatechange = onreadystatechange;
            xhr.send(formData);
        });
    }

    /**
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function del(url) {
        var params = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();

            if (params !== undefined) {

                var queryString = [];
                for (var param in params) {
                    queryString.push(param + '=' + params[param]);
                }
                queryString = queryString.join('&');
                xhr.open('DELETE', url + '?' + queryString);
            } else {

                xhr.open('DELETE', url);
            }

            var onreadystatechange = function onreadystatechange() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.onreadystatechange = onreadystatechange;
            xhr.send();
        });
    }

    return {
        "get": get,
        "post": post,
        "put": put,
        "delete": del
    };
})(window);