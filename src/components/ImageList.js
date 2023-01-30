import ImageShow from './ImageShow';
import './ImageList.css';

function ImageList({ images }) {
  console.log(images);

  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return (
    <div className='image-list'>
      LIST: {images.length}
      {renderedImages}
    </div>
  );
}

export default ImageList;
