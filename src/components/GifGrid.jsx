import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GiftGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}

      <div className='card-grid'>
        {images.map(img => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
