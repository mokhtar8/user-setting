var sett = document.getElementById('setting'); 
var button = document.getElementById('button'); 
var user = document.querySelector('.sectionUserSetting'); 


sett.addEventListener('click' , ()=>{
    user.classList.toggle('active')
    if(user.style.display == "flex") {
        user.style.display =  'none';
      } else {
      
        user.style.display ='flex';
      }
 
})
var inputs = document.getElementById('inputs'); 
var inps = document.getElementById('inps'); 
button.addEventListener('click' , ()=>{

const obj ={
    c:inputs.value,
    b:inps.value
}


localStorage.setItem('fild', JSON.stringify(obj));
var data =JSON.parse(localStorage.getItem('fild'));
console.log(data);
})