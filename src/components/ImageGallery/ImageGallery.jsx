import { ContainerList } from './ImageGallery.styled';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, onClick }) => {
  return (
    <ContainerList>
      {images &&
        images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
        ))}
    </ContainerList>
  );
};

export default ImageGallery;
