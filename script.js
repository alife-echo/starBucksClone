let screenWidth = window.innerWidth;
document.getElementById('btnMenu').addEventListener('click',(e)=>{
    e.preventDefault()
        document.getElementById('sideBar').style.width = '20%'
})
document.getElementById('btnClose').addEventListener('click',()=>{
   
    document.getElementById('sideBar').style.width = '0%'
    

})


