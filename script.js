angular.module('patternfly.views').controller(
    'ViewCtrl',
    ['$scope',
     function ($scope) {
         $scope.eventText = '';
         var handleSelect = function (item, e) {
             $scope.eventText = item.name + ' selected\n' + $scope.eventText;
         };
         var handleSelectionChange = function (selectedItems, e) {
             $scope.eventText = selectedItems.length + ' items selected\n' + $scope.eventText;
         };
         var handleClick = function (item, e) {
             $scope.eventText = item.name + ' clicked\n' + $scope.eventText;
         };
         var handleDblClick = function (item, e) {
             $scope.eventText = item.name + ' double clicked\n' + $scope.eventText;
         };
         var handleCheckBoxChange = function (item, selected, e) {
             $scope.eventText = item.name + ' checked: ' + item.selected + '\n' + $scope.eventText;
         };

         var checkDisabledItem = function(item) {
             return $scope.showDisabled && (item.name === "John Smith");
         };

         $scope.selectType = 'checkbox';
         $scope.updateSelectionType = function() {
             if ($scope.selectType === 'checkbox') {
                 $scope.config.selectItems = false;
                 $scope.config.showSelectBox = true;
             } else if ($scope.selectType === 'card') {
                 $scope.config.selectItems = true;
                 $scope.config.showSelectBox = false;
             } else {
                 $scope.config.selectItems = false;
                 $scope.config.showSelectBox = false;
             }
         };

         $scope.showDisabled = false;

         $scope.config = {
             selectItems: false,
             multiSelect: false,
             dblClick: false,
             selectionMatchProp: 'name',
             selectedItems: [],
             checkDisabled: checkDisabledItem,
             showSelectBox: true,
             onSelect: handleSelect,
             onSelectionChange: handleSelectionChange,
             onCheckBoxChange: handleCheckBoxChange,
             onClick: handleClick,
             onDblClick: handleDblClick
         };

         $scope.items = [
             {
                 "public_ip": "192.168.124.243",
                 "roles": [
                     "master",
                     "etcd",
                     "node",
                     "storage"
                 ],
                 "node_labels": "{'region': 'infra'}",
                 "connect_to": "m01.example.com",
                 "ip": "192.168.124.243",
                 "public_hostname": "m01.example.com",
                 "hostname": "m01.example.com"
             },
             {
                 "public_ip": "192.168.124.247",
                 "roles": [
                     "node"
                 ],
                 "node_labels": "{'region': 'infra'}",
                 "connect_to": "n01.example.com",
                 "ip": "192.168.124.247",
                 "public_hostname": "n01.example.com",
                 "hostname": "n01.example.com"
             },
             {
                 "public_ip": "192.168.124.49",
                 "roles": [
                     "node"
                 ],
                 "connect_to": "n02.example.com",
                 "ip": "192.168.124.49",
                 "public_hostname": "n02.example.com",
                 "hostname": "n02.example.com"
             }
         ];
     }
    ]
);
