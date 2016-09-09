var hosts = {
    "ansible_log_path": "/tmp/ansible.log",
    "ansible_config": "/usr/share/atomic-openshift-utils/ansible.cfg",
    "variant": "openshift-enterprise",
    "ansible_inventory_path": "/home/tbielawa/.config/openshift/hosts",
    "version": "v2",
    "deployment": {
        "master_routingconfig_subdomain": "",
        "ansible_ssh_user": "root",
        "proxy_exclude_hosts": "",
        "proxy_https": "",
        "roles": {
            "node": {},
            "master": {},
            "storage": {},
            "etcd": {}
        },
        "hosts": [
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
        ],
        "proxy_http": ""
    },
    "variant_version": "3.3",
    "ansible_callback_facts_yaml": "/home/tbielawa/.config/openshift/.ansible/callback_facts.yaml"
};


function count_hosts_by_role(host_list, count_role) {
    // The role to count the number of is `count_role`
    var instances = 0;
    for ( var i = 0; i < host_list.deployment.hosts.length; i++) {
	if (host_list.deployment.hosts[i].roles.indexOf(count_role) != -1) {
	    instances += 1;
	}
    }
    return instances;
}

angular.module('patternfly.views').controller(
    'YamlCtrl',
    ['$scope',
     function ($scope) {
         $scope.installer_yaml = hosts;
     }
    ]
);

angular.module('patternfly.views').controller(
    'PanelCountCtrl',
    ['$scope',
     function ($scope) {
	 $scope.masters = count_hosts_by_role(hosts, 'master');
	 $scope.nodes = count_hosts_by_role(hosts, 'node');
	 $scope.etcd = count_hosts_by_role(hosts, 'etcd');
     }
    ]
);
