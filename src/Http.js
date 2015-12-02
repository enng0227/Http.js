
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

    return {
        "get":get,
        "post": post
    };

} (window);
