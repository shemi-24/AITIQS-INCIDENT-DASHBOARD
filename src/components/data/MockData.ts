// src/data/mockData.js
export const MOCK_STREAMS=[
  {
    id:'1',
    title:'Fall Detection',
    description:"fall detction is very dangerous",
    streamUrl:'http://192.168.5.16:8002/fall/api/detect',
    startUrl:'http://192.168.5.16:8002/fall/api/detect',
    stopUrl:'http://192.168.5.16:8000/fall/api/stop',

  },
  {
    id:'2',
    title:'PPE kit Detection',
    streamUrl:'http://192.168.5.16:8000/ppekit/api/detect',
    startUrl:'http://192.168.5.16:8000/ppekit/api/detect',
    stopUrl:'http://192.168.5.16:8000/ppekit/api/stop'
  },
  {
    id:'3',
    title:'Vehicle Accident Detection',
    streamUrl:'http://192.168.5.16:8001/accident/api/detect',
    startUrl:'http://192.168.5.16:8001/accident/api/detect',
    stopUrl:'http://192.168.5.16:8001/accident/api/stop'
    
  },
  {
    id:'4',
    title:'Car Detection',
    description:"car parking is very simple",
    streamUrl:'http://192.168.5.16:8000/carparking/api/detect',
    startUrl:'http://192.168.5.16:8000/carparking/api/detect',
    stopUrl:'http://192.168.5.16:8000/carparking/api/stop',

  },
]
  