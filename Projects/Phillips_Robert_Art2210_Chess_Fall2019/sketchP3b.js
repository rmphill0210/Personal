let square = 50;
let xCoord = 0;
let yCoord = 0;
let movement = 0;
let positions = [];
let k =0;
let l=0

function tester(){
    push();
    for(k=1;k<=8;k++){
        positions[k] = [k*square];
        for(l=1;l<=8;l++){
            positions[k][l] = [l*square];
            fill(255);
            rect(k,l,square,square);
        }
    }
    print(k,l);
    pop();
}
// ------------------------------------------------------------------------------------------------------ CHESSBOARD
function grid(){
    // CHESSBOARD BORDER
    push();
        rectMode(CORNER);
        noFill();
        strokeWeight(5);
        stroke(155,55,55);
        rect(25,25,450,450);
        rect(45,45,410,410);
    pop();
    // CHESSBOARD
    for(let j=1;j<=8;j++){
        if(j%2!=0){
            for(let i=1;i<=8;i++){
                if(i%2!=0){
                    fill(155,55,55);
                    push();
                    rect(i*square+(square/2),j*square+(square/2),square,square)
                    pop();
                }
            }
        }else{
            for(let i=1;i<=8;i++){
                if(i%2==0){
                    fill(155,55,55);
                    push();
                    rect(i*square+(square/2),j*square+square/2,square,square)
                    pop();
                }
            }
        }
    }
}

// ------------------------------------------------------------------------------------------------------ WHITE PAWNS
function pawn(){
    push();
        xCoord = square*1.5;
        yCoord = square*2.5;
        xPiece = square*1.5;
        yPiece = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}

function pawn2(){
    push();
        xCoord = square*2.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}
function pawn3(){
    push();
        xCoord = square*3.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}
function pawn4(){
    push();
        xCoord = square*4.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}
function pawn5(){
    push();
        xCoord = square*5.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}
function pawn6(){
    push();
        xCoord = square*6.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}
function pawn7(){
    push();
        xCoord = square*7.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}
function pawn8(){
    push();
        xCoord = square*8.5;
        yCoord = square*2.5;
        fill(155,55,55);
        circle(xCoord,yCoord,square/2);
    pop();
}


// ------------------------------------------------------------------------------------------------------ WHITE ROOKS
function rook(){
    push();
        xCoord = square*1.5;
        yCoord = square*1.5;
        rectMode(CENTER);
        rect(xCoord,yCoord,square/2,square*.75);
    pop();
}
function rook2(){
    push();
        xCoord = square*8.5;
        yCoord = square*1.5;
        rectMode(CENTER);
        rect(xCoord,yCoord,square/2,square*.75);
    pop();
}


// ------------------------------------------------------------------------------------------------------ WHITE BISHOPS
function bishop(){
    push();
        xCoord = square*3.5;
        yCoord = square*1.5;
        ellipse(xCoord,yCoord,square/2,square*.75);
    pop();
}
function bishop2(){
    push();
        xCoord = square*6.5;
        yCoord = square*1.5;
        ellipse(xCoord,yCoord,square/2,square*.75);
    pop();
}


// ------------------------------------------------------------------------------------------------------ WHITE KNIGHTS
function knight(){
    push();
        xCoord = square*2.5;
        yCoord = square*1.5;
        triangle(xCoord,yCoord-square*.33,xCoord-square*.25,yCoord+square*.25,xCoord+square*.25,yCoord+square*.25);
    pop();
}
function knight2(){
    push();
        xCoord = square*7.5;
        yCoord = square*1.5;
        triangle(xCoord,yCoord-square*.33,xCoord-square*.25,yCoord+square*.25,xCoord+square*.25,yCoord+square*.25);
    pop();
}


// ------------------------------------------------------------------------------------------------------ WHITE QUEEN
function queen(){
    push();
    xCoord = square*5.5;
    yCoord = square*1.5;
    beginShape();
    vertex(xCoord,yCoord-square/6)
    vertex(xCoord+square/6,yCoord-square/3);
    vertex(xCoord+square/3,yCoord+square/3);
    vertex(xCoord-square/3,yCoord+square/3);
    vertex(xCoord-square/6,yCoord-square/3);
    endShape(CLOSE);
    pop();
}


// ------------------------------------------------------------------------------------------------------ WHITE KING
function king(){
    push();
    xCoord = square*4.5;
    yCoord = square*1.5;beginShape();
    vertex(xCoord,yCoord-square/6)
    vertex(xCoord+square*.33,yCoord-square/3);
    vertex(xCoord+square/6,yCoord+square/3);
    vertex(xCoord-square/6,yCoord+square/3);
    vertex(xCoord-square*.33,yCoord-square/3);
    endShape(CLOSE);
    pop();
}


// ------------------------------------------------------------------------------------------------------ WHITE LOCATIONS



// ------------------------------------------------------------------------------------------------------ RUNNING PROGRAM
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    rectMode(CENTER);
}

function draw(){
    background(0);
    tester();
   /* grid();
    pawn();
    pawn2();
    pawn3();
    pawn4();
    pawn5();
    pawn6();
    pawn7();
    pawn8();
    rook();
    rook2();
    bishop();
    bishop2();
    knight();
    knight2();
    queen();
    king(); */
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(0);
}