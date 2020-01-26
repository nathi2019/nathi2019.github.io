/* jshint esversion: 6 */
/*global assert */
(function () {
    /*-------------------------------------Filter banned words!-----------------------------------------------*/
    String.prototype.filter = function (banned) {
        let stringToArr = this.split(" ");
        return stringToArr.filter((str) => str !== banned).join(" ");
    }
    console.log("This house is not nice!".filter('not'));

    /*-------------------------------------Mocha assertion below-----------------------------------------------*/
    describe("Banned Word Filter", function () {
        context("This house is not nice!", function () {

            it("When sentence 'This house is not nice!' is used, the expected output is 'This house is nice!'", function () {
                assert.equal('This house is not nice!'.filter('not'), 'This house is nice!');
            });
        });

    });
    /*-------------------------------------Bubble Sort-----------------------------------------------*/

    Array.prototype.bubbleSort = function () {
        let arr = this;
        let SIZE = this.length;
        for (let i = 0; i < SIZE - 1; i++) {
            for (let j = 0; j < SIZE - i; j++) {

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;


    }
    console.log("Bubble Sorting [6,4,0, 3,-2,1]. The result is: [" + [6, 4, 0, 3, -2, 1].bubbleSort() + ']');
    /*-------------------------------------Mocha assertion below-----------------------------------------------*/
    describe("Bubble Sort", function () {
        context("A case of :[6,4,0, 3,-2,1] is entered", function () {

            it("When array :[6,4,0, 3,-2,1] is used, the expected output is : [-2, 0, 1, 3, 4, 6]", function () {
                assert.equal(JSON.stringify([6, 4, 0, 3, -2, 1].bubbleSort()), JSON.stringify([-2, 0, 1, 3, 4, 6]));
            });
        });

    });

    /*-------------------------------------PERSON TEACHER OBJECT-----------------------------------------------*/

    function Person(name) {
        this.name = name;
    }

    const teacher = new Person('Professor Keith Levi');

    Person.prototype.teach = function (subject) {
        console.log(this.name + ' is now teaching ' + subject)
        return this.name + ' is now teaching ' + subject;

    }

    /*-------------------------------------Mocha assertion below-----------------------------------------------*/
    describe("Object from Object Creation ", function () {
        context("Creating teacher Object from Person Object that has name attribute", function () {

            it('Expected Output is : Professor Keith Levi is now teaching WAP', function () {
                assert.equal(JSON.stringify(teacher.teach('WAP')), JSON.stringify('Professor Keith Levi is now teaching WAP'));
            });
        });

    });


}());