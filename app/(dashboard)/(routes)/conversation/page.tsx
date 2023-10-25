"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/use-pro-modal";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();

  const limitAction = async () => {
    try{
      const response = await axios.post('/api/conversation', { messages: "Hello" });
      console.log(response);
    }catch (error: any){
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    }finally {
      router.refresh(); // This makes the sidebar be updated
    }
  
  }

  return ( 
    <div>
      <Button onClick={limitAction}>
        Conersation
      </Button>
    </div>
  );
}
 
export default ConversationPage;