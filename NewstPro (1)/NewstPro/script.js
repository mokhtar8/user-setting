const inputs = document.querySelectorAll("input"); //get inputs
const addBtn = document.getElementById("Addbtn"); //get button
const List = document.getElementById("list"); // get ul
const btnBox = document.getElementById("btnBox");
const explainbox = document.getElementById("explainbox");

addBtn.addEventListener("click", () => {
 
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  const divEL = document.createElement("div");
 
 divEL.classList.add("li-btn");

  btn1.innerHTML = "حذف";
  btn2.innerHTML = "ویرایش";
  btn3.innerHTML = "جزییات";

  divEL.appendChild(btn1);
  divEL.appendChild(btn2);
  divEL.appendChild(btn3);

  btnBox.appendChild(divEL);

   var div = document.createElement("div");

  explainbox.appendChild(div);
  for (const input of inputs) {
    if (input.value !== "") {
      const inputValue = input.value;
      const listItem = document.createElement("li");


      
      listItem.innerHTML = inputValue;
      div.appendChild(listItem);
div.classList.add("div-li-list");
      input.value = "";

    }
  }
 

});
// https://stackoverflow.com/questions/72591283/creating-an-edit-buttonto-do-app-javascript

  var searchinput = document.querySelector("#searchinput");
 
  searchinput.addEventListener('keyup' ,  () => {
  var liList =document.querySelectorAll('.li-list');
  var libtn =document.querySelectorAll('.li-btn');
    var a = searchinput.value.toLowerCase() ;

    liList.forEach(item => {    
      console.log(liList);
      var tex = item.textContent
if (tex.toLocaleLowerCase().includes(a.toLowerCase()) ){
  item.style.display= ''
}else{
  item.style.display= 'none'

}



  })


  });
