function primenumber(){
var n,i,flag=true;
    n = document.prime.n.value;
    n = parseInt(n)
    for(i = 2; i<= n-1;i++)
    if(n%i==0){
        flag=false;
        break;
    }
    if (flag==true)
    alert( n  + "  is primenumber");
    else
    alert( n + "  is not primenumber");
}
    


function array(){
    var array=document.getElementById("arr").value;
    
    
    var a=1;
    var b=0;
    var item;
    for(var i=0;i<array.length;i++){
        for(var j=i;j<array.length;j++){
            if(array[i]==array[j]) b++;
            if(a<b){
                a=b;
                item=array[i];
            }
        }
        b=0;
    }
    alert("The most frequent item is "+item);
}
function swapcase(){
var str = document.getElementById("stri").value;
//var str = 'y';
//var str = 'dEvika';
var UPPER='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER='abcdefghijklmnopqrstuvwxyz';
var result=[];

for(var x=0; x<str.length; x++)
{
  if(UPPER.indexOf(str[x]) !== -1)
  {
    result.push(str[x].toLowerCase());
  }
  else if(LOWER.indexOf(str[x]) !== -1)
  {
    result.push(str[x].toUpperCase());
  }
  else 
  {
    result.push(str[x]);
  }
}
alert(result.join(''))

}
function sqr(){

    var smsqs = document.getElementById("sum").value;
    
    var total = 0;
    for(var index=0;index<smsqs.length;index++){
        total += smsqs[index]*smsqs[index];
    }
alert("The sum of the squares of elements is  "+total)
}
function lop(){
    for(var x=0;x<=15;x++) {
        if(x===0){
            alert(x +  "  is even ");
        }
        else if(x%2===0){
            alert(x +" is even");
        }
        else{
            alert(x+"  is odd");
        }
        }
    
    
    }
    function truncate(){
        str=document.getElementById("trun").value;
        text_truncate = function(str, length, ending) {
            if (length == null) {
              length = 100;
            }
            if (ending == null) {
              ending = '...';
            }
            if (str.length > length) {
              return str.substring(0, length - ending.length) + ending;
            } else {
              return str;
            }
          };
          alert(text_truncat)
    }

