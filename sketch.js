var Player, eWall1, eWall2, eWall3, eWall4;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49; 
var s1, s2, s3, s4, s5;
var s1Wall1, s1Wall2, s1Wall3, s1Wall4;
var s2Wall1, s2Wall2, s2Wall3, s2Wall4;
var s3Wall1, s3Wall2, s3Wall3, s3Wall4;
var s4Wall1, s4Wall2, s4Wall3, s4Wall4;
var s5Wall1, s5Wall2, s5Wall3, s5Wall4;
var b1, b11, b12, b13;
var b21, b22, b23, b24;
var b31, b32, b33, b34, b35, b36, b37, b38, b3b;
var b4, b41, b42, b4b;
var b54, b54Image, b51, b52, b53, b55;
var cArrow, cArrowImage, rArrow, rArrowImage;
var player1boyImage, player2boyImage, player1girlImage, player2girlImage, player1robotImage, player2robotImage;
var p, pGroup;
var dr, gos;
var beg, begy, beg1, beg2, beg3, beg4;
var end, endy, end1, end2, end3, end4;
var go = 0;
var cd = 0;
var pd = 0;
var gs = 0;
var slb1 = 0;
var slb2 = 0;
var slb3 = 0;
var slb4 = 0;
var slb5 = 0;
var sl1 = 0;
var sl2 = 0;
var sl3 = 0;
var l = 5;
var k = 0;
var yb = 0;
var input, button1, name1;
var buttonPause;
var gameState = "enter";
var bg;
//var thundersound;
var heading1, heading2;
var name1;
var boyb, girlb, robotb;
var plc = "boy";
var tt1 = 0;
var tt2 = 300;
var tt3;
var tt4 = 5;
var tt5 = 00;
var iboy, iboyImage, igirl, igirlImage, irobot, irobotImage;
var bop = 0;
var bep = 0;
var bup = 0;
var finnyImage, instyImage;
var hid;
var cyanbdgImage, orangebdgImage, magentabdgImage;
var frbllImage, wsImage, bsImage, gsImage, lgsImage, grImage;
var skucImage, skumImage, skuyImage, skuoImage;
var hamImage, BeeRickImage;
var gd = 0;
var pause, play, instructions, beginning;
var buttonE, buttonH, buttonM;
var enigmaSound;
var engm = 0;
var buttonC, buttonP;
var upB, downB, leftB, rightB, shiftB;
var l1, l2, l3, l4, l5, l6;
var k1, k2, k3, k4, k5;
var bot1Image, boy1Image, girl1Image;
var cKeyImage, bKeyImage, oKeyImage, mKeyImage, yKeyImage;
var kc = 0;
var kb = 0;
var ko = 0;
var km = 0;
var ky = 0;
var lvs, kys, lvsImage, kysImage;
var zooom;
var head1 = 0;
var head2 = 0;
var pixe20 = 0;
var px5 = '5px';
var px10 = '10px';
var px15 = '15px';
var px20 = '20px';
var px25 = '25px';
var px30 = '30px';
var px35 = '35px';
var px40 = '40px';
var px50 = '50px';
var px60 = '60px';
var px70 = '70px';
var px80 = '80px';
var px90 = '90px';
var px100 = '100px';
var lid;
var nstrctnschck = 0;
var score, scort;
var chall = 0;
var nani = 0;
var buttonPlay, buttonBeg, buttonInst;
var dn1, dn2, dn3, dn4, dn5;
var bgs = 0;
var ogs = 0;
var mgs = 0;
var ygs = 0;
var instplayx = 85;
var instplayy = 630;




function preload(){
  //load your images here 
  
  b54Image = loadImage("h.png");
  cArrowImage = loadImage("cArrow.png");
  rArrowImage = loadImage("rArrow.png");
  player1boyImage = loadAnimation("Boy1.png");
  player2boyImage = loadAnimation("Boy2.png");
  player1girlImage = loadAnimation("Girl1.png");
  player2girlImage = loadAnimation("Girl2.png");
  player1robotImage = loadAnimation("Robot1.png");
  player2robotImage = loadAnimation("Robot2.png");
  bg = loadImage("Under.jpg");
  bgo = loadAnimation("O0.png","O1.png","O2.png","O3.png","O4.png","O5.png","O6.png","O7.png","O8.png","O9.png","O10.png","O11.png","O12.png","O13.png","O14.png","O15.png","O16.png","O17.png","O18.png",);
  bgc = loadAnimation("C0.png","C1.png","C2.png","C3.png","C4.png","C5.png","C6.png","C7.png","C8.png","C9.png");
  bgy= loadAnimation("Y0.png","Y2.png","Y4.png","Y6.png","Y8.png","Y10.png","Y12.png","Y14.png");
  bgm = loadAnimation("M0.png","M1.png","M2.png","M3.png","M4.png","M5.png");
  bgb = loadAnimation("B0.png","B1.png","B2.png","B3.png","B4.png","B5.png","B6.png","B7.png");
  iboyImage = loadImage("Boy1.png");
  igirlImage = loadImage("Girl1.png");
  irobotImage = loadImage("Robot1.png");
  instyImage = loadImage("Inst.png");
  finnyImage = loadImage("FinishPerson.png")
  cyanbdgImage = loadImage("CyanBDG.png");
  orangebdgImage = loadImage("OrangeBDG.png");
  frbllImage = loadImage("FB.png");
  //wsImage = loadImage("WS.png");
  bsImage = loadImage("BS.jpg");
  gsImage = loadImage("GS.jpg");
  lgsImage = loadImage("LGS.jpg");
  grImage = loadImage("GR.jpg");
  magentabdgImage = loadImage("MagentaBDG.png");
  skucImage = loadImage("SKUC.png");
  skumImage = loadImage("SKUM.png");
  skuyImage = loadImage("SKUY.png");
  skuoImage = loadImage("SKUO.png");
  hamImage = loadImage("Ham.png");
  //BeeRickImage = loadImage("BeeRick.jpg");
  //bg2 = loadImage("")
  //thundersound = loadSound("thunder.mp3");
  enigmaSound = loadSound("Enigma.mp3");
  bot1Image = loadImage("Robotany.png");
  boy1Image = loadImage("Boycott.png");
  girl1Image = loadImage("Girland.png");
  cKeyImage = loadImage("cKey.png");
  bKeyImage = loadImage("bKey.png");
  oKeyImage = loadImage("oKey.png");
  mKeyImage = loadImage("mKey.png");
  yKeyImage = loadImage("yKey.png");
  lvsImage = loadImage("Lives.png");
  kysImage = loadImage("Keys.png");

}

