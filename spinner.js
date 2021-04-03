const goSpinner = () => {

    document.querySelector('.loader-container').style.display = 'flex';
    document.querySelector('.message').textContent = `Please wait..`;


    form.style.visibility = 'hidden';
    form.style.height = '0';


}

const stopSpinner = () => {

    document.querySelector('.loader-container').style.display = 'none';


}