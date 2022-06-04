oddevenBtnEvent=()=>
{
    checkEvenOrOdd=(x)=>

{

if(x%2==0)
{
return"The Number is Even"
}
else
{
return"Number Is Odd"
}

}

var x=parseInt(document.getElementById("num21").value)
var result=checkEvenOrOdd(x)
console.log(result)
alert(result)
}