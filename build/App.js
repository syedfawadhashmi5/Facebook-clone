
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

var home = document.getElementById('home');
var video =  document.getElementById('videos');
let commonClassAlln = document.querySelectorAll('.commom-cLass')
    commonClassAlln.forEach(elem => {
        elem.addEventListener('click',()=>{
            document.querySelector('.active').classList.remove('active')
            elem.classList.add('active')

            //manu display condition
            if(elem.classList[2] === 'videos'){

                home.style.display = 'none'

              video.style.display = 'block'

            }else if(elem.classList[2] === 'home'){

                video.style.display = 'none'

                home.style.display = 'block'
             
            };
        });
        
    });
        

    // right side script


function expand() {
    document.getElementById("expend_manu").classList.toggle("hide")
   var toggle = document.getElementsByClassName('fa-angle-down')[0].classList.toggle('fa-angle-up')
    if(toggle){
        document.getElementsByClassName('toggle-title')[0].innerHTML = 'See Less';
    }else{document.getElementsByClassName('toggle-title')[0].innerHTML = 'See More';}
}






// window.addEventListener('hashchange', ()=>{
//     let currenLocation = window.location.hash
//     // window.location = window.location.hash
//     console.log(window.location.hash)


// })