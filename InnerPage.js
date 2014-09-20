/*
*   滑鼠包覆時填滿父容器
*
*/
var divArr = ['Food', 'Cloth', 'Live', 'Trip', 'Edu', 'Fun'];
var targetID;
var targetElem;
window.onload = function () {
    document.addEventListener('mousedown',function(){
        targetID = event.target.id;
        for(var i = 0 ; i < 6 ; i++){
                if(targetID == divArr[i]){
                    targetElem = document.getElementById(targetID);
                }
        }
        function move(){
            var wide = 81;
            function frame(){
                wide++;
                targetElem.style.width = wide + 'px';
                if(wide == 460){
                    window.clearInterval(movement);
                }
            }
            var movement = window.setInterval(frame,3);
        }
        move();

        /*
        *   其他的div內縮
        */
        function sharp(temp){
            var wideSharp = 81;
            function frameSharp(){
                wideSharp--;
                console.log(wideSharp);
                temp.style.width = wideSharp + 'px';
                if(wideSharp == 5){

                    window.clearInterval(movementSharp);
                }
            }
            var movementSharp = window.setInterval(frameSharp,5);
        }
        for(i = 0 ; i < 6 ; i++){
            if(divArr[i] != targetID){
                temp = document.getElementById(divArr[i]);
                sharp(temp);
            }
        }
    },false);
}
