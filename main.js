let numbers = document.querySelectorAll('.numbers span');
let next = document.querySelector('.next button');
let pervious = document.querySelector('.pervious p');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let form = document.querySelectorAll('.form');
let check = document.querySelector('.check');
numbers[0].style.background = 'black'
let numPage =0;
// Click on Next Function
document.querySelector('.pervious').style.display='none'
next.onclick = ()=>{
if(Name.value !=='' && email.value !=='' && phone.value!==''){
numPage++;
numbers.forEach(number=>{
number.style = 'none'
})
confirm()
numbers[numPage].style.background = 'black'
nextPervious()
Pages()
}else{
Name.placeholder = 'Please Enter Your Name'
email.placeholder = 'Please Enter Your Email'
phone.placeholder = 'Please Enter Your Phone'
}
}

// Click on goBack Function
pervious.onclick = ()=>{
numPage--;
numbers.forEach(number=>{
number.style = 'none'
})
confirm()
numbers[numPage].style.background = 'black'
nextPervious()
Pages()
}

function nextPervious(){
if(numPage !== 0){
pervious.style.display = 'inline-block'
document.querySelector('.pervious').style.display='inline-block'
}
else{
document.querySelector('.pervious').style.display='none'
pervious.style.display = 'none'
}
}
nextPervious();

function confirm(){
if(numPage ==3){
next.innerHTML = 'Confirm'
}else if(numPage == 4){
form.forEach(page=>{
page.style.display='none'
form[4].style.display = 'flex'
})
next.style.display='none'
pervious.style.display='none'
}else{   
pervious.style.display= 'inline-block'
next.style.display = 'inline-block'  
next.innerHTML = 'Next Page'    
}
}confirm()

function Pages(){
if(numPage ==0){
form.forEach(page=>{
page.style.display='none'
form[0].style.display = 'flex'
})
}else if(numPage == 1){
form.forEach(page=>{
page.style.display='none'
form[1].style.display = 'flex'
})
}else if(numPage == 2){
form.forEach(page=>{
page.style.display='none'
form[2].style.display = 'flex'
})
}else if(numPage == 3){
form.forEach(page=>{
page.style.display='none'
form[3].style.display = 'flex'
})
}
}Pages();

check.onclick = ()=>{
check.classList.toggle('toggleCheck');
let MonthText = document.querySelectorAll('.form2 .text :nth-child(2)');
let YearText = document.querySelectorAll('.form2 .text :nth-child(3)');
let MonthText2 = document.querySelectorAll('.form .rightText :nth-child(1)');
let YearText2 = document.querySelectorAll('.form .rightText :nth-child(2)');
let MonthText3 = document.querySelector('.form4 .border .leftText :nth-child(1)');
let YearText3 = document.querySelector('.form4  .border .leftText :nth-child(2)');
let totalMonth = document.querySelector('.form4 .transparent .leftText :nth-child(1)');
let totalYear= document.querySelector('.form4 .transparent .leftText :nth-child(2)');
MonthText.forEach(text=>{
    text.classList.toggle('toggleMonth');
})
YearText.forEach(text=>{
    text.classList.toggle('toggleYear')
})
MonthText2.forEach(text=>{
    text.classList.toggle('toggleMonth');
})
YearText2.forEach(text=>{
    text.classList.toggle('toggleYear')
})
MonthText3.classList.toggle('toggleMonth');
YearText3.classList.toggle('toggleYear');
totalMonth.classList.toggle('toggleMonth');
totalYear.classList.toggle('toggleYear');

}