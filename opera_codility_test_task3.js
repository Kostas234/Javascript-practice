N = 2;
S = "";

function solution(N, S) {
    let result = 0;
    let seats = [...Array(N)].map(e => Array(10));
    for(let i=0; i<S.length-1; i=i+3){
        seats[parseInt(S[i])-1][S.charCodeAt(i+1)-64-1] = 'reserved';
    }
    for(let j = 0; j<seats.length; j++){
        if(!seats[j].slice(1,5).includes('reserved')){
            result++;
            for(let w=1; w<5; w++){
                seats[j][w] = 'reserved';
            }
        }
        if(!seats[j].slice(3,7).includes('reserved')){
            result++;
            for(let w=3; w<7; w++){
                seats[j][w] = 'reserved';
            }
        }
        if(!seats[j].slice(5,9).includes('reserved')){
            for(let w=5; w<9; w++){
                seats[j][w] = 'reserved';
            }
            result++;
        }
    }
    return result;
}

console.log(solution(N,S));