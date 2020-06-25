import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';

function App() {

  //Definir la categoria y noticias
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect( () => {
      const consultAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=ae73f00af27b41dab5bd9ed52c135348`;

        const answer = await fetch(url);
        const news = await answer.json();

        saveNews(news.articles);
      }
      consultAPI();
  }, [category]);

  return (
    <Fragment>
        <Header
          title="Buscador de noticias"
        />
        <div className="container white">
          <Form
            saveCategory={saveCategory}
          />
          <ListNews
            news={news}
          />
        </div>
    </Fragment>
  );
}

export default App;
