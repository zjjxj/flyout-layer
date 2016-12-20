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

fillBody(sl("#shade"));
siteCenter(sl("#flyOut"));