var map, map_img, r_ing, b_img;
var gameState = "noshow";
var temp = 0;
var red, blue;
var col = "";
var totalBlue = 0,
  totalRed = 0;
var numberLoc;
var win = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
function preload() {
  map_img = loadImage("3.png");
  r_img = loadImage("red.png");
  b_img = loadImage("blue.png");
  img_b1 = loadImage("blue/img_b1.png");
  img_r1 = loadImage("red/img_r1.png");
  img_b2 = loadImage("blue/img_b2.png");
  img_r2 = loadImage("red/img_r2.png");
  img_b3 = loadImage("blue/img_b3.png");
  img_r3 = loadImage("red/img_r3.png");
  img_b4 = loadImage("blue/img_b4.png");
  img_r4 = loadImage("red/img_r4.png");
  img_b5 = loadImage("blue/img_b5.png");
  img_r5 = loadImage("red/img_r5.png");
  img_b6 = loadImage("blue/img_b6.png");
  img_r6 = loadImage("red/img_r6.png");
  img_b7 = loadImage("blue/img_b7.png");
  img_r7 = loadImage("red/img_r7.png");
  img_b8 = loadImage("blue/img_b8.png");
  img_r8 = loadImage("red/img_r8.png");
  img_b9 = loadImage("blue/img_b9.png");
  img_r9 = loadImage("red/img_r9.png");
  img_b10 = loadImage("blue/img_b10.png");
  img_r10 = loadImage("red/img_r10.png");
  img_b11 = loadImage("blue/img_b11.png");
  img_r11 = loadImage("red/img_r11.png");
  img_b12 = loadImage("blue/img_b12.png");
  img_r12 = loadImage("red/img_r12.png");
  img_b13 = loadImage("blue/img_b13.png");
  img_r13 = loadImage("red/img_r13.png");
  img_b14 = loadImage("blue/img_b14.png");
  img_r14 = loadImage("red/img_r14.png");
  img_b15 = loadImage("blue/img_b15.png");
  img_r15 = loadImage("red/img_r15.png");
  img_b16 = loadImage("blue/img_b16.png");
  img_r16 = loadImage("red/img_r16.png");
  img_b17 = loadImage("blue/img_b17.png");
  img_r17 = loadImage("red/img_r17.png");
  img_b18 = loadImage("blue/img_b18.png");
  img_r18 = loadImage("red/img_r18.png");
  img_b19 = loadImage("blue/img_b19.png");
  img_r19 = loadImage("red/img_r19.png");
  img_b20 = loadImage("blue/img_b20.png");
  img_r20 = loadImage("red/img_r20.png");
  img_b21 = loadImage("blue/img_b21.png");
  img_r21 = loadImage("red/img_r21.png");
  img_b22 = loadImage("blue/img_b22.png");
  img_r22 = loadImage("red/img_r22.png");
  img_b23 = loadImage("blue/img_b23.png");
  img_r23 = loadImage("red/img_r23.png");
  img_b24 = loadImage("blue/img_b24.png");
  img_r24 = loadImage("red/img_r24.png");
  img_b25 = loadImage("blue/img_b25.png");
  img_r25 = loadImage("red/img_r25.png");
}
function setup() {
  createCanvas(900, 800);
  map = createSprite(600, 450, 10, 10);
  map.addImage("map_img", map_img);

  loc = createInput("").attribute("placeholder", "Enter Location E.g: A1");

  loc.position(90, 400);
  loc.size(150, 30);
  checkTemp = createButton("Show Temperature");
  checkTemp.position(105, 480);
  numberLoc = createInput("").attribute("placeholder", "Enter No.");
  numberLoc.hide();
  numberLoc.position(600, 60);
  numberLoc2 = createInput("").attribute("placeholder", "Enter No.");
  numberLoc2.hide();
  numberLoc2.position(600, 100);
  numberLoc3 = createInput("").attribute("placeholder", "Enter No.");
  numberLoc3.hide();
  numberLoc3.position(600, 140);
  barG = createButton("Show Bar Graph");
  barG.position(105, 280);
  barG.hide();
  a1 = createSprite(460, 255, 50, 50);
  b1 = createSprite(550, 255, 50, 50);
  c1 = createSprite(640, 255, 50, 50);
  d1 = createSprite(735, 255, 50, 50);
  e1 = createSprite(825, 255, 50, 50);

  a2 = createSprite(460, 346, 50, 50);
  b2 = createSprite(550, 346, 50, 50);
  c2 = createSprite(640, 346, 50, 50);
  d2 = createSprite(735, 346, 50, 50);
  e2 = createSprite(825, 346, 50, 50);

  a3 = createSprite(460, 438, 50, 50);
  b3 = createSprite(550, 438, 50, 50);
  c3 = createSprite(640, 438, 50, 50);
  d3 = createSprite(735, 438, 50, 50);
  e3 = createSprite(825, 438, 50, 50);

  a4 = createSprite(460, 531, 50, 50);
  b4 = createSprite(550, 531, 50, 50);
  c4 = createSprite(640, 531, 50, 50);
  d4 = createSprite(735, 531, 50, 50);
  e4 = createSprite(825, 531, 50, 50);

  a5 = createSprite(460, 625, 50, 50);
  b5 = createSprite(550, 625, 50, 50);
  c5 = createSprite(640, 625, 50, 50);
  d5 = createSprite(735, 625, 50, 50);
  e5 = createSprite(825, 625, 50, 50);

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

  red = createSprite(510, 755, 70, 30);
  red.addImage("r_img", r_img);
  red.scale = 0.1;
  blue = createSprite(585, 755, 70, 30);
  blue.addImage("b_img", b_img);
  blue.scale = 0.1;
}
function draw() {
  background("pink");
  drawSprites();
  fill("black");
  textSize(25);
  text(World.mouseX + "," + World.mouseY, World.mouseX, World.mouseY);
  if (gameState === "end" || gameState === "gph") {
    textSize(20);
    text(
      "Awesome, Now Lets identify the number of locations inside ladak which are cold ",
      50,
      40
    );
    text("Enter No of Lacations that are Hot", 50, 80);
    text("Enter No of Lacations that are Cold in the Boundary", 50, 120);
    text("Enter No of Lacations that are not Cold in the Boundary", 50, 160);
  }
  if (gameState === "gph") {
    text("0       2      4      6      8      10       12", 340, 720);
    textSize(17);
    text("No of Lacations that are Hot", 100, 420);
    text("No of Lacations that are Cold \nin the Boundary", 100, 520);
    text("No of Lacations that are NOT \nCold in the Boundary", 100, 620);
  }
  if (gameState !== "end" && gameState !== "gph") {
    text(
      "Look at the Map and identify the location to be cold or hot? ",
      30,
      50
    );
    text(
      "Use the Calculator to get the temperature of the desired location ",
      30,
      100
    );
    text("Example : ", 150, 150);
  }
  barG.mousePressed(showGraph);
  checkTemp.mousePressed(showTemp);
  if (gameState === "show") {
    textSize(17);

    text("The temperature at " + locate + " is: " + temp, 50, 550);
  }
  if (mousePressedOver(a1) && gameState !== "end") {
    col = "";
    gameState = "a1";
  }
  if (mousePressedOver(b1) && gameState !== "end") {
    col = "";
    gameState = "b1";
  }
  if (mousePressedOver(c1) && gameState !== "end") {
    col = "";
    gameState = "c1";
  }
  if (mousePressedOver(d1) && gameState !== "end") {
    col = "";
    gameState = "d1";
  }
  if (mousePressedOver(e1) && gameState !== "end") {
    col = "";
    gameState = "e1";
  }
  if (mousePressedOver(a2) && gameState !== "end") {
    col = "";
    gameState = "a2";
  }
  if (mousePressedOver(b2) && gameState !== "end") {
    col = "";
    gameState = "b2";
  }
  if (mousePressedOver(c2) && gameState !== "end") {
    col = "";
    gameState = "c2";
  }
  if (mousePressedOver(d2) && gameState !== "end") {
    col = "";
    gameState = "d2";
  }
  if (mousePressedOver(e2) && gameState !== "end") {
    col = "";
    gameState = "e2";
  }

  if (mousePressedOver(a3) && gameState !== "end") {
    col = "";
    gameState = "a3";
  }
  if (mousePressedOver(b3) && gameState !== "end") {
    col = "";
    gameState = "b3";
  }
  if (mousePressedOver(c3) && gameState !== "end") {
    col = "";
    gameState = "c3";
  }
  if (mousePressedOver(d3) && gameState !== "end") {
    col = "";
    gameState = "d3";
  }
  if (mousePressedOver(e3) && gameState !== "end") {
    col = "";
    gameState = "e3";
  }

  if (mousePressedOver(a4) && gameState !== "end") {
    col = "";
    gameState = "a4";
  }
  if (mousePressedOver(b4) && gameState !== "end") {
    col = "";
    gameState = "b4";
  }
  if (mousePressedOver(c4) && gameState !== "end") {
    col = "";
    gameState = "c4";
  }
  if (mousePressedOver(d4) && gameState !== "end") {
    col = "";
    gameState = "d4";
  }
  if (mousePressedOver(e4) && gameState !== "end") {
    col = "";
    gameState = "e4";
  }

  if (mousePressedOver(a5) && gameState !== "end") {
    col = "";
    gameState = "a5";
  }
  if (mousePressedOver(b5) && gameState !== "end") {
    col = "";
    gameState = "b5";
  }
  if (mousePressedOver(c5) && gameState !== "end") {
    col = "";
    gameState = "c5";
  }
  if (mousePressedOver(d5) && gameState !== "end") {
    col = "";
    gameState = "d5";
  }
  if (mousePressedOver(e5) && gameState !== "end") {
    col = "";
    gameState = "e5";
    console.log("dsfghjk");
  }
  show();
  if (gameState === "end") {
    loc.hide();
    checkTemp.hide();
    numberLoc.show();
    numberLoc2.show();
    numberLoc3.show();
    barG.show();
  }
  if (gameState === "gph") {
    showGraph2();
  }
}
function showTemp() {
  locate = loc.value();
  gameState = "show";
  switch (locate) {
    case "A1":
      temp = 15;
      break;
    case "A2":
      temp = 20;
      break;
    case "A3":
      temp = 30;
      break;
    case "A4":
      temp = 40;
      break;
    case "A5":
      temp = 50;
      break;
    case "B1":
      temp = 10;
      break;
    case "B2":
      temp = 15;
      break;
    case "B3":
      temp = 20;
      break;
    case "B4":
      temp = 35;
      break;
    case "B5":
      temp = 50;
      break;
    case "C1":
      temp = 5;
      break;
    case "C2":
      temp = 10;
      break;
    case "C3":
      temp = 5;
      break;
    case "C4":
      temp = 20;
      break;
    case "C5":
      temp = 40;
      break;
    case "D1":
      temp = 5;
      break;
    case "D2":
      temp = 5;
      break;
    case "D3":
      temp = 10;
      break;
    case "D4":
      temp = 10;
      break;
    case "D5":
      temp = 30;
      break;
    case "E1":
      temp = 5;
      break;
    case "E2":
      temp = 10;
      break;
    case "E3":
      temp = 10;
      break;
    case "E4":
      temp = 15;
      break;
    case "E5":
      temp = 20;
      break;
    default:
      temp = "---";
      break;
  }
}
function showGraph() {
  gameState = "gph";

  map.destroy();
  a1.destroy();
  b1.destroy();
  c1.destroy();
  d1.destroy();
  e1.destroy();

  a2.destroy();
  b2.destroy();
  c2.destroy();
  d2.destroy();
  e2.destroy();

  a3.destroy();
  b3.destroy();
  c3.destroy();
  d3.destroy();
  e3.destroy();

  a4.destroy();
  b4.destroy();
  c4.destroy();
  d4.destroy();
  e4.destroy();

  a5.destroy();
  b5.destroy();
  c5.destroy();
  d5.destroy();
  e5.destroy();
  red.destroy();
  blue.destroy();
}
function showGraph2() {
  loc.hide();
  checkTemp.hide();
  numberLoc.show();
  numberLoc2.show();
  numberLoc3.show();
  barG.show();
  strokeWeight(5);
  line(340, 300, 340, 700);
  line(340, 700, 740, 700);
  v1 = numberLoc.value();
  if (v1 !== "") {
    noStroke();
    fill("#EB0F0F");
    rect(340, 400, v1 * 30, 30);
  }
  v2 = numberLoc2.value();
  if (v2 !== "") {
    noStroke();
    fill("#1E86B6");
    rect(340, 500, v2 * 30, 30);
  }
  v3 = numberLoc3.value();
  if (v3 !== "") {
    noStroke();
    fill("#044968");
    rect(340, 600, v3 * 30, 30);
  }
}

