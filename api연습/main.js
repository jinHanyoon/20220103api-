


// let api = () =>{
//     fetch("https://yts.mx/api/v2/list_movies.json").then(function(response){
//         if(response.status != 200 ){
//             alert("서버와 통신에 실패했습니다")
//         }else{
//             return response.json()
//         }
        
//     }).then(function(jsonData){
//         let data_move = jsonData.data.movies;
//         console.log(data_move,"data 무비") 
//     })
//     render
// }

//  function render(){
//      apiHtml =''
//      apiHtml = jsonData.data.movies
//      `<div>${data.movies}</div>`;
      

//         let brad = document.getElementById("bord").innerHTML = apiHtml
//  }

// api()


let news =[];
const getLatestNews = async () =>{
    let url = new URL(`https://yts.mx/api/v2/list_movies.json`);
    console.log(url)
    let response = await fetch(url)
    let move = await response.json()
    console.log(move,'response 에서 가져온 데이터 입니다')
    news = move.data.movies;
    console.log(news ,'movies 데이터입니다')
    render()
}


const render = () =>{
    let newsHTML = ''
    newsHTML = news.map((news=>{
    return `
        <div class ="page01">
        <div class=News>

        <h2>${news.title}</h2>
            <div class="newsImg">
            <img src="${news.background_image}"
            </div>
            </div>
            </div>
    `
    })).join("")
    


    document.getElementById("news_board").innerHTML=newsHTML
}
getLatestNews()
