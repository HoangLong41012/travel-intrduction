import { useRef, useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import _ from 'lodash';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { ClientImage } from '../client/js/common';

const TourImageSlider = ({ images, width, height }) => {
  const imageRef = useRef([]);
  const [item, setItem] = useState(0);

  useEffect(() => {
    const currentImage = imageRef.current[item];
    if (currentImage) {
      currentImage.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  }, [item]);

  if (!images || !images.length) {
    return <Box></Box>;
  }

  const imageAmount = images.length;
  const sliderWidth = imageAmount * 100;

  const handleSetItem = (value) => {
    setItem((item + value + imageAmount) % imageAmount);
  };

  return (
    <Box className="tour-image-slider" sx={{ width, height }}>
      <Box
        className="-navigation icon-back"
        onClick={() => {
          handleSetItem(-1);
        }}
      >
        <ArrowBackIosNewIcon className="-icon24" />
      </Box>
      <Box
        className="-navigation icon-next"
        onClick={() => {
          handleSetItem(1);
        }}
      >
        <ArrowForwardIosIcon className="-icon24" />
      </Box>
      <Box className="image-container" sx={{ height, width }}>
        <Stack
          className="image-list"
          direction="row"
          sx={{ width: `${sliderWidth}%` }}
        >
          {_.map(images, (image, index) => {
            return (
              <Box
                ref={(el) => {
                  imageRef.current[index] = el;
                }}
              >
                <ClientImage
                  width={width}
                  height={height}
                  src={image}
                  alt=""
                  key={index}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default TourImageSlider;
