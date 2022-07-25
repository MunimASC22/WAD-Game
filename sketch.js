let state = 1;
let score = 0;
let life = 3;
let change;

function setup(){
    createCanvas(500,500);
    background(163,143,120);
}


function draw(){
    background(163,143,120);

    textSize(22);
    text("Score: "+score,180,480);
    text("Lives Count: "+ life,180,450);
    
    fill(0,0,0);
    rect(25,50,150,150);   //box 1
    rect(220,50,150,150); // box 2
    rect(25,250,150,150); // box 3
    rect(220,250,150,150);// box 4

    if (change==true){
        fill(255,255,255);
        rect(25,50,150,150);   //box 1 upper left

        fill(0,0,0);
        rect(220,50,150,150); // box 2 upper right
        rect(25,250,150,150); // box 3 lower left
        rect(220,250,150,150);// box 4 lower right
    }
}



function mouseClicked(){
    if (state == 1){
           
        if (mouseX>=25 && mouseX<=175 && mouseY>=100 && mouseY<=200){
            score++ //diglett is in box 1
            state = random(1,2)
            change=true;
        }
       
        
    }
    else if (state == 2){
        if (mouseX>=220 && mouseX<=370 && mouseY>=100 && mouseY<=200){
            score++ //diglett is in box 1
            state = random(1,5)
        }
    }
    else if (state == 3){
        
    }
    else if (state==4){

    }
    else {
        lives--
        state=random(1,5)
        change=false;
        lives--
    }
}
