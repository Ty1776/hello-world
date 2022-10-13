function greetUser() {
    let user = prompt("What's your name?");
    if (user == "") {
        user = prompt("Please tell me your name..")
    }
    return user;
}

let user = greetUser();
console.log(user);

function camp() {
    let doyou = prompt("Do you like camping?");
    doyou = doyou.toLowerCase();
    if (doyou == "yes") {
        document.write("You're in the right place " + user + "!");
    } else if (doyou == "no") {
        document.write("Maybe I can change your mind!");
    } else {
        document.write("I don't understand...");
    }
    console.log(doyou);
}


function tentHotel() {
    let camp = prompt("Camping or Hotel?");
    camp = camp.toLowerCase();
    if (camp == "camping") {
        document.write("You've made the right choice!");
    } else if (camp == "hotel") {
        document.write("Hotels aren't very adventurous!");
    } else {
        document.write("You gotta be kidding me....");
    }
    console.log(camp);
}




