A mini http library for browser.

```javascript

Http.get(url, {"key":"value"}).then(function (response) {
    console.log(response.responseText);
});
```

support: `GET`, `POST`, `PUT`, `DELETE`
