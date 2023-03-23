function setup() {
    canvas = createCanvas (300 , 300);
    canvas.centre();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/EW_tWiG-M/model.json' ,modelLoaded );
}

function modelLoaded(){
    console.log('Model Loaded !');
}

function draw() {
    Image(video , 0 , 0 , 300 , 300);
    classifier.classify(video , gotResult);
}

function gotResult(error , results) {
    if (error) {
        console.error(error)
    } else {
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}