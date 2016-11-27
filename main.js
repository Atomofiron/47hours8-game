
renderer.view.style.position = "absolute"
renderer.view.style.display = "block"
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)
PIXI.utils.TextureCache["media/kitchen.jpg"]
PIXI.utils.TextureCache["media/board.png"]
PIXI.utils.TextureCache["media/pan2.png"]
PIXI.utils.TextureCache["media/flour.png"]
PIXI.utils.TextureCache["media/flour_with_egg.png"]
PIXI.utils.TextureCache["media/flour_with_watter.png"]
PIXI.utils.TextureCache["media/eggs.png"]
PIXI.utils.TextureCache["media/egg.png"]
PIXI.utils.TextureCache["media/cracked_egg.png"]
PIXI.utils.TextureCache["media/crashed_egg.png"]
PIXI.utils.TextureCache["media/tomato.png"]
PIXI.utils.TextureCache["media/tomato_half.png"]
PIXI.utils.TextureCache["media/tomato_slice.png"]
PIXI.utils.TextureCache["media/tomato_crushed.png"]
PIXI.utils.TextureCache["media/knife.png"]
PIXI.utils.TextureCache["media/grater.png"]
PIXI.utils.TextureCache["media/chease.png"]
PIXI.utils.TextureCache["media/sheet.png"]
PIXI.utils.TextureCache["media/glass.png"]
PIXI.utils.TextureCache["media/glass_full.png"]
PIXI.utils.TextureCache["media/sausage.png"]
PIXI.utils.TextureCache["media/sausage1.png"]
PIXI.utils.TextureCache["media/sausage2.png"]
PIXI.utils.TextureCache["media/sausage3.png"]
PIXI.utils.TextureCache["media/sausage4.png"]
PIXI.utils.TextureCache["media/sausage_slice.png"]
PIXI.utils.TextureCache["media/dough.png"]
PIXI.utils.TextureCache["media/blank.png"]
PIXI.utils.TextureCache["media/pizza_filled.png"]
PIXI.utils.TextureCache["media/oven.png"]
PIXI.utils.TextureCache["media/oven_yellow.png"]
PIXI.utils.TextureCache["media/oven_red.png"]
PIXI.utils.TextureCache["media/burnt_pizza.png"]

PIXI.utils.TextureCache["media/mat.png"]
PIXI.utils.TextureCache["media/nori.png"]
PIXI.utils.TextureCache["media/semga.png"]
var stage = new PIXI.Container()

renderer.render(stage)
var setedup = false

var Sprite = PIXI.Sprite
var loader = PIXI.loader
var resources = PIXI.loader.resources
var TextureCache = PIXI.utils.TextureCache

var spriteSemga
var spriteMat
var spriteEggs
var spriteSheet
var spriteOven
var spriteBlank
var spriteBoard
var spriteTomato
var spriteFlour
var spritePan
var spriteEgg
var circlePan
var spriteChease
var spriteGrater
var spriteGlass
var spriteSausage
var spriteKnife
var spriteDough
var spriteTomatoSliceGroup = []
var spriteSausageSliceGroup = []
var sauseges = ["media/sausage.png","media/sausage1.png","media/sausage2.png","media/sausage3.png","media/sausage4.png",]
var tomatos = ["media/tomato_half.png","media/tomato_half.png","media/tomato_half.png","media/tomato_half.png","media/tomato_half.png",]

