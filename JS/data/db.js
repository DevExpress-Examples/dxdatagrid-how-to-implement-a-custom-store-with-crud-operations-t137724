(function () {
    var url = "http://localhost:59611/Categories";

    Application1.db = DevExpress.data.AspNet.createStore({
        key: "CategoryID",
        loadUrl: url,
        insertUrl: url,
        updateUrl: url,
        deleteUrl: url
    });
})()