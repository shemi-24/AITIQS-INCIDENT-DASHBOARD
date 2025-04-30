import { Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface StreamCardProps {
  id: string;
  title: string;
  viewers: number;
}

const StreamCard = ({ id, title, viewers }: StreamCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/stream/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg bg-[#2A2F3C] cursor-pointer group transition-transform hover:scale-[1.02] hover:shadow-xl"
    >
      <div className="aspect-video bg-[#1A1F2C] flex items-center justify-center">
        <Video className="w-12 h-12 text-purple-400" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-purple-200 text-sm">{viewers.toLocaleString()} viewers</p>
      </div>
      <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default StreamCard;
