const logoBig = document.querySelector('.logoBig');


const changeLogo = () => {

    if (logoBig != 'null' && window.innerWidth > 992) {

        logoBig.innerHTML = `   <img src="images/logoBig.png" onerror="this.onerror=null; this.src='images/logoBig.png'">`;
    } else {
        logoBig.innerHTML = `<img src="images/plantify.png" onerror="this.onerror=null; this.src='images/plantify.png'">`
    }
}


window.addEventListener('resize', changeLogo)
document.addEventListener('DOMContentLoaded', changeLogo)