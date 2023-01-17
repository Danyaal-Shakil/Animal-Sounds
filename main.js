//https://teachablemachine.withgoogle.com/models/o01tWoF-Y//
function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/o01tWoF-Y/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    console.log(results)
}