function take_snapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';

    });
}