
function myFunction() {
   
var employees = {
E1:{name:"John", age:25, salary:"5 Lakhs", city:"Chennai", state:"Tamilnadu", pincode:600012}, 
E2:{name:"Kate", age:26, salary:"6 Lakhs", city:"Chennai", state:"Tamilnadu", pincode:600011},
E3:{name:"Jude", age:27, salary:"7 Lakhs", city:"Chennai", state:"Tamilnadu", pincode:600010},
E4:{name:"Romie", age:28, salary:"8 Lakhs", city:"Chennai", state:"Tamilnadu", pincode:600009},
E5:{name:"Doe", age:29, salary:"9 Lakhs", city:"Chennai", state:"Tamilnadu", pincode:600008},
}; 
    
var out= [];
    
var key;
    
for (key in employees) {
     
document.write("Name:" + employees[key].name + "   Age:" + employees[key].age + "   Salary:" + employees[key].salary + "   City:" + employees[key].city + "   State:" + employees[key].state + "   Pincode:" + employees[key].pincode);
     
document.write("<br>");
     }


}