//timer function
function timeit(){
  time=second()
   
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  enigmaSound.loop();

  //variable for timer
    var time=second()


    
  pGroup = new Group();
  
{
  wall1 = createSprite(180, 630, 20, 100);
  wall1.shapeColor = '#46a01e';
  //wall1.addImage(BeeRickImage);
  //wall1.scale = 0.05;
  //BeeRickImage.width = 200;         
  wall2 = createSprite(30, 570, 60, 20);
  wall2.shapeColor = '#46a01e';
  wall3 = createSprite(150, 570, 80, 20);
  wall3.shapeColor = '#46a01e';
  wall4 = createSprite(150, 500, 200, 20);
  wall4.shapeColor = '#46a01e';
  wall5 = createSprite(250, 560, 20, 140);
  wall5.shapeColor = '#46a01e';
  wall6 = createSprite(60, 240, 20, 380);
  wall6.shapeColor = '#46a01e';
  wall7 = createSprite(150, 445, 20, 100);
  wall7.shapeColor = '#46a01e';
  wall8 = createSprite(290, 400, 300, 20);
  wall8.shapeColor = '#46a01e';
  wall9 = createSprite(290, 250, 20, 300);
  wall9.shapeColor = '#46a01e';
  wall10 = createSprite(290, 220, 300, 20);
  wall10.shapeColor = '#46a01e';
  wall11 = createSprite(140, 310, 150, 20);
  wall11.shapeColor = '#46a01e';
  wall12 = createSprite(440, 310, 150, 20);
  wall12.shapeColor = '#46a01e';
  wall13 = createSprite(140, 130, 150, 20);
  wall13.shapeColor = '#46a01e';
  wall14 = createSprite(440, 130, 150, 20);
  wall14.shapeColor = '#46a01e';
  wall15 = createSprite(205, 05, 20, 120);
  wall15.shapeColor = '#46a01e';
  wall16 = createSprite(375, 05, 20, 120);
  wall16.shapeColor = '#46a01e';
  wall17 = createSprite(520, 160, 20, 320);
  wall17.shapeColor = '#46a01e';
  wall18 = createSprite(610, 400, 20, 400);
  wall18.shapeColor = '#46a01e';
  wall19 = createSprite(750, 210, 300, 20);
  wall19.shapeColor = '#46a01e';
  wall20 = createSprite(890, 300, 20, 160);
  wall20.shapeColor = '#46a01e';
  wall21 = createSprite(830, 390, 140, 20);
  wall21.shapeColor = '#46a01e';
  wall22 = createSprite(750, 370, 20, 60);
  wall22.shapeColor = '#46a01e';
  wall23 = createSprite(820, 300, 20, 60);
  wall23.shapeColor = '#46a01e';
  wall24 = createSprite(760, 280, 140, 20);
  wall24.shapeColor = '#46a01e';
  wall25 = createSprite(680, 365, 20, 190);
  wall25.shapeColor = '#46a01e';
  wall26 = createSprite(560, 400, 90, 20);
  wall26.shapeColor = '#46a01e';
  wall27 = createSprite(820, 460, 300, 20);
  wall27.shapeColor = '#46a01e';
  wall28 = createSprite(960, 295, 20, 350);
  wall28.shapeColor = '#46a01e';
  wall29 = createSprite(715, 130, 370, 20);
  wall29.shapeColor = '#46a01e';
  wall30 = createSprite(775, 500, 20, 70);
  wall30.shapeColor = '#46a01e';
  wall31 = createSprite(860, 590, 380, 20);
  wall31.shapeColor = '#46a01e';
  wall32 = createSprite(680, 560, 20, 70);
  wall32.shapeColor = '#46a01e';
  wall33 = createSprite(870, 560, 20, 70);
  wall33.shapeColor = '#46a01e';
  wall34 = createSprite(960, 500, 20, 70);
  wall34.shapeColor = '#46a01e';
  wall35 = createSprite(1040, 420, 20, 330);
  wall35.shapeColor = '#46a01e';
  wall36 = createSprite(1040, 190, 140, 20);
  wall36.shapeColor = '#46a01e';
  wall37 = createSprite(1120, 325, 20, 290);
  wall37.shapeColor = '#46a01e';
  wall38 = createSprite(1130, 540, 180, 20);
  wall38.shapeColor = '#46a01e';
  wall39 = createSprite(1120, 110, 180, 20);
  wall39.shapeColor = '#46a01e';
  wall40 = createSprite(1040, 80, 20, 40);
  wall40.shapeColor = '#46a01e';
  wall41 = createSprite(960, 60, 20, 120);
  wall41.shapeColor = '#46a01e';
  wall42 = createSprite(780, 60, 370, 20);
  wall42.shapeColor = '#46a01e';
  wall43 = createSprite(1120, 650, 20, 100);
  wall43.shapeColor = '#46a01e';
  wall44 = createSprite(340, 620, 20, 120);
  wall44.shapeColor = '#46a01e';
  wall45 = createSprite(340, 450, 20, 80);
  wall45.shapeColor = '#46a01e';
  wall46 = createSprite(430, 500, 20, 200);
  wall46.shapeColor = '#46a01e';
  wall47 = createSprite(480, 590, 120, 20);
  wall47.shapeColor = '#46a01e';
  wall48 = createSprite(480, 500, 120, 20);
  wall48.shapeColor = '#46a01e';
  wall49 = createSprite(650, 590, 60, 20);
  wall49.shapeColor = '#46a01e';
}

  //Player = createSprite(1050, 450, 20, 20);
  //Player = createSprite(85, 630, 20, 20);
  Player = createSprite(-1185, -1630, 20, 20);
  Player.addAnimation("rightboy",player1boyImage);
  Player.addAnimation("leftboy",player2boyImage);
  Player.addAnimation("rightgirl",player1girlImage);
  Player.addAnimation("leftgirl",player2girlImage);
  Player.addAnimation("rightrobot",player1robotImage);
  Player.addAnimation("leftrobot",player2robotImage);
  Player.scale = 0.05;
  //Player.shapeColor = "Red";
  

  beg = createSprite(30, 595, 20, 20);
  beg.addImage(instyImage);
  beg.scale = 0.055;
  begy = createSprite(339, 6705, 20, 20);
  begy.shapeColor = '#990030';
  beg1 = createSprite(250, 6666, 1, 100);
  beg1.shapeColor = '#990030';
  beg2 = createSprite(300, 6616, 101, 1);
  beg2.shapeColor = '#990030';
  beg3 = createSprite(350, 6666, 1, 100);
  beg3.shapeColor = '#990030';
  beg4 = createSprite(300, 6716, 101, 1);
  beg4.shapeColor = '#990030';

  end = createSprite(1120, 19, 20, 20);
  end.addImage(finnyImage);
  end.scale = 0.08;
  endy = createSprite(339, 8927, 20, 20);
  endy.shapeColor = '#990030';
  end1 = createSprite(250, 8888, 1, 100);
  end1.shapeColor = '#990030';
  end2 = createSprite(300, 8838, 101, 1);
  end2.shapeColor = '#990030';
  end3 = createSprite(350, 8888, 1, 100);
  end3.shapeColor = '#990030';
  end4 = createSprite(300, 8938, 101, 1);
  end4.shapeColor = '#990030';

  eWall1 = createSprite(-150, 350, 300, 700);
  eWall1.shapeColor = '#46a01e';
  eWall2 = createSprite(550, -150, 1800, 300);
  eWall2.shapeColor = '#46a01e';
  eWall3 = createSprite(1350, 350, 300, 700);
  eWall3.shapeColor = '#46a01e';
  eWall4 = createSprite(550, 825, 1800, 300);
  eWall4.shapeColor = '#46a01e';

  

  s1 = createSprite(100, 170, 60, 60);
  s1.shapeColor = "Cyan";
  s1.addAnimation("cyan",bgc);
  s1.scale = 0.15;
  s2 = createSprite(790, 170, 60, 60);
  s2.shapeColor = "Magenta";
  s2.addAnimation("magenta",bgm);
  s2.scale = 0.12;
  s3 = createSprite(1080, 360, 60, 60);
  s3.shapeColor = "Yellow";
  s3.addAnimation("yellow",bgy);
  s3.scale = 0.12;
  s4 = createSprite(385, 445, 70, 70);
  s4.shapeColor = "Orange";
  s4.addAnimation("orange",bgo);
  s4.scale = 0.117;
  s5 = createSprite(480, 30, 60, 60);
  s5.shapeColor = "Black";
  s5.addAnimation("black",bgb);
  s5.scale = 0.12;
  dr = createSprite(1040, 30, 20, 60);
  dr.shapeColor = "Red";

  s1Wall1 = createSprite(2465, 150, 20, 220);
  s1Wall1.shapeColor = "Cyan";
  s1Wall2 = createSprite(2650, 50, 350, 20);
  s1Wall2.shapeColor = "Cyan";
  s1Wall3 = createSprite(2835, 150, 20, 220);
  s1Wall3.shapeColor = "Cyan";
  s1Wall4 = createSprite(2650, 250, 350, 20);  
  s1Wall4.shapeColor = "Cyan";

  s2Wall1 = createSprite(3465, 150, 20, 220);
  s2Wall1.shapeColor = "Yellow";
  s2Wall2 = createSprite(3650, 50, 350, 20);
  s2Wall2.shapeColor = "Yellow";
  s2Wall3 = createSprite(3835, 150, 20, 220); 
  s2Wall3.shapeColor = "Yellow";
  s2Wall4 = createSprite(3650, 250, 350, 20);
  s2Wall4.shapeColor = "Yellow";

  s3Wall1 = createSprite(4465, 150, 20, 220);
  s3Wall1.shapeColor = "Magenta";
  s3Wall2 = createSprite(4650, 50, 350, 20);
  s3Wall2.shapeColor = "Magenta";
  s3Wall3 = createSprite(4835, 150, 20, 220);  
  s3Wall3.shapeColor = "Magenta";
  s3Wall4 = createSprite(4650, 250, 350, 20);  
  s3Wall4.shapeColor = "Magenta";

  s4Wall1 = createSprite(5465, 150, 20, 220);
  s4Wall1.shapeColor = "Orange";
  s4Wall2 = createSprite(5650, 50, 350, 20);
  s4Wall2.shapeColor = "Orange";
  s4Wall3 = createSprite(5835, 150, 20, 220);  
  s4Wall3.shapeColor = "Orange";
  s4Wall4 = createSprite(5650, 250, 350, 20);  
  s4Wall4.shapeColor = "Orange";

  s5Wall1 = createSprite(6465, 150, 20, 220);
  s5Wall1.shapeColor = "White";
  s5Wall2 = createSprite(6650, 50, 350, 20);
  s5Wall2.shapeColor = "White";
  s5Wall3 = createSprite(6835, 150, 20, 220);  
  s5Wall3.shapeColor = "White";
  s5Wall4 = createSprite(6650, 250, 350, 20);  
  s5Wall4.shapeColor = "White";

  b1 = createSprite(2790, 150, 40, 40);
  b1.addImage(cyanbdgImage);
  b1.scale = 0.15
  b11 = createSprite(277735, 100, 10, 10);
  b11.addImage(cArrowImage);
  b11.scale = 0.03;
  b12 = createSprite(277735, 150, 10, 10);
  b12.addImage(cArrowImage);
  b12.scale = 0.03;
  b13 = createSprite(277735, 200, 10, 10);
  b13.addImage(cArrowImage);
  b13.scale = 0.03;
  dn1 = createSprite(2500, 225, 30, 10);
  dn1.shapeColor = "Cyan";

  b21 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b21.addImage(skucImage);
  b21.scale = 0.04;
  b22 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b22.addImage(skuoImage);
  b22.scale = 0.03;
  b23 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b23.addImage(skumImage);
  b23.scale = 0.04;
  b24 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b24.addImage(skuyImage);
  b24.scale = 0.04;
  dn2 = createSprite(3500, 225, 30, 10);
  dn2.shapeColor = "Yellow";

  b31 = createSprite(4760, 90, 15, 30);
  b31.addImage(magentabdgImage);
  b31.scale = 0.12;
  b32 = createSprite(4760, 130, 15, 30);
  b32.addImage(magentabdgImage);
  b32.scale = 0.12;
  b33 = createSprite(4760, 170, 15, 30);
  b33.addImage(magentabdgImage);
  b33.scale = 0.12;
  b34 = createSprite(4760, 210, 15, 30);
  b34.addImage(magentabdgImage);
  b34.scale = 0.12;
  b35 = createSprite(4800, 90, 15, 30);
  b35.addImage(magentabdgImage);
  b35.scale = 0.12;
  b36 = createSprite(4800, 130, 15, 30);
  b36.addImage(magentabdgImage);
  b36.scale = 0.12;
  b37 = createSprite(4800, 170, 15, 30);
  b37.addImage(magentabdgImage);
  b37.scale = 0.12;
  b38 = createSprite(4800, 210, 15, 30);
  b38.addImage(magentabdgImage);
  b38.scale = 0.12;
  b3b = createSprite(4650, 150, 10, 10);
  //b3b.shapeColor = "Magenta";
  b3b.addImage(hamImage);
  b3b.scale = 0.085;
  dn3 = createSprite(4500, 225, 30, 10);
  dn3.shapeColor = "Magenta";

  b4 = createSprite(5780, 150, 40, 40);
  b4.addImage(orangebdgImage);
  b4.scale = 0.10;
  b41 = createSprite(5820, 150, 10, 100);
  b41.shapeColor = "Orange";
  b42 = createSprite(5480, 150, 10, 100);
  b42.shapeColor = "Red";
  b4b = createSprite(5650, 150, 10, 10);
  b4b.addImage(frbllImage);
  b4b.scale = 0.0625;
  dn4 = createSprite(5500, 225, 30, 10);
  dn4.shapeColor = "Orange";

  b54 = createSprite(6750, 140, 10, 10);
  b54.addImage(b54Image);
  b54.scale = 0.11;
  b51 = createSprite(6550, 125, 20, 130);
  b51.shapeColor = "Black";
  b52 = createSprite(6610, 175, 20, 130);
  b52.shapeColor = "Black";
  b53 = createSprite(6670, 90, 20, 60);
  b53.shapeColor = "Black";
  b55 = createSprite(6670, 205, 20, 70);
  b55.shapeColor = "Black";
  dn5 = createSprite(6500, 225, 30, 10);
  dn5.shapeColor = "White";

  lvs = createSprite(20, 600, 10, 10);
  lvs.addImage(lvsImage);
  lvs.scale = 0.3;
  kys = createSprite(20, 620, 10, 10);
  kys.addImage(kysImage);
  kys.scale = 0.3;

  l1 = createSprite(190, 90, 10, 10);
  l1.addImage(bot1Image);
  l1.scale = 0.025;
  l2 = createSprite(camera.position.x - 190, camera.position.y - 90, 10, 10);
  l2.addImage(bot1Image);
  l2.scale = 0.025;
  l3 = createSprite(camera.position.x - 190, camera.position.y - 90, 10, 10);
  l3.addImage(bot1Image);
  l3.scale = 0.025;
  l4 = createSprite(camera.position.x - 190, camera.position.y - 90, 10, 10);
  l4.addImage(bot1Image);
  l4.scale = 0.025;
  l5 = createSprite(camera.position.x - 190, camera.position.y - 90, 10, 10);
  l5.addImage(bot1Image);
  l5.scale = 0.025;
  l6 = createSprite(camera.position.x - 190, camera.position.y - 90, 10, 10);
  l6.addImage(bot1Image);
  l6.scale = 0.025;

  k1= createSprite(camera.position.x - 90, camera.position.y - 90, 10, 10);
  k1.addImage(cKeyImage);
  k1.scale = 0.07;
  k2= createSprite(camera.position.x - 90, camera.position.y - 90, 10, 10);
  k2.addImage(bKeyImage);
  k2.scale = 0.07;
  k3= createSprite(camera.position.x - 90, camera.position.y - 90, 10, 10);
  k3.addImage(oKeyImage);
  k3.scale = 0.07;
  k4= createSprite(camera.position.x - 90, camera.position.y - 90, 10, 10);
  k4.addImage(mKeyImage);
  k4.scale = 0.07;
  k5= createSprite(camera.position.x - 90, camera.position.y - 90, 10, 10);
  k5.addImage(yKeyImage);
  k5.scale = 0.07;


  head1 = Math.round(width/25.6);
  if(head1 > 0 && head1 <= 10){
    head1 = px10;
  }
  if(head1 > 10 && head1 <= 20){
    head1 = px20;
  }
  if(head1 > 20 && head1 <= 30){
    head1 = px30;
  }
  if(head1 > 30 && head1 <= 40){
    head1 = px40;
  }
  if(head1 > 40 && head1 <= 50){
    head1 = px50;
  }
  if(head1 > 50 && head1 <= 60){
    head1 = px60;
  }
  if(head1 > 60 && head1 <= 70){
    head1 = px70;
  }
  if(head1 > 70 && head1 <= 80){
    head1 = px80;
  }
  if(head1 > 80 && head1 <= 90){
    head1 = px90;
  }
  if(head1 > 90){
    head1 = px100;
  }

  head2 = Math.round(width/55);
  if(head2 > 0 && head2 <= 10){
    head2 = px10;
  }
  if(head2 > 10 && head2 <= 20){
    head2 = px20;
  }
  if(head2 > 20 && head2 <= 30){
    head2 = px30;
  }
  if(head2 > 30 && head2 <= 40){
    head2 = px40;
  }
  if(head2 > 40 && head2 <= 50){
    head2 = px50;
  }
  if(head2 > 50 && head2 <= 60){
    head2 = px60;
  }
  if(head2 > 60 && head2 <= 70){
    head2 = px70;
  }
  if(head2 > 70 && head2 <= 80){
    head2 = px80;
  }
  if(head2 > 80 && head2 <= 90){
    head2 = px90;
  }
  if(head2 > 90){
    head2 = px100;
  }

  pixe20 = Math.round(width/96);
  if(pixe20 > 0 && pixe20 <= 5){
    pixe20 = px5;
  }
  if(pixe20 > 5 && pixe20 <= 10){
    pixe20 = px10;
  }
  if(pixe20 > 10 && pixe20 <= 15){
    pixe20 = px15;
  }
  if(pixe20 > 15 && pixe20 <= 20){
    pixe20 = px20;
  }
  if(pixe20 > 20 && pixe20 <= 25){
    pixe20 = px25;
  }
  if(pixe20 > 25 && pixe20 <= 30){
    pixe20 = px30;
  }
  if(pixe20 > 30 && pixe20 <= 35){
    pixe20 = px35;
  }
  if(pixe20 > 35 && pixe20 <= 40){
    pixe20 = px40;
  }
  if(pixe20 > 40 && pixe20 <= 50){
    pixe20 = px50;
  }
  if(pixe20 > 50){
    pixe20 = px60;
  }




  

  input = createInput("Player Name");
  input.position(width/2 - width/11.3,(height/2+height/3));
  input.size(width/9.6, width/48);
  //200, 40
  input.style('background',"white");
  input.style('font-size', pixe20);
  //20px
 
  
  button1 = createButton("Enter");
  button1.position(width/2 + width/24,(height/2+height/3 + 1));  
  button1.size(width/19.2, width/42.7);
  //100, 45
  button1.style('font-size', pixe20);
  button1.style('backgroundColor', 'white');
  //20px

  buttonPause = createButton("II");
  buttonPause.position(width/6.19, width/2.47);  
  //310, 777
  buttonPause.size(width/38.4, width/38.4);
  //50, 50
  buttonPause.style('font-size', pixe20);
  buttonPause.style('backgroundColor', 'black');
  buttonPause.style('color', 'white');

  buttonPlay = createButton("Resume");
  buttonPlay.position(width/2 - width/12.8, width/12.8);
  //width/2-150, 150  
  buttonPlay.size(width/6.4, width/9.6);
  //300, 200
  buttonPlay.style('font-size', head2);
  buttonPlay.style('backgroundColor', 'black');
  buttonPlay.style('color', 'white');
  
  buttonBeg = createButton("Teleport to the Beginning");
  buttonBeg.position(width/2 - width/12.8, width/4.8); 
  //width/2-150, 400
  buttonBeg.size(width/6.4, width/9.6);
  //300, 200
  buttonBeg.style('font-size', head2);
  buttonBeg.style('backgroundColor', 'black');
  buttonBeg.style('color', 'white');

  buttonInst = createButton("Instructions");
  buttonInst.position(width/2 - width/12.8, width/2.95);  
  //width/2-150, 650  
  buttonInst.size(width/6.4, width/9.6);
  //300, 200
  buttonInst.style('font-size', head2);
  buttonInst.style('backgroundColor', 'black');
  buttonInst.style('color', 'white');
  
  buttonE = createButton("Easy");  
  buttonE.position(width/2 - width/8 - width/38.4,(height/2+height/5 + 1));  
  buttonE.size(width/19.2, width/48);
  //100, 40
  buttonE.style('font-size', pixe20);
  buttonE.style('backgroundColor', 'white');
  //20px
  buttonM = createButton("Medium");
  buttonM.position(width/2 - width/38.4,(height/2+height/5 + 1));  
  buttonM.size(width/19.2, width/48);
  //100, 40
  buttonM.style('font-size', pixe20);
  buttonM.style('backgroundColor', 'white');
  //20px
  buttonH = createButton("Hard");
  buttonH.position(width/2 + width/8 - width/38.4,(height/2 + height/5 + 1));  
  buttonH.size(width/19.2, width/48);
  //100, 40
  buttonH.style('font-size', pixe20);
  buttonH.style('backgroundColor', 'white');
  //20px

  //buttonC = createButton("Computer");
  //buttonC.position(width/2 - width/38.4,(height/2+height/4));  
  //buttonC.size(width/19.2, width/48);
  ////100, 40
  //buttonC.style('font-size', pixe20);
  //buttonC.style('backgroundColor', 'LimeGreen');
  //20px
  //buttonP = createButton("Phone");
  //buttonP.position(width/2 + width/21 - 50,(height/2+height/4));  
  //buttonP.size(100, 40);
  //buttonP.style('font-size', '20px');
  //buttonP.style('backgroundColor', 'white');

  upB = createButton("Up");
  upB.position(width/2 - width/38.4,(height/2 + height/3 - 100));  
  upB.size(width/19.2, width/48);
  //100, 40
  upB.style('font-size', pixe20);
  //20px
  downB = createButton("Down");
  downB.position(width/2 - width/38.4,(height/2 + height/3));  
  downB.size(width/19.2, width/48);
  //100, 40
  downB.style('font-size', pixe20);
  //20px
  leftB = createButton("Left");
  leftB.position(width/2 - width/38.4 - width/17,(height/2 + height/3 - width/38.4));  
  leftB.size(width/19.2, width/48);
  //100, 40
  leftB.style('font-size', pixe20);
  //20px
  rightB = createButton("Right");
  rightB.position(width/2 - width/38.4 + width/17,(height/2 + height/3 - width/38.4));  
  rightB.size(width/19.2, width/48);
  //100, 40
  rightB.style('font-size', pixe20);
  //20px
  shiftB = createButton("Shift");
  shiftB.position(width/2 - width/38.4,(height/2 + height/3 - width/38.4));  
  shiftB.size(width/19.2, width/48);
  //100, 40
  shiftB.style('font-size', pixe20);
  //20px

  boyb = createImg('Boy1.png');
  boyb.position((width/2 - width/6 - width/38.4),height/2 - width/17.5);
  boyb.size(width/22, width/12.8);
  //90, 150
  robotb = createImg('Robot1.png');
  robotb.position((width/2 - ((width/12.8)/2)),height/2 - width/17.5);
  robotb.size(width/12.8, width/14.75);
  //150, 130
  girlb = createImg('Girl1.png');
  girlb.position(width/2 + width/6 - width/38.4,height/2 - width/17.5);
  girlb.size(width/22, width/12.8);
  //90, 150

  //apos = "'";
  //sev = 75;
  
  //head11 = apos + sev + apos;
  //head1 = head11;

  

  heading1 = createElement('h1');
  heading1.style('color', 'black')
  heading1.html("The Spectral Maze!");
  heading1.position(width/2 - width/6,height/3 - height/3.5);
  heading1.style('font-size', head1);
  //75px

  heading2 = createElement('h2');
  heading2.style('color', 'black')
  heading2.html("'Defeat the Engima Realm'");
  heading2.position(width/2 - width/8.7,height/2.5 - height/4.3);
  heading2.style('font-size', head2);
  //35px

  hid = createElement('h2');
  hid.style('color', 'black');
  hid.html("Please pick your character, choose your difficulty, and enter your name!");
  hid.position(width/2 - width/2.75, height/2 + height/3 + width/38.4);
  hid.style('font-size', head2);
  //35px
  //hid.style('stroke', 'red');
  //hid.style('strokeWeight', '4');

  lid = createElement('h2');
  lid.style('color', 'black');
  lid.html("A game by: Suraj Ganachari!");
  lid.position(width/2 - width/8.2, height/2.5 - height/2.6);
  lid.style('font-size', head2);

  //if(hid === 0){
  //  fill(0, 0, 0);
//
  //  textSize(8);
  //  textStyle(BOLD);
  //  text("Please pick your character, choose your difficulty, and enter your name!", camera.position.x - 135, camera.position.y + 100);
  //  textStyle(NORMAL);
  //}

  //iboy = createSprite(boyb.x, boyb.y, 60, 70);
  //iboy.shapeColor = "White";
  //igirl = createSprite(width/2, height/2, 60, 70);
  //igirl.shapeColor = '#46a01e';
  //irobot = createSprite((width/2+width/2), height/2, 60, 70);
  //irobot.shapeColor = '#46a01e';



  input.visible=false;
  button1.visible=false;
  buttonPause.visible=false;
  buttonPlay.visible=false;
  buttonBeg.visible=false;
  buttonInst.visible=false;
  heading1.visible=false;
  heading2.visible=false;


}


