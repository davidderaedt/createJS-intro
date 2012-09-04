/*jshint browser:true, strict:true, camelcase:true, devel:true, eqeqeq:true, forin:true, immed:true, indent: 4, newcap:true, noempty:true, quotmark:true, undef:true, unused:true */
/*global createjs */

/*
    Very simple CreateJS demo to show 
    basic usage of EaselJS and PreloadJS
*/


(function (canvas) {
    "use strict";

    var stage;
    var rawAssets;
    var assets;
    var boyStopped = true;
    var boy1;
    var boySpeed = 10;
    var boyDir = 1;
    var loader;
    var loadingText;
    var fpsText;

    
    
    function init() {
        
        log("Initializing program");
        
        stage = new createjs.Stage(canvas);

        createjs.Ticker.setFPS(40);
        
        createjs.Ticker.addListener(function () {
    
            if (boyStopped === false) {
                boy1.x += boySpeed * boyDir;
            }
    
            stage.update();
    
        });
        
        // File we want to load
        var manifest = [
            {src: "assets/runningboy.json", id: "boy"},
            {src: "assets/runningboy.png", id: "boy-sheet"},
            {src: "assets/ground.png", id: "ground"}
        ];
        
        load(manifest);
    }
    
    

    function load(manifest) {
        
        showLoadingMessage();

        // store loaded assets raw data here
        rawAssets = [];
        // store processed, ready-for-use assets here
        assets = {};

        loader = new createjs.PreloadJS();
        
        loader.onFileLoad = function (item) {
            rawAssets.push(item);
        };
        
        loader.onComplete = function () {

            log("Done loading");
    
            stage.removeChild(loadingText);
            
            storeAssets(rawAssets, assets);
    
            start();
        };
                
        loader.loadManifest(manifest);
    }
    
    

    function showLoadingMessage() {
        
        log("Now loading...");
        
        loadingText = new createjs.Text("Loading", "36px Arial", "#777");

        stage.addChild(loadingText);

        loadingText.x = 10;
        loadingText.y = 40;
    }
    
    
    
    // Generic utility function to convert and store loaded assets
    function storeAssets(rawAssets, assets) {
        
        var i;
        for (i = 0; i < rawAssets.length; i++) {

            var item = rawAssets[i];

            switch (item.type) {
            
            case "json":
                // convert json text to js objects
                var ssdata = JSON.parse(item.result.toString());
                // create spritsheets (here we assume all json describe spritesheets)
                assets[item.id + "SpriteSheet"] = new createjs.SpriteSheet(ssdata);
                break;

            case "image":
                assets[item.id + "Img"] = item.result;
                break;
            }
        }
    }
    
    

    function start() {
        
        log("Starting game !");

        drawBackground();
        drawGround();
        addFPS();

        boy1 = new createjs.BitmapAnimation(assets.boySpriteSheet);        
        stage.addChild(boy1);
        boy1.x = 20;
        boy1.y = 160;
        boyStop();
        

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
    }
    
    

    function drawBackground() {
        
        var g = new createjs.Graphics();
        g.setStrokeStyle(1);
        g.beginLinearGradientFill(["#6677FF", "#CCDDFF"], [0, 1], 0, 0, 0, canvas.height);
        g.drawRect(0, 0, canvas.width, canvas.height);
        var s = new createjs.Shape(g);
        s.x = 0;
        s.y = 0;
        stage.addChild(s);
    }
    
    
    
    function drawGround() {
        
        var i;
        for (i = 0; i < 8; i++) {
            var tile = new createjs.Bitmap(assets.groundImg);
            stage.addChild(tile);
            tile.x = i * 81;
            tile.y = canvas.height - 79;
        }
    }


    
    function addFPS() {
        
        fpsText = new createjs.Text("--/--", "16px Arial", "#000");

        stage.addChild(fpsText);
        
        // think "onEnterFrame"
        fpsText.onTick = function () {
            fpsText.text = (Math.round(createjs.Ticker.getMeasuredFPS()) + "/" + createjs.Ticker.getFPS());
        };
        
        fpsText.x = canvas.width - 50;
        fpsText.y = 40;
    }

    
    
    function onKeyDown(event) {
        
        switch (event.keyCode) {
                
        case 37:
            boyRun(-1);
            break;
                
        case 39:
            boyRun(1);
            break;
        }
    }

    
    
    function onKeyUp(event) {

        switch (event.keyCode) {

        case 37:
            boyStop();
            break;

        case 39:
            boyStop();
            break;
        }
    }

    
    
    function boyRun(dir) {

        boy1.scaleX = boyDir = dir;
        if (boyStopped) {
            boy1.gotoAndPlay("run");
            boyStopped = false;
        }
    }

    
    
    function boyStop() {
        
        boy1.gotoAndPlay("idle");
        boyStopped = true;
    }

    
    
    function log(pMessage) {
        console.log(pMessage);
    }

    
    init();
    
    
}(document.getElementById("mainCanvas")));
