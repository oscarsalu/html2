var i = 0;
function iseven(num) { 
    return num % 2; 
}

function back() {
    i = i * i + 1;

    if (iseven(i) == 0) {
        postMessage(i +' is even ');
    }else{
        postMessage(i + ' is odd ');
    }
    
    setTimeout("back()", 500);
}

back();