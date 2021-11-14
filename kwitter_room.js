
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAiLoeObJjPvRbubQZjT_tPytO1mgM0iy8",
      authDomain: "kwitter-cfd45.firebaseapp.com",
      databaseURL: "https://kwitter-cfd45-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfd45",
      storageBucket: "kwitter-cfd45.appspot.com",
      messagingSenderId: "666376565063",
      appId: "1:666376565063:web:bf54bc07db3bd11ec99c62"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}

function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

