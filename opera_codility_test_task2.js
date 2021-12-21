S = "aaaa";
C = [3, 4, 5, 6];

function solution(S, C) {
    result = 0;
    for(let i = 0; i<S.length-1; i++){
        if(S[i]==S[i+1]){
            if(C[i]<C[i+1])
                // S = S.replace(S[i], '');
                result+=C[i];
            else
                // S = S.replace(S[i+1],'');
                result+=C[i+1];
        }
    }
    return result;
}

console.log(solution(S,C));