function setup() {
	//работать через json
	/*var sprite = new PIXI.Sprite(getTexture("res.json")s["ris.png"])
	stage.addChild(sprite);*/

	//var spriteKitchen = new PIXI.Sprite(PIXI.utils.TextureCache["media/kitchen.jpg"])
	var spriteKitchen = new PIXI.Sprite(getTexture("media/kitchen.jpg"))
	spriteKitchen.width = windowWidth
	spriteKitchen.height = windowHeight
	stage.addChild(spriteKitchen)

	spriteBoard = new PIXI.Sprite(getTexture("media/board.png"))
	setSize(spriteBoard, 45)
	spriteBoard.x = 0
	spriteBoard.y = windowHeight - spriteBoard.height
	stage.addChild(spriteBoard)

	showMat()

	showSemga()

	showSheet()

	showTomato()

	showPan()

	showDough()

	showEggs()

	showSausage()

	showOven()

	showChease()

	showGlass()

	showKnife()
	renderer.render(stage)

	setedup = true // нужно для animate(), иначе там всё undefined
}
function showMat() {
	spriteMat = new PIXI.Sprite(getTexture("media/mat.png"))
	setSize(spriteMat, 15)
	spriteMat.x = spriteMat.width / 2
	spriteMat.y = spriteBoard.y + spriteMat.height/2

	var spriteNori = new PIXI.Sprite(getTexture("media/nori.png"))
	setSize(spriteNori, 20)
	spriteNori.x = spriteMat.width * .05
	spriteNori.y = spriteMat.height * .05

	spriteMat.addChild(spriteNori)
	stage.addChild(spriteMat)
	spriteMat.visible = false
}
function showSemga() {
	spriteSemga = new PIXI.Sprite(getTexture("media/semga.png"))
	spriteSemga.interactive = true
	setSize(spriteSemga, 10)
	spriteSemga.x = spriteSemga.width / 2
	spriteSemga.y = windowHeight / 2

	stage.addChild(spriteSemga)
	setMouseListeners(spriteSemga)
	spriteMat.visible = false
}
function showSheet() {
	spriteSheet = new PIXI.Sprite(getTexture("media/sheet.png"))
	setSize(spriteSheet, 55)
	spriteSheet.x = windowWidth - spriteSheet.width
	spriteSheet.y = windowHeight - spriteSheet.height

	stage.addChild(spriteSheet)
	spriteSheet.visible = false
}
function showOven() {
	spriteOven = new PIXI.Sprite(getTexture("media/oven.png"))
	spriteOven.state = 0
	spriteOven.interactive = true
	spriteOven.fixed = true
	spriteOven.id = "oven"
	spriteOven.width = getWidth(55)
	spriteOven.height = getHeight(100)
	spriteOven.x = windowWidth - spriteOven.width
	spriteOven.y = windowHeight - 50

	stage.addChild(spriteOven)
	setMouseListeners(spriteOven)
	spriteOven.visible = false
}
function showTomato() {
	spriteTomato = new PIXI.Sprite(getTexture("media/tomato.png"))
	spriteTomato.id = "tomato"
	spriteTomato.interactive = true
	spriteTomato.group = spriteTomatoSliceGroup
	spriteTomato.crushed = false // можно раздавить
	spriteTomato.cutting= false // можно разрезать
	spriteTomato.cutted = false // можно разрезать
	spriteTomato.sliceCount = 0 // можно разрезать
	spriteTomato.vy = 0
	spriteTomato.onTheBoard = false
	setSize(spriteTomato, 10)
	spriteTomato.x = 10
	spriteTomato.y = spriteBoard.y

	stage.addChild(spriteTomato)
	setMouseListeners(spriteTomato)
	spriteTomato.visible = false
}
function showPan() {
	spritePan = new PIXI.Sprite(getTexture("media/pan2.png"))
	spritePan.id = "pan"
	spritePan.interactive = true
	spritePan.vy = 0
	spritePan.onTheBoard = false
	spritePan.x = getWidth(10)
	spritePan.y = getWidth(10)
	setSize(spritePan, 40)
	clog("XA = "+spritePan.width+" "+spritePan.height)
	stage.addChild(spritePan)

	var radius = 5
	circlePan = new PIXI.Graphics()
	circlePan.beginFill(0x0)
	circlePan.drawCircle(0, 0, radius)
	circlePan.endFill()
	circlePan.alpha = 1
	spritePan.addChild(circlePan)
	circlePan.x = spritePan.width * 0.45
	circlePan.y = spritePan.height * 0.5

	spriteFlour = new PIXI.Sprite(getTexture("media/flour.png"))
	spriteFlour.id = "flour"
	spriteFlour.x = spritePan.width * 0.1
	spriteFlour.y = spritePan.height * 0.37
	spriteFlour.width = spritePan.width * 0.65
	spriteFlour.height = spritePan.height * 0.65
	spritePan.addChild(spriteFlour)

	setMouseListeners(spritePan)
}
function showGlass() {
	spriteGlass = new PIXI.Sprite(getTexture("media/glass_full.png"))
	spriteGlass.id = "glass"
	spriteGlass.interactive = true
	spriteGlass.r = 0
	setSize(spriteGlass, 10)
	spriteGlass.x = spriteGlass.width/2
	spriteGlass.y = windowHeight - spriteGlass.height
	spriteGlass.anchor.x = .5
	spriteGlass.anchor.y = 1

	stage.addChild(spriteGlass)
	setMouseListeners(spriteGlass)
	spriteGlass.visible = false
}
function showEggs() {
	spriteEggs = new PIXI.Sprite(getTexture("media/eggs.png"))
	setSize(spriteEggs, 20)
	spriteEggs.x = getWidth(40)
	spriteEggs.y = getBottom(spriteEggs)
	stage.addChild(spriteEggs)
	
	spriteEgg = new PIXI.Sprite(getTexture("media/egg.png"))
	spriteEgg.id = "egg"
	spriteEgg.interactive = true
	spriteEgg.dropped = false
	spriteEgg.fixed = true
	spriteEgg.alpha = 0
	setSize(spriteEgg, 12)
	spriteEgg.x = spriteEggs.x + spriteEgg.width/2
	spriteEgg.y = spriteEggs.y + spriteEgg.height
	spriteEgg.defX = spriteEgg.x
	spriteEgg.defY = spriteEgg.y
	spriteEgg.anchored = true
	spriteEgg.anchor.x = 0.5
	spriteEgg.anchor.y = 0.5
	spriteEgg.floor = 0
	spriteEgg.cracked = false
	spriteEgg.lastVelocity = 0

	stage.addChild(spriteEgg)
	setMouseListeners(spriteEgg)
}
function showDough() {
	spriteDough = new PIXI.Sprite(getTexture("media/dough.png"))
	spriteDough.id = "dough"
	spriteDough.interactive = true
	spriteDough.fixed = true
	spriteDough.x = 0
	spriteDough.y = 0
	spriteDough.scale.x = 1
	spriteDough.scale.y = 1
	stage.addChild(spriteDough)

	setMouseListeners(spriteDough)
	spriteDough.visible = false
}
function showChease() {
	spriteGrater = new PIXI.Sprite(getTexture("media/grater.png"))
	spriteGrater.id = "grater"
	spriteGrater.interactive = true
	setSize(spriteGrater, 15)
	spriteGrater.vy = 0
	spriteGrater.x = 0
	spriteGrater.y = 0

	spriteChease = new PIXI.Sprite(getTexture("media/chease.png"))
	spriteChease.id = "chease"
	spriteChease.interactive = true
	spriteChease.fixed = true
	setSize(spriteChease, 15)
	spriteChease.vy = 0
	spriteChease.x = 300
	spriteChease.y = windowHeight - spriteChease.height - 50

	stage.addChild(spriteGrater)
	stage.addChild(spriteChease)
	setMouseListeners(spriteGrater)
	setMouseListeners(spriteChease)
	spriteGrater.visible = false
	spriteChease.visible = false
}
function showKnife() {
	spriteKnife = new PIXI.Sprite(getTexture("media/knife.png"))
	spriteKnife.id = "knife"
	spriteKnife.interactive = true
	setSize(spriteKnife, 6)
	spriteKnife.vy = 0
	spriteKnife.anchored = true
	spriteKnife.maxWidth = spriteKnife.width / 2
	spriteKnife.width = spriteKnife.maxWidth
	spriteKnife.rotation = -0.5
	spriteKnife.x = windowWidth/2
	spriteKnife.y = windowHeight - spriteKnife.height/2

	stage.addChild(spriteKnife)
	setMouseListeners(spriteKnife)
}
function showSausage() {
	spriteSausage = new PIXI.Sprite(getTexture("media/sausage.png"))
	spriteSausage.id = "sausage"
	spriteSausage.interactive = true
	spriteSausage.group = spriteSausageSliceGroup
	setSize(spriteSausage, 20)
	spriteSausage.cutting = false // можно разрезать
	spriteSausage.cutted = false // можно разрезать
	spriteSausage.sliceCount = 0 // можно разрезать
	spriteSausage.vy = 0
	spriteSausage.onTheBoard = false
	spriteSausage.x = 0
	spriteSausage.y = windowHeight - spriteSausage.height - 50

	stage.addChild(spriteSausage)
	setMouseListeners(spriteSausage)
	spriteSausage.visible = false
}

