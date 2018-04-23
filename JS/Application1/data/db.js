(function () {
    var dbImpl = {
        key: 'CategoryID',
        url: 'http://localhost:59611/Categories',
        _sendRequest: function (type, params) {
            var deferred = new $.Deferred();
            var requestSettings = {
                url: $.trim(dbImpl.url),
                type: type,
                dataType: 'json',
                success: function (data) {
                    deferred.resolve(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    deferred.reject();
                }
            };
            if (params) {
                if (type == 'DELETE') {
                    if (requestSettings.url[requestSettings.url.length - 1] != '/')
                        requestSettings.url += '/';
                    requestSettings.url += params.toString();
                }
                else
                    requestSettings.data = params;
            }
            $.ajax(requestSettings);
            return deferred;
        },
        load: function (loadOptions) {
            var params = {
                filterOptions: JSON.stringify(loadOptions.filter),   //Getting filter options
                sortOptions: loadOptions.sort ? JSON.stringify(loadOptions.sort) : null,  //Getting sort options

                //skip and take are used for paging
                skip: loadOptions.skip, //A number of records that should be skipped 
                take: loadOptions.take //A number of records that should be taken
            };
            return dbImpl._sendRequest('GET', params);
        },
        totalCount: function (loadOptions) {
            var params = {
                filterOptions: JSON.stringify(loadOptions.filter)   //Getting filter options
            };
            var def = $.Deferred();
            dbImpl._sendRequest('GET', params).done(function (result) {
                def.resolve(result.length);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                def.reject();
            });
            return def.promise();
        },
        insert: function (values) {
            return dbImpl._sendRequest('POST', values);
        },
        update: function (key, values) {
            var params = $.extend({}, values);
            params[dbImpl.key] = key;
            return dbImpl._sendRequest('PUT', params);
        },
        remove: function (key) {
            return dbImpl._sendRequest('DELETE', key);
        }
    };
    Application1.db = new DevExpress.data.CustomStore(dbImpl);
})();