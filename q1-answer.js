function collatz(strArray, n, c) {
    var arrayNum = strArray.split(" ");
    var sum=0;
    for (let i = 0; i < arrayNum.length; i++) {
        arrayNum[i] = parseInt(arrayNum[i], 10);
    }
    for(var i=0; i<c; i++){
        for(var k=0; k<arrayNum.length; k++){
            if(arrayNum[k]%2 == 0){
                var temp = arrayNum[k]/2;
                arrayNum[k] = temp;
            }
            else{
                var temp = (arrayNum[k]*3)+1;
                arrayNum[k] = temp;
            }
        }
    }
    for(var i=0; i<arrayNum.length; i++){
        sum += arrayNum[i];
    }
    return sum;
}
var firstLine = prompt();
var nums = firstLine.split(" ");
var n = parseInt(nums[0]);
var k = parseInt(nums[1]);
var secondLine = prompt();
var results = collatz(secondLine, n, k);
console.log(results);
