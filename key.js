img="";
status="";

function preload(){
    img = loadImage("keychain.jpg");
}

function setup(){ 
    canvas = createCanvas(780, 540);
    canvas.center()
    objectDetector=ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("status").innerHTML ="Status:Detecting Image";
}

function draw(){
    image(img , 0 , 0, 780, 540);
    fill("#FF0000");
    text("keychain", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(40, 60, 450, 375);
}
function back(){
    window.location="index.html";
}
function modalLoaded(){
    console.log("Modal has loaded");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    
}