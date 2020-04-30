const characterEnconding = arg=>{
const startWord = arg;
let result = "";
let duplicate = 0;
for(let i=0;i<startWord.length; i++){
for(let j= 1; j< startWord.length; j++){
if((startWord[i] == startWord[j])&&(i!=j))
duplicate++;
if (i > 0) {
if(startWord[i] == startWord[0])
duplicate++;
}
}
if(duplicate){
result+="(";
}
else{
result+=")";
}
duplicate = 0;
}
return result;
}