function setMouseListeners(obj) {
	obj
		.on('mousedown', onDragStart)
		.on('touchstart', onDragStart)
		.on('mouseup', onDragEnd)
		.on('mouseupoutside', onDragEnd)
		.on('touchend', onDragEnd)
		.on('touchendoutside', onDragEnd)
		.on('mousemove', onDragMove)
		.on('touchmove', onDragMove)
}
//работать через json
//PIXI.loader.add("res.json").load(setup)

PIXI.loader
.add("media/kitchen.jpg")
.add("media/board.png")
.add("media/pan2.png")
.add("media/flour.png")
.add("media/flour_with_egg.png")
.add("media/flour_with_watter.png")
.add("media/eggs.png")
.add("media/egg.png")
.add("media/crashed_egg.png")
.add("media/cracked_egg.png")
.add("media/tomato.png")
.add("media/tomato_half.png")
.add("media/tomato_slice.png")
.add("media/tomato_crushed.png")
.add("media/knife.png")
.add("media/grater.png")
.add("media/chease.png")
.add("media/sheet.png")
.add("media/glass.png")
.add("media/glass_full.png")
.add("media/sausage.png")
.add("media/sausage1.png")
.add("media/sausage2.png")
.add("media/sausage3.png")
.add("media/sausage4.png")
.add("media/sausage_slice.png")
.add("media/dough.png")
.add("media/blank.png")
.add("media/pizza_filled.png")
.add("media/oven.png")
.add("media/oven_yellow.png")
.add("media/oven_red.png")
.add("media/burnt_pizza.png")
.add("media/mat.png")
.add("media/nori.png")
.add("media/semga.png")
.load(setup)

