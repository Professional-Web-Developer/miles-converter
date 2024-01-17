var btn=document.getElementById("sbt");
var heading=document.getElementById("he");
var sc=document.getElementById("sc");
 sc.addEventListener("click",function(){
if(sc.selectedIndex=="0")
{
    heading.innerHTML="<h1>kilometer to miles<h1>";

btn.addEventListener("click",function()
{
    var m=parseFloat(document.getElementById("miles").value);
    if(m)
    {
    var c=m/1.609344;
    // var k=document.createElement("h2");
    // k.className="result";
    var k1=document.getElementById("answer");
    k1.innerHTML=c.toFixed(3);
    }
    else{
        alert("error");
    }
})}
else if(sc.selectedIndex=="1")
{
    heading.innerHTML="<h1>miles to kilometer</h1>";
    btn.addEventListener("click",function()
{
    var m=parseFloat(document.getElementById("miles").value);
    if(m)
    {
    var c=m*1.609344;
    // var k=document.createElement("h2");
    // k.className="result";
    var k1=document.getElementById("answer");
    k1.innerHTML=c.toFixed(3);
    }
    else{
        alert("error");
    }
})
}
 })

