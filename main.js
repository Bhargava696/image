Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 95
});
Webcam.attach("#camero");

function take_pic() {
    Webcam.snap(function (data_uri) {
        document.getElementById("preview").innerHTML = "<img id='pic' src='" + data_uri + "'>";
    })
}
console.log("ml5 version", ml5.version);
dasa = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Mh3CwDOpc/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is loaded");
}

function identify() {
    sada = document.getElementById("pic");
    dasa.classify(sada, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("obj").innerHTML = results[0].label;
        document.getElementById("acc").innerHTML = results[0].confidence.toFixed(3);
    }
}