requestAnimationFrame(animate)

function drop(obj) {
	obj.interactive = true
	obj.visible = true
	obj.dropped = true
}
function animate() {
	if (setedup) {
		if (spriteGlass && spriteGlass.dragging) {
			var s = Math.cos(spriteGlass.rotation/2) * 0.1
			spriteGlass.rotation *= 1.0 + s

			if (!spriteGlass.overturned && Math.abs(spriteGlass.rotation) > 2) {
				spriteGlass.overturned = true
				spriteGlass.texture = getTexture("media/glass.png")
				spriteGlass.empty = true
				if (hitTestRectangles(spriteGlass, circlePan, 0, 0, spritePan.x, spritePan.y)) {
					spriteFlour.texture = getTexture("media/flour_with_watter.png")

					spriteTomato.visible = true
				}
			}
		}

		if (spriteOven && spriteOven.opening)
			if (spriteOven.y < windowHeight)
				spriteOven.y += 5

		var ready = true
		for (var i = 0; i < 5; i++) {
			if (spriteTomatoSliceGroup[i] && spriteTomatoSliceGroup[i].dropped)
				if (fallen(spriteTomatoSliceGroup[i], 0, spriteSheet))
					spriteTomatoSliceGroup[i].ready = hitTestRectangles(spriteTomatoSliceGroup[i], spriteSheet)
			if (spriteSausageSliceGroup[i] && spriteSausageSliceGroup[i].dropped)
				if (fallen(spriteSausageSliceGroup[i], 0, spriteSheet))
					spriteSausageSliceGroup[i].ready = hitTestRectangles(spriteSausageSliceGroup[i], spriteSheet)
			ready = ready && spriteTomatoSliceGroup[i] && spriteTomatoSliceGroup[i].ready &&
					spriteSausageSliceGroup[i] && spriteSausageSliceGroup[i].ready
		}
		if (ready) {
			spriteGrater.visible = true
			spriteChease.visible = true
			if (!spriteDough.aleady && spriteGrater.empty) {
				spriteDough.texture = getTexture("media/pizza_filled.png")
				spriteDough.aleady = true
				spriteDough.scale.y = 1
				for (var i = 0; i < 5; i++) {
					spriteTomatoSliceGroup[i].visible = false
					spriteSausageSliceGroup[i].visible = false
					spriteOven.visible = true
				}
			}
		}

		if (spriteSemga && spriteSemga.dropped)
			fallen(spriteSemga)

		if (spriteEgg && spriteEgg.dropped)
			fallen(spriteEgg, 0.1, false, crashEgg)

		if (spriteTomato && spriteTomato.dropped)
			fallen(spriteTomato)

		if (spriteChease && spriteChease.dropped)
			fallen(spriteChease)

		if (spriteGrater && spriteGrater.dropped)
			fallen(spriteGrater, 0, spriteSheet)

		if (spriteGlass && spriteGlass.dropped)
			fallen(spriteGlass)

		if (spriteSausage && spriteSausage.dropped)
			fallen(spriteSausage)

		if (spriteFlour && spriteFlour.dropped)
			fallen(spriteFlour)

		if (spriteDough && spriteDough.dropped)
			if (fallen(spriteDough, 0, null))
				if (spriteDough.ismaximum &&
					spriteDough.x >= spriteSheet.x && spriteDough.y >= spriteSheet.y) {
					spriteDough.texture = getTexture("media/blank.png")
					spriteDough.interactive = false
					spriteDough.scale.y = .5
				}

		if (spritePan && spritePan.dropped)
			if (fallen(spritePan)) {
				if (spriteTomato && spriteTomato.visible && hitTestRectangles(spriteTomato, spriteFlour, 0, 0, spritePan.x, spritePan.y) && !spriteTomato.crushed) {
					spriteTomato.texture = getTexture("media/tomato_crushed.png")
					spriteTomato.x -= spriteTomato.width/4 // нужно немножечко подвинуть
					spriteTomato.crushed = true
					setTimeout("recoveryTomato()", 2000)
				}
				if (spritePan.whithDough && hitTestRectangles(spritePan, spriteBoard)) {
					spritePan.interactive = false
					spritePan.visible = false
					spriteEggs.visible = false
					spriteEgg.visible = false
					spriteDough.visible = true
					spriteDough.x = spritePan.x + spriteFlour.x
					spriteDough.y = spritePan.y + spriteFlour.y
				}
			}
	}
	requestAnimationFrame(animate)
	renderer.render(stage)
}

