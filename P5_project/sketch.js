// empty array to store the background's white dots
let whiteDots = [];
// empty array to store the circle's attributes
let coloredCircles = [];
let totalGroups = 12;
let currentGroupIndex = 0;
// Interval duration in milliseconds
let intervalDuration = 1000;

// Create a class for all the circles
class ColoredCircle {
  // This class includes the x and y position of the circle, its radius, and color
  constructor(x, y, radius, colors) { 
    // createVector() is a function to create a two-dimensional vector
    this.position = createVector(x, y);
    this.radius = radius;
    this.colors = colors;
  }

  draw() {
    noStroke();
    // Fill the first color in the color array, which is the color for the large circle
    fill(this.colors[0]);
    // The radius for the large circle is 120, in the drawCircles() function
    ellipse(this.position.x, this.position.y, this.radius * 2);

    // Fill the second color in the color array, which is the color for the medium circle
    fill(this.colors[1]);
    // The radius for the medium circle is 150
    ellipse(this.position.x, this.position.y, 150);

    // Fill the third color in the color array, which is the color for the small circle
    fill(this.colors[2]);
    // The radius for the small circle is 80
    ellipse(this.position.x, this.position.y, 80);
  }
}

function setup() {
  // Let the width and height become the size of the canvas
  createCanvas(windowWidth, windowHeight);
  initializeWhiteDots(); // Initialize white dots
  drawCircles();
  // Increment the group index at regular intervals
  setInterval(incrementGroupIndex, intervalDuration);
}

function draw() {
  drawBackground(); // Draw background with white dots
  for (let groupIndex = 0; groupIndex <= currentGroupIndex; groupIndex++) {
    coloredCircles[groupIndex].forEach(circle => circle.draw());
  }
}

// From research and Chatgbt tool
function drawCircles() {
  // Generate 12 groups of circles
  for (let i = 0; i < totalGroups; i++) {
    let group = [];
    let colors = [
      color(random(255), random(255), random(255)),
      color(random(255), random(255), random(255)),
      color(random(255), random(255), random(255))
    ];
    let angle = TWO_PI / totalGroups * i;
    let radius = min(width, height) * 0.3; // Radius of the circles
    let x = width / 2 + cos(angle) * radius;
    let y = height / 2 + sin(angle) * radius;

    for (let j = 0; j <= i; j++) {
      group.push(new ColoredCircle(x, y, 120, colors));
    }
    coloredCircles.push(group);
  }
}

function drawBackground() {
  // Set background color
  background(4, 80, 111); 
  for (let dot of whiteDots) { // Draw white dots on the background
    noStroke();
    fill(255);
     // Draw the dot based on the position in the whiteDots array
    ellipse(dot.x, dot.y, 15);
  }
}

// White dots setting
function initializeWhiteDots() {
  for (let i = 0; i < 250; i++) { // Create 250 dots
    let x = random(width); // Random x position
    let y = random(height); // Random y position
    whiteDots.push(createVector(x, y)); // Add position to the array
  }
}

// Increment the current group index, and refresh the page if all groups have been displayed
function incrementGroupIndex() {
  if (currentGroupIndex < totalGroups - 1) {
    currentGroupIndex++;
  } else {
    setTimeout(() => window.location.reload(), intervalDuration);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Make the canvas fit the screen
  whiteDots = []; // After resizing the canvas, make the array empty
  initializeWhiteDots(); // Redraw the white dots
}
