function StopWatch(){
    let startTime = 0;
    let endTime = 0;
    let duration = 0;

    this.start = function(){
        if(startTime>0){
            throw Error("Stopwatch has already started.");
        }
        startTime = new Date().getTime()/1000;
        endTime = 0;
    };

    this.stop = function(){
        if(endTime>0 ){
            throw Error("Stopwatch has already stoped.");
        }
        else if(startTime==0){
           throw Error("Stopwatch hasn't started.")
        }
        endTime = new Date().getTime()/1000;
        let dr = endTime - startTime;
        duration += dr;
        startTime = 0;
        console.log(duration);
    };

    this.reset = function(){
        startTime = 0;
        endTime = 0;
        duration = 0;
    }

    Object.defineProperty(this, 'duration',{
        get: function(){
          return duration;
        }
    });
}

// function StopWatch(){
//     let startTime = 0;
//     let endTime = 0;
//     let running = false;
//     let duration = 0;

//     this.start = function(){
//         if(running){
//             throw Error("Stopwatch has already started.");
//         }
//         running = true;
//         startTime = new Date().getTime()/1000;
//     };

//     this.stop = function(){
//         if(!running){
//             throw Error("Stopwatch is stoped.");
//         }
//         running = false;
//         endTime = new Date().getTime()/1000;
//         const dr = endTime - startTime;
//         duration += dr;
//     };

//     this.reset = function(){
//         this.startTime = 0;
//         this.endTime = 0;
//         this.running = false;
//         duration = 0;
//     };

//      Object.defineProperty(this, 'duration',{
//          get: function(){
//              return duration;
//              }
//      });