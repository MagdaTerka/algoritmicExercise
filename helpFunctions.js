
function endGame(player,i,j,k,type){
    var green = "rgb(102,204,0)";
    var dGreen = "rgb(0,102,0)"
    var red = "rgb(255,102,102)";
    var dRed = "rgb(102,0,0)";

    if (player=='A'){


            switch (type){
                case 'r':

                    for(let n=0;n<5;n++){
                        var x = i + k;
                        var y = j + 1 + n;
                        document.getElementById("td"+x+y).style.backgroundColor=green;
                        document.getElementById("td"+x+y).style.color=dGreen;
                    }

                case 'c':

                for(let n=0;n<5;n++){
                    var x = i + 1 + n;
                    var y = j + k;
                    document.getElementById("td"+x+y).style.backgroundColor=green;
                    document.getElementById("td"+x+y).style.color=dGreen;
                }

                case 'd':
                if (k==1){
                    for(let n=0;n<5;n++){
                        var x = i + 1 + n;
                        var y = j + 1 + n;
                        document.getElementById("td"+x+y).style.backgroundColor=green;
                        document.getElementById("td"+x+y).style.color=dGreen;
                    }
                }
                else{
                    for(let n=0;n<5;n++){
                        var x = i + 5-n;
                        var y = j + 1 + n;
                        document.getElementById("td"+x+y).style.backgroundColor=green;
                        document.getElementById("td"+x+y).style.color=dGreen;
                    }
                }

            }
            setTimeout(function() {
                alert("Congratulations! You have won!");
            },10)

        location.reload()
    }
    else{

        switch (type){
            case 'r':

                for(let n=0;n<5;n++){
                    var x = i + k;
                    var y = j + 1 + n;
                    document.getElementById("td"+x+y).style.backgroundColor=red;
                    document.getElementById("td"+x+y).style.color=dRed;
                }

            case 'c':

            for(let n=0;n<5;n++){
                var x = i + 1 + n;
                var y = j + k;
                document.getElementById("td"+x+y).style.backgroundColor=red;
                document.getElementById("td"+x+y).style.color=dRed;
            }

            case 'd':
            if (k==1){
                for(let n=0;n<5;n++){
                    var x = i + n+1;
                    var y = j + n+1;
                    document.getElementById("td"+x+y).style.backgroundColor=red;
                    document.getElementById("td"+x+y).style.color=dRed;
                }
            }
            else{
                for(let n=0;n<5;n++){
                    var x = i + 5-n;
                    var y = j + n+1;
                    document.getElementById("td"+x+y).style.backgroundColor=red;
                    document.getElementById("td"+x+y).style.color=dRed;
                }
            }

        }
        setTimeout(function() {
            alert("Oh! You have lost!");
        },10)

        
        location.reload()
    }
    }

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }