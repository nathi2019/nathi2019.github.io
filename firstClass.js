/*jshint esversion: 6  */

(function () {
    "use strict";

//***********  Map  ************************
    Array.prototype.myMap = function(callback) {
       let  arr = [];
        for (var i = 0; i < this.length; i++)
            arr.push(callback(this[i], i, this));
        return arr;
    }

//********************* Filter ****************************
    Array.prototype.myFilter = function(callback, context) {
        let arr = [];
        for (var i = 0; i < this.length; i++) {
            if (callback.call(context, this[i], i, this))
                arr.push(this[i]);
        }
        return arr;
    }

    function mapper(val) {
        return val + 10;

    }

    function filterFun(val) {
        return val>4;

    }


    describe("My Implementation of Pure Functions", function () {

        context("when [1,2,3,4,5] entered", function () {

            it("Numbers >3 are [4,5] ", function () {
                assert.equal(JSON.stringify([1,2,3,4,5].myFilter(filterFun)), JSON.stringify([5]));
            });
        });

    });

    //******************** Testing My Mapper ***************
    describe("Map Implementation", function () {
        //*********** Max of Three Numbers ***************
        context("The mapping of ", function () {

            it("The mapping of [1,2,3,4,5] by adding 10 t0 each element is [11,12,13,14,15]", function () {
                assert.equal(JSON.stringify([1,2,3,4,5].myMap(mapper)), JSON.stringify([11, 12, 13, 14, 15]));
            });
        });

    });


}());