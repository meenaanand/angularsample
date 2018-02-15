app.controller('myCtrl', function($scope) {
   

    var uid=2;
   
    $scope.contacts = [{
        'id':'0',
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    },
    {
        'id':'1',
        'name': 'baranee',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];

    $scope.saveContact = function () {     
    // console.log("saveContact Called"+$scope.newcontact.name)
    // // // console.log($scope.newcontact);
    //  $scope.newcontact.id = uid++;
    //  $scope.contacts.push($scope.newcontact);
    //  $scope.newcontact = {};
    if ($scope.newcontact.id == null) {
        //if this is new contact, add it in contacts array
        $scope.newcontact.id = uid++;
        $scope.contacts.push($scope.newcontact);
        $scope.newcontact = {};
    } else {
        //for existing contact, find this contact using id
        //and update it.
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == $scope.newcontact.id) {
                  $scope.newcontact=$scope.contacts[i];
            }
        }
    }
    $scope.newcontact = {};
        } 
    $scope.delete=function(id){
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.contacts.splice(i, 1);
            }
        }
        
    }
    $scope.edit=function(id){
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.newcontact= $scope.contacts[i];
            }
        }
        
    }
});