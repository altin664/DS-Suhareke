function chekPalindromes(words) {
    for(var i=0; i<words.length; i++){
        if(words[i] === words[i].split('').reverse().join('')){
            console.log("YES");
        }else
        {
            console.log("NO");
        }
    }
}

chekPalindromes(["kimik","level","module"]);