let person = {
    name : "Dhilip Kishore",
    age : 22,
    isAlive : true,
    gender : "Female",
    address : "chennai,Tamilnadu",
   Siblings : {
       brother : "Deepak",
       Sister : "Abi"
   } 
    

}
//Access with dote notation
console.log(person);
console.log(person.name);
console.log(person.Siblings);
console.log(person.Siblings.brother);
 
//Access with Box notation
console.log(person['name']);
console.log(person['Siblings']);