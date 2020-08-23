
// this script create onmouse over to detaile about user but work in progree

document.querySelectorAll('.left-status-content').forEach(a =>{
   a.setAttribute('onmouseover','display()')
});

function display(){
    alert('hi')
};