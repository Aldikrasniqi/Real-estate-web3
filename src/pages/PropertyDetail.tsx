// Import necessary dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import { propertyData } from '../libs/data';
import PropertyDetailCard from '../components/PropertyDetailCard';
import {getPropertyDetails} from '../services/property-service'
import Footer from '../layouts/Footer';
import SimilarListings from '../components/SimilarListings';
const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = Number(id);

  const [propertyDetail, setPropertyDetail] = React.useState<any>(null);

  const getDetailsInfo = async () => {
    try {
      const response = await getPropertyDetails(idToNumber);
      setPropertyDetail(response); // Set the propertyDetail after the async call is complete
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };

  React.useEffect(() => {
    getDetailsInfo();
  }, [idToNumber]);
  return (
    <div className="bg-black text-white">
      <div className="flex max-w-screen-xl flex-row justify-between mx-auto items-start pt-20 flex-wrap">
        <PropertyDetailCard props={propertyDetail} />
        <div className="lg:w-[200px] w-auto">
        
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-28 h-28 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKzd5jmnD9SRJgtJDVA1SraZmmznTgjyKZrykPqmEccOyZMnR-0xTvTcJtM9-uqkQIo0&usqp=CAU"
            />
            <h1 className="text-center p-4 text-[#FFFBFB] text-xl font-semibold">
              {propertyDetail?.agentName}
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="font-normal text-sm">
              Name:
            </label>
            <input type="text" className="rounded p-1 bg-[#0E0E0E] w-full" />
            <label htmlFor="name" className="font-normal text-sm">
              Email:
            </label>
            <input type="text" className="rounded p-1 bg-[#0E0E0E] w-full" />
            <label htmlFor="name" className="font-normal text-sm">
              Message:
            </label>
            <input type="text" className="rounded p-1 bg-[#0E0E0E] w-full" />
            <button
              className="py-1.5 px-4 bg-[#1DAEFF] mt-4 text-white font-medium hover:text-white rounded-lg transition duration-300 w-full"
              style={{ boxShadow: '0px 4px 40px 0px #1DAEFF' }}
            >
              Send Message
            </button>
          </div>        
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto mb-28'>
      <SimilarListings />
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
