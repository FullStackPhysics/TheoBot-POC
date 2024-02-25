import { CreateConversationResponse } from '@/types/conversation';
import { CustomGPTResponse } from '@/types/custom-gpt';
import axios from 'axios';

export const createConversation = async (name: string) => {
  const response = await axios.post<CustomGPTResponse<CreateConversationResponse>>('/api/conversation', { name: name });

  return response.data;
};
