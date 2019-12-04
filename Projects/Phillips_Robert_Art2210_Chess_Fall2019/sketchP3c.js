let square = 50;
let conversionX;
let conversionY;
let converted = []
let click=0;
let input;
let input2;
let go1=0;
let go2=0;
let input3;
let input4;

class Pawn{
    constructor(x,y,color,color2,side){
        this.first=0,
        this.x= x,
        this.y= y,
        this.tempX = x,
        this.tempY = y,
        this.color= color,
        this.color2= color2,
        this.first=0,
        this.side=side,
        this.converted= [],
        this.string
    }
    select(){
        input3 = createInput();
        input3.position(500,80);
        input4 = createInput();
        input4.position(700,80);
        //this.x=50;
        //this.y=150;
        //this.show;
        
        
    }
    selectX(){
        print('working');
        if(input3.value()=='A'||input3.value()=='a'){
            this.x=a;
        }else if(input3.value()=='B'||input3.value()=='b'){
            this.x=b;
        }else if(input3.value()=='C'||input3.value()=='c'){
            this.x=c;
        }else if(input3.value()=='D'||input3.value()=='d'){
            this.x=d;
        }else if(input3.value()=='E'||input3.value()=='e'){
            this.x=e;
        }else if(input3.value()=='F'||input3.value()=='f'){
            this.x=f;
        }else if(input3.value()=='G'||input3.value()=='g'){
            this.x=g;
        }else if(input3.value()=='H'||input3.value()=='h'){
            this.x=h;
        }
     }
     selectY(){
        if(input4.value()=='A'||input4.value()=='a'){
            this.y=a;
        }else if(input4.value()=='B'||input4.value()=='b'){
            this.y=b;
        }else if(input4.value()=='C'||input4.value()=='c'){
            this.y=c;
        }else if(input4.value()=='D'||input4.value()=='d'){
            this.y=d;
        }else if(input4.value()=='E'||input4.value()=='e'){
            this.y=e;
        }else if(input4.value()=='F'||input4.value()=='f'){
            this.y=f;
        }else if(input4.value()=='G'||input4.value()=='g'){
            this.y=g;
        }else if(input4.value()=='H'||input4.value()=='h'){
            this.y=h;
        }
        this.show();
     }
    show(){
        push();
        fill(this.color);
        stroke(this.color2);
        circle(this.x,this.y,square/2);
        pop();
    }
    highlight(){
        push();
        fill(55,155,255, 125)
        rect(this.x,this.y,square,square);
        pop();
        push();
        fill(212, 194, 36, 125);
        if(this.side==1){
            if(this.first==0){
                rect(this.x,this.y+square,square,square);
                rect(this.x,this.y+2*square,square,square);
            }else{
                rect(this.x,this.y,square,square);
                this.first++
            }
        }else{
            if(this.first==0){
                rect(this.x,this.y-square,square,square);
                rect(this.x,this.y-2*square,square,square);
            }else{
                rect(this.x,this.y,square,square);
                this.first++
            }
        }
    }
    location(){
        this.tempX =int(this.x/square);
        this.tempY =int(this.y/square);
        this.converted = [this.tempX,this.tempY];
        this.string=join(this.converted,'')
        return this.string
    }
} 
class Rook{
    constructor(x,y,color,color2){
        this.x= x,
        this.y= y,
        this.tempX= x,
        this.tempY= y,
        this.color= color,
        this.color2= color2
        this.f1,
        this.f2,
        this.f3,
        this.f4
    }
    show(){
        push();
        fill(this.color);
        stroke(this.color2);
        rectMode(CENTER);
        rect(this.x,this.y,square/2,square*.75);
        pop();
    }
    highlight(){
        push();
        rectMode(CENTER);
        fill(55,155,255, 125)
        rect(this.x,this.y,square,square);
        pop();
        push();
        fill(212, 194, 36, 125);
        if(this.x>0){
            for(this.tempX;this.tempX<=square*7;this.tempX+=square){
                rect(this.tempX+square,this.tempY,square,square)
            }
            this.tempX=this.x;
        }
        if(this.x<=8*square){
            for(this.tempX;this.tempX>1*square;this.tempX-=square){
                rect(this.tempX-square,this.tempY,square,square)
            }
            this.tempX=this.x;
        }
        if(this.y>0){
            for(this.tempY;this.tempY<=square*7;this.tempY+=square){
                rect(this.tempX,this.tempY+square,square,square)
            }
            this.tempY=this.y;
        }
        if(this.y<=8*square){
            for(this.tempY;this.tempY>1*square;this.tempY-=square){
                rect(this.tempX,this.tempY-square,square,square)
            }
            this.tempY=this.y;
        }
        pop;
    }
    location(){
        this.tempX =this.x/square;
        this.tempY =this.y/square;
        this.converted = [this.tempX,this.tempY];
        this.string=join(this.converted,'')
        return this.string
    }
}

