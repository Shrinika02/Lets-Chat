
var firebaseConfig = { 
  apiKey: "AIzaSyBM-05spFZo7SRctof18mJeedlXzEYgdis",
  authDomain: "kwitter-73c66.firebaseapp.com",
  databaseURL: "https://kwitter-73c66-default-rtdb.firebaseio.com",
  projectId: "kwitter-73c66",
  storageBucket: "kwitter-73c66.appspot.com",
  messagingSenderId: "790336714062",
  appId: "1:790336714062:web:6665ee360c9f5010e5da1f"
} 
       // Initialize Firebase const app = 
       firebase.initializeApp(firebaseConfig);
       
          
          
          
            

            function addRoom()
            {
              room_name = document.getElementById("room_name").value;
            
              firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
              });
            
                localStorage.setItem("room_name", room_name);
                
                window.location = "kwitter_page.html";
            }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}