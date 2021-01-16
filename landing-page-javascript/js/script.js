// DOM element selection methods
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
plan = document.getElementById('plan');
// option 
const showAmPm = true;
// show time 
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    // set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    // 12 hour format
    hour = hour % 12 || 12;
    //output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
    setTimeout(showTime, 1000);
}
    // add zeros
    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n ;
    }
// set background and greeting
function setBcGreet() {
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12) {
       // Morning 
       document.body.style.backgroundImage = "url('../img/morning.jpg')";
       greeting.textContent = 'Good Morning';
       }
       else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
       greeting.textContent = 'Good Afternoon';
       }
       else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'black';
    }
}
// get name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
}
else{ 
    name.textContent = localStorage.getItem('name');
}
}
// set name
function setName(e){
    if(e.type=== 'keypress') {
    // make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {

        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }

    }
    else {
        localStorage.setItem('name', e.target.innerText);

    }
    }



// get plan
function getPlan(){
    if(localStorage.getItem('plan') === null){
        plan.textContent = '[Enter Plan]';
}
else {
    plan.textContent = localStorage.getItem('plan');
}
}
// set plan
function setPlan(e){
    if(e.type=== 'keypress') {
    // make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {

        localStorage.setItem('plan', e.target.innerText);
        plan.blur();
    }

    }
    else {
        localStorage.setItem('plan', e.target.innerText);

    }
    }
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
plan.addEventListener('keypress', setPlan);
plan.addEventListener('blur', setPlan);
// run
showTime();
setBcGreet();
getName();
getPlan();