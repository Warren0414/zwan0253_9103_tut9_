let whiteDots = []; // empty array to save the white dots in the background
let coloredCircles = []; // empty array to save the attributes about the circle
let totalGroups = 12;
let currentGroupIndex = 0;
let intervalDuration = 1000; // Interval duration in milliseconds

// Create a class for all the circles
class ColoredCircle {
  constructor(x, y, radius, colors) { // This class includes the x and y position of the circle, its radius, and color
    this.position = createVector(x, y); // createVector() is a function to create a two-dimensional vector
    this.radius = radius;
    this.colors = colors;
  }

  draw() {
    noStroke();
    // Fill the first color in the color array, which is the color for the large circle
    fill(this.colors[0]);
    ellipse(this.position.x, this.position.y, this.radius * 2); // The radius for the large circle is 120, in the drawCircles() function

    // Fill the second color in the color array, which is the color for the medium circle
    fill(this.colors[1]);
    ellipse(this.position.x, this.position.y, 150); // The radius for the medium circle is 150

    // Fill the third color in the color array, which is the color for the small circle
    fill(this.colors[2]);
    ellipse(this.position.x, this.position.y, 80); // The radius for the small circle is 80
  }
}

function setup() {
  // Let the width and height become the size of the canvas
  createCanvas(windowWidth, windowHeight);
  initializeWhiteDots(); // Initialize white dots
  drawCircles();
  setInterval(incrementGroupIndex, intervalDuration); // Increment the group index at regular intervals
}

function draw() {
  drawBackground(); // Draw background with white dots
  for (let groupIndex = 0; groupIndex <= currentGroupIndex; groupIndex++) {
    coloredCircles[groupIndex].forEach(circle => circle.draw());
  }
}

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
  background(4, 80, 111); // Set background color
  for (let dot of whiteDots) { // Draw white dots on the background
    noStroke();
    fill(255);
    ellipse(dot.x, dot.y, 15); // Draw the dot based on the position in the whiteDots array
  }
}

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
