window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
}
}
if (navigator.userAgent.match(/Chrome|AppleWebKit/)) {
    window.location.href = "#HERE";
    window.location.href = "#HERE";  /* these take twice */
} else {
    window.location.hash = "HERE";
}

//raindrop drop top

function makeit() {
    // These variables can be used in the drawing functions
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext('2d');
    var drops = [];

    // Init canvas & drops
    init();

    setInterval(function () {
        updateDrop(1);
    }, 200);

    setInterval(function () {
        updateDrop(2);
    }, 400);

    setInterval(function () {
        updateDrop(3);
    }, 300);

    setInterval(function () {
        updateDrop(4);
    }, 160);
    setInterval(function () {
        updateDrop(5);
    }, 220);

    setInterval(function () {
        updateDrop(6);
    }, 440);

    setInterval(function () {
        updateDrop(7);
    }, 450);


    setInterval(function () {
        updateDrop(8);
    }, 150);

    setInterval(function () {
        updateDrop(9);
    }, 210);

    setInterval(function () {
        updateDrop(10);
    }, 400);

    setInterval(function () {
        updateDrop(11);
    }, 135);

    setInterval(function () {
        updateDrop(12);
    }, 176);
    setInterval(function () {
        updateDrop(13);
    }, 365);

    setInterval(function () {
        updateDrop(14);
    }, 469);

    setInterval(function () {
        updateDrop(15);
    }, 200);
    setInterval(function () {
        updateDrop(16);
    }, 274);
      setInterval(function () {
        updateDrop(17);
    }, 349);

    setInterval(function () {
        updateDrop(18);
    }, 215);

    setInterval(function () {
        updateDrop(19);
    }, 423);

    setInterval(function () {
        updateDrop(20);
    }, 400);
    setInterval(function () {
        updateDrop(21);
    }, 185);

    setInterval(function () {
        updateDrop(22);
    }, 130);

    setInterval(function () {
        updateDrop(23);
    }, 239);


    setInterval(function () {
        updateDrop(24);
    }, 256);

    setInterval(function () {
        updateDrop(25);
    }, 200);

    setInterval(function () {
        updateDrop(26);
    }, 326);

    setInterval(function () {
        updateDrop(27);
    }, 423);
    setInterval(function () {
        updateDrop(28);
    }, 400);
    setInterval(function () {
        updateDrop(29);
    }, 200);

    setInterval(function () {
        updateDrop(30);
    }, 260);

    setInterval(function () {
        updateDrop(31);
    }, 287);
  setInterval(function () {
        updateDrop(32);
    }, 345);
    setInterval(function () {
        updateDrop(33);
    }, 200);

    setInterval(function () {
        updateDrop(34);
    }, 400);

    setInterval(function () {
        updateDrop(35);
    }, 430);
    setInterval(function () {
        updateDrop(36);
    }, 478);
      setInterval(function () {
        updateDrop(37);
    }, 200);

    setInterval(function () {
        updateDrop(38);
    }, 400);

    setInterval(function () {
        updateDrop(39);
    }, 110);

    setInterval(function () {
        updateDrop(40);
    }, 143);
    setInterval(function () {
        updateDrop(41);
    }, 264);

    setInterval(function () {
        updateDrop(42);
    }, 400);

    setInterval(function () {
        updateDrop(43);
    }, 431);


    setInterval(function () {
        updateDrop(44);
    }, 400);

    setInterval(function () {
        updateDrop(45);
    }, 186);

    setInterval(function () {
        updateDrop(46);
    }, 210);

    setInterval(function () {
        updateDrop(47);
    }, 200);

    setInterval(function () {
        updateDrop(48);
    }, 320);
    setInterval(function () {
        updateDrop(49);
    }, 350);

    setInterval(function () {
        updateDrop(50);
    }, 310);

    setInterval(function () {
        updateDrop(51);
    }, 200);
      setInterval(function () {
        updateDrop(52);
    }, 400);

    setInterval(function () {
        updateDrop(53);
    }, 260);

    setInterval(function () {
        updateDrop(54);
    }, 167);

    setInterval(function () {
        updateDrop(55);
    }, 200);

    setInterval(function () {
        updateDrop(56);
    }, 400);
    setInterval(function () {
        updateDrop(57);
    }, 300);

    setInterval(function () {
        updateDrop(58);
    }, 450);

    setInterval(function () {
        updateDrop(59);
    }, 266);
    setInterval(function () {
        updateDrop(60);
    }, 100);
    setInterval(function () {
        updateDrop(61);
    }, 50);
    setInterval(function () {
        updateDrop(62);
    }, 40);
    setInterval(function () {
        updateDrop(63);
    }, 80);
    setInterval(function () {
        updateDrop(64);
    }, 90);
    setInterval(function () {
        updateDrop(65);
    }, 110);
    setInterval(function () {
        updateDrop(66);
    }, 320);
    setInterval(function () {
        updateDrop(67);
    }, 40);
    setInterval(function () {
        updateDrop(68);
    }, 45);
    setInterval(function () {
        updateDrop(69);
    }, 60);
    setInterval(function () {
        updateDrop(70);
    }, 75);
    setInterval(function () {
        updateDrop(71);
    }, 95);
    setInterval(function () {
        updateDrop(72);
    }, 35);
    setInterval(function () {
        updateDrop(73);
    }, 110);
    setInterval(function () {
        updateDrop(74);
    }, 125);
    setInterval(function () {
        updateDrop(75);
    }, 135);
    setInterval(function () {
        updateDrop(76);
    }, 260);
    setInterval(function () {
        updateDrop(77);
    }, 360);
    setInterval(function () {
        updateDrop(78);
    }, 250);
    setInterval(function () {
        updateDrop(79);
    }, 220);
    setInterval(function () {
        updateDrop(80);
    }, 180);
    setInterval(function () {
        updateDrop(81);
    }, 195);
    setInterval(function () {
        updateDrop(82);
    }, 245);
    setInterval(function () {
        updateDrop(83);
    }, 154);
    setInterval(function () {
        updateDrop(84);
    }, 340);
    setInterval(function () {
        updateDrop(85);
    }, 320);
    setInterval(function () {
        updateDrop(86);
    }, 260);
    setInterval(function () {
        updateDrop(87);
    }, 160);
    setInterval(function () {
        updateDrop(88);
    }, 160);
    setInterval(function () {
        updateDrop(89);
    }, 160);
    setInterval(function () {
        updateDrop(90);
    }, 160);
    setInterval(function () {
        updateDrop(91);
    }, 160);
    setInterval(function () {
        updateDrop(92);
    }, 160);
    setInterval(function () {
        updateDrop(93);
    }, 160);
    setInterval(function () {
        updateDrop(94);
    }, 160);
    setInterval(function () {
        updateDrop(95);
    }, 160);
    setInterval(function () {
        updateDrop(96);
    }, 160);
    setInterval(function () {
        updateDrop(97);
    }, 160);
    setInterval(function () {
        updateDrop(98);
    }, 160);
    setInterval(function () {
        updateDrop(99);
    }, 160);
    setInterval(function () {
        updateDrop(100);
    }, 160);
    setInterval(function () {
        updateDrop(101);
    }, 160);
    setInterval(function () {
        updateDrop(102);
    }, 160);
    setInterval(function () {
        updateDrop(103);
    }, 160);
    setInterval(function () {
        updateDrop(104);
    }, 160);
    setInterval(function () {
        updateDrop(105);
    }, 160);
    setInterval(function () {
        updateDrop(106);
    }, 160);
    setInterval(function () {
        updateDrop(107);
    }, 100);
    setInterval(function () {
        updateDrop(108);
    }, 50);
    setInterval(function () {
        updateDrop(109);
    }, 160);
    setInterval(function () {
        updateDrop(110);
    }, 160);



    // Function
    function init() {
        canvas.width = 2100;
        canvas.height = 610;
        canvas.style.border = "1px solid black"
        // Draw background
        drawBackground();
        // Draw drops
        var xpos = [10, 20, 30, 40, 50, 60, 70, 70, 76, 151, 267, 500, 400, 750, 900, 1050, 644, 455, 345, 456, 789, 543, 654, 765,35,321,231,451,120, 544, 250,32, 345, 210, 545, 631, 154, 987, 345, 654, 270, 310, 246, 580, 360, 470, 100, 1083, 1243, 120, 340, 789, 978,756,1005,654,678,456,678,867,935,304,505,740,809, 1100, 1203, 1155, 1230, 1010, 734, 680,560,467,698,854,305, 950, 850, 750, 1080, 1240, 1290, 1210, 432,678, 653, 879, 1105, 1170,540, 543, 1500, 1700, 1800, 1900, 2000, 1950, 2050,1950, 1975, 2000];
        var ypos = [30, 20, 60, 80, 76, 490, 30, 40, 79, 550, 44, 32, 54, 523, 42, 730, 834, 935, 38, 677, 43, 21, 812, 19, 7, 258, 14, 932, 40, 23, 49, 712, 37, 415, 420, 335, 42, 315, 216, 339, 25, 9, 434, 2, 46, 526, 227, 12, 5, 23, 9, 15, 43, 25, 346, 184,324,455,480,523,34,65,976,8,334,34,153,224,53,74,464,76,8,5,999,56,459,65,887,67,98,92,34,54,65,76,78, 41, 53, 52, 31, 54, 32, 21, 43, 10, 15,18,43,51,25,256,765,321,569,213,547,756,435,789,567,908,465,345,567,78,423,645,412,312, 412,765,456,105,234,456,754,708,205,230,280, 140, 80, 45, 65, 789, 321, 45, 78, 42, 52,32,134,56,78,345,234,123,678,432, 789,321, 432];
        for (i = 0; i < xpos.length; i++) {
            drops.push(drawDrop(xpos[i], ypos[i]));
        }
    }

    function drawBackground() {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
    }

    function drawDrop(x, y) {
        ctx.beginPath();
        ctx.fillStyle = "#89cff0";
        ctx.moveTo(x - 5, y);
        ctx.lineTo(x, y - 7);
        ctx.lineTo(x + 5, y);
        ctx.arc(x, y, 5, 0, Math.PI);
        ctx.closePath();
        ctx.fill();

        return {
            'x': x,
                'y': y
        };
    }

    function updateDrop(dropNumber) {
        var dropNumber = dropNumber - 1; //Because 0 is first
        // Update position

        if (drops[dropNumber].y >= canvas.height) {
            drops[dropNumber].y = 0;
        } else {
            drops[dropNumber].y += 3;
        }
        //Draw background
        drawBackground();
        //Draw drops
        for (i = 0; i < drops.length; i++) {
            drawDrop(drops[i].x, drops[i].y);
        }
    }

}
window.onload = makeit;
