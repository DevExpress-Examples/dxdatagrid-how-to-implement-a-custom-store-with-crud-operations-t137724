Application1.home = function (params) {
    var viewModel = {
        gridSettings: {
            dataSource: { store: Application1.db },
            height: 800,
            columns: [{
                dataField: "CategoryID",
                dataType: "number",
                allowEditing: false
            }, {
                dataField: "CategoryName"
            }, {
                dataField: "RegisterDate",
                dataType: "date"
            }, {
                dataField: "Count",
                dataType: "number"
            }, {
                dataField: "Price",
                format: "fixedPoint",
                precision: 2,
                dataType: "number"
            }],
            groupPanel: {
                visible: true
            },
            sorting: {
                mode: "multiple"
            },
            searchPanel: {
                visible: true
            },
            filterRow: {
                visible: true
            },
            editing: {
                mode: "batch",
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true
            },
            grouping: {
                autoExpandAll: false
            },
            pager: {
                showPageSizeSelector: true,
                showInfo: true
            },
            summary: {
                totalItems: [{
                    column: "Count",
                    summaryType: "sum"
                }, {
                    column: "Price",
                    summaryType: "avg"
                }, {
                    column: "CategoryID",
                    summaryType: "count"
                }],
                groupItems: [{
                    column: "Count",
                    summaryType: "sum"
                }, {
                    column: "Price",
                    summaryType: "avg"
                }, {
                    summaryType: "count"
                }]
            },
            remoteOperations: true,
            headerFilter: {
                visible: true
            }
        }
    };

    return viewModel;
};