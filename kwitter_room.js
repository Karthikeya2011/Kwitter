const firebaseConfig = {
    apiKey: "AIzaSyCBFG73NenBJ0OlYFGDPjYyMBS-t0rLQj0",
  authDomain: "kwitter-c47c8.firebaseapp.com",
  databaseURL: "https://kwitter-c47c8-default-rtdb.firebaseio.com",
  projectId: "kwitter-c47c8",
  storageBucket: "kwitter-c47c8.appspot.com",
  messagingSenderId: "803329744029",
  appId: "1:803329744029:web:4804474364a89387b1c874",
  measurementId: "G-1Z42989BF2"
  };

  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function addRoom(){
    Room_name = document.getElementById("Room_name").value
    firebase.database().ref("/").child(Room_name).update({    
    purpose : "adding room name"
    });
    
    localStorage.setItem("Room_name", Room_name);
    
    window.location = "kwitter_room.html";
}
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Wellcome "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='Room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#0"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
    localStorage.setItem("Room_name",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("Room_name");
         window.location = "index.html";
}