$(function(){
  //nav list 입력
  const nav = document.getElementById("nav");
  let list = ["저를 소개합니다","포트폴리오","연락주세요"];
  let i= 0;
  while( i<list.length){
  nav.innerHTML += "<li>"+list[i]+"<li>";
  i++
  }
});