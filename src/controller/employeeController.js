angular.module('myApp',[]).controller('tableCon', function($scope,$http) {

    var employees=[  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com","age":'86'},  
    {"name":"Bob", "email":"bob32@gmail.com","age":'35'},  
    {"name":"Jai", "email":"jai87@gmail.com","age":'45'}  
   ];
   var projects=[  
    {"client":"GE", "pname":"abc","duration":'2'},  
    {"client":"APPLE", "pname":"dfc","duration":'1'},   
    {"client":"GE POWER", "pname":"gfc","duration":'5'}, 
   ];
    $scope.employees=employees;
    $scope.projects=projects
    $scope.submit=function()
    {
        $http.get("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
            var myWelcome = response.data;
            // alert(Object.keys($scope.myWelcome));
            var body = document.getElementsByTagName("body")[0];
            var tbl = document.createElement("table");
            var tblBody = document.createElement("tbody");
            var myWelcome = response.data;
            var table_len=Object.keys(myWelcome).length
        
            for (var i = 0; i < 1  ; i++) {
                var row = document.createElement("tr");
                for (const property in myWelcome) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(`${property}: ${myWelcome[property]}`);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                
                }
                tblBody.appendChild(row);
            }
            tbl.appendChild(tblBody);
            body.appendChild(tbl);
            tbl.setAttribute("border", "2");
            
          });
    }
});