/*jshint esversion: 6  */

(function() {
    "use strict";

    function max(num1, num2) {
        return num1>num2? num1:num2;
    }


    function maxOfThree(num1, num2, num3) {
        const max1 =max(num1,num2);
        return max1>num3? max1:num3;

    }


    function isVowel(char) {
        const vowels = ['a','e','i','o','u'];
        return vowels.includes(char)? true:false;
    }

    //*************************sum of array elements*************
    function sumOfArray(array) {
        let sum =0;
        return array.reduce((num1,num2)=>{return  num1+num2;},sum);

    }
//*********** product of array elements *****************
    function productOfArr(array) {
        let product =1;
        return array.reduce((num1,num2)=>{return num2*num1;}, product);

    }
    //********************* Reverse String ****************************
    function reverse(str) {
        let reveString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reveString += str[i];
        }
        return reveString;
    }
   //******************* Longest word ********************
    function longestWord(listOfWord) {
        let indexOfLongest = -1;
        let sizeOfMax = -1;
        for (let i = 0; i < listOfWord.length; i++) {
            if (sizeOfMax < listOfWord[i].length) {
                indexOfLongest = i;
                sizeOfMax = listOfWord[i].length;
            }

        }
        return listOfWord[indexOfLongest];
    }
//******************* Longer than Filtered Word *****************************
    function filterLongWords(arrOfWords, len) {
        let filtered = [];
        for (let i = 0; i < arrOfWords.length; i++) {
            if (arrOfWords[i].length > len) {
                filtered.push(arrOfWords[i]);
            }
        }
        return filtered;
    }
    //


    describe("MaxOfTwo", function() {

        context("when 2 and 5 entered", function() {

            it("max of the two is ", function() {
                assert.equal(max(2,5), 5);
            });
        });

    });

    //******************** Max Of Three***************
    describe("MaxOfThree", function() {
        //*********** Max of Three Numbers ***************
        context("when 2,8 and 5 entered", function() {

            it("Maximum Number of the given three numbers is 8", function() {
                assert.equal(maxOfThree(2,8,5), 8);
            });
        });

    });
    //******************* SUM OF ARRAYS *********************
    describe("SumOfArray", function() {
        //*********** Max of Three Numbers ***************
        context("when [1,2,3,4] entered", function() {

            it("Sum of the given Array is 10", function() {
                assert.equal(sumOfArray([1,2,3,4]), 10);
            });
        });

    });
//******************** PRODUCT OF ARRAYS *******************************

    describe("ProductOfArray", function() {
        //*********** Max of Three Numbers ***************
        context("when [1,2,3,4] entered", function() {

            it("Product of the given array 24 ", function() {
                assert.equal(productOfArr([1,2,3,4]),24);
            });
        });

    });

//******************** REVERSE A STRING **********************************
    describe("reverseAstring", function() {
        //*********** Max of Three Numbers ***************
        context("when Nathanael is entered", function() {

            it("Reverse is leanahtaN", function() {
                assert.equal(reverse("Nathanael"),"leanahtaN");
            });
        });

    });
//******************** LONGEST WORD **********************************
    describe("longestWord", function() {
        //*********** Max of Three Numbers ***************
        context("when Banana, Mango, Apple, Guava,Pineapple is entered", function() {

            it("The Longest is Pineapple ", function() {
                assert.equal(longestWord(['Banana', 'Mango', 'Apple', 'Guava','Pineapple']),'Pineapple');
            });
        });

    });
    //******************** LONGEST WORD **********************************
    describe("Words longer than 6 letters", function() {
        //*********** Max of Three Numbers ***************
        context("when Banana, Mango, Apple, Guava,Pineapple is entered", function() {

            it("Word/s Longer than 6 letters is/are Pineapple ", function() {
                assert.equal(filterLongWords(['Banana', 'Mango', 'Apple', 'Guava','Pineapple'],6),'Pineapple');
            });
        });

    });


}());