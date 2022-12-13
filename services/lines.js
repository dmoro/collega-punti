function get(points, offset) {
    let sorted = points.sort(standardCompare);
    //let copy = sorted;
    let result = [];
    for(i=0; i<sorted.length; i++){
        let origin = sorted[i];
        let others = [];
        console.log("iterazione: " + i);
        let after = i+1;
        if(i == 0){
            others = sorted.slice(after);
        }else if(i == 1){
            others = sorted.slice(after);
            others.splice(0,0,sorted[0]);
        }else{
            others = sorted.slice(0, i).concat(sorted.slice(after))
        }

        let slopeMap = new Map();
        for(j=0; j < others.length-1; j++){
            let slopeFirstPoint = slopeCompare(origin, others[j]);
            let slopeSecondPoint = slopeCompare(origin, others[j+1]);

            /*if(offset == 2){
                let couples = slopeMap.get('noSlope');
                if(couples)
                    
                else{
                    slopeMap.set('noSlope', [others[j], others[j+1]]);
                }
            }*/

            if (slopeFirstPoint == slopeSecondPoint) {
                let pointSlopes = slopeMap.get(slopeFirstPoint);
                
                if(pointSlopes){
                    if(!pointSlopes.includes(others[j])){
                        pointSlopes.push(others[j]);
                        slopeMap.set(slopeFirstPoint, pointSlopes);
                    }
                    if(!pointSlopes.includes(others[j+1])){
                        pointSlopes.push(others[j+1]);
                        slopeMap.set(slopeFirstPoint, pointSlopes);
                    }        
                }else
                    slopeMap.set(slopeFirstPoint, [others[j], others[j+1]])
                
                
            }else {
                let pointsSlopeA = slopeMap.get(slopeFirstPoint);
                let pointsSlopeB = slopeMap.get(slopeSecondPoint);
                
                if(pointsSlopeA){
                    if(!pointsSlopeA.includes(others[j])){
                        pointsSlopeA.push(others[j]);
                        slopeMap.set(slopeFirstPoint, pointsSlopeA);
                    }
                }else
                    slopeMap.set(slopeFirstPoint, [others[j]])
                
                if(pointsSlopeB){
                    if(!pointsSlopeB.includes(others[j+1])){
                        pointsSlopeB.push(others[j+1]);
                        slopeMap.set(slopeSecondPoint, pointsSlopeB);
                    }
                }else
                    slopeMap.set(slopeSecondPoint, [others[j+1]])

            }
        }
        
        for(pointArr of slopeMap.values()){
            if(pointArr.length >= offset-1){
                for(w = pointArr.length; w >= offset-1; w--){
                    let el = pointArr.slice(0, w);
                    el.push(origin);
                    el.sort(standardCompare);
                    result.push(el);   
                }   
            }
        }
        
    }

    return removeDuplicates(result);
}

const standardCompare = (pointA, pointB) => {
    if (pointA.y < pointB.y || (pointA.y == pointB.y && pointA.x < pointB.x)) {
        return -1;
    }
    else if (pointA.y == pointB.y && pointA == pointB.x) {
        return 0;
    }
    else {
        return 1;
    }
}

const slopeCompare = (pointA, pointB) => {
    if (pointA.y == pointB.y && pointA.x != pointB.x) {
        return 0;
    }
    else if (pointA.y != pointB.y && pointA.x == pointB.x) {
        return Number.POSITIVE_INFINITY;
    }
    else if (pointA.y == pointB.y && pointA.x == pointB.x) {
        return Number.NEGATIVE_INFINITY;
    }
    else {
        return (pointB.y - pointA.y) / (pointB.x - pointA.x);
    }
}

const removeDuplicates = (result) => {
    const arr = result.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === result.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        });
    });
    return arr;
}


module.exports = {
   get: get
};

