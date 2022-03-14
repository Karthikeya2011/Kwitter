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
user_name=localStorage.getItem("user_name");
Room_name=localStorage.getItem("Room_name");
console.log(user_name)
console.log(Room_name)

function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}