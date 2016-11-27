var windowWidth = window.innerWidth
var windowHeight = window.innerHeight
// CanvasRenderer / WebGLRenderer / autoDetectRenderer
//var renderer = PIXI.autoDetectRenderer(windowWidth, windowHeight);
var renderer = new PIXI.CanvasRenderer(windowWidth, windowHeight);
//var renderer = PIXI.autoDetectRenderer(256, 256, {antialias: false, transparent: false, resolution: 1});

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
var clog = console.log

function getWidth(percent) {
	return windowWidth * percent / 100
}

function getHeight(percent) {
	return windowHeight * percent / 100
}

function setSize(obj, widthPer) {
	var lastWidth = obj.width
	obj.width = getWidth(widthPer)
	obj.height = obj.height * (obj.width / lastWidth)
}
function getBottom(obj) {
	return windowHeight - obj.height
}
function getTexture(name) {
	return PIXI.loader.resources[name].texture
}

/*
var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var sprite = PIXI.Sprite.fromImage('ic.png');

sprite.position.set(230,264);
sprite.interactive = true;
sprite.on('mousedown', onDown);
sprite.on('touchstart', onDown);

stage.addChild(sprite);

function onDown (eventData) {

    sprite.scale.x += 0.3;
    sprite.scale.y += 0.3;
}
// start animating
animate();

function animate() {

    requestAnimationFrame(animate);

    // render the root container
    renderer.render(stage);
}
*/