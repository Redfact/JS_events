            //Elements 
let footer = document.querySelector('footer')
let navbarheader = document.querySelector('#navbarHeader')
let burgerbtn = document.querySelector('.navbar-toggler')
let card1Text = document.querySelector('p.card-text')
let editcard1btn = document.querySelector("button.btn-outline-secondary")
let card2Text = document.querySelectorAll('p.card-text')[1]
let editcard2btn = document.querySelectorAll("button.btn-outline-secondary")[1]
let stylelink = document.querySelector("link")
let navbar = document.querySelector(".navbar")



            //Variables 
let haveCollapse = navbarheader.classList.contains('collapse')
let countclick=0
let clickedEdit2= true
let removedlink= false
let defaultlink = stylelink.href




function Affclick(){
    countclick++
    console.log("clic numéro "+countclick)
}

function AddRemoveCollapse(){
    if( haveCollapse) {
        navbarheader.classList.remove('collapse');
        haveCollapse= false ;
    }
    else {
        navbarheader.classList.add('collapse');
        haveCollapse= true ;
    }
}


function ChangeTextColor(textref,color){
    textref.style.color = color
}

function SwitchTextColor(textref){
    if( clickedEdit2) {
        ChangeTextColor(textref,'green');
        clickedEdit2= false ;
    }
    else {
        //  inherit is the default color from the stylsheet
        ChangeTextColor(textref,"inherit");
        clickedEdit2= true ;
    }
}

function AddRemoveCDN(){
    if( removedlink ) {
        stylelink.href=defaultlink;
        removedlink=false
    }
    else {
        stylelink.href=" ";
        removedlink=true;
    }
    console.log(stylelink.href)

}

let leftbtn = document.querySelector("a.btn-secondary")
let cardparent = document.querySelector(".cards")

console.log(leftbtn)
function pushpop(){
    let length= cardparent.childNodes.length
    let first = cardparent.childNodes[1];
    let last = cardparent.childNodes[length-2];
    cardparent.insertBefore(last,first)
    last=undefined
    //console.log(list.childNodes)
}


burgerbtn.addEventListener('click',AddRemoveCollapse)
footer.addEventListener('click',Affclick)
editcard1btn.addEventListener('click',function() { ChangeTextColor(card1Text,'red'); } )
editcard2btn.addEventListener('click',function(){ SwitchTextColor(card2Text) })
leftbtn.addEventListener('click',pushpop)
navbar.addEventListener('dblclick',AddRemoveCDN)
