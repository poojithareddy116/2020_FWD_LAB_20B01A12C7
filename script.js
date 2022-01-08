let btn = document .getElementById("btn");
btn.addEventListener("click",function(){
    let name = document.getElementById("name");
    if (name.value === '')
    {
        document.getElementById("nameid").innerHTML = "*Please enter your name"
    }
    let pass = document.getElementById("pass");
    if(pass.value === '')
    {
        let t=document.getElementById("passid");
        document.getElementById("passid").innerHTML = "*Please enter your password"
    }
    let sel = document.getElementById("sel");
    if(sel.value === 'Branch')
    {
        document.getElementById("selid").innerHTML = "*Please select your branch"
    }   
    let rad1 = document.getElementById("rad1");
    let rad2 = document.getElementById("rad2");
    let rad3 = document.getElementById("rad3");
    if(rad1.checked == false && rad2.checked == false && rad3.checked == false)
    {
        document.getElementById("radid").innerHTML = "*Please select your gender"
    }   
    let che1 = document.getElementById("che1");
    let che2 = document.getElementById("che2");
    let che3 = document.getElementById("che3");
    if(che1.checked == false && che2.checked == false && che3.checked == false){
        document.getElementById("cheid").innerHTML = "*Please choose your interests"
    }
})
