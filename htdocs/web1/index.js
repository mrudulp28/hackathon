if('geolocation' in navigator)
            {
              console.log("yes");
              navigator.geolocation.getCurrentPosition(position => 
              {
                var mylatitude = position.coords.latitude;
                var mylongitude = position.coords.longitude;
                console.log(position);
            });
            }
            else
            {
              console.log("no");
            }
            
database = firebase.database();
var ref = database.ref('location');
var data = {
	latitude = "19.6666",
	longitude = 67.2837
}
ref.push(data);
// function submitName()
// {
//     var firebaseref = firebase.database().ref().set({
//     	lat: latitude,
//     	lon: longitude
//     });
//     // firebaseref.child("text").set(somn);
// }