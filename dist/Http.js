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
    function get(url, params) {

        return send('GET', url, params);
    }

    /**
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function post(url, params) {

        return send('POST', url, params);
    }

    /**
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function put(url, params) {

        return send('PUT', url, params);
    }

    /**
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function del(url, params) {

        return send('DELETE', url, params);
    }

    /**
     *
     * @param method
     * @param url
     * @param params
     * @returns {Promise}
     */
    function send(method, url, params) {

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();
            var queryString = [];
            var body = [];

            if (typeof params === 'undefined') {

                xhr.open(method, url);
            } else {

                if (method === 'GET' || method === 'DELETE') {

                    for (var param in params) {
                        queryString.push(param + '=' + params[param]);
                    }
                    queryString = queryString.join('&');
                    xhr.open(method, url + '?' + queryString);
                } else {

                    for (var param in params) {
                        body.push(param + '=' + encodeURIComponent(params[param]));
                    }
                    body = body.join('&');

                    xhr.open(method, url);
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
            }

            var onreadystatechange = function onreadystatechange() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.onreadystatechange = onreadystatechange;
            xhr.send(body);
        });
    }

    /**
     *
     * @param url
     * @param name
     * @param file
     */
    function sendFile(url, name, file) {

        return new Promise(function (resolve, reject) {

            var xhr = new XMLHttpRequest();
            var formData = new FormData();

            formData.append(name, file);

            xhr.open('POST', url);

            var onreadystatechange = function onreadystatechange() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.onreadystatechange = onreadystatechange;
            xhr.send(formData);
        });
    }

    /**
     *
     * @param url
     * @param name
     * @param file
     * @returns {*}
     */
    function file(url, name, file) {

        return sendFile(url, name, file);
    }

    return {
        "get": get,
        "post": post,
        "put": put,
        "delete": del,
        "file": file
    };
})(window);