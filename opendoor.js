function doorStatus(whichDoor){
  var door = {
    name: whichDoor,
    status: "Open"
  }
  return {
    openDoor: function(){
      if ( door.status == "Closed" ){
        door.status = "Open"
        return console.log(door.name+" is now "+ door.status)
      } else {
        return console.log(door.name+" is already "+ door.status)
      }
    },
    closeDoor: function(){
      if ( door.status == "Open" ){
        door.status = "Closed"
      return console.log(door.name+" is now "+ door.status)
      } else {
        return console.log(door.name+" is already "+door.status)
      }
    }
  }
}

var door1 = "door1"
var newDoor = doorStatus(door1)
