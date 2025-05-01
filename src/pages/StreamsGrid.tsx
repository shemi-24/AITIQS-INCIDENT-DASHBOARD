import React from 'react';
import StreamCard from '../components/StreamCard';
import { MOCK_STREAMS } from '@/components/data/MockData';



const StreamsGrid = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Live Streams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_STREAMS.map((stream) => (
            <StreamCard
              key={stream.id}
              id={stream.id}
              title={stream.title}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamsGrid;
