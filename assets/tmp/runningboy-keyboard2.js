(function(window) {
boy_runcycle_side = function() {
	this.initialize();
}
boy_runcycle_side._SpriteSheet = new SpriteSheet({images: ["runningboy-keyboard2.png"], frames: [[0,0,397,328,0,203.45,154.35],[397,0,397,328,0,203.45,154.35],[794,0,397,328,0,203.45,154.35],[1191,0,397,328,0,203.45,154.35],[1588,0,397,328,0,203.45,154.35],[0,328,397,328,0,203.45,154.35],[397,328,397,328,0,203.45,154.35],[794,328,397,328,0,203.45,154.35],[1191,328,397,328,0,203.45,154.35],[1588,328,397,328,0,203.45,154.35],[0,656,397,328,0,203.45,154.35],[397,656,397,328,0,203.45,154.35],[794,656,397,328,0,203.45,154.35],[1191,656,397,328,0,203.45,154.35],[1588,656,397,328,0,203.45,154.35],[0,984,397,328,0,203.45,154.35]]});
var boy_runcycle_side_p = boy_runcycle_side.prototype = new BitmapAnimation();
boy_runcycle_side_p.BitmapAnimation_initialize = boy_runcycle_side_p.initialize;
boy_runcycle_side_p.initialize = function() {
	this.BitmapAnimation_initialize(boy_runcycle_side._SpriteSheet);
	this.paused = false;
}
window.boy_runcycle_side = boy_runcycle_side;
}(window));

