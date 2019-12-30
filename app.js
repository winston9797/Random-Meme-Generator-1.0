//making a request to api throw http
const meme = fetch('https://meme-api.herokuapp.com/gimme').then(res =>{
    console.log(res);
    //handling the results and converting them into a json (javascript object) which we can hundle throw javascript
    return res.json();
}).then(data =>{
    //getting url and stting into an img
    console.log(data.url);
    document.getElementById('output').setAttribute('src',data.url);
    document.getElementById('output').style.height = '500px';
    document.getElementById('output').style.margin = '0 auto';
}).catch(error => {
    //in case of error we can console log the error my own log message
    alert(error);
});;

document.getElementById('new').addEventListener('click',function(e){
    console.log('click');
    location.reload();
    e.preventDefault();
});

