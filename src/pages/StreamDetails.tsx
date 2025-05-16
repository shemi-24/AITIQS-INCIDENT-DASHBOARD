import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Video } from "lucide-react";
import { MOCK_STREAMS } from "@/components/data/MockData";
import axios from "axios";

type Stream = {
  id: string;
  title: string;
  description?: string;
  streamUrl: string;
  startUrl: string;
  stopUrl: string;
} | null;

const StreamDetails = () => {
  const { id } = useParams();
  // const [stream, setStream] = React.useState<Stream>(null);
  const stream = MOCK_STREAMS.find((stm) => stm.id === id);

  const [play, setPlay] = React.useState(true);

  // React.useEffect(() => {
  //   if (id) {
  //     const stm = MOCK_STREAMS.find((stm) => stm.id === id);
  //     setStream(stm);
  //   }
  // }, [id]);

  // React.useEffect(() => {
  //   // handleFetchStream();
  //   axios.get("http://192.168.5.16:8000/violence/api/stop");
  // }, []);

  // React.useEffect(()=>{
  //   if (stream?.stopUrl){
  //     axios.get(stream.stopUrl).catch((err)=> console.error("error stopping stream",err));

  //   }
  // },[stream]);

  if (!stream) return <div className="text-white">stream not found</div>;

  return (
    <div className="min-h-screen bg-[#1A1F2C] p-6">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Come Back to streams
        </Link>

        <div className="rounded-lg overflow-hidden bg-[#2A2F3C]">
        <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
          {/* <img
            src={stream.streamUrl}
            alt={stream.title}
            className="absolute top-0 left-0 w-full h-full object-contain bg-black"
          /> */}
          {play && (
            <img
              key={Date.now()} // forces re-render as alternative
              src={`${stream.streamUrl}?t=${Date.now()}`}
              alt={stream.title}
              className="absolute top-0 left-0 w-full h-full object-contain bg-black"
            />
          )}
        </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
            onClick={() => {
              const url = play ? stream.stopUrl : stream.startUrl;
              axios
                .get(url)
                .catch((err) => console.error("Error toggling stream:", err));
              setPlay((prev) => !prev);
            }}
            // onClick={() => {
            //   const url = play ? stream.stopUrl : stream.startUrl;
            //   axios.get(url)
            //     .then(() => {
            //       setTimeout(() => {
            //         setPlay((prev) => !prev);
            //       }, 500); // Wait for backend to close/reopen stream
            //     })
            //     .catch((err) => console.error("Error toggling stream:", err));
            // }}
          >
            {play ? "Stop" : "Start"} Stream
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreamDetails;
