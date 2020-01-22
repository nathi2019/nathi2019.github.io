/*jshint esversion: 6  */

(function () {

    "use strict";

    let arrayToExamine = [1, 2, 3, 4];
    let secondCopy = [1, 2, 3, 4];


    /* This Function will reverse a given array and create another copy without modifying the original one*/
    Array.prototype.reverseNoModify = function () {
        let reversedArr = [];
        for (let i = this.length - 1; i >= 0; i--) {
            reversedArr.push(this[i]);

        }
        return reversedArr;

    }

    /* This Function reverses an array by modifying the array itself   */
    Array.prototype.reverseModify = function () {
        let temp;
        let middleIndex = Math.round((this.length - 1) / 2);
        let leftIndex, rightIndex;
        if (this.length % 2 === 0) {
            leftIndex = middleIndex - 1;
            rightIndex = leftIndex;
        } else {
            leftIndex = middleIndex;
            rightIndex = middleIndex;
        }
        while (leftIndex >= 0 && rightIndex < this.length) {
            let temp;
            temp = this[leftIndex];
            this[leftIndex] = this[rightIndex];
            this[rightIndex] = temp;
            leftIndex--;
            rightIndex++;

        }

    }
    /*    Array to List Conversion */
    function arrToList(arr) {
        let result = null;
        let getListItem = (val) => {
            return {
                value: val,
                rest: null

            };
        };
        for (let i =arr.length-1;i>=0;i--) {
            let currentListItem = getListItem(i);
            if (result === null) {
                result = currentListItem;
            } else {
                currentListItem.rest = result;
                result = currentListItem;
            }

        }
        return result;
    }
     console.log(arrToList([1,2,3,4]));
    function deepComparator(obj1, obj2) {
        if (typeof obj1 === typeof obj2) {
            let obj1Keys = Object.keys(obj1);
            let obj2Keys = Object.keys(obj2);
            if (obj1Keys.length !== obj2Keys.length) {
                return false;
            }
            for (let i = 0; i < obj2Keys.length; i++) {
                if (obj1Keys[i] !== obj2Keys[i]) {
                    return false;
                }
            }
        }
        return true;
    }

    /* Testing the reversal to see if the value is changed */
    describe("Testing Reversal without modification", function () {
        //*********** Max of Three Numbers ***************
        context("Reversal With No Modification", function () {

            it("The reversal of [1,2,3,4,5] is [5,4,3,2,1]", function () {
                assert.equal(JSON.stringify(arrayToExamine.reverseNoModify()), JSON.stringify([4, 3, 2, 1]));
            });
        });

    });

    /* Testing the reversal to see if the value is changed */
    describe("Testing Reversal with modification", function () {
        //*********** Max of Three Numbers ***************
        context("Reversal With Modification", function () {

            it("The reversal of [1,2,3,4,5] is [5,4,3,2,1]", function () {
                assert.equal(JSON.stringify(arrayToExamine.reverseNoModify()), JSON.stringify([4, 3, 2, 1]));
            });
        });

    });

    console.log("The original Array is " + arrayToExamine);
    console.log("Reverseing with modify [1,2,3,4] " + [1, 2, 3, 4].reverseModify());
    console.log("The")
    console.log("Reverseing without modify [1,2,3,4]" + secondCopy.reverseNoModify());


}());