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
        window.open("http://localhost:63342/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/WEB-BASED-APPLICATION/Assignment6/home.html?_ijt=uga0gl5kpjkvk1jj6cv1qaql3d")
    }
    else {
        alert("Incorrect username and/or password.");
    }
}





