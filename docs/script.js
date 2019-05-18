document.getElementById("downArrowBtn").onclick = function () {
    var element = document.documentElement;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            //Browser is chrome
        } else {
            /*Otherwise browser must be safari*/
            element = document.body;
        }
    }

    /**If browser is edge */
    if (navigator.userAgent.indexOf('Edge') >= 0) {
        element = document.body;
    }

    /**if edge */
    if (navigator.userAgent.indexOf('MSIE') !== -1
        || navigator.appVersion.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge') >= 0) {
        scrollUtilTimer = setInterval(function () {
            //Amount to scroll substracted by the amount that is already scrolled
            /**Horizontal scroll distance, vertical scroll distance DOM object, horizontal scroll direction, vertical scroll direction */
            scrollUtil(0, document.getElementsByClassName("demoContainer")[0].offsetTop - element.scrollTop - document.getElementsByClassName("navbar")[0].clientHeight,
                element, 1, 1);
        }, 16);
    }else{/**if other browser */
        element.scrollTop = document.getElementsByClassName("demoContainer")[0].offsetTop;
    }


};

/**Initial banner setup */
document.getElementsByClassName("bannerTxtContainer")[0].style.height = window.innerHeight - 60 + "px";
document.getElementsByClassName("bannerTxtContainer")[0].style.marginTop = "60px";

/**Remembering the current orientation */
var previousOrientation;
if (window.innerHeight > window.innerWidth)
    previousOrientation = 1;//Potrait
else
    previousOrientation = 0;//Landscape

//We use a different style for IE
if (navigator.userAgent.indexOf('MSIE') !== -1
    || navigator.appVersion.indexOf('Trident/') > -1) {//Checking if any version of IE

    document.getElementsByClassName("bannerImgContainer")[0].style.display = "none";
    var element = document.getElementsByClassName("bannerTxtContainer")[0];
    element.className = element.className.replace(/\bcol-lg-6\b/g, "");
    element.className = element.className.replace(/\bcol-xl-6\b/g, "");
    element.style.backgroundImage = "url('img/bannerOpac.png')";
    element.style.backgroundPosition = "center";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = "contain";
    element.style.height = "80vh";
}

/**Detect if device is tablet or smartphone */
var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}

/**We want to adjust the banner only when there is an orientation change*/
window.addEventListener("resize", function () {

    var element = document.getElementsByClassName("bannerTxtContainer")[0];

    if (!isMobile) {
        /**If a desktop then allow default resizing */
        element.style.height = window.innerHeight - 60 + "px";
        element.style.marginTop = "60px";
        downArrowBtnAdjust();
    }

    if (window.innerHeight > window.innerWidth && previousOrientation == 0) {
        element.style.height = window.innerHeight - 60 + "px";
        element.style.marginTop = "60px";
        previousOrientation = 1;
        downArrowBtnAdjust();
    }
    else if (window.innerHeight < window.innerWidth && previousOrientation == 1) {
        element.style.height = window.innerHeight - 60 + "px";
        element.style.marginTop = "60px";
        previousOrientation = 0;
        downArrowBtnAdjust();
    }
});

downArrowBtnAdjust();


function downArrowBtnAdjust() {
    if (window.innerHeight < window.innerWidth * 0.49 && window.innerWidth <= 992) {
        /*Mobile Landscape*/
        document.getElementById("downArrowBtn").style.display = "none";
    }
    else {
        /*Mobile Potrait*/
        document.getElementById("downArrowBtn").style.display = "inline-block";
    }
}



/**The body becomes visible after all the elements has taken their correct positions*/
document.documentElement.style.visibility = "visible";
document.body.style.visibility = "visible";