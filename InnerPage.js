/*
*   滑鼠包覆時填滿父容器
*
*/
divArr = ['Food','Cloth','Live','Trip','Edu','Fun'];
var targetID;
var targetElem;
window.onload = function(){

    for(var i = 0 ; i < 6 ; i++){
            if(targetID == divArr[i]){

            }
    }


    document.addEventListener('mousedown',function(){
                targetID = event.target.id;
                document.getElementById(targetID).addEventListener("mouseup",function(){
                    for(var i = 0 ; i < 6 ; i++){
                        var temp = document.getElementById(divArr[i]);

                        temp.style.width = '81px';
                    }
                },false);
                console.log(targetID);
                function move(){
                    var wide = 81;
                    function frame(){
                        wide++;
                        document.getElementById(targetID).style.width = wide + 'px';
                        if(wide == 460){
                            window.clearInterval(movement);
                        }
                    }
                    var movement = window.setInterval(frame,5);
                }
                move();
                for(var i = 0 ; i < 6 ; i++){
                        if(divArr[i] != targetID){
                            temp = document.getElementById(divArr[i]);
                            temp.style.width = '5px';
                        }
                }





    },false);





}
