(function(window) {
boy_runcycle_side = function() {
	this.initialize();
}
boy_runcycle_side._SpriteSheet = new SpriteSheet({images: ["runningboy.png"], frames: [[0,0,397,324,0,203.45,154.35],[397,0,397,324,0,203.45,154.35],[794,0,397,324,0,203.45,154.35],[1191,0,397,324,0,203.45,154.35],[1588,0,397,324,0,203.45,154.35],[0,324,397,324,0,203.45,154.35],[397,324,397,324,0,203.45,154.35],[794,324,397,324,0,203.45,154.35],[1191,324,397,324,0,203.45,154.35],[1588,324,397,324,0,203.45,154.35],[0,648,397,324,0,203.45,154.35],[397,648,397,324,0,203.45,154.35],[794,648,397,324,0,203.45,154.35],[1191,648,397,324,0,203.45,154.35],[1588,648,397,324,0,203.45,154.35],[0,972,397,324,0,203.45,154.35]]});
var boy_runcycle_side_p = boy_runcycle_side.prototype = new BitmapAnimation();
boy_runcycle_side_p.BitmapAnimation_initialize = boy_runcycle_side_p.initialize;
boy_runcycle_side_p.initialize = function() {
	this.BitmapAnimation_initialize(boy_runcycle_side._SpriteSheet);
	this.paused = false;
}
window.boy_runcycle_side = boy_runcycle_side;
}(window));

