/*jshint esversion: 6  */

window.onload = function () {
    "use strict";
    let animationType = document.getElementById("animation");
    let displayFont = document.getElementById("fontsize");
    let turboMode = document.getElementById("turbo");
    let startButton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let animationArea = document.getElementById("text-area");
    let animationIndex = 0;
    let animationArr;
    let timeOut = 200;
    let timerId;
    let fontSize = '12px';
    //*******************************************************************
    startButton.onclick = animate;
    stopButton.onclick = stopAnimation;
    animationType.onchange = getSelectedAnimation;
    turboMode.onchange = () => {
        timeOut = 50;
    };
    displayFont.onchange = ()=>{
        animationArea.style.fontSize = FONTSIZE[displayFont.options[displayFont.selectedIndex].value];

    };

    function getSelectedAnimation() {
        animationArr = ANIMATIONS[animationType.options[animationType.selectedIndex].value].split("=====\n");
        animationArea.value = animationArr[animationIndex];

    }

    function animate() {

        timerId = setInterval(display, timeOut);
    }

    function display() {
        if (animationIndex < animationArr.length) {
            animationArea.value = animationArr[animationIndex];
            animationIndex++;
        } else {
            animationIndex = 0;
            animationArea.value = animationArr[animationIndex];
        }

    }

    function stopAnimation() {
        animationIndex = 0;
        timeOut = 200;
        display();
        clearInterval(timerId);
    }


};