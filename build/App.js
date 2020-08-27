
function icon__hide(){
document.getElementById("hide_icon").innerHTML = "";
document.getElementById("remove__img").style.display='none';
var icon__element = document.getElementById("add__icon");
icon__element.classList.remove("hide");
icon__element.style.display="block"

//   on click default input display
icon__element.addEventListener('click',()=>{
    icon__element.style.display="none"
    document.getElementById("hide_icon").innerHTML = "search";
    document.getElementById("remove__img").style={display:'block'};

});

}





         // active class script done !!!!

let commonClassAlln = document.querySelectorAll('.commom-cLass')
    commonClassAlln.forEach(elem => {
        elem.addEventListener('click',()=>{
            document.querySelector('.active').classList.remove('active')
            elem.classList.add('active')
        });
    });
        


let leftSide = document.querySelectorAll('.left-status-content')
        leftSide.forEach(a =>{
            a.setAttribute('onmouseover','display(this)')
            a.setAttribute('onmouseout','displayNone()')
        });
      
       
let hoverDisplay = document.getElementsByClassName('hover-display')[0]
    function display(e){
        setTimeout(()=>{
            hoverDisplay.style.display="block";
            let userDetaile = document.getElementById('user-detaile')
            userDetaile.innerHTML = e.children[1].innerText
        },300);
    };

    function displayNone(){
        setTimeout(()=>{
            hoverDisplay.style.display="none";
        },300);
    };



    // right side script


function expand() {
    document.getElementById("expend_manu").classList.toggle("hide")
   var toggle = document.getElementsByClassName('fa-angle-down')[0].classList.toggle('fa-angle-up')
    if(toggle){
        document.getElementsByClassName('toggle-title')[0].innerHTML = 'See Less';
    }else{document.getElementsByClassName('toggle-title')[0].innerHTML = 'See More';}
}