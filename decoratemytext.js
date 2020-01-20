/*jshint esversion: 6 */
window.onload = function () {
    "use strict";

    function makeTextBigger() {
        let txtArea = document.getElementById("txtArea");
        let fontProp = window.getComputedStyle(txtArea, null).getPropertyValue('font-size');
        let fontSize = parseInt(fontProp) + 2;
        txtArea.style.fontSize = fontSize + 'px';
    }

    function stylerCheckBox() {
        let txtArea = document.getElementById("txtArea");
        txtArea.style.fontWeight = 'bold';
        txtArea.style.color = 'green';
        txtArea.style.textDecoration = 'underline';
    }

    let timer = null;

    function timerCaller() {

        if (timer === null) {
            timer = setInterval(makeTextBigger, 500);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function setBackgroundImage() {
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }

    function captureTextArea() {
        return document.getElementById("txtArea").value.split(" ");
    }

    function checkIfNotVowel(char) {
        return (char !== 'a' || char !== 'e' || char !== 'i' || char !== 'o' || char !== 'u');

    }

    function mapEachWord(str) {
        let temp = '';
        if (str.length === 0) {
            return '';
        }
        if (str.length >= 2) {
            if (checkIfNotVowel(str.charAt(0)) && checkIfNotVowel(str.charAt(1))) {
                temp = str.substring(1, str.length - 1) + str.substring(0, 1) + 'ay';
                return temp;

            } else if (checkIfNotVowel(str.charAt(0))) {
                temp = str.substring(1, str.length - 1) + str.charAt(0) + 'ay';
                return temp;
            }
        }
        return temp + 'lay';
    }

    //This function checks and replaces a word by Malkovitch
    function malkovitchChecker(str) {
        return (str.length > 5) ? 'Malkovitch' : str;
    }

    // This function maps a given text into Pig Latin 
    function mapSentence(sentence) {
        return sentence.map(mapEachWord);
    }

    function malkovitchMap(incomingText) {
        return incomingText.map(malkovitchChecker);

    }

    //This
    function setPigLatinTextArea() {
        document.getElementById("txtArea2").value = mapSentence(captureTextArea());
    }

    //this function sets the makovich text area to be populated with the makovic replacements
    function makovichLauncher() {
        document.getElementById("txtArea3").value = malkovitchMap(captureTextArea());
    }

    let btnElement = document.getElementById("btn");
    let btnPigLatin = document.getElementById("btn2");
    let btnMalkovitch = document.getElementById("btn3");


    let chckBoxElement = document.getElementById("chckBox");
    let chckBoxElement2 = document.getElementById("chckBox2");

    btnElement.onclick = timerCaller;
    btnPigLatin.onclick = setPigLatinTextArea;
    btnMalkovitch.onclick = makovichLauncher;
    chckBoxElement.onchange = setBackgroundImage;
    chckBoxElement2.onchange = stylerCheckBox;

};