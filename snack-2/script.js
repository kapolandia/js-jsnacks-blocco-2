let word1 = prompt( "Parola-1" );
var word2 = prompt("Parola-2");

if(word1.length > word2.length){
    console.log(word1 + " " + word2);
} else if(word1.length < word2.length){
    console.log(word2 +  " " + word1);
} else{
    console.log(word1 +   " " + word2);
}