A = [1, 2, 0, -5];

function solution(A){
    let result = 1;
    for(let i = 0; i<A.length; i++){
        result *= A[i];
    }
    if(result < 0)
        return -1;
    else if(result > 0)
        return 1;
    else
        return 0;
}

console.log(solution(A));