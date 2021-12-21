function solution(A) {
    for(let i=1; i<=A.length+1; i++){
        for(let j=0; j<A.length; j++){
            if(A[j]==i){
                break;
            }
            else if(j==A.length-1){
                return i;
            }
        }
    }
}