function recoveryTomato() {
	spriteTomato.x += spriteTomato.width/4 // нужно немножечко подвинуть обратно
	spriteTomato.texture = getTexture("media/tomato.png")
	spriteTomato.crushed = false
}

function fallen(obj, rotation=0, sense=spriteBoard, func=null) {
	var objHeight = obj.anchored ? obj.height/2 : obj.height
	obj.rotation += rotation
	obj.onTheBoard = sense && hitTestRectangles(obj, sense)
	if (obj.onTheBoard && obj.vy > 0) {
		obj.vy = 0
	} else if (obj.y + objHeight + obj.vy <= windowHeight) {

		obj.x += obj.vx
		obj.y += obj.vy
		obj.vy += 2
		
		if (obj.empty)
			return false

		if (obj.x < 0) {
			obj.vx = 0
			obj.x = 0
		} else if (obj.x + obj.width > windowWidth) {
			obj.vx = 0
			obj.x = windowWidth - obj.width
		}
		if (obj.y < 0) {
			obj.vy = 0
			obj.y = 0
		}
		resize(obj)

		return false
	} else { // упало
		obj.y = windowHeight - objHeight
		obj.vy = 0
	}
	if (func != null) func()
	obj.dropped = false
	//obj.rotation = 0
	return true
}
function onDragStart(event) {
	this.data = event.data
	this.dragging = true
	this.dropped = false
	this.vy = 0
	this.alpha = 1
	var newPosition = this.data.getLocalPosition(this.parent)
	this.lastMouseX = newPosition.x
	this.lastMouseY = newPosition.y
}
function onDragEnd() {
	this.dropped = this.dragging
	this.dragging = false
	this.data = null
}

