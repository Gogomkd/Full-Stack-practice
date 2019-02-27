const sum = (num1 , num2) => num1 + num2;
const pi = 3.14;
class SomeMathObject {
    constructor(){
        console.log("Object Created");
    }
}
module.exports = {sum : sum, pi : pi, SomeMathObject : SomeMathObject}
