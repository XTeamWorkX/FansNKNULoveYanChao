var secPopup = function(number){
    var pop = document.getElementById('popup');
    pop.style.visibility = 'visible';
    pop.style.top = window.innerHeight/2 - 450 + 'px';
    pop.style.left = window.innerWidth/2 - 360 + 'px';
    document.getElementById('pageOverlay').style.visibility = 'visible';
    var iframe = document.getElementById('iframe');
    if(number == 2){
        iframe.setAttribute('src','./InnerPage2.html');
    } else {
        iframe.setAttribute('src','./InnerPage.html');

    }
    pop.appendChild(iframe);
}
var closePopup = function(){
    document.getElementById('popup').style.visibility = 'hidden';
    document.getElementById('pageOverlay').style.visibility = 'hidden';

}
