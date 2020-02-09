function bmi(height, weight){
    var w = parseInt(weight);
    var h = parseInt(height) / 100;

    return (w / (h* h)).toFixed(2);
}

function calculateBMI (){
    var height= document.getElementById('bodyHeight').value;
    var weight= document.getElementById('bodyWeight').value;
    var result= document.getElementById('resultText');
    var suggestion= document.getElementById('diet-suggestion');
    
    // console.log(bmi(height,weight));
    if((height != '') && (weight != '')){
    result.innerHTML = bmi(height, weight);
    }
    else{
        alert('請輸入!')
    }

    if(bmi(height,weight) >= 24 ){
        return suggestion.innerHTML = '該少吃一點囉!'
    }else if (24 > bmi(height,weight) && bmi(height,weight) >= 18.5 ){
        return suggestion.innerHTML = '健康體態，好好維持喔!'
    }else if(bmi(height,weight) < 18.5 ){
        return suggestion.innerHTML = '要多吃一點囉!'
    }
}

// switch 
// case bmi() >= 24;
//     suggestion.innerHTML = '該少吃一點囉!' ;
//     break;

// case 24 > bmi() >= 18.5;
//     suggestion.innerHTML = '健康體態，好好維持喔!' ;
//     break;

// case bmi() < 18.5;
//     suggestion.innerHTML = '該多吃一點囉!' ;
//     break;