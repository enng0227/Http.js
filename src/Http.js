
var Http = function (window) {

    var XMLHttpRequest = window.XMLHttpRequest;

    /**
     * Http GET
     *
     * @param url
     * @param params
     * @returns {Promise}
     */
    function get(url, params) {

        return new Promise(function (resolve, reject) {

            let xhr = new XMLHttpRequest();
            let queryString = [];

            for (var param in params) {
                queryString.push(param + '=' + params[param]);
            }

            queryString = queryString.join('&');

            let onreadstatechange = function () {
                if (xhr.readyState !== XMLHttpRequest.DONE) {
                    return;
                }

                if (xhr.status !== 200) {
                    return;
                }

                resolve(xhr.responseText);
            };

            xhr.open('GET', url + '?' + queryString);
            xhr.onreadystatechange = onreadstatechange;
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

            let onreadstatechange = function () {
                if (xhr.readyState !== XMLHttpRequest.DONE) {
                    return;
                }

                if (xhr.status !== 200) {
                    return;
                }

                resolve(xhr.responseText);
            };

            xhr.open('POST', url);
            xhr.onreadystatechange = onreadstatechange;
            xhr.send(formData);
        });

    }

    return {
        "get":get,
        "post": post
    };

} (window);