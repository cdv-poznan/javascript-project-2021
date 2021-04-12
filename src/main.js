let joke;
const audio = new Audio('https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=%5bSom%5dBa+Dum+Tss!&filename=22/227744-d408e4ab-84bb-4336-b93f-37daf252ef4d.mp3');
audio.volume = 0.5;
const getJoke = () => {
    document.getElementById('punchline').style.display = 'none';
    document.getElementById('anotherJoke').style.display = 'none';
    axios.get('https://official-joke-api.appspot.com/jokes/random').then((response) => {
        joke = response.data;
        document.getElementById('punchlineButton').disabled = false;
        document.getElementById('joke').innerText = joke.setup;
    });
}
const getPunchline = () => {

    setTimeout(() => {
        audio.play();
        document.getElementById('punchlineButton').disabled = true;
        document.getElementById('anotherJoke').style.display = 'inline';
        document.getElementById('punchline').style.display = 'inline';
        document.getElementById('punchline').innerText = joke.punchline;
    }, 300);
    setTimeout(() => {
        document.getElementById('anotherJoke').style.display = 'inline';
        document.getElementById('punchline').style.display = 'inline';
        document.getElementById('punchline').innerText = joke.punchline;
    }, 300);
}
getJoke();


window.addEventListener("load", getItem);
let inputValue = ' ';
let buttonValue = document.querySelector('.buttonItem')
let buttonClean = document.querySelector('.cleanButton')

buttonValue.addEventListener('click',function(){
inputValue = document.querySelector('.addItem').value;
document.querySelector('.addItem').value = '';
if(inputValue === ''){
alert('Musisz coś wpisać, nie da sie niczego nie mieć do roboty ;)')
}
else{
    console.log('Przeszło pierwszego ifa')
if(localStorage.getItem('data') === null){
    localStorage.setItem('data', '[]')
}
    old_data = JSON.parse(localStorage.getItem('data'))
    old_data.push(inputValue)
    localStorage.setItem('data', JSON.stringify(old_data))
    console.log(old_data)
    document.querySelector('#tableBody').textContent = '';
    getItem()
    }
    
}
)

function getItem(){
    if(localStorage.getItem('data')!== null){
        get_data = JSON.parse(localStorage.getItem('data'))
        console.log('zaladowalo z LS')
        for(let i = 0; i < get_data.length; i++){
        console.log(get_data[i])
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let th = document.createElement('th');
        let icon = document.createElement('i');
        let button = document.createElement('button')
        button.type = 'button'
        button.innerText = 'kliknij'
        button.addEventListener('click', function(){
            get_data.splice(i,1)
            console.log(get_data) 
            localStorage.setItem('data', JSON.stringify(get_data))
            location.reload();
        })
        button.id = 'buttonsId' + i
        icon.className = "material-icons";
        icon.innerHTML = "&#xe192;";
        // div.textContent = '&#xe192;' // tu moze jakąś ikonke dać?
        td.textContent = get_data[i];
        th.textContent = i+1;
        tr.appendChild(th)
        tr.appendChild(td)
        tr.appendChild(button)
        // tr.appendChild(icon) cos obcina mocno content
        document.querySelector('#tableBody').appendChild(tr)
        }
        
       
    }
}
buttonClean.addEventListener('click', cleanAllContentFromLSAndList)
function cleanAllContentFromLSAndList(){
    localStorage.removeItem('data');
    document.querySelector('#tableBody').textContent = '';

}