class mySquare {

    constructor(a,b,d,tab) {
      this.tab = tab;
      this.a = a;
      this.b = b;
      this.d = d;

    }
//-------------------------------------------------------------------------------------------------------------------
get isInside(){
return this.isInside();
}    
isInside(i,j){
    if(i<this.a+this.d  && i>=this.a && j<this.b+this.d && j>=this.b){
        return true;
    }
    else{
        return false;
    }
}

get rowForA(){
        return this.rowForA();
    }
    rowForA(k){
        if (this.rowSum(k)==this.d && this.rowProd(k)==1) {
            return true;
        } else{
            return false;
        }
    }
    get rowForB(){
        return this.rowForB();
    }
    rowForB(k){
        if (this.rowSum(k)==2*this.d && this.rowProd(k)==2**this.d){
            return true;
        }else{
            return false;
        }

    }

    get colForA(){
        return this.colForA();
    }

    colForA(k){
        if (this.colSum(k)==this.d && this.colProd(k)==1) {
            return true;
        } else{
            return false;
        }
    }

    get colForB(){
        return this.colForB();
    }

    colForB(k){
        if (this.colSum(k)==this.d*2 && this.colProd(k)==2**this.d) {
            return true;
        } else{
            return false;
        }
    }

    get diagForA(){
        return this.diagForA();
    }

    diagForA(k){
        if (this.diagSum(k)==this.d && this.diagProd(k)==1) {
            return true;
        } else{
            return false;
        }
    }
    
    get diagForB(){
        return this.diagForB();
    }

    diagForB(k){
        if (this.diagSum(k)==this.d*2 && this.diagProd(k)==2**this.d) {
            return true;
        } else{
            return false;
        }
    }
//---row/col/diag margins-------------------------------------------------------------------------------------------
get checkRowMargin(){
    return this.checkRowMargin();
}
checkRowMargin(k){
    var c = true;
    for (let m=0;m<5-this.d;m++){
        if(this.a+k-1<10 && this.b+m+this.d<10){
            if (this.tab[this.a+k-1][this.b+m+this.d]==1 || this.tab[this.a+k-1][this.b+m+this.d]==2 || this.tab[this.a+k-1][this.b+m+this.d]===undefined){
                c = false;
            }}else{c = false;}
    }

    if (c==true){
        return true;

    }
    c = true;
    for (let m=0;m<5-this.d;m++){
        if(this.b-m-1>=0 && this.a+k-1<10){
        if (this.tab[this.a+k-1][this.b-m-1]==1 || this.tab[this.a+k-1][this.b-m-1]==2 || this.tab[this.a+k-1][this.b-m-1]===undefined){
            c = false;
        }}else{c = false;}
    }
    if (c==true){
        return true;
    } else {return false;}
}

get checkColMargin(){
    return this.checkColMargin();
}

checkColMargin(k){
    var c = true;
    for (let m=0;m<5-this.d;m++){
        if(this.a+m+this.d<10 && this.b+k-1<10){
            if (this.tab[this.a+m+this.d][this.b+k-1]==1 || this.tab[this.a+m+this.d][this.b+k-1]==2 || this.tab[this.a+m+this.d][this.b+k-1]===undefined){
                c = false;
            }}else{c = false;}
    }

    if (c==true){
        return true;

    }
    c = true;
    for (let m=0;m<5-this.d;m++){
        if(this.a-m-1>=0 && this.b+k-1<10){
        if (this.tab[this.a-m-1][this.b+k-1]==1 || this.tab[this.a-m-1][this.b+k-1]==2 || this.tab[this.a-m-1][this.b+k-1]===undefined){
            c = false;
        }}else{c = false;}
    }
    if (c==true){
        return true;
    } else {return false;}
}

get checkDiagMargin(){
    return this.checkDiagMargin();
}
checkDiagMargin(k){
    var c = true;
    if(k==1){
    
        for (let m=0;m<5-this.d;m++){
            if(this.a+this.d+m<10 && this.b+this.d+m<10){
            if (this.tab[this.a+this.d+m][this.b+this.d+m]==1 || this.tab[this.a+this.d+m][this.b+this.d+m]==2 || this.tab[this.a+this.d+m][this.b+this.d+m]===undefined){
                c = false;
            }}else{c = false;}
    }

    if (c==true){
        return true;
    }
    c = true;
    for (let m=0;m<5-this.d;m++){
        if(this.a-m-1>=0 && this.b-m-1>=0){
        if (this.tab[this.a-m-1][this.b-m-1]==1 || this.tab[this.a-m-1][this.b-m-1]==2 || this.tab[this.a-m-1][this.b-m-1]===undefined){
            c = false;
        }}else{c = false;}
    }
    if (c==true){
        return true;
    } else {return false;}


    } else

    {

        for (let m=0;m<5-this.d;m++){
            if(this.a-m-1>=0 && this.b+this.d+m<10){if (this.tab[this.a-m-1][this.b+this.d+m]==1 || this.tab[this.a-m-1][this.b+this.d+m]==2 || this.tab[this.a-m-1][this.b+this.d+m]===undefined){
                c = false;
            }}else{c = false;}
    }

    if (c==true){
        return true;
    }
    c = true;
    for (let m=0;m<5-this.d;m++){
        if(this.b-m-1>=0 && this.a+this.d+m<10){if (this.tab[this.a+this.d+m][this.b-m-1]==1 || this.tab[this.a+this.d+m][this.b-m-1]==2 || this.tab[this.a+this.d+m][this.b-m-1]===undefined){
            c = false;
        }}else{c = false;}
    }
    if (c==true){
        return true;
    } else {return false;}
    }
    
}

//------------------------------------------------------------------------------------------------------------------
    get rowSum(){
        return this.rowSum();
    }
    rowSum(k){
        var sum=0;
        for (let i=0;i<this.d;i++){
            sum=sum+this.tab[this.a+k-1][this.b+i];
        }
        return sum;
    }

    get colSum(){
        return this.colSum();
    }
    colSum(k){
        var sum=0;
        for (let i=0;i<this.d;i++){
            sum=sum+this.tab[this.a+i][this.b+k-1];
        }
        return sum;
    }

    get rowProd(){
        return this.rowProd();
    }
    rowProd(k){
        var prod=1;
        
        for (let i=0;i<this.d;i++){
            prod=prod*this.tab[this.a+k-1][this.b+i];
        }
        return prod;    
    }
    get colProd(){
        return this.colProd();
    }

    colProd(k){
        var prod=1;
        
        for (let i=0;i<this.d;i++){
            prod=prod*this.tab[this.a+i][this.b+k-1];
        }
        return prod;
    }

    get diagSum(){
        return this.diagSum();
    }

    diagSum(k){
        var sum = 0;
        if (k==1){
            
            for (let i=0;i<this.d;i++){
                sum=sum+this.tab[this.a+i][this.b+i];
            }
        }
        else{

            for (let i=0;i<this.d;i++){
                sum=sum+this.tab[this.a+i][this.b+this.d-i-1];
            }

        }
        return sum;

    }
    get diagProd(){
        return this.diagProd();
    }
    diagProd(k){
        var prod = 1;
        if (k==1){
            
            for (let i=0;i<this.d;i++){
                prod=prod*this.tab[this.a+i][this.b+i];
            }
        }
        else{

            for (let i=0;i<this.d;i++){
                prod=prod*this.tab[this.a+i][this.b+this.d-i-1];
            }

        }
        return prod;
    }
    

  }

