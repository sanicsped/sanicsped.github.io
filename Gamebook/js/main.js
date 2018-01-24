
<script>
alert("Are you ready to play?");
var user = prompt("At the start of the game, you, the character wake up in a room with a note on the ground. You are given the choice to read the note or leave it there.(Choices: read, leave)").toUpperCase();

switch (user) {
  case "READ":
    if (user === "read") {
      alert("The note reads “Hello there, you have mysteriously appeared in this place, I hope you can get out before it comes”")
    }
    break;
  case "LEAVE":
    if (user === "LEAVE") {
      alert("You leave the note on the ground, deciding to not read whatever it has written.")
    }
    break;
  case "NO":
    if (user === "NO") {
      alert("No? Well I'll make your day with a special whipping of GAME OVER")
      alert("You will suffer, I swear")
      while (user === "NO") {
        alert("You shouldn't have done that.")
      }
      throw new Error();
    }
  default:
    if (user !== "LEAVE" || user !== "READ")
      alert("Please enter a valid action, reload the page to try again");

    throw new Error();
}
alert("You get up, then look around. You are in a small room with a door marked with multiple holes on it. There is nothing else in the room.  You can go through the door or stay in the room");
var door = prompt("Choices: enter, stay").toUpperCase();
switch (door) {
  case "ENTER":
    if (door === "ENTER") {
      alert("You open the door, and you enter a similar room instead with two doors, each with a lock and a red key in the center of the floor.")
    }
    break;

  case "STAY":
    if (door === "STAY") {
      alert("You decide to stay in the room, however, after an eternity you decide to open the door and enter a similar looking room with two doors, each with a lock and a red key in the center of the floor.")
    }
    break;
  default:
    if (door !== "ENTER" || door !== "STAY")
      alert("Please enter a valid action, reload the page to try again");

    throw new Error();
}



alert("You walk close to the red key, and you notice the words -one use- etched on the key. One use would most likely mean one time use and with two doors, you have to choose.");
var chooseDoor = prompt("Choices: right, left").toUpperCase();
switch (chooseDoor) {
  case "RIGHT":
    if (chooseDoor === "RIGHT") {
      alert("After opening the right door, you notice a large room that is oddly colored orange with all the walls, then four doors that are colored blue with a different symbol.")
    }
    break;


  case "LEFT":
    if (chooseDoor === "LEFT") {
      alert("After opening the left door, a mysterious figure with a black cloak greets you to the room you have just entered. Then, suddenly, the half of the floor you are on falls below you and you fall into a pit, taking 20 minutes to reach the bottom. GAME OVER")
      throw new Error();
    }
  case "NONE":
    alert("Deciding to not open any of the doors, you stay in your room. Your choice to stay in the room wasn't a good idea, because the left door suddenly opened and IT comes.")
    while (chooseDoor === "NONE")
      alert("IT stares you down. There is no escape.")

    break;
  default:
    if (chooseDoor !== "RIGHT" || chooseDoor !== "LEFT" || chooseDoor !== "NONE")
      alert("Please enter a valid action, reload the page to try again");

    throw new Error();
}



alert("None of the blue doors are locked, then you notice the red key you have used is gone. You ask yourself if this is a prank, but you have to get out or be stranded here forever, or meeting it.")
var fourDoors = prompt("Time to open one of the four doors.There is the door marked with the sun, the door marked with the sword, the door marked with a car and the last door marked with a skull.Choices: sun, sword, car, skull").toUpperCase();
switch (fourDoors) {
  case "SUN":
    alert("You enter the room and notice the extreme heat of the room. Then,unexpectedly, the room goes on fire. Before you can react, there is an explosion and you are knocked out.")
    break;
  case "SKULL":
    alert("You open the door and a mysterious gas comes out of the room. It fills the rooms behind you, then you fall asleep to the gas, forever.")
    while (fourDoors === "SKULL")
      alert("Sleep, sleep forever. You are asleep. You wonder if choosing the obvious game over door was a good idea. Well in any case your asleep. Did you try exiting the tab? Leaving the game technically allows you to escape.Did you say fourth wall break? Well thats why this door had the skull marker.")

  case "CAR":
    alert("You open the door and you enter an extremely large door, with a car in the center of it. The car however, is locked. You look around the room, and notice a set of stairs in the corner, and you decide to go up the stairs. On the second floor, you see a mysterious man. Then, suddenly, you fall asleep")
    break;
  case "SWORD":
    alert("You open the door and there is a sword on the ground, however other than another set of a walls there is nothing. Guess you can either take the sword or leave it and try another room")
    var takeSword = prompt("Do you take the sword or leave? Choices: take, leave").toUpperCase();
    switch (takeSword) {
      case "TAKE":
        alert("You take the sword off the ground. Then, the room starts to shake. The door leading back to where you came from is locked. Shortly, you can see the sky,sun all around. At last, you have made it outside, but there is one thing that worries you. What was the point of all this? You can wonder, but atleast you have escaped. GAME OVER, YOU WIN!")
        break;
      case "LEAVE":
        alert("You decide to leave the sword where it was. Just as you open the door leading back, a mysterious person in a black robe concealing everything about him is standing there. He then pulls out a knife, then says something in a language you have never heard from before. It appears its all over for you, as he charges at you and stabs you. GAME OVER")
        break;
    }
  default:
    alert("Please enter a valid action");
    throw new Error();



}


switch (fourDoors) {
  case "SUN":
    alert("You wake up, and you are in a different room. This time, the room is not in a box shape like the others, instead having a circular floor and ceiling with the walls having sharp curves. The room itself, is yellow. It is almost as if the room is in the shape of the sun. Regardless, there is a trap door on the floor.")
    var sunnyDay = prompt("Do you open the trap door or look around the room. Choices: trapdoor, look").toUpperCase();
    switch (sunnyDay) {
      case "TRAPDOOR":
        var jumpDown = prompt("You open the trapdoor, and you can see a pitch black darkness that seemingly has no end. You could consider looking around the room, or jump into the darkness. Choices: jump, look").toUpperCase();
        switch (jumpDown) {
          case "JUMP":
            alert("You fall down the trap door, and you notice, you can see the sun. You escaped successfully! YOU WIN!")
            break;
          case "LOOK":
            var doorInSun = prompt("You decide to look for any other exits to the room, but after 15 or so minutes of searching you have discovered a hidden door. Do you wish to enter the door? Choices: yes, no").toUpperCase();
            switch (doorInSun) {
              case "YES":
                alert("After entering into the room, you notice a large amount of bloodstains and written in big blood red letters on one of the walls “it is coming”. The door behind you closes then you get stabbed by something in the dark, which you think is it, then you lose consciousness. GAME OVER")
                break;
              case "NO":
                alert("You decide to not open the door. Then, the door that you have just found suddenly bursts open and you see a hideous monster. You are petrified by fear, and you are swiftly taken out by the monster. GAME OVER")
                break;
              default:
                alert("Please enter a valid action, reload the page to try again");
                throw new Error();
            }
          default:
            alert("Please enter a valid action, reload the page to try again");
            throw new Error();
            break;
        }
      case "LOOK":
        var doorInSun2 = prompt("You decide to look for any other exits to the room, but after 15 or so minutes of searching you have discovered a hidden door. Do you wish to enter the door? Choices: yes, no").toUpperCase();
        switch (doorInSun2) {
          case "YES":
            alert("After entering into the room, you notice a large amount of bloodstains and written in big blood red letters on one of the walls “it is coming”. The door behind you closes then you get stabbed by something in the dark, which you think is it, then you lose consciousness. GAME OVER")
            break;
          case "NO":
            alert("You decide to not open the door. Then, the door that you have just found suddenly bursts open and you see a hideous monster. You are petrified by fear, and you are swiftly taken out by the monster. GAME OVER")
            break;
          default:
            alert("Please enter a valid action, reload the page to try again");
            throw new Error();
        }
      default:
        alert("Please enter a valid action, reload the page to try again");
        throw new Error();
    }
    break;
  case "CAR":
    alert("When you wake up, you seem to be in a pitch dark place. Unable to see, you wander around the darkness until you see a red light ahead of you. But, just as you walk towards it, it disappears. The place you are in light up and you see the last thing you will ever see. A hideous creature that you can only describe as...it. GAME OVER!")
    break;
  default:
    alert("Please enter a valid action, reload the page to try again");
    throw new Error();
    break;
}

</script>
