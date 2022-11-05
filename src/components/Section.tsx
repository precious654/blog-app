import React from 'react';
import Card from './Card';

function Section() {

  let[articles, setArticles] = React.useState([]);

  React.useEffect( () => {
      fetch("https://newsapi.org/v2/everything?q=apple&from=2022-11-04&to=2022-11-04&sortBy=popularity&apiKey=2ad76cf96fee4d47af43cecef38fe484")
      .then( (response) => response.json() )
      .then( (data) => setArticles( data.articles ) )
    }
  , [] )

let data = articles.map( (item) => <Card item={item} /> );

  return (
    <div className="flex justify-center items-center flex-col mt-3">
      {data}
    </div>
  )
}

export default Section;
