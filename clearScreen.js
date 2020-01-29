/* jshint esversion: 6 */
/*global assert */
$(document).ready(function () {
    'use strict';

    let width = 0;
    let growthAmount = 0;
    let growthRate = 0;
    let numberOfCircles = 0;
    let circleCollection = [];


    /**
     * This function makes the divs bigger. every time it
     *
     */
    function makeBigger() {
        width = width + growthAmount;
        $('div.circle').height(width);
        $('div.circle').width(width);

    }

    /**
     * this function removes an element. It will be called by an event
     * handler (delegation method is used )
     */

    function removeMe() {
        $(this).remove();
    }

    /**
     * this function fades a mouseover element
     */

    function fadeMe() {
        $(this).fadeTo(800, 0.1);
    }

    /**
     * this function restores opacity to 100%
     * this happens when a mouse leave the 'this' element
     */
    function restoreOpacity() {
        $(this).fadeTo(0, 1);
    }

    /**
     * attaching a click event to start button
     * this function launches setValues function which collects
     * the input values and stores them in an appropriate
     * variable
     */

    $('#start').click(function () {
        setValues();
        addCircles();
        let timer = setInterval(() => makeBigger(), growthRate);

    });
    /**
     * Event Delegation the #holder div, which is actually the holder of the divs to be created
     * delegates events to the divs with class 'circle' this line delegates on click which calls
     * remove function
     */
    $('#holder').on('click', '.circle', removeMe);

    /**
     * this delegation is for the mouseover event and calls fadeMe function
     */
    $('#holder').on('mouseover', '.circle', fadeMe);
    /**
     * this delegation is for the mouseleave event and calls the restoreOpacity function
     */
    $('#holder').on('mouseleave', '.circle', restoreOpacity);


    /**
     * this function sets or gets values from the inputs and puts them in
     * appropriate variable after parsing them
     */

    function setValues() {
        width = parseInt($('#width').val());
        growthAmount = parseInt($('#growthAmount').val());
        growthRate = parseInt($('#growthRate').val());
        numberOfCircles = parseInt($('#numOfCircles').val());

    }

    /**
     * this function adds circles to to the html in <div> with #holder
     * the css is applied on the go! each div gets its color from a random color
     * generator getRandomColor function
     * the position at which they appear is also random and
     * is generated by the random randomPositionX and randomPositionY functions
     */
    function addCircles() {
        let aCircle;
        for (let i = 0; i < numberOfCircles; i++) {
            aCircle = $("<div />",
                {
                    class: "circle",
                    css: {
                        position: 'absolute',
                        left: randomPositionX() + 'px',
                        top: randomPositionY() + 'px',
                        width: width + 'px',
                        height: width + 'px',
                        backgroundColor: getRandomColor,
                    }
                });
            $('#holder').append(aCircle);

        }

    }

    /**
     *
     * @returns {string} a random color number
     */

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     *
     * @returns {number} a random position on the screen for X
     * at which a div appears
     */


    function randomPositionX() {
        return (Math.random() * ($(document).width())).toFixed();

    }

    /**
     *
     * @returns {number} a random position on the screen for Y
     */

    function randomPositionY() {
        return (Math.random() * ($(document).height())).toFixed();

    }


});