class Bishop{
    constructor(x,y,color,color2){
        this.x= x,
        this.y= y,
        this.tempX= x,
        this.tempY= y,
        this.color= color,
        this.color2= color2
    }
    show(){
        push();
        fill(this.color);
        stroke(this.color2);
        ellipse(this.x,this.y,square/2,square*.75);
        pop();
    }
    highlight(){
        push();
        rectMode(CENTER);
        fill(55,155,255, 125)
        rect(this.x,this.y,square,square);
        pop();
        push();
        fill(212, 194, 36, 125);
        if(this.x<8*square&&this.y<8*square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY<8*square;this.tempY+=square){
                    if(this.tempX<8*square){
                    rect(this.tempX+square,this.tempY+square,square,square);
                    this.tempX+=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX<8*square;this.tempX+=square){
                    if(this.tempY<8*square){
                        rect(this.tempX+square,this.tempY+square,square,square);
                        this.tempY+=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        if(this.x>square&&this.y<8*square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY<8*square;this.tempY+=square){
                    if(this.tempX>square){
                    rect(this.tempX-square,this.tempY+square,square,square);
                    this.tempX-=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX>square;this.tempX-=square){
                    if(this.tempY<8*square){
                        rect(this.tempX-square,this.tempY+square,square,square);
                        this.tempY+=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        if(this.x>square&&this.y>square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY>square;this.tempY-=square){
                    if(this.tempX>square){
                    rect(this.tempX-square,this.tempY-square,square,square);
                    this.tempX-=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX>square;this.tempX-=square){
                    if(this.tempY>square){
                        rect(this.tempX-square,this.tempY-square,square,square);
                        this.tempY-=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        if(this.x<8*square&&this.y>square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY>square;this.tempY-=square){
                    if(this.tempX<8*square){
                    rect(this.tempX+square,this.tempY-square,square,square);
                    this.tempX+=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX<8*square;this.tempX+=square){
                    if(this.tempY>square){
                        rect(this.tempX+square,this.tempY-square,square,square);
                        this.tempY-=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        pop();
    }
    location(){
        this.tempX =this.x/square;
        this.tempY =this.y/square;
        this.converted = [this.tempX,this.tempY];
        this.string=join(this.converted,'')
        return this.string
    }
}
class Queen{
    constructor(x,y,color,color2){
        this.x= x,
        this.y= y,
        this.tempX= x,
        this.tempY= y,
        this.color= color,
        this.color2= color2
    }
    select1(){
            this.highlight();
            this.newPosition();
    }
    newPosition(){
        this.x=(mouseX-(mouseX%square));
        this.y=(mouseY-(mouseY%square));
        this.show();
    }
    show(){
        push();
        fill(this.color);
        stroke(this.color2);
        beginShape();
        vertex(this.x,this.y-square/6)
        vertex(this.x+square/6,this.y-square/3);
        vertex(this.x+square/3,this.y+square/3);
        vertex(this.x-square/3,this.y+square/3);
        vertex(this.x-square/6,this.y-square/3);
        endShape(CLOSE);
        pop();
    }
    highlight(){
        push();
        fill(55,155,255, 125)
        rect(this.x,this.y,square,square);
        pop();
        push();
        fill(212, 194, 36, 125);
        //cross
        if(this.x>0){
            for(this.tempX;this.tempX<=square*7;this.tempX+=square){
                rect(this.tempX+square,this.tempY,square,square)
            }
            this.tempX=this.x;
        }
        if(this.x<=8*square){
            for(this.tempX;this.tempX>1*square;this.tempX-=square){
                rect(this.tempX-square,this.tempY,square,square)
            }
            this.tempX=this.x;
        }
        if(this.y>0){
            for(this.tempY;this.tempY<=square*7;this.tempY+=square){
                rect(this.tempX,this.tempY+square,square,square)
            }
            this.tempY=this.y;
        }
        if(this.y<=8*square){
            for(this.tempY;this.tempY>1*square;this.tempY-=square){
                rect(this.tempX,this.tempY-square,square,square)
            }
            this.tempY=this.y;
        }
        //corners
        if(this.x<8*square&&this.y<8*square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY<8*square;this.tempY+=square){
                    if(this.tempX<8*square){
                    rect(this.tempX+square,this.tempY+square,square,square);
                    this.tempX+=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX<8*square;this.tempX+=square){
                    if(this.tempY<8*square){
                        rect(this.tempX+square,this.tempY+square,square,square);
                        this.tempY+=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        if(this.x>square&&this.y<8*square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY<8*square;this.tempY+=square){
                    if(this.tempX>square){
                    rect(this.tempX-square,this.tempY+square,square,square);
                    this.tempX-=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX>square;this.tempX-=square){
                    if(this.tempY<8*square){
                        rect(this.tempX-square,this.tempY+square,square,square);
                        this.tempY+=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        if(this.x>square&&this.y>square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY>square;this.tempY-=square){
                    if(this.tempX>square){
                    rect(this.tempX-square,this.tempY-square,square,square);
                    this.tempX-=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX>square;this.tempX-=square){
                    if(this.tempY>square){
                        rect(this.tempX-square,this.tempY-square,square,square);
                        this.tempY-=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        if(this.x<8*square&&this.y>square){
            if(this.x>=this.y){
                for(this.tempY;this.tempY>square;this.tempY-=square){
                    if(this.tempX<8*square){
                    rect(this.tempX+square,this.tempY-square,square,square);
                    this.tempX+=square;
                    }
                }
            }
            if(this.y>this.x){
                for(this.tempX;this.tempX<8*square;this.tempX+=square){
                    if(this.tempY>square){
                        rect(this.tempX+square,this.tempY-square,square,square);
                        this.tempY-=square;
                    }
                }
            }
            this.tempX=this.x;
            this.tempY=this.y;
        }
        pop();
    }
    location(){
        this.tempX =this.x/square;
        this.tempY =this.y/square;
        this.converted = [this.tempX,this.tempY];
        this.string=join(this.converted,'')
        return this.string
    }
}
class King{
    constructor(x,y,color,color2){
        this.x= x,
        this.y= y,
        this.color= color,
        this.color2= color2
    }
    select1(){
            this.highlight();
            this.newPosition();
    }
    newPosition(){
        this.x=(mouseX-(mouseX%square));
        this.y=(mouseY-(mouseY%square));
        this.show();
    }
    show(){
        push();
        fill(this.color);
        stroke(this.color2);
        beginShape();
        vertex(this.x,this.y-square/6)
        vertex(this.x+square*.33,this.y-square/3);
        vertex(this.x+square/6,this.y+square/3);
        vertex(this.x-square/6,this.y+square/3);
        vertex(this.x-square*.33,this.y-square/3);
        endShape(CLOSE);
        pop();
    }
    highlight(){
        push();
        fill(55,155,255, 125)
        rect(this.x,this.y,square,square);
        pop();
        push();
        fill(212, 194, 36, 125);
        //cross 
        if(this.x>square){
            rect(this.x-square,this.y,square,square);
        }
        if(this.x<8*square){
            rect(this.x+square,this.y,square,square);
        }
        if(this.y>square){
            rect(this.x,this.y-square,square,square);
        }
        if(this.y<8*square){
            rect(this.x,this.y+square,square,square);
        }
        //corners
        if(this.x>square&&this.y>square){
            rect(this.x-square,this.y-square,square,square);
        }
        if(this.x<8*square&&this.y<8*square){
            rect(this.x+square,this.y+square,square,square);
        }
        if(this.x>square&&this.y<8*square){
            rect(this.x-square,this.y+square,square,square);
        }
        if(this.x<8*square&&this.y>square){
            rect(this.x+square,this.y-square,square,square);
        }
        pop();
    }
    location(){
        this.tempX =this.x/square;
        this.tempY =this.y/square;
        this.converted = [this.tempX,this.tempY];
        this.string=join(this.converted,'')
        return this.string
    }
}
class Knight{
    constructor(x,y,color,color2){
        this.x= x,
        this.y= y,
        this.tempX= x,
        this.tempY= y,
        this.color= color,
        this.color2= color2
    }
    select1(){
            this.highlight();
            this.newPosition();
    }
    newPosition(){
        this.x=(mouseX-(mouseX%square));
        this.y=(mouseY-(mouseY%square));
        this.show();
    }
    show(){
        push();
        fill(this.color);
        stroke(this.color2);
        triangle(this.x,this.y-square*.33,this.x-square*.25,this.y+square*.25,this.x+square*.25,this.y+square*.25);
        pop();
    }
    highlight(){
        push();
        fill(55,155,255, 125)
        rect(this.x,this.y,square,square);
        pop();
        push();
        fill(212, 194, 36, 125);
        //BORDER          ///////////////////////////////////////////////////
        if(this.x==square){ //x=1
            if(this.y==square){
                rect(this.x+2*square,this.y+square,square,square);
                rect(this.x+square,this.y+2*square,square,square)
            }else if(this.y==8*square){
                rect(this.x+2*square,this.y-square,square,square);
                rect(this.x+square,this.y-2*square,square,square);
            }else{
                rect(this.x+2*square,this.y+square,square,square);
                rect(this.x+2*square,this.y-square,square,square);
                if(this.y<7*square){
                    rect(this.x+square,this.y+2*square,square,square);
                }
                if(this.y>2*square){
                    rect(this.x+square,this.y-2*square,square,square);
                }
            }
        }else if(this.x==8*square){ //x=8
            if(this.y==square){
                rect(this.x-2*square,this.y+square,square,square);
                rect(this.x-square,this.y+2*square,square,square)
            }else if(this.y==8*square){
                rect(this.x-2*square,this.y-square,square,square);
                rect(this.x-square,this.y-2*square,square,square);
            }else{
                rect(this.x-2*square,this.y+square,square,square);
                rect(this.x-2*square,this.y-square,square,square);
                if(this.y<7*square){
                    rect(this.x-square,this.y+2*square,square,square);
                }
                if(this.y>2*square){
                    rect(this.x-square,this.y-2*square,square,square);
                }
            }
        }else if(this.y==square){ //y==1, but  not x==1 or 8
            rect(this.x+square,this.y+2*square,square,square);
            rect(this.x-square,this.y+2*square,square,square);
            if(this.x>2*square){
                rect(this.x-2*square,this.y+square,square,square);
            }
            if(this.x<7*square){
                rect(this.x+2*square,this.y+square,square,square);
            }
        }else if(this.y==8*square){ //y==8, but  not x==1 or 8
            rect(this.x+square,this.y-2*square,square,square);
            rect(this.x-square,this.y-2*square,square,square);
            if(this.x>2*square){
                rect(this.x-2*square,this.y-square,square,square);
            }
            if(this.x<7*square){
                rect(this.x+2*square,this.y-square,square,square);
            }
        }

        ////////// NOT BORDER        //////////////////
        if(this.x>square&&this.x<8*square){
            if(this.y>2*square){
                rect(this.x-square,this.y-2*square,square,square)
                rect(this.x+square,this.y-2*square,square,square)
            }
        }
        if(this.x>square&&this.x<8*square){
            if(this.y<7*square){
                rect(this.x-square,this.y+2*square,square,square)
                rect(this.x+square,this.y+2*square,square,square)
            }
        }
        if(this.y>square&&this.y<8*square){
            if(this.x>2*square){
                rect(this.x-2*square,this.y-square,square,square)
                rect(this.x-2*square,this.y+square,square,square)
            }
        }
        if(this.y>square&&this.y<8*square){
            if(this.x<7*square){
                rect(this.x+2*square,this.y-square,square,square)
                rect(this.x+2*square,this.y+square,square,square)
            }
        }
        pop();
    }
    location(){
        this.tempX =this.x/square;
        this.tempY =this.y/square;
        this.converted = [this.tempX,this.tempY];
        this.string=join(this.converted,'')
        return this.string
    }
}
function grid(){
    // CHESSBOARD BORDER
    push();
        rectMode(CORNER);
        noFill();
        strokeWeight(5);
        stroke(155,55,55);
        rect(5,5,440,440);
        rect(20,20,410,410);
    pop();
    // CHESSBOARD
    for(let j=1;j<=8;j++){
        if(j%2!=0){
            for(let i=1;i<=8;i++){
                if(i%2!=0){
                    fill(155,55,55);
                    push();
                    rect(i*square,j*square,square,square)
                    pop();
                }
            }
        }else{
            for(let i=1;i<=8;i++){
                if(i%2==0){
                    fill(155,55,55);
                    push();
                    rect(i*square,j*square,square,square)
                    pop();
                }
            }
        }
    }
}
function setBoard(){
    grid();
    a1.show();b1.show();c1.show();d1.show();e1.show();f1.show();g1.show();h1.show();
    a2.show();b2.show();c2.show();d2.show();e2.show();f2.show();g2.show();h2.show();
    a7.show();b7.show();c7.show();d7.show();e7.show();f7.show();g7.show();h7.show();
    a8.show();b8.show();c8.show();d8.show();e8.show();f8.show();g8.show();h8.show();
}
let a= square;
let b= 2*square;
let c= 3*square;
let d=4*square;
let e = 5*square;
let f= 6*square;
let g= 7*square;
let h= 8*square;

//white PIECES                                              
let a7 = new Pawn(a,g,'#9B3737',0,2);
let b7 = new Pawn(b,g,'#9B3737',0,2);
let c7 = new Pawn(c,g,'#9B3737',0,2);
let d7 = new Pawn(d,g,'#9B3737',0,2);
let e7 = new Pawn(e,g,'#9B3737',0,2);
let f7 = new Pawn(f,g,'#9B3737',0,2);
let g7 = new Pawn(g,g,'#9B3737',0,2);
let h7 = new Pawn(h,g,'#9B3737',0,2);
let a8 = new Rook(a,h,'#9B3737',0);
let h8 = new Rook(h,h,'#9B3737',0);
let b8 = new Knight(b,h,'#9B3737',0);
let g8 = new Knight(g,h,'#9B3737',0);
let c8 = new Bishop(c,h,'#9B3737',0);
let f8 = new Bishop(f,h,'#9B3737',0);
let d8 = new King(d,h,'#9B3737',0);
let e8 = new Queen(e,h,'#9B3737',0);

//black PIECES
let a2 = new Pawn(a,b,0,'#9B3737',1);
let b2 = new Pawn(b,b,0,'#9B3737',1);
let c2 = new Pawn(c,b,0,'#9B3737',1);
let d2 = new Pawn(d,b,0,'#9B3737',1);
let e2 = new Pawn(e,b,0,'#9B3737',1);
let f2 = new Pawn(f,b,0,'#9B3737',1);
let g2 = new Pawn(g,b,0,'#9B3737',1);
let h2 = new Pawn(h,b,0,'#9B3737',1);
let a1 = new Rook(a,a,0,'#9B3737');
let h1 = new Rook(h,a,0,'#9B3737');
let b1 = new Knight(b,a,0,'#9B3737');
let g1 = new Knight(g,a,0,'#9B3737');
let c1 = new Bishop(c,a,0,'#9B3737');
let f1 = new Bishop(f,a,0,'#9B3737');
let d1 = new King(d,a,0,'#9B3737');
let e1 = new Queen(e,a,0,'#9B3737');

function setup(){
    createCanvas(windowWidth, windowHeight);
     background(0);
     rectMode(CENTER);
     input = createInput();
     input.position(500,40);
     input2 = createInput();
     input2.position(700,40);
     input.changed(select1);
     input2.changed(select2);
     background(0);
 
 
 }
 function combination(x,y){


        //a2.highlight();
        //a2.select();
    
}

 function select1(){
    if(input.value()=='A'||input.value()=='a'){
         conversionX=1;
    }else if(input.value()=='B'||input.value()=='b'){
        conversionX=2;
    }else if(input.value()=='C'||input.value()=='c'){
        conversionX=3;
    }else if(input.value()=='D'||input.value()=='d'){
        conversionX=4;
    }else if(input.value()=='E'||input.value()=='e'){
        conversionX=5;
    }else if(input.value()=='F'||input.value()=='f'){
        conversionX=6;
    }else if(input.value()=='G'||input.value()=='g'){
        conversionX=7;
    }else if(input.value()=='H'||input.value()=='h'){
        conversionX=8;
    }
    let changeArray1 = [conversionX,conversionY];
    print(changeArray1);
    go1++;
    return input.value();
}
 
 function select2(){
    if(input2.value()=='1'){
        conversionY=1;
    }else if(input2.value()=='2'){
       conversionY=2;
    }else if(input2.value()=='3'){
       conversionY=3;
    }else if(input2.value()=='4'){
       conversionY=4;
    }else if(input2.value()=='5'){
       conversionY=5;
    }else if(input2.value()=='6'){
       conversionY=6;
    }else if(input2.value()=='7'){
       conversionY=7;
    }else if(input2.value()=='8'){
       conversionY=8;
    }

    let changeArray2 = [conversionX,conversionY];
    print(changeArray2)
    go2++;
}


function draw(){
    background(255);
    setBoard();
    highlightX = int(mouseX/square);
    highlightY = int(mouseY/square);
    if(mouseX%square>=square/2){
        highlightX++;
    }
    if(mouseY%square>=square/2){
        highlightY++;
    }
    let mouseArray = [highlightX,highlightY];
    let highlightArray = join(mouseArray,'');
    compare(highlightArray); 
    if(go1==1&&go2==1){
     combination();
    }
}


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(255);
}


function keyPressed() {
    if (keyCode === ENTER){
    }
  }


































function compare(array){
    let a1Coords = a1.location();
    if(array==a1Coords){
        a1.highlight();
    }
    let b1Coords = b1.location();
    if(array==b1Coords){
        b1.highlight();
        }
    let c1Coords = c1.location();
    if(array==c1Coords){
        c1.highlight();
        }
    let d1Coords = d1.location();
    if(array==d1Coords){
        d1.highlight();
        }
    let e1Coords = e1.location();
    if(array==e1Coords){
        e1.highlight();
        }
    let f1Coords = f1.location();
    if(array==f1Coords){
        f1.highlight();
        }
    let g1Coords = g1.location();
    if(array==g1Coords){
        g1.highlight();
        }
    let h1Coords = h1.location();
    if(array==h1Coords){
        h1.highlight();
        }
    let a2Coords = a2.location();
    if(array==a2Coords){
        a2.highlight();
        }
    let b2Coords = b2.location();
    if(array==b2Coords){
        b2.highlight();
        }
    let c2Coords = c2.location();
    if(array==c2Coords){
        c2.highlight();
        }
    let d2Coords = d2.location();
    if(array==d2Coords){
        d2.highlight();
        }
    let e2Coords = e2.location();
    if(array==e2Coords){
        e2.highlight();
        }
    let f2Coords = f2.location();
    if(array==f2Coords){
        f2.highlight();
        }
    let g2Coords = g2.location();
    if(array==g2Coords){
        g2.highlight();
        }
    let h2Coords = h2.location();
    if(array==h2Coords){
        h2.highlight();
        }
    let a7Coords = a7.location();
    if(array==a7Coords){
        a7.highlight();
        }
    let b7Coords = b7.location();
    if(array==b7Coords){
        b7.highlight();
        }
    let c7Coords = c7.location();
    if(array==c7Coords){
        c7.highlight();
        }
    let d7Coords = d7.location();
    if(array==d7Coords){
        d7.highlight();
        }
    let e7Coords = e7.location();
    if(array==e7Coords){
        e7.highlight();
        }
    let f7Coords = f7.location();
    if(array==f7Coords){
        f7.highlight();
        }
    let g7Coords = g7.location();
    if(array==g7Coords){
        g7.highlight();
        }
    let h7Coords = h7.location();
    if(array==h7Coords){
        h7.highlight();
        }
    let a8Coords = a8.location();
    if(array==a8Coords){
        a8.highlight();
        }
    let b8Coords = b8.location();
    if(array==b8Coords){
        b8.highlight();
        }
    let c8Coords = c8.location();
    if(array==c8Coords){
        c8.highlight();
        }
    let d8Coords = d8.location();
    if(array==d8Coords){
        d8.highlight();
        }
    let e8Coords = e8.location();
    if(array==e8Coords){
        e8.highlight();
        }
    let f8Coords = f8.location();
    if(array==f8Coords){
        f8.highlight();
        }
    let g8Coords = g8.location();
    if(array==g8Coords){
        g8.highlight();
        }
    let h8Coords = h8.location();
    if(array==h8Coords){
        h8.highlight();
        }
    } 