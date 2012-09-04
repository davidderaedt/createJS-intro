/*jshint strict:true, camelcase:true, devel:true, eqeqeq:true, forin:true, immed:true, indent: 4, newcap:true, noempty:true, quotmark:true, undef:true, unused:true */
/*global document, createjs */

/*
    EaselJS Hello world example
*/

(function (pCanvas) {
    "use strict";

	// Get a reference of the canvas
	var canvas = pCanvas;
	
    // Create a stage object -- the top level of the display list
	var stage = new createjs.Stage(canvas);
	
	// Create a new Text object
	var text = new createjs.Text("Hello World!", "36px Arial", "#777");
	
	// Add the text as a child of the stage and position it
	stage.addChild(text);
	text.x = 10;
	text.y = 160;
	
	// Render the display list
	stage.update();
        
    // Set up FPS
    createjs.Ticker.setFPS(20);
    
    // Set animation loop (think flash's enterFrame)
    createjs.Ticker.addListener(function () {
        text.x++; 
        stage.update();            
    });
    
    
}(document.getElementById("mainCanvas")));