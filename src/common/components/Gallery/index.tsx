import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import * as CS from 'src/common/components/Styles';

function Gallery() {
  const images = [
    {
      original: '/images/gallery/HUY00128.jpg',
      thumbnail: '/images/gallery/HUY00128.jpg',
    },
    {
      original: '/images/gallery/HUY00236.jpg',
      thumbnail: '/images/gallery/HUY00236.jpg',
    },
    {
      original: '/images/gallery/HUY00311.jpg',
      thumbnail: '/images/gallery/HUY00311.jpg',
    },
    {
      original: '/images/gallery/HUY00339.jpg',
      thumbnail: '/images/gallery/HUY00339.jpg',
    },
    {
      original: '/images/gallery/HUY00404.jpg',
      thumbnail: '/images/gallery/HUY00404.jpg',
    },
    {
      original: '/images/gallery/HUY00429.jpg',
      thumbnail: '/images/gallery/HUY00429.jpg',
    },
    {
      original: '/images/gallery/HUY00620.jpg',
      thumbnail: '/images/gallery/HUY00620.jpg',
    },
    {
      original: '/images/gallery/HUY00767.jpg',
      thumbnail: '/images/gallery/HUY00767.jpg',
    },
    {
      original: '/images/gallery/HUY00768.jpg',
      thumbnail: '/images/gallery/HUY00768.jpg',
    },
    {
      original: '/images/gallery/HUY00781.jpg',
      thumbnail: '/images/gallery/HUY00781.jpg',
    },
    {
      original: '/images/gallery/HUY00928.jpg',
      thumbnail: '/images/gallery/HUY00928.jpg',
    },
    {
      original: '/images/gallery/HUY01000.jpg',
      thumbnail: '/images/gallery/HUY01000.jpg',
    },
    {
      original: '/images/gallery/HUY01147.jpg',
      thumbnail: '/images/gallery/HUY01147.jpg',
    },
    {
      original: '/images/gallery/HUY09628.jpg',
      thumbnail: '/images/gallery/HUY09628.jpg',
    },
    {
      original: '/images/gallery/HUY09726.jpg',
      thumbnail: '/images/gallery/HUY09726.jpg',
    },
    {
      original: '/images/gallery/HUY09882.jpg',
      thumbnail: '/images/gallery/HUY09882.jpg',
    },
    {
      original: '/images/gallery/HUY09915.jpg',
      thumbnail: '/images/gallery/HUY09915.jpg',
    },
  ];

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Gallery</CS.CommonTitle>
      <CS.CommonBody>
        <ReactImageGallery
          items={images}
          lazyLoad={true}
          thumbnailPosition="right"
          showIndex={true}
          autoPlay={true}
          slideInterval={4000}
        />
      </CS.CommonBody>
      <CS.CommonMargin margin="50px" />
    </CS.CommonContainer>
  );
}

export default Gallery;
