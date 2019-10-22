let myHeading= document.querySelector('h1');
 myHeading.textContent=multiply(5,8);
myHeading.onclick = function() { alert("dont click me")} 

let myImg = document.querySelector('img');
myImg.onclick = function() 
{
    let mySrc = myImg.getAttribute('src')
    if (mySrc==='images/123.jpg') 
    {
        myImg.setAttribute('src','images/234.jpg');
    }
    else    
    {
        myImg.setAttribute('src','images/123.jpg');
    }
}

function multiply(num1,num2) {
    let result = num1*num2;
    return result;

}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('pls input your name');
    localStorage.setItem('name',myName);
    myHeading.textContent ='酷毙啦,'+myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent ='酷毙啦,'+storedName;
}

myButton.onclick = function() {setUserName();}

let testName= localStorage.getItem('testname');
if (!'') {
    myHeading.textContent ='酷毙啦,!empty===true';

}






