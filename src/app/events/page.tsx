import React from 'react';
import { Button } from '@/components/ui/button';
import eventData from '@/data/events.json';
import EventCard from '@/components/event-card';

interface Event {
  id: number;
  category: string;
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

function Page() {
  const upcomingEvents: Event[] = eventData?.eventData?.filter(
    (event: Event) => event.category === 'upcomingevent'
  );

  const pastEvents: Event[] = eventData?.eventData?.filter(
    (event: Event) => event.category === 'pastevent'
  );

  const webinar: Event[] = eventData?.eventData?.filter(
    (event: Event) => event.category === 'pastevent'
  );
  return (
    <div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #F5F5F5;
          height: 100%;
          width: 100%;
        }
      `}</style>
      <h1
        style={{
          color: '#FC5252',
          fontSize: '76px',
          fontWeight: 700,
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '2rem',
          marginBottom: '1rem',
          fontFamily: 'Montserrat',
        }}
      >
        Upcoming Events
      </h1>

      {upcomingEvents !== undefined ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {upcomingEvents?.map((event: Event) => (
            <EventCard
              key={event.id}
              category={event.category}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <h4
          style={{
            fontSize: '24px',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Raleway',
          }}
        >
          No Events At This Moment. Follow Us To Get Updates.
        </h4>
      )}
      <h2
        style={{
          color: '#222222',
          fontSize: '50px',
          fontWeight: 700,
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '2rem',
          marginBottom: '1rem',
          fontFamily: 'Montserrat',
        }}
      >
        Past Events
      </h2>
      {pastEvents !== undefined ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {pastEvents?.map((event: Event) => (
            <EventCard
              key={event.id}
              category={event.category}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <h4
          style={{
            fontSize: '24px',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Raleway',
          }}
        >
          No Events At This Moment. Follow Us To Get Updates.
        </h4>
      )}
      <h2
        style={{
          color: '#222222',
          fontSize: '50px',
          fontWeight: 700,
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '2rem',
          marginBottom: '1rem',
          fontFamily: 'Montserrat',
        }}
      >
        Webinars
      </h2>
      {webinar !== undefined ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {webinar?.map((event: Event) => (
            <EventCard
              key={event.id}
              category={event.category}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      ) : (
        <h4
          style={{
            fontSize: '24px',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Raleway',
          }}
        >
          No Events At This Moment. Follow Us To Get Updates.
        </h4>
      )}
    </div>
  );
}

export default Page;
