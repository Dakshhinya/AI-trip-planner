import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places To Visit</h2>
      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg">{item.day}</h2>
            {item.plan.map((place, index)=>(
              <div>
                <h2 className="font-medium text-sm text-orange-600">{place.time}</h2>
                <PlaceCardItem place={place}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
