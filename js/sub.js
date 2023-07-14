let sort = document.querySelector("tr.sort > td div");
let email = document.querySelector("tr.email > td div");
let sortList = document.querySelectorAll("tr.sort > td div li");
let emailList = document.querySelectorAll("tr.email > td div li");

function select(items, target, list){
  items.addEventListener("click", e=> {
    e.currentTarget.classList.toggle("on");

    if(items.classList.contains("on")){
      target.classList.remove("on");
    }
  })

  for(var i=0; i<list.length; i++){
    list[i].addEventListener("mouseover", e=> {
      list.forEach(item => {
        item.classList.remove("on");
      })
      e.currentTarget.classList.add("on");
    })
  }
}

select(sort, email, sortList);
select(email, sort, emailList);