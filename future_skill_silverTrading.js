let days = 10;
let prices = [5,4,3,9,1,3,8,2,7,10];

function solution(days,prices){
    let buyDay = 0;
    let sellDay = 0;
    let max = 0;

    for(let i = 0; i<days-1; i++){
        for(let j=i+1; j<days; j++){
            let dif = prices[j]-prices[i];
            if(dif>max){
                max = dif;
                buyDay = i;
                sellDay = j;
            }
        }
    }
    return [buyDay, sellDay]
}

console.log(solution(days,prices));