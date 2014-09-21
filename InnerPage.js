/*
 *   滑鼠包覆時填滿父容器
 *
 */

window.onload = function () {
    document.addEventListener('mousedown', function () {
        var divArr = ['Food', 'Cloth', 'Live', 'Trip', 'Edu', 'Fun'];
        var targetID;
        var targetElem;
        var index;
        var isClick = false;
        var eachFrameWide = 105;
        var mainFrameWide = 460;
        if (!isClick) {
            targetID = event.target.id;
            for (var i = 0; i < 6; i++) {
                console.log(targetID);
                if (targetID == divArr[i]) {
                    index = i;
                    targetElem = document.getElementById(targetID);
                    isClick = true;

                    function move() {
                        var wide = eachFrameWide;

                        function frame() {
                            wide++;
                            targetElem.style.width = wide + 'px';
                            if (wide == mainFrameWide) {
                                window.clearInterval(movement);
                            }
                        }
                        var movement = window.setInterval(frame, 5);
                    }
                    move();
                    var node = document.createElement('iframe');
                    node.setAttribute("src", "InnerPage2.html");
                    node.setAttribute("style", "z-index:-3;width:100%;height:70%;overflow:hidden;");
                    targetElem.appendChild(node);
                    /*
                     *   左邊div內縮
                     */
                    function sharp(temp) {
                        var wideSharp = eachFrameWide;

                        function frameSharp() {
                            wideSharp--;
                            //console.log(wideSharp);
                            temp.style.width = wideSharp + 'px';
                            if (wideSharp == 35) {

                                window.clearInterval(movementSharp);
                            }
                        }
                        var movementSharp = window.setInterval(frameSharp, 5);
                    }
                    for (var i = 0; i < index; i++) {
                        if (divArr[i] != targetID) {
                            temp = document.getElementById(divArr[i]);
                            sharp(temp);
                        }
                    }

                    /*
                     *   右方div內縮
                     */
                    function right(temp) {
                        var rightWide = eachFrameWide;

                        function rightFrame() {
                            rightWide--;
                            //console.log(temp.style.left);
                            //temp.style.left = '100px';
                            temp.style.width = rightWide + 'px'
                            if (rightWide == 35) {

                                window.clearInterval(movementSharp);
                            }
                        }
                        var movementSharp = window.setInterval(rightFrame, 5);
                    }
                    for (var i = index + 1; i < 6; i++) {
                        if (divArr[i] != targetID) {
                            temp = document.getElementById(divArr[i]);
                            right(temp);
                        }
                    }
                    console.log(targetElem.childNodes[3]);
                    targetElem.addEventListener('mousedown', function () {
                        if (isClick) {
                            targetElem.removeChild(targetElem.childNodes[3]);

                            for (var i = 0; i < 6; i++) {
                                document.getElementById(divArr[i]).style.width = eachFrameWide + 'px';

                            }
                            isClick = false;
                        }

                    }, false);
                }
            }

        }
    }, false);
}
