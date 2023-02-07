document.getElementById('btnMenu').addEventListener('click',e=>{
    e.preventDefault()
        document.getElementById('main').style.marginLeft = '25rem'
        document.getElementById('sideBar').style.width = '25rem'
        document.getElementById('sideBar').style.display = 'block'
})
document.getElementById('btnClose').addEventListener('click',()=>{
    document.getElementById('main').style.marginLeft = '0rem'
    document.getElementById('sideBar').style.width = '0rem'
    document.getElementById('sideBar').style.display = 'none'
})


