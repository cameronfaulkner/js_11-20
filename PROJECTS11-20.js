function firstLast6(array){
    if(array[0] == 6 || array[array.length-1] == 6){
        return true;
    }else{
        return false
    }
}
function has23(array) {
    if (array.includes(2)) {
        return true
    }else if(array.includes(3)) {
        return true
    }return false
}
function fix23(array){
    for(i = 0; i < array.length; i++ ){
        if(array[i] == 2){
            if(array[i + 1] == 3){
                array[i+1] = 0
            }
        }
    }return array
}
function countYZ(str){
    var count = 0;
    for(i = 0; i < str.length; i++ ){
        if(str[i] == " "){
            if(str[i-1] == 'y' || 'z'){
                count = count + 1
            }
        }
    }if(str.endsWith("y") || str.endsWith('z')){
        count = count + 1
    }
    return count
}
function endOther(str, str1){
    str = str.toLowerCase(str);
    str1 = str1.toLowerCase(str1);
    if(str1 > str) {
        if(str1.endsWith(str)) {
            return true;
        } else {
            return false;
        }
    }else{
        if(str.endsWith(str1)) {
            return true;
        }else{
            return false;
        }
    }
}
function starOut(str){
    var secondstr = '';
    for(i = 0; i < str.length; i++){
        if(str[i] != '*' && str[i+1] != '*' && str[i-1] != '*'){
            secondstr = secondstr + str[i]
        }else if(str[i+1] != '*') {
            i = i+1
        }
    }
    return secondstr
}


function getSandwich(str) {
    if(str.includes('bread') == false){
        return '';
    }return str.slice(str.indexOf('bread')+5, str.lastIndexOf('bread'));
}
function countClumps(array) {
    var count = 0;
    for(i = 0; i < array.length - 1; i++){
        if(array[i] == array[i+1])
            count += 1;

        while(i < (array.length-1) && array[i] == array[i+1])
            i++;
    }
    return count;
}
function canBalance(array){
    var sum1 = 0;
    for (i = 0; i < array.length; i++){
        sum1 += array[i];
    }
    var sum2 = sum1 /2;
    var empty = 0;
    for(i=0; i <array.length; i++){
        empty += array[i]
        if(empty == sum2){
            return true;
        }
    }return false;
}

function evenlySpaced(a,b,c){
    var Arrays = [a,b,c];
    Arrays = Arrays.sort();
    var value = Arrays[2] - Arrays[1]
    if(Arrays[0] + value == Arrays[1]){
        return true
    }else{
        return false
    }
}
    function tester() {

        document.getElementById("output").innerHTML = evenlySpaced(8,9,10);

    }
