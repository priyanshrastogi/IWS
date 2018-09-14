function start() {
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");   
    var pos1 = 0;
    var pos2 = 500;
    var id1 = setInterval(frame1, 5);
    var id2 = setInterval(frame2, 5);
    function frame1() {
        if (pos1 == 450) {
            clearInterval(id1);
        } 
        else {
            pos1++; 
            b1.style.top = pos1 + 'px'; 
            b1.style.left = pos1 + 'px'; 
        }
    }
    function frame2() {
        if (pos2 == 0) {
          clearInterval(id2);
        } 
        else {
          pos2--; 
          b2.style.top = pos2 + 'px'; 
          b2.style.left = pos2 + 'px'; 
        }
    }
}

function stop() {
    var b1 = document.getElementById("b1");
    var b2 = document.getElementById("b2");   
    var pos1 = 500;
    var pos2 = 0;
    var id1 = setInterval(frame1, 5);
    var id2 = setInterval(frame2, 5);
    function frame1() {
        if (pos1 == 0) {
            clearInterval(id1);
        } 
        else {
            pos1--; 
            b1.style.top = pos1 + 'px'; 
            b1.style.left = pos1 + 'px'; 
        }
    }
    function frame2() {
        if (pos2 == 450) {
          clearInterval(id2);
        } 
        else {
          pos2++; 
          b2.style.top = pos2 + 'px'; 
          b2.style.left = pos2 + 'px'; 
        }
    }
}