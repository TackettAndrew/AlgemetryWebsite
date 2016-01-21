window.onload = Onload;
function Onload() {
    //document.getElementById("mute").onclick = dumbbutton;
    document.getElementById("convert").onclick = convert;
}

function convert() {
    
    //INPUTS
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var y1 = document.getElementById("y1").value;
    var y2 = document.getElementById("y2").value;
    var infrac = document.getElementById("infrac").value;
    
    //OUTPUTS
    var outfracmag = "";
    var outmid = "";
    var outmag = "";
    var outtheta = "";
    var outmidmag = "";
    
    //OPERATIONS
    
    //X,Y DIFF
    var xdiff = Number(x2) - Number(x1);
    console.log("xdiff = ", xdiff);
    var ydiff = Number(y2) - Number(y1);
    console.log("ydiff = ", ydiff);
    
    //MAG
    outmag = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2));
    console.log("outmag = ", outmag);
    document.getElementById("outmag").value = outmag;
    
    //OUTMIDMAG
    outmidmag = Math.sqrt(Math.pow(xdiff/2, 2) + Math.pow(ydiff/2, 2));
    console.log(outmidmag);
    document.getElementById("outmidmag").value = outmidmag;
    
    
    //OUTMID
    var outmidx = (Number(x2) + Number(x1))/2;
    console.log(outmidx);
    var outmidy = (Number(y2) + Number(y1))/2;
    console.log(outmidy);
    outmid = (outmidx + ", " + outmidy);
    console.log(outmid);
    document.getElementById("outmid").value = outmid;
    
    //OUTFRACMAG
    outfracmag = Math.sqrt(Math.pow(xdiff*infrac, 2) + Math.pow(ydiff*infrac, 2));
    console.log(outfracmag);
    document.getElementById("outfracmag").value = outfracmag;
    
    //THETA
    outthetarads = Math.atan(ydiff / xdiff);
    outtheta  = outthetarads * (180/3.141592653589793);
    document.getElementById("outtheta").value = outtheta, "°";
    
    //EQUATION
    var slope = Number(xdiff) / Number(ydiff);
    var equation = "x - "+x1+" = "+slope+"(x - "+y1+")";
    console.log(equation);
    
    //LINE
    var c = document.getElementById("line");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 200, 200);
    ctx.moveTo(100,100);
    ctx.lineTo(xdiff+100,ydiff+100);
    ctx.stroke();

}


//DUMB STUFF

var buttoncounter = 0;
function dumbbutton() {
    
    if (buttoncounter == 7) {
        document.getElementById("mute").innerHTML = "";
        buttoncounter = 0
    }
    if (buttoncounter == 6) {
        document.getElementById("mute").innerHTML = "mute";
        buttoncounter = buttoncounter +1
    }
    if (buttoncounter == 5) {
        document.getElementById("mute").innerHTML = "Im running out of ideas";
        buttoncounter = buttoncounter + 1;
    }
    if (buttoncounter == 4) {
        document.getElementById("mute").innerHTML = "why are you still pressing this?";
        buttoncounter = buttoncounter + 1;
    }
    if (buttoncounter == 3) {
        document.getElementById("mute").innerHTML = "I wont make it stop";
        buttoncounter = buttoncounter + 1;
    }
    if (buttoncounter == 2) {
        document.getElementById("mute").innerHTML = "The music never ends";
        buttoncounter = buttoncounter + 1;
    }
    if (buttoncounter == 1) {
        document.getElementById("mute").innerHTML = "Your ears will burn";
        buttoncounter = buttoncounter + 1;
    }
    if (buttoncounter == 0) {
        document.getElementById("mute").innerHTML = "haha just kidding";
        buttoncounter = buttoncounter + 1;
    }
}
