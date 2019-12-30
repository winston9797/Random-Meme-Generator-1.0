//making a request to api throw http
const meme = fetch('https://meme-api.herokuapp.com/gimme').then(res =>{
    console.log(res);
    //handling the results and converting them into a json (javascript object) which we can hundle throw javascript
    return res.json();
}).then(data =>{
    //getting url and stting into an img
    console.log(data.url);
    const img = document.createElement('img');
    img.setAttribute('src',data.url);
    img.style.height = '500px';
    document.body.appendChild(img);
}).catch(error => {
    //in case of error we can console log the error my own log message
    console.log(error);
    console.log('field to load data');
});;


// async function getMeme(){
//     try {
//         const meme = await fetch('https://meme-api.herokuapp.com/gimme');
//         const data = await meme.json();
//         const img = document.createElement('img');
//         img.setAttribute('src',data.url);
//         img.style.height = '500px';
//         document.body.appendChild(img);
//         console.log(data);
//     }catch(error){
//         console.log('ur meme was not found');
//     }
// }

// getMeme();
