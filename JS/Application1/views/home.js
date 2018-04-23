Application1.home = function (params) {

    var viewModel = {
        gridSettings: {
            dataSource: Application1.db,
            columns: [
                {
                    dataField: 'CategoryID',
                    allowEditing: false

                },
                {
                    dataField: 'CategoryName'
                }
            ],
            paging: {
                enabled: true,
                pageSize: 3
            },
            editing: {
                editEnabled: true,
                insertEnabled: true,
                removeEnabled: true
            },
            filterRow: {
                visible: true
            },
            groupPanel: {
                visible: true
            },
            remoteOperations: {
                filtering: true,
                paging: true,
                sorting: true
            }
        }
    };

    return viewModel;
};