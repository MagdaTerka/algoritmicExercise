const t = new Array(10);

for (let i=0;i<10;i++)
{   
    t[i] = [];
    for(let j=0;j<10;j++)
    {
        t[i][j]=0;
    }
}



function tdclick(i,j) {
    
    console.log('td'+i+j+' clicked');
    if (t[i-1][j-1]==0){
        console.log(t[i-1][j-1]);
        t[i - 1][j - 1] = 1;
        document.getElementById("td"+i+j).textContent="X";
        document.getElementById("td"+i+j).style.textAlign="center";
        document.getElementById("td"+i+j).style.backgroundColor="rgb(113, 148, 202)";
        document.getElementById("td"+i+j).style.color = "rgb(39,40,107)";
        myMove();
    
    }
}
function stopA(i,tab,crdnts){
    if (i==2){return 0;}
    var x=checkTheWinner(i,false,tab,crdnts);

    if (x==1){
        return 1;
    }
    else {
        return 0;
    }
}
function goB(i,tab,crdnts){
    if (i==1){return 0;}
    var k=checkTheWinner(i,false,tab,crdnts);
    if (checkTheWinner(i,false,tab,crdnts)==2){
        return 1;
    }else {
        return 0;
    }
}

function moveB(n){
if (n==0) return undefined;
    const p = new Array(10);
//get table
    for (let i=0;i<10;i++)
    {   
        p[i] = [];
        for(let j=0;j<10;j++)
        {
            p[i][j]=t[i][j];
        }
    }
    var k = 4;
//check situation for each field
if (n==5){
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        if (p[i][j]==0){
            p[i][j]=2;
            var crdnts = i+''+j;
            k = checkTheWinner(n,false,p,crdnts);
            if (k==2){
                return i+''+j;
                break;
            } else {
                p[i][j]=1;
                k = checkTheWinner(n,false,p,crdnts);
                if(k==1){
                    return i+''+j;
                    break;
                }
            }
            p[i][j]=0;
        }
    }

}}else{

for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        if (p[i][j]==0){
            p[i][j] = 1;
            var crdnts = i+''+j;
            k = checkTheWinner(n,false,p,crdnts);
            if (k==1){
                return i+''+j;
                break; 
            } else {
                p[i][j]=2;
                k = checkTheWinner(n,false,p,crdnts);
                if(k==2){
                    return i+''+j;
                    break; 
                }
                
            }
            p[i][j]=0

        }
    }

}
}
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        if (p[i][j]==0){
            p[i][j]=2;
            var crdnts = i+''+j;
            k = goB(4,p,crdnts);
            if (k==1){
                return i+''+j;
                break;
            }
            p[i][j]=0;
        }
    }

}
return moveB(n-1);
}


function myMove() {
    var i;
    var j;
    var k = checkTheWinner(5,true,t);
    document.getElementById("myTable").onclick = false;
    if (k==4){
        var coordinates = moveB(5);
        if (coordinates===undefined)
        {
            do {
                i = getRandomInt(10);
                j = getRandomInt(10);
            }while (t[i][j] != 0)
        }
        else
        {
        i = parseInt(coordinates.substring(0,1));
        j = parseInt(coordinates.substring(1,2));}


        t[i][j] = 2;
        var k = i+1;
        var m = j+1;

        document.getElementById("td"+k+m).textContent="O";
        document.getElementById("td"+k+m).style.textAlign = "center";
        document.getElementById("td"+k+m).style.backgroundColor="rgb(255,255,102)";
        document.getElementById("td"+k+m).style.color = "rgb(102,51,0)";
        delay(1000).then(() => checkTheWinner(5,true,t));
        document.getElementById("myTable").onclick = true;
    }
}