function fire() {
	spriteOven.ready = true
	spriteOven.closed = false
	spriteOven.texture = getTexture("media/oven_yellow.png")
	setTimeout("checkReaction()", 5000)
}
function checkReaction() {
	if (!spriteOven.opening) {
		spriteOven.texture = getTexture("media/oven_red.png")
		spriteOven.dead = true
		spriteDough.texture = getTexture("media/burnt_pizza.png")
		spriteOven.opening = true
	}
}
function resize(obj) {
	if (obj.fixed) return
	if (!obj.origWidth)
		obj.origWidth = obj.width
	if (!obj.origHeight)
		obj.origHeight = obj.height
	if (!obj.diffY)
		obj.diffY = windowHeight - obj.y

	var scale = 0.5 + 0.5 * (obj.y + obj.diffY) / windowHeight
	obj.width = obj.origWidth * scale * scale
	obj.height = obj.origHeight * scale * scale
}
function onDragMove(event) {
	if (this.dragging) {
		if (this.id == "tomato" && this.sliceCount > 0 && this.sliceCount < 5)
			return // нельзя брать томат, когда начал его резать

		resize(this)

		var newPosition = this.data.getLocalPosition(this.parent)
		var difX = newPosition.x - this.lastMouseX
		var difY = newPosition.y - this.lastMouseY
		this.position.x += difX
		this.position.y += difY
		this.lastMouseX = newPosition.x
		this.lastMouseY = newPosition.y
		this.vx = difX
		this.vy = difY

		var velocity = Math.abs(difX + difY) // я знаю, что нужно корень суммы квадратов, пусть так
		if (this.id == "glass")
			this.rotation += -difX/100 * Math.sign(Math.cos(this.rotation)) // отклоняем стакан от равновесия
		else if (this.id == "dough") {
			if (!spriteDough.ismaximum && Math.abs(difX) > 20) {
				if (spriteDough.width < spriteSheet.width - 50)
					spriteDough.width += 5
				else spriteDough.ismaximum = true
			}
		} else if (this.id == "oven") {
			spriteOven.x -= difX
			if (spriteOven.closed)
				spriteOven.y -= difY
			if (spriteOven.y <= 5 && !spriteOven.ready && !spriteOven.closed) {
				spriteOven.closed = true
				spriteMat.visible = true
				//setTimeout("fire()", Math.random() * 20000) todo
			}
			if (spriteOven.ready && difY > 30 && !spriteOven.dead) {
				spriteOven.opening = true
				//spriteDough.texture ...
			}
		} else if (this.id == "chease") {
			if (spriteChease.x > spriteSheet.x && hitTestCenterRectangles(spriteChease, spriteGrater) && spriteChease.width > 0) {
				var dif = Math.abs(difY/10)
				spriteChease.width -= dif * (spriteChease.width / spriteChease.height)
				spriteChease.height -= dif
				spriteChease.x += dif/2 * (spriteChease.width / spriteChease.height)
				spriteChease.y += dif/2
				if (spriteChease.width < 20)
					spriteGrater.empty = true
			}
		} else if (this.id == "knife") {
			this.width = this.maxWidth * (newPosition.x / windowWidth) + this.maxWidth // анимация ножа

			if (spriteEgg.dropped && hitTestRectangles(this, spriteEgg) && velocity > 20) {
				spriteEgg.texture = getTexture("media/cracked_egg.png")
				spriteEgg.cracked = true
				if (hitTestRectangles(spriteEgg, circlePan, 0, 0, spritePan.x, spritePan.y) && !spriteFlour.whithEgg) {
					spriteFlour.texture = getTexture("media/flour_with_egg.png")
					spriteFlour.whithEgg = true

					drop(spriteGlass)
				}
			}
			if (spriteTomato && spriteTomato.visible && spriteTomato.sliceCount != 5 && !spriteTomato.crushed) {
				cut(this, spriteTomato, 5, tomatos, "media/tomato_slice.png")
			}
			if (false && spriteTomato && spriteTomato.visible && spriteTomato.sliceCount != 5 && !spriteTomato.crushed) {
				if ((this.x > spriteTomato.x + spriteTomato.width || this.x < spriteTomato.x) &&
					this.y < spriteTomato.y && this.y + this.height/2 > spriteTomato.y + spriteTomato.height && !spriteTomato.cutting) {
					spriteTomato.cutting = true
					this.tomatoCutX = this.x
					this.tomatoCutY = this.y
				} else if (Math.abs(this.y - this.tomatoCutY) > 50 && spriteTomato.cutting) {
					spriteTomato.cutting = false
				} else if (spriteTomato.cutting &&
					(this.x > spriteTomato.x + spriteTomato.height && this.tomatoCutX < spriteTomato.x ||
						this.tomatoCutX > spriteTomato.x + spriteTomato.height && this.x < spriteTomato.x)) {
					spriteTomato.cutting = false
					spriteTomato.cutted = true
					if (spriteTomato.sliceCount == 0)
						spriteTomato.texture = getTexture("media/tomato_half.png")

					var spriteTomatoSlice = new PIXI.Sprite(getTexture("media/tomato_slice.png"))
					spriteTomatoSlice.interactive = true
					spriteTomatoSlice.offset = spriteTomato.sliceCount * 10
					setSize(spriteTomatoSlice, 10)
					spriteTomatoSlice.x = spriteTomato.x
					spriteTomatoSlice.y = spriteTomato.y + spriteTomato.height + spriteTomatoSlice.offset
					spriteTomatoSlice.anchor.x = .5
					spriteTomatoSlice.anchor.y = .5
					spriteTomatoSliceGroup[spriteTomato.sliceCount] = spriteTomatoSlice
					stage.addChild(spriteTomatoSlice)
					renderer.render(stage)
					setMouseListeners(spriteTomatoSlice)
					
					spriteTomato.sliceCount++
					if (spriteTomato.sliceCount == 5) {
						spriteSausage.visible = true

						stage.removeChild(spriteTomato)
						renderer.render(stage)
					}
				}
			}
			if (spriteSausage && spriteSausage.visible && spriteSausage.sliceCount != 5) {
				if ((this.x > spriteSausage.x + spriteSausage.width || this.x < spriteSausage.x) &&
					this.y < spriteSausage.y && this.y + this.height/2 > spriteSausage.y + spriteSausage.height && !spriteSausage.cutting) {
					spriteSausage.cutting = true
					this.sausageCutX = this.x
					this.sausageCutY = this.y
				} else if (Math.abs(this.y - this.sausageCutY) > 50 && spriteSausage.cutting) {
					spriteSausage.cutting = false
				} else if (spriteSausage.cutting &&
					(this.x > spriteSausage.x + spriteSausage.height && this.sausageCutX < spriteSausage.x ||
						this.sausageCutX > spriteSausage.x + spriteSausage.height && this.x < spriteSausage.x)) {
					spriteSausage.cutting = false
					spriteSausage.cutted = true
					if (spriteSausage.sliceCount < 4)
						spriteSausage.texture = getTexture(sauseges[spriteSausage.sliceCount+1])

					var spriteSausageSlice = new PIXI.Sprite(getTexture("media/sausage_slice.png"))
					spriteSausageSlice.interactive = true
					spriteSausageSlice.offset = spriteSausage.sliceCount * 10
					setSize(spriteSausageSlice, 8)
					spriteSausageSlice.x = spriteSausage.x + spriteSausage.width - spriteSausageSlice.offset
					spriteSausageSlice.y = spriteSausage.y + spriteSausage.height
					spriteSausageSlice.anchor.x = .5
					spriteSausageSlice.anchor.y = .5
					spriteSausageSliceGroup[spriteSausage.sliceCount] = spriteSausageSlice
					stage.addChild(spriteSausageSlice)
					renderer.render(stage)
					setMouseListeners(spriteSausageSlice)
					
					spriteSausage.sliceCount++
					if (spriteSausage.sliceCount == 5) {
						spriteSheet.visible = true
						spriteFlour.texture = getTexture("media/dough.png")
						spriteFlour.x -= 20
						spriteFlour.y -= 20
						spriteFlour.interactive = true
						setMouseListeners(spriteFlour)
						spritePan.whithDough = true

						stage.removeChild(spriteSausage)
						renderer.render(stage)
					}
				}
			}
		}
	}
}
function cut(knife, obj, count, textures, texture) {
	if ((knife.x > obj.x + obj.width || knife.x < obj.x) &&
		knife.y < obj.y && knife.y + knife.height/2 > obj.y + obj.height && !obj.cutting) {
		obj.cutting = true
		knife.cutX = knife.x
		knife.cutY = knife.y
	} else if (Math.abs(knife.y - knife.cutY) > 50 && obj.cutting) {
		obj.cutting = false
	} else if (obj.cutting &&
		(knife.x > obj.x + obj.height && knife.cutX < obj.x ||
			knife.cutX > obj.x + obj.height && knife.x < obj.x)) {
		obj.cutting = false
		obj.cutted = true
		if (obj.sliceCount < 4)
			obj.texture = getTexture(textures[obj.sliceCount+1])

		var objSlice = new PIXI.Sprite(getTexture(texture))
		objSlice.interactive = true
		objSlice.offset = obj.sliceCount * 10
		setSize(objSlice, 8)
		objSlice.x = obj.x + obj.width - objSlice.offset
		objSlice.y = obj.y + obj.height
		obj.group[obj.sliceCount] = objSlice
		stage.addChild(objSlice)
		setMouseListeners(objSlice)
		
		obj.sliceCount++
		if (obj.sliceCount == count) {
			stage.removeChild(obj)
			if (obj.id == "tomato") {
				spriteSausage.visible = true

				stage.removeChild(spriteTomato)
				renderer.render(stage)
			}
			if (obj.id == "sausage") {
				spriteSheet.visible = true
				spriteFlour.texture = getTexture("media/dough.png")
				spriteFlour.x -= 20
				spriteFlour.y -= 20
				spriteFlour.interactive = true
				setMouseListeners(spriteFlour)
				spritePan.whithDough = true
			}
		}

		renderer.render(stage)
	}
}

