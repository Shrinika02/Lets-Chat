//YOUR FIREBASE LINKS
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

           user_name=localStorage.getItem("user_name")
           room_name=localStorage.getItem("room_name")


           function send(){
                 msg=document.getElementById("msg").value
                 firebase.database.ref(room_name).push({
                       name:user_name,
                       messsge:msg,
                       like:0
                 })
           }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data);
username=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4>"+username+"</h4> <img class= 'user_tick' src='tick.png>";
messagewithtag="<h4 class='message_h4'>"+messsge+"</h4>";
likebutton1="<button id="+firebase_message_id+"class='btn btn-warning'value="+like+"onclick='updateLike()'>";
likebutton2="<span class='glyphicon glyphicon-thummbs-up'>like:"+like+"</span></button>";
row=namewithtag+messagewithtag+likebutton1+likebutton2
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
    function updateLike(message_id) {
           console.log("clicked on like button - " + message_id);
            button_id = message_id;
             likes = document.getElementById(button_id).value;
             updated_likes = Number(likes) + 1;
              console.log(updated_likes);
              firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
             }