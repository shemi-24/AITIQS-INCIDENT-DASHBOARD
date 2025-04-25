import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Video } from "lucide-react";

const StreamDetails = () => {
  const { id } = useParams();
  const stream = {
    title: "Stream Title",
    viewers: 1234,
    description:
      "This is a detailed description of the live stream. Here you can find more information about what is being streamed.",
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] p-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to streams
        </Link>

        <div className="rounded-lg overflow-hidden bg-[#2A2F3C]">
          <div className="aspect-video bg-black flex items-center justify-center">
            <Video className="w-24 h-24 text-purple-400" />
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              {stream.title}
            </h1>
            <p className="text-purple-200 mb-4">
              {stream.viewers.toLocaleString()} viewers
            </p>
            <p className="text-gray-300">{stream.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamDetails;
