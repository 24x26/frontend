import React from 'react';
import BandwidthStats from './BandwidthStats';
import MIRGraph from './MIRGraph';
import { useSelector } from 'react-redux';

function BandwidthConsumption() {
  const selectedUserId = useSelector((state) => state.page.currentUserId); // Get activePage from Redux

  return (
    <div className="flex flex-col px-12 pt-10 pb-16 mt-11 mr-11 ml-12 bg-white max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="self-center max-w-full w-[1184px]">
        <BandwidthStats id={selectedUserId}/>
        <MIRGraph id={selectedUserId}/>
      </div>
    </div>
  );
}

export default BandwidthConsumption;