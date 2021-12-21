function solution(A) {
    let result = 1;
    while(true){
        if(A.indexOf(result)<0){
            break;
        }
        result++;
    }
    return result;
}