function choose() {
  if (mousePressedOver(blue)) {
    col = "blue";
  } else if (mousePressedOver(red)) {
    col = "red";
  }
}
function check(col, i, j) {
  if (col == "blue") {
    win[i][j] = 1;
  } else if (col == "red") {
    win[i][j] = -1;
  }
  if (win[2][2] == 1) {
    gameState = "end";
  }
}
function show() {
  if (gameState === "a1") {
    choose();
    a1.visible = true;
    if (col === "blue") {
      a1.addImage("img_b1", img_b1);
      a1.changeImage("img_b1", img_b1);
    }
    if (col === "red") {
      a1.addImage("img_r1", img_r1);
      a1.changeImage("img_r1", img_r1);
    }
    check(col, 0, 0);
  } else if (gameState === "b1") {
    choose();
    b1.visible = true;
    if (col === "blue") {
      b1.addImage("img_b2", img_b2);
      b1.changeImage("img_b2", img_b2);
    }
    if (col === "red") {
      b1.addImage("img_r2", img_r2);
      b1.changeImage("img_r2", img_r2);
    }
    check(col, 0, 1);
  } else if (gameState === "c1") {
    choose();
    c1.visible = true;
    if (col === "blue") {
      c1.addImage("img_b3", img_b3);
      c1.changeImage("img_b3", img_b3);
    }
    if (col === "red") {
      c1.addImage("img_r3", img_r3);
      c1.changeImage("img_r3", img_r3);
    }
    check(col, 0, 2);
  } else if (gameState === "d1") {
    choose();
    d1.visible = true;
    if (col === "blue") {
      d1.addImage("img_b4", img_b4);
      d1.changeImage("img_b4", img_b4);
    }
    if (col === "red") {
      d1.addImage("img_r4", img_r4);
      d1.changeImage("img_r4", img_r4);
    }
    check(col, 0, 3);
  } else if (gameState === "e1") {
    choose();
    e1.visible = true;
    if (col === "blue") {
      e1.addImage("img_b5", img_b5);
      e1.changeImage("img_b5", img_b5);
    }
    if (col === "red") {
      e1.addImage("img_r5", img_r5);
      e1.changeImage("img_r5", img_r5);
    }
    check(col, 0, 4);
  } else if (gameState === "a2") {
    choose();
    a2.visible = true;
    if (col === "blue") {
      a2.addImage("img_b1", img_b6);
      a2.changeImage("img_b1", img_b6);
    }
    if (col === "red") {
      a2.addImage("img_r1", img_r6);
      a2.changeImage("img_r1", img_r6);
    }
    check(col, 1, 0);
  } else if (gameState === "b2") {
    choose();
    b2.visible = true;
    if (col === "blue") {
      b2.addImage("img_b1", img_b7);
      b2.changeImage("img_b1", img_b7);
    }
    if (col === "red") {
      b2.addImage("img_r1", img_r7);
      b2.changeImage("img_r1", img_r7);
    }
    check(col, 1, 1);
  } else if (gameState === "c2") {
    choose();
    c2.visible = true;
    if (col === "blue") {
      c2.addImage("img_b1", img_b8);
      c2.changeImage("img_b1", img_b8);
    }
    if (col === "red") {
      c2.addImage("img_r1", img_r8);
      c2.changeImage("img_r1", img_r8);
    }
    check(col, 1, 2);
  } else if (gameState === "d2") {
    choose();
    d2.visible = true;
    if (col === "blue") {
      d2.addImage("img_b1", img_b9);
      d2.changeImage("img_b1", img_b9);
    }
    if (col === "red") {
      d2.addImage("img_r1", img_r9);
      d2.changeImage("img_r1", img_r9);
    }
    check(col, 1, 3);
  } else if (gameState === "e2") {
    choose();
    e2.visible = true;
    if (col === "blue") {
      e2.addImage("img_b1", img_b10);
      e2.changeImage("img_b1", img_b10);
    }
    if (col === "red") {
      e2.addImage("img_r1", img_r10);
      e2.changeImage("img_r1", img_r10);
    }
    check(col, 1, 4);
  } else if (gameState === "a3") {
    choose();
    a3.visible = true;
    if (col === "blue") {
      a3.addImage("img_b1", img_b11);
      a3.changeImage("img_b1", img_b11);
    }
    if (col === "red") {
      a3.addImage("img_r1", img_r11);
      a3.changeImage("img_r1", img_r11);
    }
    check(col, 2, 0);
  } else if (gameState === "b3") {
    choose();
    b3.visible = true;
    if (col === "blue") {
      b3.addImage("img_b1", img_b12);
      b3.changeImage("img_b1", img_b12);
    }
    if (col === "red") {
      b3.addImage("img_r1", img_r12);
      b3.changeImage("img_r1", img_r12);
    }
    check(col, 2, 1);
  } else if (gameState === "c3") {
    choose();
    c3.visible = true;
    if (col === "blue") {
      c3.addImage("img_b1", img_b13);
      c3.changeImage("img_b1", img_b13);
    }
    if (col === "red") {
      c3.addImage("img_r1", img_r13);
      c3.changeImage("img_r1", img_r13);
    }
    check(col, 2, 2);
  } else if (gameState === "d3") {
    choose();
    d3.visible = true;
    if (col === "blue") {
      d3.addImage("img_b1", img_b14);
      d3.changeImage("img_b1", img_b14);
    }
    if (col === "red") {
      d3.addImage("img_r1", img_r14);
      d3.changeImage("img_r1", img_r14);
    }
    check(col, 2, 3);
  } else if (gameState === "e3") {
    choose();
    e3.visible = true;
    if (col === "blue") {
      e3.addImage("img_b1", img_b15);
      e3.changeImage("img_b1", img_b15);
    }
    if (col === "red") {
      e3.addImage("img_r1", img_r15);
      e3.changeImage("img_r1", img_r15);
    }
    check(col, 2, 4);
  } else if (gameState === "a4") {
    choose();
    a4.visible = true;
    if (col === "blue") {
      a4.addImage("img_b1", img_b16);
      a4.changeImage("img_b1", img_b16);
    }
    if (col === "red") {
      a4.addImage("img_r1", img_r16);
      a4.changeImage("img_r1", img_r16);
    }
    check(col, 3, 0);
  } else if (gameState === "b4") {
    choose();
    b4.visible = true;
    if (col === "blue") {
      b4.addImage("img_b1", img_b17);
      b4.changeImage("img_b1", img_b17);
    }
    if (col === "red") {
      b4.addImage("img_r1", img_r17);
      b4.changeImage("img_r1", img_r17);
    }
    check(col, 3, 1);
  } else if (gameState === "c4") {
    choose();
    c4.visible = true;
    if (col === "blue") {
      c4.addImage("img_b1", img_b18);
      c4.changeImage("img_b1", img_b18);
    }
    if (col === "red") {
      c4.addImage("img_r1", img_r18);
      c4.changeImage("img_r1", img_r18);
    }
    check(col, 3, 2);
  } else if (gameState === "d4") {
    choose();
    d4.visible = true;
    if (col === "blue") {
      d4.addImage("img_b1", img_b19);
      d4.changeImage("img_b1", img_b19);
    }
    if (col === "red") {
      d4.addImage("img_r1", img_r19);
      d4.changeImage("img_r1", img_r19);
    }
    check(col, 3, 3);
  } else if (gameState === "e4") {
    choose();
    e4.visible = true;
    if (col === "blue") {
      e4.addImage("img_b1", img_b20);
      e4.changeImage("img_b1", img_b20);
    }
    if (col === "red") {
      e4.addImage("img_r1", img_r20);
      e4.changeImage("img_r1", img_r20);
    }
    check(col, 3, 4);
  } else if (gameState === "a5") {
    choose();
    a5.visible = true;
    if (col === "blue") {
      a5.addImage("img_b1", img_b21);
      a5.changeImage("img_b1", img_b21);
    }
    if (col === "red") {
      a5.addImage("img_r1", img_r21);
      a5.changeImage("img_r1", img_r21);
    }
    check(col, 4, 0);
  } else if (gameState === "b5") {
    choose();
    b5.visible = true;
    if (col === "blue") {
      b5.addImage("img_b1", img_b22);
      b5.changeImage("img_b1", img_b22);
    }
    if (col === "red") {
      b5.addImage("img_r1", img_r22);
      b5.changeImage("img_r1", img_r22);
    }
    check(col, 4, 1);
  } else if (gameState === "c5") {
    choose();
    c5.visible = true;
    if (col === "blue") {
      c5.addImage("img_b1", img_b23);
      c5.changeImage("img_b1", img_b23);
    }
    if (col === "red") {
      c5.addImage("img_r1", img_r23);
      c5.changeImage("img_r1", img_r23);
    }
    check(col, 4, 2);
  } else if (gameState === "d5") {
    choose();
    d5.visible = true;
    if (col === "blue") {
      d5.addImage("img_b1", img_b24);
      d5.changeImage("img_b1", img_b24);
    }
    if (col === "red") {
      d5.addImage("img_r1", img_r24);
      d5.changeImage("img_r1", img_r24);
    }
    check(col, 4, 3);
  } else if (gameState === "e5") {
    choose();
    e5.visible = true;
    if (col === "blue") {
      e5.addImage("img_b1", img_b25);
      e5.changeImage("img_b1", img_b25);
    }
    if (col === "red") {
      e5.addImage("img_r1", img_r25);
      e5.changeImage("img_r1", img_r25);
    }
    check(col, 4, 4);
  }
}
