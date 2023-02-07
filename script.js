let screenWidth = window.innerWidth;
var apresentation = document.querySelector('.containerFlex')
var boxFlexColumn = document.querySelector('.containerFlexColumn')
var brotherContainer = document.querySelector('.brotherContainer')
document.getElementById('btnMenu').addEventListener('click',(e)=>{
    e.preventDefault()
        document.getElementById('main').style.marginLeft = '25rem'
        document.getElementById('sideBar').style.width = '25rem'
        document.getElementById('sideBar').style.display = 'block'
        
        if (screenWidth <= 1080) {
            // Aplique estilos para dispositivos móveis aqui
            apresentation.className = 'mediaApresentation'
            boxFlexColumn.className = 'imgsOneContainer'
            brotherContainer.className = 'imgsOneContainer'
        } else {
            // Aplique estilos para desktops aqui
        }
})
document.getElementById('btnClose').addEventListener('click',()=>{
    document.getElementById('main').style.marginLeft = '0rem'
    document.getElementById('sideBar').style.width = '0rem'
    document.getElementById('sideBar').style.display = 'none'
    apresentation.className = 'containerFlex'
    boxFlexColumn.className = 'containerFlexColumn'
    brotherContainer.className = 'brotherContainer'

})


