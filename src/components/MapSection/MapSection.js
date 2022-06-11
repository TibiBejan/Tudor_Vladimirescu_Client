import React from 'react';
import Map from '../../layout/map/Map';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledMap } from './MapSection.styles';

function MapSection({data, error, loaded, label}) {
  return (
    <StyledMap>
      {
        !loaded && (
          <Skeleton />
        )
      }
      {
        (loaded && error) && (
          <p>{error.message}</p>
        )
      }
      {
        (loaded && !error) && (
          <Map 
            Latitude={data?.latitude || data?.hall_latitude || 47.15691401400323} 
            Longitude={data?.longitude || data?.hall_longitude || 27.604798885387765} 
            PopupText={label || 'Tudor Vladimirescu University Campus'} />
        )
      }
    </StyledMap>
  )
}

export default MapSection;