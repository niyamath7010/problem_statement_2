//Q2. WAF to count the number of words in the string.

function wordCount(str){
    return str.split(" ").length;
}

console.log(wordCount("hello there , how are you"))

//Q3. WAF to print the number of days in the month using switch case.

function print(months){
    let res="";
    switch(months){
        case "jan":res="there are 30days in january";
        break;
        case "feb":res="there are 28days in february";
        break;
        case "mar":res="there are 31days in march"
        break;
        case "apr":res="there are 30days in april"
        break;
        case "may":res="there are 30days in may"
        break;
        case "june":res="there ares 30days in june"
        break;
        case "july":res="there ares 31days in july"
        break;
        case "aug":res="there are 31days in augest"
        break;
        case "sep":res="there are 30days in september"
        break;
        case "oct":res="there are 31days in october"
        break;
        case "nov":res="there are 30days in november"
        break;
        case "dec":res="there are 31 in december"
        break;
        default:res="no such month found"
    }
    return res;
}



//Q5. WAF to check if the number is even or not using if else

function find(even){
    if(even %2==0){
        console.log(`${even} is an even nmber`)
    }else{
        console.log(`${even} is an odd number`)
    }
}





//Q6. WAF to check if the number is even or not using switch case.




//Q7. WAF to reverse only words in the string.

var sentence="hello this is sample";

let newSentence=sentence.split("").reverse().join("");

console.log(newSentence);
