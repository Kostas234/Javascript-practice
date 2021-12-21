function solution(X, Y, D) {
    if(X>Y){
        throw 'X must be smaller or equal Y';
    }
    let i = 0;
    while(true){
        X+=D;
        i++;
        if(X>=Y){
            break;
        }
    }
    return i;
}