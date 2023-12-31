var reverseString = new Stack();
var testString = "racecarr";

for (var i = 0; i < testString.length; i++){
    reverseString.push(testString.charAt(i));
}

var valid = true;
var i = 0;

while (reverseString.size > 0 && valid){
    var charVal = reverseString.pop();

    if (charVal != testString.charAt(i)){
        valid = false;
    }

    i++;
}

console.log(valid);

