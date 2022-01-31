Webcam.set({
    height: 200,
    width: 200,
    image_format: "png",
    png_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("output").innerHTML = "<img id='yes' src="+data_uri+">"
    })
}