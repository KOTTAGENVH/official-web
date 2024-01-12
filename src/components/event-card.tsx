import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
interface Props {
  key: any;
  category: string;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

const EventCard: React.FC<Props> = ({
  key,
  category,
  image,
  title,
  description,
  date,
  location,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '350px',
        height: '500px',
        margin: '1rem',
        // border: '1px solid #E5E5E5',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Image src={'/' + image} alt={title} width={350} height={200} />
      <h3
        style={{
          fontFamily: 'Montserrat',
          fontSize: '24px',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: '1rem',
            marginLeft: '2rem',
            justifyContent: 'center',
          }}
        >
          <img src={'calendar-icon.png'} />
          <p
            style={{
              fontFamily: 'raleway',
              fontSize: '16px',
              marginLeft: '0.5rem',
            }}
          >
            {date}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: '1rem',
            marginLeft: '2rem',
            justifyContent: 'center',
          }}
        >
          <img src={'location-icon.png'} />
          <p
            style={{
              fontFamily: 'raleway',
              fontSize: '16px',
              marginLeft: '0.5rem',
            }}
          >
            {location}
          </p>
        </div>
      </div>
      <p
        style={{
          fontFamily: 'raleway',
          fontSize: '16px',
          marginLeft: '2rem',
          marginRight: '1rem',
          marginTop: '1rem',
          justifyContent: 'center',
        }}
      >
        {description}
      </p>
      <Button
        style={{
          backgroundColor: '#FC5252',
          color: '#FFFFFF',
          width: '220px',
          height: '50px',
          borderRadius: '10px',
          fontFamily: 'Raleway',
          fontSize: '16px',
          fontWeight: 700,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        View More
      </Button>
    </div>
  );
};

export default EventCard;
