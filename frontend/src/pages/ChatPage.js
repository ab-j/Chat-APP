import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellanous/SideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";



const ChatPage=()=>{
  const [fetchAgain,setFetchAgain]=useState(false);
  const  {user}=ChatState();

  return (

    <div style={{width:"100%"}}>
     
     {user&&<SideDrawer/>}

     <Box
       display="flex"
       justifyContent="space-between"
       width="100%"
       height="91.5vh"
       padding="10px"
      >
      {user && <MyChats 
        fetchAgain={fetchAgain} 
      />}
      {user && <ChatBox  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
     </Box>

    </div>
  );

};

export default ChatPage;
