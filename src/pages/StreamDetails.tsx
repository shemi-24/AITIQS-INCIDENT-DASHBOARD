import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Video } from "lucide-react";
import { MOCK_STREAMS } from "@/components/data/MockData";
import axios from "axios";

type Stream = {
  title: string;
  viewers: number;
  description: string;
};

const StreamDetails = () => {
  const { id } = useParams();
  const [stream, setStream] = React.useState<Stream>({
    title: "",
    description: "",
    viewers: 0,
  });

  const [play, setPlay] = React.useState(true);

  const handleFetchStream = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      const stm = MOCK_STREAMS.find((stm) => stm.id === id);
      setStream(stm);
    }
  }, [id]);

  React.useEffect(() => {
    // handleFetchStream();
    axios.get("http://192.168.5.16:8000/violence/api/stop");
  }, []);


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
          {/* <div className="aspect-video bg-black flex items-center justify-center">
            <Video className="w-24 h-24 text-purple-400"  />
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              {stream.title}
            </h1>
            <p className="text-purple-200 mb-4">
              {stream.viewers.toLocaleString()} viewers
            </p>
            <p className="text-gray-300">{stream.description}</p>
          </div> */}
          
          {/* <video>
            <source
              src="http://192.168.5.16:8000/violence/api/detect"
              type="multipart/x-mixed-replace"
            />
          </video> */}
           <img
            src="http://192.168.5.16:8000/violence/api/detect"
            alt=""
            className=" h-96 aspect-video"
          />
          <button
          className="bg-blue-500 text-white p-5"
            onClick={() => {
              if (play) {
                axios.get("http://192.168.5.16:8000/violence/api/stop");
              } else {
                axios.get("http://192.168.5.16:8000/violence/api/detect");
              }
              setPlay(prevState=>!prevState)
            }}
          >
            {!play ? "Start" : "Stop"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreamDetails;