function draw() {
  background(bg);
timeit()
if (gameState!=="enter"){
l1.x = Player.x - 190 + 44;
l1.y = Player.y - 90 - 4.4;
l2.x = Player.x - 190 + 54;
l2.y = Player.y - 90 - 4.4;
l3.x = Player.x - 190 + 64;
l3.y = Player.y - 90 - 4.4;
l4.x = Player.x - 190 + 74;
l4.y = Player.y - 90 - 4.4;
l5.x = Player.x - 190 + 84;
l5.y = Player.y - 90 - 4.4;
l6.x = Player.x - 190 + 94;
l6.y = Player.y - 90 - 4.4;
}

// k1.x = Player.x + 190 - 90;
// k1.y = Player.y - 90 - 4.4;
// k2.x = Player.x + 190 - 80;
// k2.y = Player.y - 90 - 4.4;
// k3.x = Player.x + 190 - 70;
// k3.y = Player.y - 90 - 4.4;
// k4.x = Player.x + 190 - 60;
// k4.y = Player.y - 90 - 4.4;
// k5.x = Player.x + 190 - 50;
// k5.y = Player.y - 90 - 4.4;
  lvs.x = 100073;
  lvs.y = 90004;
  kys.x = 700005;
  kys.y = 900004;

if(Player.x < 1300 && Player.y < 6000 && Player.x > 0){
  if(Player.x !== 300 && Player.y !== 4444){
    lvs.x = Player.x - 173;
    lvs.y = Player.y - 94;
    kys.x = Player.x + 115;
    kys.y = Player.y - 94;
  }
}


k1.x = Player.x + 190 - 50;
k1.y = Player.y - 90 - 4.4;
k2.x = Player.x + 190 - 30;
k2.y = Player.y - 90 - 4.4;
k3.x = Player.x + 190 - 40;
k3.y = Player.y - 90 - 4.4;
k4.x = Player.x + 190 - 20;
k4.y = Player.y - 90 - 4.4;
k5.x = Player.x + 190 - 10;
k5.y = Player.y - 90 - 4.4;

k1.visible = false;
k2.visible = false;
k3.visible = false;
k4.visible = false;
k5.visible = false;

if(Player.x < 1300 && Player.y < 6000){
  if(Player.x !== 300 && Player.y !== 4444){
  if(kc === 1){
    k1.visible =true;
  }
  if(kb === 1){
    k2.visible =true;
  }
  if(ko === 1){
    k3.visible =true;
  }
  if(km === 1){
    k4.visible =true;
  }
  if(ky === 1){
    k5.visible =true;
  }
  }
}

l1.visible = false;
l2.visible = false;
l3.visible = false;
l4.visible = false;
l5.visible = false;
l6.visible = false;

  // if(plc === "robot"){
  //   if(l === 6){
  //     l1.show();
  //     l2.show();
  //     l3.show();
  //     l4.show();
  //     l5.show();
  //     l6.show();
  //   }
  //   if(l === 5){
  //     l1.show();
  //     l2.show();
  //     l3.show();
  //     l4.show();
  //     l5.show();
  //     l6.hide();
  //   }
  //   if(l === 4){
  //     l1.show();
  //     l2.show();
  //     l3.show();
  //     l4.show();
  //     l5.hide();
  //     l6.hide();
  //   }
  //   if(l === 3){
  //     l1.show();
  //     l2.show();
  //     l3.show();
  //     l4.hide();
  //     l5.hide();
  //     l6.hide();
  //   }
  //   if(l === 2){
  //     l1.show();
  //     l2.show();
  //     l3.hide();
  //     l4.hide();
  //     l5.hide();
  //     l6.hide();
  //   }
  //   if(l === 1){
  //     l1.show();
  //     l2.hide();
  //     l3.hide();
  //     l4.hide();
  //     l5.hide();
  //     l6.hide();
  //   }
  // }

  if(plc === "robot"){
    l1.addImage(bot1Image);
    l1.scale = 0.025;
    l2.addImage(bot1Image);
    l2.scale = 0.025;
    l3.addImage(bot1Image);
    l3.scale = 0.025;
    l4.addImage(bot1Image);
    l4.scale = 0.025;
    l5.addImage(bot1Image);
    l5.scale = 0.025;
    l6.addImage(bot1Image);
    l6.scale = 0.025;

    if(l === 6){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = true;
      l6.visible = true;
    }
    if(l === 5){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = true;
      l6.visible = false;
    }
    if(l === 4){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 3){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 2){
      l1.visible = true;
      l2.visible = true;
      l3.visible = false;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 1){
      l1.visible = true;
      l2.visible = false;
      l3.visible = false;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
  }
  if(plc === "boy"){
    l1.addImage(boy1Image);
    l1.scale = 0.025;
    l2.addImage(boy1Image);
    l2.scale = 0.025;
    l3.addImage(boy1Image);
    l3.scale = 0.025;
    l4.addImage(boy1Image);
    l4.scale = 0.025;
    l5.addImage(boy1Image);
    l5.scale = 0.025;
    l6.addImage(boy1Image);
    l6.scale = 0.025;
    
    if(l === 6){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = true;
      l6.visible = true;
    }
    if(l === 5){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = true;
      l6.visible = false;
    }
    if(l === 4){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 3){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 2){
      l1.visible = true;
      l2.visible = true;
      l3.visible = false;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 1){
      l1.visible = true;
      l2.visible = false;
      l3.visible = false;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
  }
  if(plc === "girl"){
    l1.addImage(girl1Image);
    l1.scale = 0.025;
    l2.addImage(girl1Image);
    l2.scale = 0.025;
    l3.addImage(girl1Image);
    l3.scale = 0.025;
    l4.addImage(girl1Image);
    l4.scale = 0.025;
    l5.addImage(girl1Image);
    l5.scale = 0.025;
    l6.addImage(girl1Image);
    l6.scale = 0.025;
    
    if(l === 6){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = true;
      l6.visible = true;
    }
    if(l === 5){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = true;
      l6.visible = false;
    }
    if(l === 4){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = true;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 3){
      l1.visible = true;
      l2.visible = true;
      l3.visible = true;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 2){
      l1.visible = true;
      l2.visible = true;
      l3.visible = false;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
    if(l === 1){
      l1.visible = true;
      l2.visible = false;
      l3.visible = false;
      l4.visible = false;
      l5.visible = false;
      l6.visible = false;
    }
  }

//let fov = PI / 9;

  //time1 = showTime();
if(gameState !== "enter" && gd === 0 && nstrctnschck === 1 && nani === 0){
  tt1 = tt1 + 1;
  if(tt1 % 25 === 0){
    tt2 = tt2 - 1;
  }
  tt3 = tt2 / 60;
  if(tt3 == 5){
    tt4 = 5;
    tt5 = 00;
  }
  if(tt3 >= 4 && tt3 < 5){
    tt4 = 4;
    tt5 = tt2 - 240;
  }
  if(tt3 >= 3 && tt3 < 4){
    tt4 = 3;
    tt5 = tt2 - 180;
  }
  if(tt3 >= 2 && tt3 < 3){
    tt4 = 2;
    tt5 = tt2 - 120;
  }
  if(tt3 >= 1 && tt3 < 2){
    tt4 = 1;
    tt5 = tt2 - 60;
  }
  if(tt3 < 1){
    tt4 = 0;
    tt5 = tt2;
  }
  if (tt3 === 0){
    l = 0;

  }


}
  Player.visible=true;
if (gameState==="enter"){
  //background("black")
  input.visible=true;
  button1.visible=true;
  buttonPause.hide();
  buttonPlay.hide();
  buttonBeg.hide();
  buttonInst.hide();
  heading1.visible=true;
  heading2.visible=true;
  Player.visible=false;
  upB.hide();
  downB.hide();
  leftB.hide();
  rightB.hide();
  shiftB.hide();
  if(plc === "boy"){
    Player.changeAnimation("rightboy", player1boyImage);
    Player.scale = 0.065;
  }
  if(plc === "girl"){
    Player.changeAnimation("rightgirl", player1girlImage);
    Player.scale = 0.065;
  }
  if(plc === "robot"){
    Player.changeAnimation("rightrobot", player1robotImage);
    Player.scale = 0.075;
  }
}

if(bop === 1 && bep === 1){
button1.mousePressed(()=>{
  input.hide();
  button1.hide();
  buttonPause.visible = true;
  buttonPause.show();
  boyb.hide();
  girlb.hide();
  robotb.hide();
  heading1.hide();
  heading2.hide();
  buttonE.hide();
  buttonM.hide();
  buttonH.hide();
  //buttonC.hide();
  //buttonP.hide();
  var name= input.value();
  name1=name;
  gameState="play";
  Player.x = 50;
  Player.y = 600;
  //Player.x = 85;
  //Player.y = 630;
  //Player.x = 1120;
  //Player.y = 80;
  hid.hide();
  lid.hide();
})
}

buttonPause.visible = false;
buttonPause.hide();

if(Player.x > 0 && Player.x < 1200 && Player.y > 0 && Player.y < 700){
  buttonPause.visible = true;
  buttonPause.show();
}

//buttonC.mousePressed(()=>{
//  buttonC.style('backgroundColor', 'LimeGreen');
//  //buttonP.style('backgroundColor', 'white');
//  bup = 0;
//})

///buttonP.mousePressed(()=>{
////  buttonC.style('backgroundColor', 'white');
//  buttonP.style('backgroundColor', 'LimeGreen');
//  bup = 1;
//})

boyb.mousePressed(()=>{
  plc = "boy"
  bop = 1;
  boyb.size(width/16, width/9.6);
  //120, 200
  girlb.size(width/32, width/19.2);
  //60, 100
  robotb.size(width/19.2, width/22.15)
  //100, 86.7
  //iboy.shapeColor = "SeaGren";
  //igirl.shapeColor = '#46a01e';
  //irobot.shapeColor = '#46a01e';
})

girlb.mousePressed(()=>{
  plc = "girl"
  bop = 1;
  boyb.size(width/32, width/19.2);
  //60, 100
  girlb.size(width/16, width/9.6);
  //120, 200
  robotb.size(width/19.2, width/22.15)
  //100, 86.7
  //iboy.shapeColor = '#46a01e';
  //igirl.shapeColor = "SeaGren";
  //irobot.shapeColor = '#46a01e';
})

robotb.mousePressed(()=>{
  plc = "robot"
  bop = 1;
  boyb.size(width/32, width/19.2);
  //60, 100
  girlb.size(width/32, width/19.2);
  //60, 100
  robotb.size(width/9.6, width/11.08)
  //200, 173.3
  //iboy.shapeColor = '#46a01e';
  //igirl.shapeColor = '#46a01e';
  //irobot.shapeColor = "SeaGren";
})

buttonE.mousePressed(()=>{
  buttonE.style('backgroundColor', 'limegreen');
  buttonM.style('backgroundColor', 'white');
  buttonH.style('backgroundColor', 'white');
  l = 5;
  bep = 1;
  chall = 1;
})

buttonM.mousePressed(()=>{
  buttonE.style('backgroundColor', 'white');
  buttonM.style('backgroundColor', 'yellow');
  buttonH.style('backgroundColor', 'white');
  l = 3;
  bep = 1;
  chall = 2;
})

buttonH.mousePressed(()=>{
  buttonE.style('backgroundColor', 'white');
  buttonM.style('backgroundColor', 'white');
  buttonH.style('backgroundColor', 'crimson');
  l = 1;
  bep = 1;
  chall = 3;
})

  buttonPlay.visible = false;
  buttonPlay.hide();
  
  buttonBeg.visible = false;
  buttonBeg.hide();
  
  buttonInst.visible = false;
  buttonInst.hide();

  

buttonPause.mousePressed(()=>{
  nani = 1;
  
})

buttonPlay.mousePressed(()=>{
  nani = 0;
})

if(nani === 1){
  buttonPause.visible = false;
  buttonPause.hide();
}

buttonBeg.mousePressed(()=>{
  Player.x = 85;
  Player.y = 630;
  nani = 0;
})

buttonInst.mousePressed(()=>{
  instplayx = Player.x;
  instplayy = Player.y;
  Player.x = 300;
  Player.y = 6666;
  nani = 0;
})

if(nani === 1){
  buttonPlay.visible = true;
  buttonPlay.show();
  
  buttonBeg.visible = true;
  buttonBeg.show();
  
  buttonInst.visible = true;
  buttonInst.show();
}

if (gameState!=="enter" && nani === 0){

  if(go === 0 && bup === 0){
    if(keyIsDown(UP_ARROW) || keyIsDown(87)){
      Player.y = Player.y - 5;
    }
  
    if(keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      Player.y = Player.y + 5;
    }

    if(Player.x < 3900 || Player.x > 5900){ 
      if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        Player.x = Player.x - 5;
        if(plc === "boy"){
          Player.changeAnimation("leftboy", player2boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("leftgirl", player2girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("leftrobot", player2robotImage);
        }
      }
  
      if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        Player.x = Player.x + 5;
        if(plc === "boy"){
          Player.changeAnimation("rightboy", player1boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("rightgirl", player1girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("rightrobot", player1robotImage);
        }
      }
    }

  }

  if(bup === 1){
    upB.show();
    downB.show();
    leftB.show();
    rightB.show();
    shiftB.hide();
    if(Player.x > 1900 && Player.x < 2900){
      shiftB.show();
    }

    upB.mousePressed(()=>{
      Player.y = Player.y - 20;
    })
    downB.mousePressed(()=>{
      Player.y = Player.y + 20;
    })
    if(Player.x < 3900 || Player.x > 5900){ 
      leftB.mousePressed(()=>{
        Player.x = Player.x - 20;
      })
      rightB.mousePressed(()=>{
        Player.x = Player.x + 20;
      })
    }


    if(Player.x > 1900 && Player.x < 2900){
      leftB.mousePressed(()=>{
        Player.x = Player.x + 20;
      })
      rightB.mousePressed(()=>{
        Player.x = Player.x - 20;
      })
      
      pd = pd + 1;
      if (pd >= 20){
        shiftB.mousePressed(()=>{
          pd = 1;
          spawnP();
        })
      }
    }
  }

  if(Player.x > 1900 && Player.x < 2900){
      if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        Player.x = Player.x + 5;
        if(plc === "boy"){
          Player.changeAnimation("leftboy", player2boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("leftgirl", player2girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("leftrobot", player2robotImage);
        }
      }
  
      if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        Player.x = Player.x - 5;
        if(plc === "boy"){
          Player.changeAnimation("rightboy", player1boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("rightgirl", player1girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("rightrobot", player1robotImage);
        }
      }
    
  }

  if(Player.x > 5900 && Player.x < 6900){
    if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      if(bgs === 0){
        Player.x = Player.x + 5;
      }
      if(plc === "boy"){
        Player.changeAnimation("leftboy", player2boyImage);
      }
      if(plc === "girl"){
        Player.changeAnimation("leftgirl", player2girlImage);
      }
      if(plc === "robot"){
        Player.changeAnimation("leftrobot", player2robotImage);
      }
    }

    if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      if(bgs === 0){
        Player.x = Player.x - 5;
      }
      if(plc === "boy"){
        Player.changeAnimation("rightboy", player1boyImage);
      }
      if(plc === "girl"){
        Player.changeAnimation("rightgirl", player1girlImage);
      }
      if(plc === "robot"){
        Player.changeAnimation("rightrobot", player1robotImage);
      }
    }
  
}
}

  if(Player.isTouching(s1) && slb1 === 0){
    Player.x = 2500;
    Player.y = 150;
    slb1 = 1;
  }
  
  dn1.x = 444444;
  if(gs === 0){
    dn1.x = 2500;

  }

  if(Player.isTouching(dn1)){
    gs = 1;
    b11.x = 2735;
    b12.x = 2735;
    b13.x = 2735;
  }

  if(gs === 1 && sl1 === 0){
    b1.velocityY = -2;
    b11.velocityX = -3;
    b12.velocityX = -3;
    b13.velocityX = -3;
    sl1 = 1;
  }
  
  if(Player.isTouching(b11)){
    l = l - 1;
    b11.y = b11.y + 5000;
  }
  if(Player.isTouching(b12)){
    l = l - 1;
    b12.y = b12.y + 5000;
  }
  if(Player.isTouching(b13)){
    l = l - 1;
    b13.y = b13.y + 5000;
  }
  
  if(b11.x <= 2495 || b12.x <= 2495 || b13.x <= 2495){
    if(sl1 === 1){
      b11.y = 100;
      b12.y = 150;
      b13.y = 200;

      b11.x = 2735;
      b12.x = 2735;
      b13.x = 2735;
      
    }
  }

  //if(Player.x > 1900 && Player.x < 2900){
  //  if (frameCount % 20 === 0) {
  //    if(keyIsDown(SHIFT)){
  //      spawnP();
  //    }
  //  }
  //}

  if(Player.x > 1900 && Player.x < 2900){
    if(gs === 1){
      cd = cd + 1;
      if (cd >= 20){
        if(keyIsDown(SHIFT) || keyIsDown(13)){
          spawnP();
          cd = 0;
        }
      }
    }
  }
  
  if(b1.isTouching(pGroup) && sl2 === 0 && go === 0){
    Player.x = 160;
    Player.y = 170;
    sl2 = 1;
    k = k + 1;
    kc = 1;
    slb1 = 2;
  }

  if(Player.isTouching(s1) && slb1 % 2 === 0){
    Player.x = 110;
    Player.y = 230;
    slb1 = slb1 + 1;
  }

  if(Player.isTouching(s1) && slb1 % 2 !== 0){
    Player.x = 160;
    Player.y = 170;
    slb1 = slb1 + 1;
  }


  if(Player.isTouching(s3) && slb2 === 0){
    Player.x = 3500;
    Player.y = 150;
    slb2 = 1;
  }

  dn2.x = 444444;
  if(ygs === 0){
    dn2.x = 3500;
    b21.x = 444444;
    b22.x = 444444;
    b23.x = 444444;
    b24.x = 444444;
  }

  if(Player.isTouching(dn2)){
    ygs = 1;
    b21.x = Math.round(random(3500, 3800));
    b22.x = Math.round(random(3500, 3800));
    b23.x = Math.round(random(3500, 3800));
    b24.x = Math.round(random(3500, 3800));
    b21.velocityY = Math.round(random(2, 4));
    b22.velocityY = Math.round(random(2, 4));
    b23.velocityY = Math.round(random(2, 4));
    b24.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b21)){
    l = l - 1;
    b21.y = 70;
    b21.x = Math.round(random(3500, 3800));
    b21.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b22)){
    l = l - 1;
    b22.y = 70;
    b22.x = Math.round(random(3500, 3800));
    b22.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b23)){
    l = l - 1;
    b23.y = 70;
    b23.x = Math.round(random(3500, 3800));
    b23.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b24)){
    yb = yb + 1;
    b24.y = 70;
    b24.x = Math.round(random(3500, 3800));
    b24.velocityY = Math.round(random(2, 4));
  }

  if(b21.isTouching(s2Wall4)){
    b21.y = 70;
    b21.x = Math.round(random(3500, 3800));
    b21.velocityY = Math.round(random(2, 4));
  }

  if(b22.isTouching(s2Wall4)){
    b22.y = 70;
    b22.x = Math.round(random(3500, 3800));
    b22.velocityY = Math.round(random(2, 4));
  }

  if(b23.isTouching(s2Wall4)){
    b23.y = 70;
    b23.x = Math.round(random(3500, 3800));
    b23.velocityY = Math.round(random(2, 4));
  }

  if(b24.isTouching(s2Wall4)){
    b24.y = 70;
    b24.x = Math.round(random(3500, 3800));
    b24.velocityY = Math.round(random(2, 4));
  }

  if(yb === 10 && slb2 === 1){
    Player.x = 1080;
    Player.y = 410;
    slb2 = 2;
    k = k + 1;
    ky = 1;
  }

  if(Player.isTouching(s3) && slb2 % 2 === 0){
    Player.x = 1080;
    Player.y = 310;
    slb2 = slb2 + 1;
  }

  if(Player.isTouching(s3) && slb2 % 2 !== 0){
    Player.x = 1080;
    Player.y = 410;
    slb2 = slb2 + 1;
  }



  if(Player.isTouching(s2) && slb3 === 0){
    Player.x = 4500;
    Player.y = 150;
    slb3 = 1;
  }

  dn3.x = 444444;
  if(mgs === 0){
    dn3.x = 4500;
    b3b.x = 444444
  }

  if(Player.isTouching(dn3)){
    mgs = 1;
    b3b.x = 4650;
    b3b.velocityX = 4;
    b3b.velocityY = -3.33333;
  }

  if(b3b.isTouching(b31)){
    b3b.bounceOff(b31);
    b31.y = 55555;
  }

  if(b3b.isTouching(b32)){
    b3b.bounceOff(b32);
    b32.y = 55555;
  }

  if(b3b.isTouching(b33)){
    b3b.bounceOff(b33);
    b33.y = 55555;
  }

  if(b3b.isTouching(b34)){
    b3b.bounceOff(b34);
    b34.y = 55555;
  }

  if(b3b.isTouching(b35)){
    b3b.bounceOff(b35);
    b35.y = 55555;
  }

  if(b3b.isTouching(b36)){
    b3b.bounceOff(b36);
    b36.y = 55555;
  }

  if(b3b.isTouching(b37)){
    b3b.bounceOff(b37);
    b37.y = 55555;
  }
  
  if(b3b.isTouching(b38)){
    b3b.bounceOff(b38);
    b38.y = 55555;
  }

  if(b3b.isTouching(s3Wall1) && slb3 === 1){
    l = l - 1;
    b3b.x = 4650;
    b3b.y = 150;
    b3b.velocityX = 4;
    b3b.velocityY = -3.33333;
  }

  if(b3b.y > 250){
    b3b.x = 4650;
    b3b.y = 150;
    b3b.velocityX = 4;
    b3b.velocityY = -3.33333;
  }

  if(b3b.y < 50){
    b3b.x = 4650;
    b3b.y = 150;
    b3b.velocityX = 4;
    b3b.velocityY = -3.33333;
  }

  if(sl3 === 0 && b31.y > 50000 && b32.y > 50000 && b33.y > 50000 && b34.y > 50000 && b35.y > 50000 && b36.y > 50000 && b37.y > 50000 && b38.y > 50000){
    Player.x = 860;
    Player.y = 170;
    sl3 = 1;
    slb3 = 2;
    k = k + 1;
    km = 1;
  }

  if(Player.isTouching(s2) && slb3 % 2 === 0){
    Player.x = 720;
    Player.y = 170;
    slb3 = slb3 + 1;
  }

  if(Player.isTouching(s2) && slb3 % 2 !== 0){
    Player.x = 860;
    Player.y = 170;
    slb3 = slb3 + 1;
  }



  if(Player.isTouching(s4) && slb4 === 0){
    Player.x = 5510;
    Player.y = 150;
    slb4 = 1; 
  }

  dn4.x = 444444;
  if(ogs === 0){
    dn4.x = 5500;
    b4b.x = 444444
  }

  if(Player.isTouching(dn4)){
    ogs = 1;
    b4b.x = 5650;
    b4b.velocityX = 3;
    b4b.velocityY = 1.65;
    b4.velocityY = 1.5;
  }

  if(b4b.isTouching(b42)){
    l = l - 1;
    b4b.x = 5650;
    b4b.y = 150;
    b4.y = 150;
    b4b.velocityX = 3;
    b4b.velocityY = 1.65;
    b4.velocityY = 1.5;
  }

  if(b4b.isTouching(b41)){
    Player.x = 385;
    Player.y = 505;
    b4b.y = 55555;
    b4b.velocityX = 55;
    k = k + 1;
    ko = 1;
  }


  if(Player.isTouching(s5) && slb5 === 0){
    Player.x = 6500;
    Player.y = 150;
    slb5 = 1;
  }

  dn5.x = 444444;
  if(bgs === 0){
    dn5.x = 6500;

  }

  if(Player.isTouching(dn5)){
    bgs = 1;
  }

  if(Player.isTouching(b54)){
    l = l + 1;
    Player.x = 480;
    Player.y = 80;
    k = k + 1;
    kb = 1;
  }

  if(k === 5 && Player.isTouching(dr)){
    dr.y = 55555;
    k = 1;
    gd = 1;
  }

  if(l === 0 && go === 0){
    go = 1;
    Player.x = 300;
    Player.y = 4444;
  }

  if(Player.x === 300 && Player.y === 4444){
    background(grImage);
  }

  if(Player.isTouching(beg)){
    Player.x = 300;
    Player.y = 6666;

    instplayx = 85;
    instplayy = 630;
  }

  if(Player.isTouching(begy)){
    //Player.x = 300;
    //Player.y = 8888;
    Player.x = instplayx;
    Player.y = instplayy;
    if(nstrctnschck === 0){
      nstrctnschck = 1;
    }
    //Player.x = 710;
    //Player.y = 200;
    //Player.x = 1050;
    //Player.y = 450;
    //Player.x = buttonPause.x;
    //Player.y = buttonPause.y;
  }

  zooom = width/550;

  camera.zoom = zooom;

  //console.log(Player.x);
  //console.log(Player.y);
  
  if(Player.isTouching(end)){
    Player.x = 300;
    Player.y = 8888;
  }

  if(Player.isTouching(endy)){
    Player.x = 1120;
    Player.y = 60;
  }

  if(chall === 0){
    scort = l * 1;
  }
  if(chall === 1){
    scort = l * 30;
  }
  if(chall === 2){
    scort = l * 50;
  }
  if(chall === 3){
    scort = l * 150;
  }

  score = tt2 + scort;

 { 
  Player.bounceOff(eWall1);
  Player.bounceOff(eWall2);
  Player.bounceOff(eWall3);
  Player.bounceOff(eWall4);

  Player.bounceOff(wall1);
  Player.bounceOff(wall2);
  Player.bounceOff(wall3);
  Player.bounceOff(wall4);
  Player.bounceOff(wall5);
  Player.bounceOff(wall6);
  Player.bounceOff(wall7);
  Player.bounceOff(wall8);
  Player.bounceOff(wall9);
  Player.bounceOff(wall10);
  Player.bounceOff(wall11);
  Player.bounceOff(wall12);
  Player.bounceOff(wall13);
  Player.bounceOff(wall14);
  Player.bounceOff(wall15);
  Player.bounceOff(wall16);
  Player.bounceOff(wall17);
  Player.bounceOff(wall18);
  Player.bounceOff(wall19);
  Player.bounceOff(wall20);
  Player.bounceOff(wall21);
  Player.bounceOff(wall22);
  Player.bounceOff(wall23);
  Player.bounceOff(wall24);
  Player.bounceOff(wall25);
  Player.bounceOff(wall26);
  Player.bounceOff(wall27);
  Player.bounceOff(wall28);
  Player.bounceOff(wall29);
  Player.bounceOff(wall30);
  Player.bounceOff(wall31);
  Player.bounceOff(wall32);
  Player.bounceOff(wall33);
  Player.bounceOff(wall34);
  Player.bounceOff(wall35);
  Player.bounceOff(wall36);
  Player.bounceOff(wall37);
  Player.bounceOff(wall38);
  Player.bounceOff(wall39);
  Player.bounceOff(wall40);
  Player.bounceOff(wall41);
  Player.bounceOff(wall42);
  Player.bounceOff(wall43);
  Player.bounceOff(wall44);
  Player.bounceOff(wall45);
  Player.bounceOff(wall46);
  Player.bounceOff(wall47);
  Player.bounceOff(wall48);
  Player.bounceOff(wall49);

  Player.bounceOff(s1);
  Player.bounceOff(s2);
  Player.bounceOff(s3);
  Player.bounceOff(s4);
  Player.bounceOff(s5);
  Player.bounceOff(dr);

  Player.bounceOff(beg1); 
  Player.bounceOff(beg2);
  Player.bounceOff(beg3);
  Player.bounceOff(beg4);

  Player.bounceOff(end1); 
  Player.bounceOff(end2);
  Player.bounceOff(end3);
  Player.bounceOff(end4);

  Player.bounceOff(s1Wall1);
  Player.bounceOff(s1Wall2);
  Player.bounceOff(s1Wall3);
  Player.bounceOff(s1Wall4);

  Player.bounceOff(s2Wall1);
  Player.bounceOff(s2Wall2);
  Player.bounceOff(s2Wall3);
  Player.bounceOff(s2Wall4);

  Player.bounceOff(s3Wall1);
  Player.bounceOff(s3Wall2);
  Player.bounceOff(s3Wall3);
  Player.bounceOff(s3Wall4);

  Player.bounceOff(s4Wall1);
  Player.bounceOff(s4Wall2);
  Player.bounceOff(s4Wall3);
  Player.bounceOff(s4Wall4);

  Player.bounceOff(s5Wall1);
  Player.bounceOff(s5Wall2);
  Player.bounceOff(s5Wall3);
  Player.bounceOff(s5Wall4);

  Player.bounceOff(b1);
  b1.bounceOff(s1Wall1);
  b1.bounceOff(s1Wall2);
  b1.bounceOff(s1Wall3);
  b1.bounceOff(s1Wall4);

  Player.bounceOff(b51);
  Player.bounceOff(b52);
  Player.bounceOff(b53);
  Player.bounceOff(b55);

  b3b.bounceOff(s3Wall1);
  b3b.bounceOff(s3Wall2);
  b3b.bounceOff(s3Wall3);
  b3b.bounceOff(s3Wall4);
  b3b.bounceOff(Player);

  b4b.bounceOff(s4Wall1);
  b4b.bounceOff(s4Wall2);
  b4b.bounceOff(s4Wall3);
  b4b.bounceOff(s4Wall4);
  b4b.bounceOff(Player);  
  b4b.bounceOff(b4);

  b4.bounceOff(s4Wall1);
  b4.bounceOff(s4Wall2);
  b4.bounceOff(s4Wall3);
  b4.bounceOff(s4Wall4);
}


  if(Player.x < 1300 && Player.y < 6000){
    camera.position.x = Player.x;
    camera.position.y = Player.y;
  }

  if(Player.x > 1900 && Player.x < 2900){
    camera.position.x = 2650;
    camera.position.y = 150;
    background(gsImage);
    if (gameState!=="enter"){
    l1.x = 2540;
    l1.y = 50;
    l2.x = 2550;
    l2.y = 50;
    l3.x = 2560;
    l3.y = 50;
    l4.x = 2570;
    l4.y = 50;
    l5.x = 2580;
    l5.y = 50;
    l6.x = 2590;
    l6.y = 50;
    }
  }

  if(Player.x > 2900 && Player.x < 3900){
    camera.position.x = 3650;
    camera.position.y = 150;
    background(gsImage);
    if (gameState!=="enter"){
    l1.x = 3515;
    l1.y = 50;
    l2.x = 3525;
    l2.y = 50;
    l3.x = 3535;
    l3.y = 50;
    l4.x = 3545;
    l4.y = 50;
    l5.x = 3555;
    l5.y = 50;
    l6.x = 3565;
    l6.y = 50;
    }
  }

  if(Player.x > 3900 && Player.x < 4900){
    camera.position.x = 4650;
    camera.position.y = 150;
    background(lgsImage);
    if (gameState!=="enter"){
    l1.x = 4540;
    l1.y = 50;
    l2.x = 4550;
    l2.y = 50;
    l3.x = 4560;
    l3.y = 50;
    l4.x = 4570;
    l4.y = 50;
    l5.x = 4580;
    l5.y = 50;
    l6.x = 4590;
    l6.y = 50;
    }
  }

  if(Player.x > 4900 && Player.x < 5900){
    camera.position.x = 5650;
    camera.position.y = 150;
    background(gsImage);
    if (gameState!=="enter"){
    l1.x = 5540;
    l1.y = 50;
    l2.x = 5550;
    l2.y = 50;
    l3.x = 5560;
    l3.y = 50;
    l4.x = 5570;
    l4.y = 50;
    l5.x = 5580;
    l5.y = 50;
    l6.x = 5590;
    l6.y = 50;
    }
  }

  if(Player.x > 5900 && Player.x < 6900){
    camera.position.x = 6650;
    camera.position.y = 150;
    //background(bsImage);
    background(bsImage);
    if (gameState!=="enter"){
    l1.x = 6540;
    l1.y = 50;
    l2.x = 6550;
    l2.y = 50;
    l3.x = 6560;
    l3.y = 50;
    l4.x = 6570;
    l4.y = 50;
    l5.x = 6580;
    l5.y = 50;
    l6.x = 6590;
    l6.y = 50;
    }
  }

  if(Player.x < 1300 && Player.y > 6000 & Player.y < 7000){
    camera.position.x = 300;
    camera.position.y = 6666;
    background(grImage);
    if (gameState!=="enter"){
    l1.x = 132;
    l1.y = 6552;
    l2.x = 142;
    l2.y = 6552;
    l3.x = 152;
    l3.y = 6552;
    l4.x = 162;
    l4.y = 6552;
    l5.x = 172;
    l5.y = 6552;
    l6.x = 182;
    l6.y = 6552;
    }
  }
  
  if(Player.x < 1300 && Player.y > 8000 & Player.y < 9000){
    camera.position.x = 300;
    camera.position.y = 8888;
    background(grImage);
    if (gameState!=="enter"){
    l1.x = 21121152;
    l1.y = 212128794;
    l2.x = 1212162;
    l2.y = 12128794;
    l3.x = 1212172;
    l3.y = 12128794;
    l4.x = 1121282;
    l4.y = 812121794;
    l5.x = 1212192;
    l5.y = 8212794;
    l6.x = 2121202;
    l6.y = 81212794;
    }
  }

  fill(0, 0, 0);
    text("START", 65, 665);
    text("FINISH",1101,70);

  
  //fill(255, 0, 0);

    textSize(10);
    textStyle(BOLD);
    text("Beware " + name1 + "!", 50, 540);
    textStyle(NORMAL);

    drawSprites();
    
  

  fill(0, 0, 0);

    textSize(10);
    text("Instructions", 05, 615);
    //textSize(10);
    //text("Finish", 1101, 30);

  fill(255, 255, 255);
    textSize(5);
    if(nstrctnschck === 1){
      text("Continue", 329, 6704);
      text("Playing", 331, 6710);
    }
    if(nstrctnschck === 0){
      text("Start", 333.5, 6704);
      text("Playing", 331, 6710);
    }

  if(dr.y < 500){
    fill(255, 255, 255);
      textSize(5);
      text("Unlock", 1032, 22.5);
      text("with", 1035, 27.5);
      text("five", 1036, 32.5);
      text("keys", 1035, 37.5);
  }

  textStyle(BOLD);
  fill(0, 0, 0);
    textSize(5);
    text("Use your arrow keys to move around!", 40, 672);
  
  fill(0, 0, 0);
    textSize(5.3);
    text("Use your arrow keys to move around!", 252, 6625);

  fill(0, 0, 0);
    textSize(5);
    text("The character should touch this", 252, 6705);
    textSize(5);
    text("box to start/continue playing =>", 252, 6712);
  textStyle(NORMAL);

  textStyle(BOLD);
  fill(0, 0, 0);
    textSize(6);
    text("You have     life (lives) to complete the game", 90, 6570);
    textSize(6);
    fill('#990030');
    text(l, 118, 6570);
    fill(0, 0, 0);
    textSize(6);
    text("If you fail a challenge, you lose a life", 90, 6580);
    textSize(6);
    text("Once you have 0 lives, its", 90, 6590);

  fill('#990030');
    textSize(6);
    text("GAME OVER", 165, 6590);

  fill(0, 0, 0);
    textSize(6);
    text("If you complete a challenge, from each", 402, 6570);
    textSize(6);
    text("Portal you obtain a key. Once you obtain", 398, 6580);
    fill('#990030');
    textSize(6);
    text("ALL 5 KEYS", 391, 6590);
    fill(0, 0, 0);
    textSize(6);
    text(", you can unlock the final door", 426, 6590);
    textSize(6);
    text("If you have missed collecting the keys from the", 378, 6610);
    textSize(6);
    text("Previous portals, you can go back through the", 380, 6620);
    textSize(6);
    text("Portals from which you have already collected", 380, 6630);
    textSize(6);
    text("The keys so you can collect the remaining keys", 378, 6640);

    
    fill('#990030');
    textSize(12);
    text("Controls:", 456, 6675);
    fill(0, 0, 0);
    textSize(6);
    text("Control the player using the Arrow Keys", 398, 6690);
    textSize(6);
    text("You also need to use Shift at some points", 394, 6700);
    textSize(6);
    text("Alternatively, you can use WASD and Enter", 390, 6710);
    //textSize(6);
    //text("Up Arrow is up, Down Arrow is down", 373, 6700);
    //textSize(6);
    //text("Left Arrow is left, Right Arrow is right", 373, 6710);

    fill('#990030');
    textSize(12);
  text("Goal:", 90, 6625);
    fill(0, 0, 0);
    textSize(6);
    text("Your goal is to navigate and complete the maze", 90, 6640);
    textSize(6);
    text("To complete the maze, you have to earn 5 keys", 90, 6650);
    textSize(6);
    text("You can earn a key by completing a challenge", 90, 6660);
    textSize(6);
    text("To play a challenge, enter a colored portal", 90, 6670);
    textSize(6);
    text("The portals will take you to the Enigma Realm", 90, 6680);
    textSize(6);
    text("Complete the challenge in the portal to obtain a key", 90, 6690);
    textSize(6);
    text("By obtaining 5 keys, you can open the final door", 90, 6700);
    textSize(6);
    text("Conquer the Enigma Realm and finish the maze!", 90, 6710);

    fill('#990030');
    textSize(12);
    text("Pause:", 90, 6740);
    fill(0, 0, 0);
    textSize(6);
    text("There is a pause button at the bottom-left of the screen", 90, 6755);
    textSize(6);
    text("Using the pause menu, you can go back to the beginning,", 90, 6765);
    textSize(6);
    text("Re-read the instructions or just resume playing the game", 90, 6775);


    text("There is a 5 Minute time limit to complete the maze", 367, 6760);
    textSize(6);
    text("If the time runs out, you lose and have to start over", 366, 6770);
    textSize(6);
    textStyle(NORMAL);

    textSize(18);
    text("Congratulations!", 235, 8780);
    textSize(14);
    text("You conquered the Enigma Realm!", 195, 8805);
    textSize(10);
    text("Feel free to try this game as many times as you like by refreshing the page", 140, 8965);
    fill('#990030');
    textStyle(BOLD);
    textSize(12);
    text("Your score is: " + score + "!" , 245, 8825);
    textStyle(NORMAL);
    fill(0, 0, 0);


  textSize(12);
  fill(0, 0, 0);
    text("Lives: ", 2500, 55);
    text("Timer: " + tt4 + ":", 2742, 55);
    if(tt5 > 9){
      text(tt5, 2790, 55);   
    }
    if(tt5 < 10){
      text("0", 2790, 55);
      text(tt5, 2797, 55);   
    }
    if(gs === 1){
      text("Dodge the arrows and use Shift to shoot Bow - ie!", 2510, 255);
    }

  fill(0, 0, 0);
    text("Lives: ", 3475, 55); 
    text("Timer: " + tt4 + ":", 3762, 55);
    if(tt5 > 9){
      text(tt5, 3810, 55);   
    }
    if(tt5 < 10){
      text("0", 3810, 55);
      text(tt5, 3817, 55);   
    }
    if(ygs === 1){
      text("Catch 10 yellow skulls as they fall from the sky!", 3525, 255);
      text("Yellow Skulls Caught: " + yb + "/10", 3570, 55);    
      fill(255, 255, 0);
      text("Also try and avoid touching the other skulls!", 3532, 275);
    }


  fill(0, 0, 0);
    text("Lives: ", 4500, 55);
    text("Timer: " + tt4 + ":", 4742, 55);
    if(tt5 > 9){
      text(tt5, 4790, 55);   
    }
    if(tt5 < 10){
      text("0", 4790, 55);
      text(tt5, 4797, 55);   
    }
    if(mgs === 1){
      text("Destroy all of the magenta graves by bouncing the axe!", 4510, 255);
    }

  fill(0, 0, 0);
    text("Lives: ", 5500, 55);
    text("Timer: " + tt4 + ":", 5742, 55);
    if(tt5 > 9){
      text(tt5, 5790, 55);   
    }
    if(tt5 < 10){
      text("0", 5790, 55);
      text(tt5, 5797, 55);   
    }
    if(ogs === 1){
      text("Defeat Bouncer by getting the fireball into the opposing goal!", 5490, 255);
    }

  fill(0, 0, 0);
    text("Lives: ", 6500, 55);
    text("Timer: " + tt4 + ":", 6742, 55);
    if(tt5 > 9){
      text(tt5, 6790, 55);   
    }
    if(tt5 < 10){
      text("0", 6790, 55);
      text(tt5, 6797, 55);   
    }
    if(bgs === 1){
      text("Here, have a free life!", 6700, 180);
      text("Pssst. Find the secret passage to reach the heart!", 6510, 255);
    }

  fill(0, 0, 0);
    text("Lives: ", 7500, 55);
    text("Timer: " + tt4 + ":", 7742, 55);
    if(tt5 > 9){
      text(tt5, 7790, 55);   
    }
    if(tt5 < 10){
      text("0", 7790, 55);
      text(tt5, 7797, 55);   
    }
    text("??? How are you here ??? Refresh and try not to escape the maze this time ok ???", 7515, 230);

  fill(0, 0, 0);

    text("Black", 466, 25);
    text("Portal", 465, 40);  
    
  fill(0, 255, 255);

    text("Cyan", 87, 165);
    text("Portal", 85, 180);

  fill(255, 128, 0);

    text("Orange", 366, 430);
    text("Portal", 370, 470);


  fill(0, 0, 0);
  textSize(12);
  textStyle(BOLD);
    text("Magenta", 766, 165);
    text("Portal", 774.25, 180);

  fill(255, 0, 255);
  textSize(12);
  textStyle(NORMAL);
    text("Magenta", 767, 165);
    text("Portal", 775, 180);

  fill(255, 255, 0);

    text("Yellow", 1063, 355);
    text("Portal", 1065, 370);

  //Magenta = (790, 170, 60, 60);
  //Yellow = (1080, 360, 60, 60);
  //Orange = (385, 445, 70, 70);
  fill(63, 63, 63);
    //textSize(10);
    //text("Bow-", b1.x - 12, b1.y - 5);
    //textSize(10);
    //text("naparte", b1.x - 16, b1.y + 10);

    //textSize(10);
  //text("Bouncer", b4.x - 19, b4.y + 3);

  if(gs === 0){
  fill(0, 0, 0);
    textSize(9);
    text("Start", 2490, 228);

    fill(0, 255, 255);
    textSize(9);
    text("This is the Bowie the villain", 2590, 130);

    fill(0, 255, 255);
    textSize(9);
    text("If his arrows touch you, you lose a life", 2570, 145);

    fill(0, 255, 255);
    textSize(9);
    text("Shoot him with your arrows by pressing the Shift key", 2537, 160);

    fill(0, 255, 255);
    textSize(9);
    text("If your arrows hit Bowie, you get the Cyan Key", 2552, 175);

    fill(0, 255, 255);
    textSize(9);
    text("<= Touch the start button with your character to begin", 2532, 228);
  }

  if(bgs === 0){
    fill(0, 0, 0);
    textSize(9);
    text("Start", 6490, 228);
  
    fill(255, 255, 255);
    textSize(9);
    text("If you touch the heart, you gain the Black Key and a free life!", 6530, 100);
  
    fill(255, 255, 255);
    textSize(9);
    text("This Portal has no tricks whatsoever", 6570, 125);
  
    fill(255, 255, 255);
    textSize(9);
    text("Just Kidding!", 6620, 150);
  
    fill(255, 255, 255);
    textSize(9);
    text("There are hidden walls that you have to navigate", 6545, 175);
  
    fill(255, 255, 255);
    textSize(9);
    text("<= Touch the start button with your character to begin", 6532, 228);
  }

  if(ogs === 0){
    fill(0, 0, 0);
    textSize(9);
    text("Start", 5490, 228);
    
    fill(255, 165, 0);
    textSize(9);
    text("This is Bouncer the Bad Guy", 5590, 100);
    
    fill(255, 165, 0);
    textSize(9);
    text("If the fireball touches your red goal, you lose a life", 5550, 125);
    
    fill(255, 165, 0);
    textSize(9);
    text("Bounce the fireball back to Bouncer using your character", 5530, 150);
    
    fill(255, 165, 0);
    textSize(9);
    text("If the fireball touches his goal, you get the Orange Key!", 5535, 175);
    
    fill(255, 165, 0);
    textSize(9);
    text("<= Touch the start button with your character to begin", 5532, 228);
  }

  if(mgs === 0){
    fill(0, 0, 0);
    textSize(9);
    text("Start", 4490, 228);
      
    fill(0, 0, 0);
    textSize(9);
    text("Bounce the axe and destroy the graves", 4565, 90);
    
    fill(0, 0, 0);
    textSize(9);
    text("If the axe touches the wall behind-", 4573, 115);

    fill(0, 0, 0);
    textSize(9);
    text(" your character you will lose a life", 4573, 140);
      
    fill(0, 0, 0);
    textSize(9);
    text("Once you destroy all of the graves-", 4573, 165);

    fill(0, 0, 0);
    textSize(9);
    text("you get the Magenta Key!", 4588, 190);
      
    fill(0, 0, 0);
    textSize(9);
    text("<= Touch the start button with your character to begin", 4532, 228);
  }

  if(ygs === 0){
    fill(0, 0, 0);
    textSize(9);
    text("Start", 3490, 228);
        
    fill(255, 255, 0);
    textSize(9);
    text("Catch 10 yellow skulls", 3605, 100);
        
    fill(255, 255, 0);
    textSize(9);
    text("Avoid touching the other skulls!", 3585, 125);
        
    fill(255, 255, 0);
    textSize(9);
    text("If you touch a skull that is not yellow, you will lose a life", 3535, 150);
        
    fill(255, 255, 0);
    textSize(9);
    text("Once you catch 10 yellow skulls, you get the Yellow Key!", 3535, 175);
        
    fill(255, 255, 0);
    textSize(9);
    text("<= Touch the start button with your character to begin", 3535, 228);
  }

  fill(0, 0, 0);
  textSize(12);

  if(Player.x < 1900 && go === 0 && gameState !== "enter"){
    if(Player.y < 6000 || Player.y > 7000){
      //text("Lives: ", camera.position.x - 190, camera.position.y - 90);
      //if(k === 0){
      //  text("Keys: " + k, camera.position.x + 60, camera.position.y - 90);
      //}else{
        //text(k, camera.position.x + 100, camera.position.y - 90);
      //}

      //text(time, 65, 635);5
      //text(tt1, -1100, -1650);
      ///text(tt2, -1100, -1640);
      //text(tt3, -1100, -1630);
      text("Timer: " + tt4 + ":", camera.position.x + 130, camera.position.y + 100);
      if(tt5 > 9){
        text(tt5, camera.position.x + 177, camera.position.y + 100);   
      }
      if(tt5 < 10){
        text("0", camera.position.x + 177, camera.position.y + 100);
        text(tt5, camera.position.x + 184, camera.position.y + 100);   
      }

    }
  }

  if(Player.y > 6000 && Player.y < 7000){
    textStyle(BOLD);

    fill('#990030');
    text("Lives: ", camera.position.x - 210, camera.position.y - 110);
    
      text("Keys: " + k, camera.position.x + 170, camera.position.y - 110);
    
    text("Timer: " + tt4 + ":", camera.position.x + 150, camera.position.y + 80);
      if(tt5 > 9){
        text(tt5, camera.position.x + 201, camera.position.y + 80);   
      }
      if(tt5 < 10){
        text("0", camera.position.x + 201, camera.position.y + 80);
        text(tt5, camera.position.x + 208, camera.position.y + 80);   
      }
    textStyle(NORMAL);
  }
  fill(0, 0, 0);

  if(go === 1){
    textSize(18);
    text("You lost all of your lives!", Player.x - 95, Player.y - 50);
    textSize(18);
    text("You can try again by refreshing the page!", Player.x - 160, Player.y + 60);
    textSize(12);
    text("Feel free to try this game as many times as you like", Player.x - 130, Player.y + 90);
  }

  //console.log(width);
  //console.log(head1);
  
//if(engm <= 0){
//  enigmaSound.play();
//  engm = engm + 1;
//}

//enigmaSound.loop();
}

function spawnP(){
  
  var p = createSprite(Player.x, Player.y, 10, 10);
  p.addImage(rArrowImage);
  p.scale = 0.03;
  p.lifetime = 120;
  p.velocityX = 3;
  pGroup.add(p);

}