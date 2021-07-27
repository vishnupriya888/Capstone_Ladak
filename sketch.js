var map, map_img, r_ing, b_img;
var gameState = "noshow";
var temp = 0;
var red, blue;
var col = "";
function preload() {
  map_img = loadImage("map.png");
  r_img = loadImage("red.png");
  b_img = loadImage("blue.png");
}
function setup() {
  createCanvas(800, 800);
  map = createSprite(530, 500, 10, 10);
  map.addImage("map_img", map_img);
  map.scale = 0.4;

  loc = createInput("").attribute("placeholder", "Enter Location E.g: A1");

  loc.position(90, 400);
  loc.size(150, 30);
  checkTemp = createButton("Show Temperature");
  checkTemp.position(105, 480);
  a1 = createSprite(392, 325, 78, 78);
  b1 = createSprite(470, 325, 78, 78);
  c1 = createSprite(550, 325, 78, 78);
  d1 = createSprite(627, 325, 78, 78);
  e1 = createSprite(705, 325, 78, 78);

  a2 = createSprite(392, 405, 78, 78);
  b2 = createSprite(470, 405, 78, 78);
  c2 = createSprite(550, 405, 78, 78);
  d2 = createSprite(627, 405, 78, 78);
  e2 = createSprite(705, 405, 78, 78);

  a3 = createSprite(392, 483, 78, 78);
  b3 = createSprite(470, 483, 78, 78);
  c3 = createSprite(550, 483, 78, 78);
  d3 = createSprite(627, 483, 78, 78);
  e3 = createSprite(705, 483, 78, 78);

  a4 = createSprite(392, 561, 78, 78);
  b4 = createSprite(470, 561, 78, 78);
  c4 = createSprite(550, 561, 78, 78);
  d4 = createSprite(627, 561, 78, 78);
  e4 = createSprite(705, 561, 78, 78);

  a5 = createSprite(392, 639, 78, 78);
  b5 = createSprite(470, 639, 78, 78);
  c5 = createSprite(550, 639, 78, 78);
  d5 = createSprite(627, 639, 78, 78);
  e5 = createSprite(705, 639, 78, 78);

  a1.visible = false;
  b1.visible = false;
  c1.visible = false;
  d1.visible = false;
  e1.visible = false;

  a2.visible = false;
  b2.visible = false;
  c2.visible = false;
  d2.visible = false;
  e2.visible = false;

  a3.visible = false;
  b3.visible = false;
  c3.visible = false;
  d3.visible = false;
  e3.visible = false;

  a4.visible = false;
  b4.visible = false;
  c4.visible = false;
  d4.visible = false;
  e4.visible = false;

  a5.visible = false;
  b5.visible = false;
  c5.visible = false;
  d5.visible = false;
  e5.visible = false;

  red = createSprite(510, 730, 70, 30);
  red.addImage("r_img", r_img);
  red.scale = 0.1;
  blue = createSprite(585, 730, 70, 30);
  blue.addImage("b_img", b_img);
  blue.scale = 0.1;
}
function draw() {
  background("pink");
  drawSprites();
  fill("black");
  textSize(25);
  text("Look at the Map and identify the location to be cold or hot? ", 30, 50);
  text(
    "Use the Calculator to get the temperature of the desired location ",
    30,
    100
  );
  text("Example : ", 150, 150);
  checkTemp.mousePressed(showTemp);
  if (gameState === "show") {
    textSize(17);

    text("The temperature at " + locate + " is: " + temp, 50, 550);
  }
  if (mousePressedOver(a1)) {
    col = "";
    gameState = "a1";
  }
  if (mousePressedOver(b1)) {
    col = "";
    gameState = "b1";
  }
  if (mousePressedOver(c1)) {
    col = "";
    gameState = "c1";
  }
  if (mousePressedOver(d1)) {
    col = "";
    gameState = "d1";
  }
  if (mousePressedOver(e1)) {
    col = "";
    gameState = "e1";
  }
  if (mousePressedOver(a2)) {
    col = "";
    gameState = "a2";
  }
  if (mousePressedOver(b2)) {
    col = "";
    gameState = "b2";
  }
  if (mousePressedOver(c2)) {
    col = "";
    gameState = "c2";
  }
  if (mousePressedOver(d2)) {
    col = "";
    gameState = "d2";
  }
  if (mousePressedOver(e2)) {
    col = "";
    gameState = "e2";
  }

  if (mousePressedOver(a3)) {
    col = "";
    gameState = "a3";
  }
  if (mousePressedOver(b3)) {
    col = "";
    gameState = "b3";
  }
  if (mousePressedOver(c3)) {
    col = "";
    gameState = "c3";
  }
  if (mousePressedOver(d3)) {
    col = "";
    gameState = "d3";
  }
  if (mousePressedOver(e3)) {
    col = "";
    gameState = "e3";
  }

  if (mousePressedOver(a4)) {
    col = "";
    gameState = "a4";
  }
  if (mousePressedOver(b4)) {
    col = "";
    gameState = "b4";
  }
  if (mousePressedOver(c4)) {
    col = "";
    gameState = "c4";
  }
  if (mousePressedOver(d4)) {
    col = "";
    gameState = "d4";
  }
  if (mousePressedOver(e4)) {
    col = "";
    gameState = "e4";
  }

  if (mousePressedOver(a5)) {
    col = "";
    gameState = "a5";
  }
  if (mousePressedOver(b5)) {
    col = "";
    gameState = "b5";
  }
  if (mousePressedOver(c5)) {
    col = "";
    gameState = "c5";
  }
  if (mousePressedOver(d5)) {
    col = "";
    gameState = "d5";
  }
  if (mousePressedOver(e5)) {
    col = "";
    gameState = "e5";
  }
  show();
}
function showTemp() {
  locate = loc.value();
  gameState = "show";
  switch (locate) {
    case "A1":
      temp = 20;
      break;
    case "A2":
      temp = 30;
      break;
    case "A3":
      temp = 40;
      break;
    case "A4":
      temp = 45;
      break;
    case "A5":
      temp = 55;
      break;
    case "B1":
      temp = 20;
      break;
    case "B2":
      temp = 30;
      break;
    case "B3":
      temp = 40;
      break;
    case "B4":
      temp = 45;
      break;
    case "B5":
      temp = 55;
      break;
    case "C1":
      temp = 20;
      break;
    case "C2":
      temp = 30;
      break;
    case "C3":
      temp = 40;
      break;
    case "C4":
      temp = 45;
      break;
    case "C5":
      temp = 55;
      break;
    case "D1":
      temp = 20;
      break;
    case "D2":
      temp = 30;
      break;
    case "D3":
      temp = 40;
      break;
    case "D4":
      temp = 45;
      break;
    case "D5":
      temp = 55;
      break;
    case "E1":
      temp = 20;
      break;
    case "E2":
      temp = 30;
      break;
    case "E3":
      temp = 40;
      break;
    case "E4":
      temp = 45;
      break;
    case "E5":
      temp = 55;
      break;
    default:
      temp = "---";
      break;
  }
}
function choose() {
  if (mousePressedOver(blue)) {
    col = "blue";
  } else if (mousePressedOver(red)) {
    col = "red";
  }
}
function show() {
  if (gameState === "a1") {
    choose();
    a1.visible = true;
    a1.shapeColor = col;
  } else if (gameState === "b1") {
    choose();
    b1.visible = true;
    b1.shapeColor = col;
  } else if (gameState === "c1") {
    choose();
    c1.visible = true;
    c1.shapeColor = col;
  } else if (gameState === "d1") {
    choose();
    d1.visible = true;
    d1.shapeColor = col;
  } else if (gameState === "e1") {
    choose();
    e1.visible = true;
    e1.shapeColor = col;
  } else if (gameState === "a2") {
    choose();
    a2.visible = true;
    a2.shapeColor = col;
  } else if (gameState === "b2") {
    choose();
    b2.visible = true;
    b2.shapeColor = col;
  } else if (gameState === "c2") {
    choose();
    c2.visible = true;
    c2.shapeColor = col;
  } else if (gameState === "d2") {
    choose();
    d2.visible = true;
    d2.shapeColor = col;
  } else if (gameState === "e2") {
    choose();
    e2.visible = true;
    e2.shapeColor = col;
  } else if (gameState === "a3") {
    choose();
    a3.visible = true;
    a3.shapeColor = col;
  } else if (gameState === "b3") {
    choose();
    b3.visible = true;
    b3.shapeColor = col;
  } else if (gameState === "c3") {
    choose();
    c3.visible = true;
    c3.shapeColor = col;
  } else if (gameState === "d3") {
    choose();
    d3.visible = true;
    d3.shapeColor = col;
  } else if (gameState === "e3") {
    choose();
    e3.visible = true;
    e3.shapeColor = col;
  } else if (gameState === "a4") {
    choose();
    a4.visible = true;
    a4.shapeColor = col;
  } else if (gameState === "b4") {
    choose();
    b4.visible = true;
    b4.shapeColor = col;
  } else if (gameState === "c4") {
    choose();
    c4.visible = true;
    c4.shapeColor = col;
  } else if (gameState === "d4") {
    choose();
    d4.visible = true;
    d4.shapeColor = col;
  } else if (gameState === "e4") {
    choose();
    e4.visible = true;
    e4.shapeColor = col;
  } else if (gameState === "a5") {
    choose();
    a5.visible = true;
    a5.shapeColor = col;
  } else if (gameState === "b5") {
    choose();
    b5.visible = true;
    b5.shapeColor = col;
  } else if (gameState === "c5") {
    choose();
    c5.visible = true;
    c5.shapeColor = col;
  } else if (gameState === "d5") {
    choose();
    d5.visible = true;
    d5.shapeColor = col;
  } else if (gameState === "e5") {
    choose();
    e5.visible = true;
    e5.shapeColor = col;
  }
}
