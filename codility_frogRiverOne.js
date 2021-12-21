function solution(X, A) {
    let result = 0;
    if(X==1){
        return result;
    }
    else{
        for(i=1; i<=X; i++){
            for(j=0; j<A.length; j++){
                if(A[j]==i){
                    if(i==X){
                        result = j;
                        break;  
                    }
                }
                else if(j==A.length){
                    return -1;
                }
            }
        }
    }
    return result;
}