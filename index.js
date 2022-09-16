homeScore=document.getElementById("h-score")
guestScore=document.getElementById("g-score")
let home=0
let guest=0
function hplus1()
{
  home+=1
  homeScore.innerText=home
  lead()
}
function hplus2()
{
  home+=2
  homeScore.innerText=home
  lead()
}
function hplus3()
{
  home+=3
  homeScore.innerText=home
  lead()
}
function gplus1()
{
  guest+=1
  guestScore.innerText=guest
  lead()
}
function gplus2()
{
  guest+=2
  guestScore.innerText=guest
lead()
}
function gplus3()
{
  guest+=3
  guestScore.innerText=guest
  lead()
}
function newgame()
{
  home=0
  guest=0
  guestScore.innerText=guest
  homeScore.innerText=home

}
function lead()
{
  if(home>guest)
  {
      document.getElementById("guest-title").innerText="GUEST"
  document.getElementById("home-title").innerText="HOME"
  document.getElementById("home-title").innerText+="(Leader)"
}
  else{
    document.getElementById("home-title").innerText="HOME"
      document.getElementById("guest-title").innerText="GUEST"
  document.getElementById("guest-title").innerText+="(Leader)"
}
}