function crashEgg() {
	spriteEgg.interactive = false
	spriteEgg.rotation = 0
	if (!spriteFlour.whithEgg) {
		spriteEgg.texture = getTexture("media/crashed_egg.png")
		spriteFlour.whithEgg = false
	}
	setTimeout("recoveryEgg()", 2000)
}
function recoveryEgg() {
	spriteEgg.texture = getTexture("media/egg.png")
	spriteEgg.interactive = true
	spriteEgg.alpha = 0
	spriteEgg.x = spriteEgg.defX
	spriteEgg.y = spriteEgg.defY
	spriteEgg.rotation = 0
	spriteEgg.cracked = false
}
function hitTestRectangles(r1, r2, parentX1=0, parentY1=0, parentX2=0, parentY2=0) {
	var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
	hit = false;

	r1.centerX = r1.x +parentX1 + r1.width / 2;
	r1.centerY = r1.y +parentY1 + r1.height / 2;
	r2.centerX = r2.x +parentX2 + r2.width / 2;
	r2.centerY = r2.y +parentY2 + r2.height / 2;

	r1.halfWidth = r1.width / 2;
	r1.halfHeight = r1.height / 2;
	r2.halfWidth = r2.width / 2;
	r2.halfHeight = r2.height / 2;

	vx = r1.centerX - r2.centerX;
	vy = r1.centerY - r2.centerY;

	combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	combinedHalfHeights = r1.halfHeight + r2.halfHeight;

	return (Math.abs(vx) < combinedHalfWidths) && (Math.abs(vy) < combinedHalfHeights)
};
function hitTestCenterRectangles(r1, r2, parentX1=0, parentY1=0, parentX2=0, parentY2=0) {
	var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
	hit = false;

	r1.centerX = r1.x +parentX1 + r1.width / 2;
	r1.centerY = r1.y +parentY1 + r1.height / 2;
	r2.centerX = r2.x +parentX2 + r2.width / 2;
	r2.centerY = r2.y +parentY2 + r2.height / 2;

	r1.halfWidth = r1.width / 2;
	r1.halfHeight = r1.height / 2;
	r2.halfWidth = r2.width / 2;
	r2.halfHeight = r2.height / 2;

	vx = r1.centerX - r2.centerX;
	vy = r1.centerY - r2.centerY;

	combinedHalfWidths = r1.halfWidth + r2.halfWidth;
	combinedHalfHeights = r1.halfHeight + r2.halfHeight;

	return (Math.abs(vx) < 50) && (Math.abs(vy) < 50)
};
