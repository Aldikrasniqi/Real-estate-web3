import React from 'react';
import { Button } from 'react-scroll';

type Props = {
  id: string;
  propType: string;
  bedroom: number;
  bath: number;
  area: number;
  propImg: string[];
};

const PropertyCard = (props: { propertyData: Props[] }) => {
  return (
    <>
      {/* <div className="flex flex-1 gap-4 m-4">
          {props.propertyData.map((property, index) => (
            <div key={index}>
              {property.propImg.map((img, imgIndex) => (
                // @ts-nocheck
                <img
                  key={imgIndex}
                  src={img}
                  alt={`Property ${index + 1} - Image ${imgIndex + 1}`}
                />
              ))}
              <p>{property.propType}</p>
              <p>{property.bedroom}</p>
              <p>{property.bath}</p>
              <p>{property.area}</p>
            </div>
          ))}
        </div> */}
      <div className="flex flex-col w-1/2 p-4 h-[530px] rounded-lg">
        <img
          src="https://images.pexels.com/photos/1824392/pexels-photo-1824392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-full rounded-t-lg object-cover object-center"
        />
        <div className="bg-[#161616] p-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-[#FFFBFB] text-2xl font-semibold">100,000$</h1>
            <button
              style={{
                borderRadius: '0.5rem',
                background: 'linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)',
                boxShadow: '0px 17px 33px 0px rgba(255, 255, 255, 0.20)',
                padding: '0.5rem 1rem', // Adjust padding as needed
                color: '#FFF', // Text color
                border: 'none', // Remove default button border
                cursor: 'pointer', // Add pointer cursor on hover
              }}
            >
              View details
            </button>
          </div>
          <div className="flex flex-row justify-center items-center rounded pt-4 w-full">
            <span
              className="w-1/3 text-center border rounded-l-md p-2"
              style={{
                borderRightWidth: '1px',
                borderRightColor: 'rgba(255, 251, 251, 0.35)',
                borderColor: 'rgba(255, 251, 251, 0.35)',
                color: 'rgba(255, 251, 251, 0.65)',
              }}
            >
              1 Bedroom
            </span>
            <span
              className="w-1/3 text-center border p-2"
              style={{
                borderColor: 'rgba(255, 251, 251, 0.35)',
                borderRightWidth: '0px',
                borderRightColor: 'rgba(255, 251, 251, 0.35)',
                borderLeftWidth: '0px',
                borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                color: 'rgba(255, 251, 251, 0.65)',
              }}
            >
              3 Baths
            </span>
            <span
              className="w-1/3 text-center border rounded-r-md p-2"
              style={{
                borderColor: 'rgba(255, 251, 251, 0.35)',
                borderLeftWidth: '1px',
                borderLeftColor: 'rgba(255, 251, 251, 0.35)',
                color: 'rgba(255, 251, 251, 0.65)',
              }}
            >
              535 sq ft
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PropertyCard;
