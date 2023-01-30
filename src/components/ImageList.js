import ImageShow from './ImageShow';

function ImageList({ images }) {
  
  return (
    <div>
      LIST: {images.length}
      <ImageShow />
    </div>
  );
}

export default ImageList;
