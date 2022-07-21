var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1d5e1073-41fe-4f90-bfb3-de88e9ffebc4","1b23040e-2939-48aa-8d98-86fa4c1850d7","0d40b9b7-22c9-4de7-bfa8-dbb0506da564","9729ab53-9f0d-4de5-9143-9114df410348"],"propsByKey":{"1d5e1073-41fe-4f90-bfb3-de88e9ffebc4":{"name":"1","sourceUrl":null,"frameSize":{"x":914,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"G5s773zTBeGZV84bz6M.7LDTGJfejVPK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":914,"y":800},"rootRelativePath":"assets/1d5e1073-41fe-4f90-bfb3-de88e9ffebc4.png"},"1b23040e-2939-48aa-8d98-86fa4c1850d7":{"name":"2","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":6,"looping":true,"frameDelay":12,"version":"mJ0wuZZmc..zy2lFh9Q92GFaib1hteKn","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":150},"rootRelativePath":"assets/1b23040e-2939-48aa-8d98-86fa4c1850d7.png"},"0d40b9b7-22c9-4de7-bfa8-dbb0506da564":{"name":"barra","sourceUrl":null,"frameSize":{"x":66,"y":50},"frameCount":3,"looping":true,"frameDelay":12,"version":"L23jYwj9AMXHiVPtiIdfuhuuq.fhSIaf","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":100},"rootRelativePath":"assets/0d40b9b7-22c9-4de7-bfa8-dbb0506da564.png"},"9729ab53-9f0d-4de5-9143-9114df410348":{"name":"pelota","sourceUrl":null,"frameSize":{"x":30,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"vb6EG4hutxRd1oF0itlAsQ_TJqcxi13D","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":50},"rootRelativePath":"assets/9729ab53-9f0d-4de5-9143-9114df410348.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var puntos=0;
//var background=createSprite(0,0,800,800);
//background.setAnimation("1");
//bara
var barra = createSprite(200,350,100,20);
barra.setAnimation("barra");

//la pelota
var pelota = createSprite(200, 270,30,30);
pelota.setAnimation("pelota");
var estado="inicio";
// cajas 
var c1 = createSprite(25, 125,50,50);
var c2 = createSprite(75, 125,50,50);
var c3 = createSprite(125, 125,50,50);
var c4 = createSprite(175, 125,50,50);
var c5 = createSprite(225, 125,50,50);
var c6 = createSprite(275, 125,50,50);
var c7 = createSprite(325, 125,50,50);
var c8 = createSprite(375, 125,50,50);
var c9 = createSprite(25, 175,50,50);
var c10 = createSprite(75, 175,50,50);
var c11 = createSprite(125, 175,50,50);
var c12 = createSprite(175, 175,50,50);
var c13 = createSprite(225, 175,50,50);
var c14 = createSprite(275, 175,50,50);
var c15 = createSprite(325, 175,50,50);
var c16 = createSprite(375, 175,50,50);

c1.setAnimation("2");
c2.setAnimation("2");
c3.setAnimation("2");
c4.setAnimation("2");
c5.setAnimation("2");
c6.setAnimation("2");
c7.setAnimation("2");
c8.setAnimation("2");
c9.setAnimation("2");
c10.setAnimation("2");
c11.setAnimation("2");
c12.setAnimation("2");
c13.setAnimation("2");
c14.setAnimation("2");
c15.setAnimation("2");
c16.setAnimation("2");



function draw() {
  background( "white");
  
  text("puntos: "+puntos,280, 20);
  
  if (estado == "inicio") {
    stroke("red");
    textSize(15);
    text("BIENVENIDO, para iniciar presiona ENTER ", 10, 230);
     if (keyDown(ENTER)) {
   pelota.velocityX=3;
   pelota.velocityY=2;
   estado="jugar";
 }
  }
  if (estado == "jugar") {
    barra.x= World.mouseX;
    
    if ( pelota.isTouching(bottomEdge)||  puntos==16        ) {
      
      
      
      estado="fin";
    }
    
    
  }
  if (estado == "fin") {
     pelota.velocityX=0;
   pelota.velocityY=0;
   text("FIN DEL JUEGO", 200, 250);
   
  }
  
  
  
 
 
 
 

 
 
 createEdgeSprites();
 pelota.bounceOff(topEdge);
 pelota.bounceOff(rightEdge);
 pelota.bounceOff(leftEdge);
 pelota.bounceOff(barra);
 
 if (pelota.isTouching(c1)) {
    c1.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c2)) {
    c2.destroy();
    puntos=puntos+1;
    
 }
 if (pelota.isTouching(c3)) {
    c3.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c4)) {
    c4.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c5)) {
    c5.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c6)) {
    c6.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c7)) {
    c7.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c8)) {
    c8.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c9)) {
    c9.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c10)) {
    c10.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c11)) {
    c11.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c12)) {
    c12.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c13)) {
    c13.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c14)) {
    c14.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c15)) {
    c15.destroy();
    puntos=puntos+1;
 }
 if (pelota.isTouching(c16)) {
    c16.destroy();
    puntos=puntos+1;
 }
 
 
 

 
 
 
 
 
 
 drawSprites();
   
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
