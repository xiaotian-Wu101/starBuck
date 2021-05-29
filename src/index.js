let showBtn = document.getElementById("showBtn");
let list = document.getElementById("list");
let leftContainer = document.getElementById("left-container");
let nav = document.getElementById("nav");
let xsBtn=document.getElementById("xs");
console.log(xsBtn);
console.log(showBtn);
console.log(list);

let lock=true;
showBtn.onclick =function () {
    
    if (lock === true) {
        console.log("列表");
        list.className = "d-block ";
        leftContainer.className = "d-none";
        nav.className = "d-none";
        showBtn.innerText = "×";
        showBtn.className = "font-large";
        lock = false;
        return ;
    }

    if (lock === false) {
        console.log("列表");
        list.className = "d-none";
        leftContainer.className = "d-flex align-items-center login ";
        nav.className = "nav";
        showBtn.innerText="";
        showBtn.className = "iconfont icon-ziyuan";
        lock = true;
        return ;
    }
}
let xslock=true;
xsBtn.onclick=function(){
    if (xslock === true) {
        console.log("列表");
        list.className = "d-block ";
        nav.className = "d-none";
        xsBtn.innerText = "×";
        xsBtn.className = "font-large";
        xslock = false;
        return ;
    }

    if (xslock === false) {
        console.log("列表");
        list.className = "d-none";
        nav.className = "nav";
        xsBtn.innerText="";
        xsBtn.className = "iconfont icon-ziyuan";
        xslock = true;
        return ;
    }
}