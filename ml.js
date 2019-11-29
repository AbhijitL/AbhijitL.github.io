 // Classifier Variable
 let classifier;
 // Model URL
 let imageModelURL = 'https://teachablemachine.withgoogle.com/models/0dk2IeET/';
let input; 
let img;
let Images
 // Video
 let video;
 let flippedVideo;
 // To store the classification
 let label = "";

 // Load the model first
 function preload() {
   classifier = ml5.imageClassifier(imageModelURL + 'model.json');
 }

 function setup() {
   createCanvas(320, 260);
  input = createFileInput(handleFile); 
  input.position(0, 0); 
   // Create the video
   Images = loadImage(img)
  Images.size(320,240)
  Images.hide()
   flippedVideo = ml5.flipImage(Images)
   // Start classifying
   classifyVideo();
 }

 function draw() {
   background(0);
   // Draw the video
   image(flippedVideo, 0, 0);

   // Draw the label
   fill(255);
   textSize(16);
   textAlign(CENTER);
   text(label, width / 2, height - 4);
 }
function handleFile(file) { 
  print(file); 
  if (file.type === 'image') { 
    img = createImg(file.data); 
    img.hide(); 
  } 
}
 // Get a prediction for the current video frame
 function classifyVideo() {
   flippedVideo = ml5.flipImage(Images)
   classifier.classify(flippedVideo, gotResult);
 }

 // When we get a result
 function gotResult(error, results) {
   // If there is an error
   if (error) {
     console.error(error);
     return;
   }
   // The results are in an array ordered by confidence.
   // console.log(results[0]);
   label = results[0].label;
   // Classifiy again!
   classifyVideo();
 }