function checkTheWinner(x,alerts,tab,crd){
//for each square 5x5:
if (crd===undefined){
for (let a=0;a<11-x;a++)
    {
        for(let b=0;b<11-x;b++)
        {
            
            var s = new mySquare(a,b,x,tab);
            //check rows & cols
        for (let i = 1; i < x+1; i++) {
        if (s.rowForA(i)) {
            if (alerts==true && x==5){
                endGame('A',s.a,s.b,i,'r');
                return 1;
                break;
            } else {
                    if (s.checkRowMargin(i))
                    {return 1;
                    break;}    
            }

        }

        if (s.colForA(i)) {
            if (alerts==true && x==5){
                endGame('A',s.a,s.b,i,'c');
                return 1;
                break;
            } else {
                    if (s.checkColMargin(i))
                    {return 1;
                    break;}    
            }

        }



        if (s.rowForB(i)) {
            if (alerts==true && x==5){
                endGame('B',s.a,s.b,i,'r');
                return 2;
                break;
            } else{
                if (s.checkRowMargin(i)){
                    return 2;
                    break;
                }
            }

        }


        if (s.colForB(i)) {
            if (alerts==true && x==5){
                endGame('B',s.a,s.b,i,'c');
                return 2;
                break;
            } else{
                if (s.checkColMargin(i)){
                    return 2;
                    break;
                }
            }

        }

    }
    //check diagonals
    for (let i = 1; i < 3; i++) {
        if (s.diagForA(i)) {
            if (alerts==true && x==5){
                endGame('A',s.a,s.b,i,'d');
                return 1;
                break;
            } else {
                if (s.checkDiagMargin(i)){
                    return 1;
                    break;
                }
            }
            
        }
        if (s.diagForB(i)) {
            if (alerts==true && x==5){
                endGame('B',s.a,s.b,i,'d');
                return 2;
                break;
            }else{
                if (s.checkDiagMargin(i)){
                    return 2;
                    break;
                }
            }
            
        }
    }

        }
    }
    
    
        
        //check if noone won
        var check = 0
        var bigS = new mySquare(0,0,10,tab);


        for (let i = 1; i < 11; i++) {
            if (bigS.rowProd(i) == 0) {
                check = 1;
            }
        }
    if (check == 0) {
        console.log("end")
        alert("Draw")
        location.reload();
        return 3;
    }
    else {
        return 4;
    }

}
else
{
    var cor1 = parseInt(crd.substring(0,1));
    var cor2 = parseInt(crd.substring(1,2));
    for (let a=0;a<11-x;a++)
    {
        for(let b=0;b<11-x;b++)
        {
            
            var s = new mySquare(a,b,x,tab);
            //check rows & cols
        for (let i = 1; i < x+1; i++) {
        if (s.rowForA(i) && s.isInside(cor1,cor2)) {
            if (alerts==true && x==5){
                endGame('A',s.a,s.b,i,'r');
                return 1;
                break;
            } else {
                    if (s.checkRowMargin(i))
                    {return 1;
                    break;}    
            }

        }

        if (s.colForA(i) && s.isInside(cor1,cor2)) {
            if (alerts==true && x==5){
                endGame('A',s.a,s.b,i,'c');
                return 1;
                break;
            } else {
                    if (s.checkColMargin(i))
                    {return 1;
                    break;}    
            }

        }



        if (s.rowForB(i) && s.isInside(cor1,cor2)) {
            if (alerts==true && x==5){
                endGame('B',s.a,s.b,i,'r');
                return 2;
                break;
            } else{
                if (s.checkRowMargin(i)){
                    return 2;
                    break;
                }
            }

        }


        if (s.colForB(i) && s.isInside(cor1,cor2)) {
            if (alerts==true && x==5){
                endGame('B',s.a,s.b,i,'c');
                return 2;
                break;
            } else{
                if (s.checkColMargin(i)){
                    return 2;
                    break;
                }
            }

        }

    }
    //check diagonals
    for (let i = 1; i < 3; i++) {
        if (s.diagForA(i) && s.isInside(cor1,cor2)) {
            if (alerts==true && x==5){
                endGame('A',s.a,s.b,i,'d');
                return 1;
                break;
            } else {
                if (s.checkDiagMargin(i)){
                    return 1;
                    break;
                }
            }
            
        }
        if (s.diagForB(i) && s.isInside(cor1,cor2)) {
            if (alerts==true && x==5){
                endGame('B',s.a,s.b,i,'d');
                return 2;
                break;
            }else{
                if (s.checkDiagMargin(i)){
                    return 2;
                    break;
                }
            }
            
        }
    }

        }
    }
    
    
        
        //check if noone won
        var check = 0
        var bigS = new mySquare(0,0,10,tab);


        for (let i = 1; i < 11; i++) {
            if (bigS.rowProd(i) == 0) {
                check = 1;
            }
        }
    if (check == 0) {
        console.log("end")
        alert("Draw")
        location.reload();
        return 3;
    }
    else {
        return 4;
    }

}
}






window.onload = () => {
    
    const body = document.body;
    tbl = document.createElement('table');
    tbl.id = 'myTable';
    tbl.align = "center";
    tbl.style.width = '50%';
    tbl.style.border = '1px solid black';
  
    for (let i = 0; i < 10; i++) {
      const tr = tbl.insertRow();
      for (let j = 0; j < 10; j++) {

          const td = tr.insertCell();
          tr.appendChild(td);
          //td.style.border = '1px solid black'; 
          var k = i+1;
          var m = j+1;
          td.id = 'td'+k+m;
          td.setAttribute('onclick', "tdclick(" + k + "," + m + ")");
          console.log(td.id)+' ';
          //td.onclick = function (){tdclick(k,m);};
      }
    }
    body.appendChild(tbl);
    t[5][5]=2;
document.getElementById("td66").textContent="O";
document.getElementById("td66").style.textAlign = "center";
document.getElementById("td66").style.backgroundColor="rgb(255,255,102)";
document.getElementById("td66").style.color = "rgb(102,51,0)";
}
