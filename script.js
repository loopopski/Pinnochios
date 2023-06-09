// Make an HTTP GET request to the News API
fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=5936b9d98cc3440e9d490955b92c182d')
  .then(response => response.json())
  .then(data => {
    // Extract the news articles from the API response
    const articles = data.articles;

    // Display the news articles
    const newsContainer = document.getElementById('news-container');

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(articleElement);
    });
  })
  .catch(error => {
    console.log('An error occurred while fetching news:', error);
  });