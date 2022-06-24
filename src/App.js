import { useState, useEffect } from 'react';
import ImageCard from "./components/ImageCard";
import Search from './components/Search';

function App() {
  const [ isLoading, setLoading ] = useState(true);
  const [ images, setImages ] = useState({});
  const [ term, setTerm ] = useState('');

  useEffect(()=>{
    console.log('term',term);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setLoading(false);
    })
    .catch(err => console.log('error',err));

  },[term])

  return (
    <div className='container mx-auto'>
      <Search setTerm={(term)=>setTerm(term)}/>
      {isLoading ? <h1>Loading...</h1> : <div className='grid grid-cols-3 gap-4'>
        {images.map((image) => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
