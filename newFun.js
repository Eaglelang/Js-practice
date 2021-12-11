/*(function(a, b){
let average= [2,3,4,5]
console.log("The document" + average)
})()
//It will return Thedocument5

(function ourName(firstName, secondName, address, email){
let name= {firstName: 'Kola',
secondName: 'tunde',
address: 'Ikorodu Lagos',
email: 'taiwoademola25@gmail.com'
}
console.log('The document is authomatically'+ ourName)
})()*/

//Constructor for object literals
(function Bio(name, address, email, phoneNumber){
    
this.name= name;
this.address= address;
this.email= email
this.phoneNumber= phoneNumber
    
tayo= new Bio('tayo oyebode', 'Ekpoma street Benin', 'temitayooyebode009@gmail.com', 08132628601)
demola= new Bio('demola taiwo', 'Ikorodu street', 'taiwoademola25@gmail.com', 09056728618)
wale= new Bio('wale peters', 'Ikeja Lagos', 'walesilver@yahoo.com')
console.log('Ndima' + ourBio)
})()
