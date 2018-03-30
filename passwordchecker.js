var userName = prompt("Enter your name")
var userPass = prompt("Enter password")

function newUser(newName, newPass){
    var numTest = /\d/
    var lowerCase = /[a-z]/
    var upperCase = /[A-Z]/
    var user = {
        name: newName,
        pass: newPass
    }
    return {
        idCheck: function(){
            if ( user.name == user.pass ){
                return "Your name and password cannot be the same. \n"
            }
        },
        idLength: function (){
            if ( user.name.length < 6 || user.pass.length < 6 ) {
                return "Your user name and password must both be over 6 characters. \n"
            }
        },
        userContain: function (){
            if ( user.name.indexOf("!") > -1 || user.name.indexOf("#") > -1 || user.name.indexOf("$") > -1){
                return "Your user name cannot contain ! , # or $ \n"
            }
        },
        passwordContain: function (){
            if ( user.pass.indexOf("!") = -1 || user.pass.indexOf("#") = -1 || user.pass.indexOf("$") = -1){
                return "Your password must contain ! , # or $ \n"
            }
        },
        pasPass: function (){
              if ( user.pass.toLowerCase() == "password" ){
                return "Your password cannot include the word 'password'. \n"
            }
        },
        passNum: function (){
                 if ( numTest.test(user.pass) == false ){
                return "Your password must contain a number. \n"
            }
        },
        passLower: function (){
             if ( lowerCase.test(user.pass) == false){
                return "Your password must contain one lower case letter.\n"
            }
        },
        passUpper: function (){
                     if ( upperCase.test(user.pass) == false ){
                        return "Your password must contain one upper case letter.\n"
            }
        }
    }
}

var person = newUser(userName, userPass)

function isEmpty(currentValue){
    return currentValue == undefined
}

function checkEverything(checkedThing){
    var errors = [checkedThing.idCheck(),
    checkedThing.idLength(),
    checkedThing.userContain(),
    checkedThing.passwordContain(),
    checkedThing.pasPass(),
    checkedThing.passNum(),
    checkedThing.passUpper(),
    checkedThing.passLower()]
    if ( errors.every(isEmpty) == false ){
        console.log( errors.join(" "))
    } else {
        console.log("Your user name and password are accepted!")
    }

}


checkEverything(person)
