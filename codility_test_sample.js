A=[-7,-8,-10]

function Find(A){
    let result = A[0]+1;
    let loop = true;
    while(loop){
        for(let i=0; i<A.length; i++){
            if(result == A[i]){
                result++;
                break;
            }
            else if(i == A.length-1)
                loop = false;
        }        
    }
    if(result<0)
        result = 1;
    return result;
}

console.log(Find(A));