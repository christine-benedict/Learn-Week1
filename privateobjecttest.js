function createNewName(first, last, phone, add){
  var last = {
    firstName: first,
    lastName: last,
    phoneNum: phone,
    address: add
  }
  return {
    getName: function(){
      return last.firstName + " " + last.lastName
    },
    getContactInfo: function(){
      return console.log("Phone Number : "+ last.phoneNum + "\n" + "Address : " + last.address)
    }
  }
}

var newName = createNewName("Christine", "Benedict", 123, "Street St")

//creating a database of names/contact info
