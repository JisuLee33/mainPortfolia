$(function(){
  //nav list 입력
  const nav = document.getElementById("nav");
  let list = ["ABOUT ME","SKILLS","PORTFOLIO","CONTACT ME"];
  let i= 0;
  while(i<list.length){
  nav.innerHTML += "<li><a href='#"+i+"'>"+list[i]+"</a></li>";
  i++
  }
  
  //nav hamburg menu
  if(window.innerWidth<480){
    $("#fa-bars").on("click",function(){
      $(this).hide();
      $("#nav").show();
    });
    $("#nav li").on("click",function(){
      $("#nav").hide();
      $("#fa-bars").show();
    });
  }

  //popup 
  class Pop{
    constructor(text){
      this.text= text;
    }

    popOpen(){
      const newLocal = [`./img/${i}.png`,];
      let pop1 = newLocal
      let i = 0;
      while(i<pop1.length){
        
        $("#poject"+i).on("click",function(){
          const selectId = document.getElementById("popup");
      selectId.innerHTML = pop1[i];
        });
        
      }
    }
  }
    
    const pop = new Pop();
      pop.popOpen();


    
  

  














});