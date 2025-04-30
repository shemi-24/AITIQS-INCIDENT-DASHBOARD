import React from 'react';
import StreamCard from '../components/StreamCard';
// import {MOCK_STREAMS} from '../data/mockData';

const MOCK_STREAMS = [
  { id: '1', title: 'Fall Detection', viewers: 1234 },
  { id: '2', title: 'Vehicle Accident Detection', viewers: 856 },
  { id: '3', title: 'Car Parking Detection', viewers: 2341 },
  { id: '4', title: 'PPE Kit Detection', viewers: 567 },
  { id: '5', title: 'Weopen Detection', viewers: 789 },
  { id: '6', title: 'Face Mask Detection', viewers: 432 },
];

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
              viewers={stream.viewers}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamsGrid;
