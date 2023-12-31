var bracketStack = new Stack();
var testString = "(1+2)";
var valid = true;
var i = 0;

while (i < testString.length && valid){
    var charVal = testString.charAt(i);

    if (charVal == "("){
        bracketStack.push(charVal);
    }else if (charVal == ")"){
        if (!bracketStack.isEmpty()){
            bracketStack.pop();
        }else{
            valid = false;
        }
    }
    i++;
}


if (!bracketStack.isEmpty()){
    valid = false;
}

console.log(valid);


