import '../App.css';
import io from 'socket.io-client'
import {useState} from 'react';
import Chat from './Chat'
const socket=io.connect("http://localhost:5000");
function App() {
  const [username,setUsername]=useState("")
  const [room,setRoom]=useState("");
  const [showchat,setShowchat]=useState(false);
  const joinRoom =()=>{
if(username!=="" && room !==""){
  // socket.emit is  used to send data from back to front
  socket.emit("join_room",room);
  setShowchat(true);
}
  }
  return (
    <div className="App">
      <div className={`joinchatcontainer  ${showchat? 'hidden':'show'} border-[3px] border-green-400 bg-slate-100 w-[400px] h-[450px]  m-[auto] flex flex-col`}>
      <h3 className='mx-[auto] text-[30px] mt-[40px] '>Join the Live Chat</h3>
      <h1 className='text-[20px] text-green-500'>Deligent Community</h1>
      <input className='mx-[auto] p-[20px]' type="text"  placeholder='John ...' onChange={(event)=>{
        setUsername(event.target.value)
      }}/>
      <input type="text" className='mx-[auto] p-[20px]' placeholder='Room ID...' onChange={(event)=>{
        setRoom(event.target.value)}}/>
        {/* // onclick the function get run */}
      <button onClick={joinRoom} className='bg-green-400 text-white w-[200px] h-[40px] mx-[auto] my-[40px]'>Join A Room</button>
      </div>
      {/* Here first socket is for the parameter passed in the chat component in chat.js whereas other is for the value we are having in the app.js */}
    {showchat && <Chat socket={socket} username={username} room={room} className='w-[50%]' ></Chat>}
    </div> 
  );
}

export default App;
