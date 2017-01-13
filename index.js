var sl=function (el) {
    return document.querySelector(el);
};
sl("button").onclick=function () {
    sl("#shade").style.display="block";
    sl("#flyOut").style.display="block";
};
sl("#shade").onclick=function () {
    sl("#shade").style.display="none";
    sl("#flyOut").style.display="none";
};
function siteCenter(elem) {
    elem.style.top=(document.documentElement.clientHeight-elem.offsetHeight)/2+"px";
    elem.style.left=(document.documentElement.clientWidth-elem.offsetWidth)/2+"px";
    elem.style.display="none";
}
function fillBody(elem) {
    elem.style.width=document.documentElement.clientWidth+"px";
    elem.style.height=document.documentElement.clientHeight+"px";
}

(function (ele) {
    var startX,startY,mouseX,mouseY,flag=0;
    ele.onmousedown=function (e) {
        flag=1;
        startX=ele.style.left;
        startY=ele.style.top;
        mouseX=e.clientX;
        mouseY=e.clientY;
    };
    document.onmousemove=function (ee) {
        if(flag){
            ele.style.top=parseFloat(startY)+ee.clientY-mouseY+"px";
            ele.style.left=parseFloat(startX)+ee.clientX-mouseX+"px";
        }
    }
    document.onmouseup=function () {
        flag=0;
    }
}(sl("#flyOut")));


fillBody(sl("#shade"));
siteCenter(sl("#flyOut"));