console.log("yes this too");
var bb = require('bb-calculator');
var angular = require('angular');

angular.module("myApp", [])
.controller("HelloController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "AngularJS";
 });



// calculate = (opt) => {
//     const n1 = parseInt(document.getElementById("num1").value);
//     const n2 = parseInt(document.getElementById("num2").value);
//     switch(opt){
//         case 'add':
//             document.getElementById("res").innerHTML = bb.calc.add(n1,n2);
//             break;
//         case 'sub':
//             document.getElementById("res").innerHTML = bb.calc.sub(n1,n2);
//             break;
//         case 'div':
//             document.getElementById("res").innerHTML = bb.calc.divide(n1,n2);
//             break;
//         case 'mul':
//             document.getElementById("res").innerHTML = bb.calc.multiply(n1,n2);
//             break;
//         case 'per':
//             document.getElementById("res").innerHTML = bb.calc.percent(n1,n2);
//             break;
//         default:
//             break;
//     }
// }