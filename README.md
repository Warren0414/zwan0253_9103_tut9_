# zwan0253_9103_tut9_
# Personal coding
## Interactions & Changes
In my personal code, I chose Time-Based to present my theme code. My code does not have any mouse or keyboard interaction.

My code was changed from the code in the group work. The groups of circles in the image are in constant motion. There are 12 groups of circles in total. When the 12th group of circles appears, the entire page is refreshed.

## Inspiration
My inspiration when it comes to geometric combinations. I saw a video on youtube. It shows small circles in a large circle making regular movements. My theme is Time-Based and in order to compound the theme better, I set the circles to 12 corresponding to 12 hours. When the time is up, they will be refreshed together. I kept the white dot background from the group work. I changed the colour of each circle in the group enough to be random. Each time it refreshes there will be a regular group of 12 circles and a different colour. The white dots in the white dot background will refresh in different positions along with it.

When this theme was given to me, I remembered the clocks I learnt in Week 5. I set the circle groups to follow the circular path of the clock, but I didn't set the first circle group to appear at 1 o'clock.

I looked for a function that explains setInterval() in the course of writing the code. I did all the code with the help of Chatgbt.

## Inspiration and support tool Link
[Amazing geometric ART hack! Easy circle design](https://www.youtube.com/shorts/2OxMR6hIpEw)

[MY Learning tool](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)

## Technical Explanation
My individual codes were created based on group changes.
I kept the back colour and randomly refreshed background white dots from the group work.
1. Initialisation and setup 
The program stores the properties of the background white dots and coloured circles by creating two arrays ‘whiteDots’ and ‘colouredCircles’ respectively.’ totalGroups‘ defines the total number of circle groups and “currentGroupIndex” keeps track of the currently displayed circle group index.’ IntervalDuration‘ defines the time interval at which each group of circles appears.’ setup' function sets the canvas size and calls the functions that initialise the white point and generate the circle groups, while a timer is used to periodically increment the currently displayed circle group index.

2. Draw background and circle
The ‘Draw’ function is responsible for drawing the background and the circle. The ‘drawBackground’ function is first called to set the background colour and draw randomly generated white dots. Then, the program cycle to draw the current display of all the circle group, each group contains a number of different colours and radius of the circle, the position of the circle along the circumference of the arrangement.

3. Generate circle groups
The ‘drawCircles’ function generates ‘totalGroups’ of circles. Each group of circles has a unique position, and the positions are evenly distributed along the circumference of a circle. Each group of circles has a randomly generated colour and is of different sizes, including large, medium and small circles. The generated circle groups are stored in the ‘colouredCircles’ array.

4. Manage white dots background
The ‘initialiseWhiteDots’ function generates 250 white dots in random positions and stores them in the ‘whiteDots’ array.’ drawBackground' function is responsible for drawing the white dots according to these positions each time it draws, ensuring that the background looks interesting and dynamic.

5. Update the display
The ‘incrementGroupIndex’ function increments the index of the currently displayed circle group each time it is called by the timer, gradually displaying more circle groups. When all 12 groups of circles have been displayed, the application will refresh the page after a specified time interval to reset the animation.’ windowResized' function ensures that the canvas is resized when the window size changes and regenerates the white dot background.