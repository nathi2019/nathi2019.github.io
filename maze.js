/* jshint esversion: 6 */
/*global assert */
$(document).ready(function () {
    'use strict';

    /**
     * boundaryTwo contains all the forbidden borders.
     * Boolean start to track the status of the game
     */
    let boundaryTwo = $('div.boundary');
    let start = false;
    /**
     *  this event listeners will check if mouse is over the forbidden area
     *  boundaryTwo is a forbidden areas as defined above
     */
    $(boundaryTwo).mouseover(function () {
        if (start) {
            $(boundaryTwo).addClass("youlose");
            start = false;
            youLoose();

        }
    });
    /**
     * this action listener checks if the player has left the allowed maze area
     * this will prohibit the player of cheating the game
     */
    $('#maze').mouseleave(function () {

        if(start){
            $(boundaryTwo).addClass("youlose");
            start = false;
            youLoose();
        }

    });
    /**
     * if game is started and mouse is over div#end, that means the player has won
     * win will be called and start will be reset
     */


    $('#end').mouseover(function () {
        if (start) {
            win();
            start = false;

        }

    });


    /**
     * this event starts the game. if game is not on already, this event will begin it
     * any former class applied to the maze boundary will be resetted
     */

    $('#start').click(function () {
        if (!start) {
            $(boundaryTwo).removeClass("youlose");
            $(boundaryTwo).addClass("boundary");
            $('#status').text('Good Luck!');
            start = true;
        }


    });

    /**
     * this function simply displays messages in the h2#status heading
     */

    function win() {
        $('#status').text('Congratulations! You Win! Click S to play again');

    }
    function youLoose() {


        $('#status').text('Oops! You loose! Click S to play again');

    }



});


