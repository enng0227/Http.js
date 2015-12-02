
var Http = function (window) {

    var XMLHttpRequest = window.XMLHttpRequest;

    /**
     * Http GET
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function get(url, params = undefined) {

        return new Promise(function (resolve, reject) {

            let xhr = new XMLHttpRequest();

            if (params !== undefined) {

                let queryString = [];
                for (var param in params) {
                    queryString.push(param + '=' + params[param]);
                }
                queryString = queryString.join('&');
                xhr.open('GET', url + '?' + queryString);

            } else {

                xhr.open('GET', url);

            }


            let onreadystatechange = function () {
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

            let xhr = new XMLHttpRequest();
            let formData = new FormData();

            for (var param in params) {
                formData.append(param, params[param]);
            }

            let onreadystatechange = function () {
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

            let xhr = new XMLHttpRequest();

            let formData = new FormData();

            for (var param in params) {
                formData.append(param, params[param]);
            }

            let onreadystatechange = function () {
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
    function del(url, params = undefined) {

        return new Promise(function (resolve, reject) {

            let xhr = new XMLHttpRequest();

            if (params !== undefined) {

                let queryString = [];
                for (var param in params) {
                    queryString.push(param + '=' + params[param]);
                }
                queryString = queryString.join('&');
                xhr.open('DELETE', url + '?' + queryString);

            } else {

                xhr.open('DELETE', url);

            }


            let onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    resolve(xhr);
                }
            };

            xhr.onreadystatechange = onreadystatechange;
            xhr.send();

        });
    }

    return {
        "get":get,
        "post": post,
        "put":put,
        "delete": del
    };

} (window);
