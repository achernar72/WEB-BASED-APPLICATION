/**
 * Created by ash on 7/19/17.
 */
var config = {
    apiKey: "AIzaSyD7FH-wlhaboL9q5yYGAMIFD_9DzPu6JKs",
    authDomain: "webdevelopment-d0b8e.firebaseapp.com",
    databaseURL: "https://webdevelopment-d0b8e.firebaseio.com",
    projectId: "webdevelopment-d0b8e",
    storageBucket: "",
    messagingSenderId: "742258140855"
};


firebase.initializeApp(config);


function home() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" && password == "") {
        window.open("http://localhost:63342/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/Assignment6/Source/MEAN_Stack_App/home.html?_ijt=pvejt5hh997qr933ucgp6n07hh")
    }
    else {
        alert("Incorrect username and/or password.");
    }
}

function register() {
   window.location.replace("http://localhost:63342/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/Assignment6/Source/register.html?_ijt=ejdvi52nsqd7pdgd860nbr961m")

}


function login()
{
    window.location.replace("http://localhost:63342/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/Assignment6/Source/index.html?_ijt=a3pa6c3cnk16kt3be88l6vmf56")
}