  
let url = `https://saurav.tech/NewsAPI/top-headlines/category/health/us.json`;

fetch(url).then(res => res.json()).then(data => {

    let neswHtml = document.getElementById('news');
    let html = '';

    for (let i = 0; i < 3; i++) {
        html += '<article class="card">';
        if (data.articles[i].urlToImage) {
            html += `<img 	class="responsive-img" src="${data.articles[i].urlToImage}" alt="Not Found">`;
        } else {
            html += `<img 	class="responsive-img" src="" class="card-img-top" alt="Not Found">`;
        }
        html += '<div class="card-content">';
        html += `<h5>${ data.articles[i].title }</h5>`;
        html += `<p>${data.articles[i].description}</p>`;
        html += `<a href="${data.articles[i].url}" target="_blank" class="btn btn-primary">Read More</a>`;
        html += '</div></article>';
    }
    neswHtml.innerHTML = html;
})