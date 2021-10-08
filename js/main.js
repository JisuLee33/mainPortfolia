$(function(){
  //nav list 입력
  const nav = document.getElementById("nav");
  let list = ["ABOUT ME","SKILLS","PORTFOLIO","CONTACT ME"];
  let i= 0;
  while(i<list.length){
  nav.innerHTML += "<li><a href='#"+i+"'>"+list[i]+"</a></li>";
  i++
  }

  $("#fa-bars").on("click",function(){
    $(this).hide();
    $("#nav").show();
  });
  $("#nav li").on("click",function(){
    $("#nav").hide();
    $("#fa-bars").show();
  });
});