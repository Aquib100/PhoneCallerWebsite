var phoneNumber = document.getElementById("input").value;

function call(){
  navigator.mediaDevices.getUserMedia({ audio: true})
   .then(function(stream) {
        window.open("tel:" + phoneNumber, "_self");
      })
      .catch(function(err) {
        window.alert("Please grant the microphone permission !");
      });
}
