import { CustomGPTResponse } from '@/types/custom-gpt';
import { AddMessageRequest, ChatBotMessage } from '@/types/message';
import axios from 'axios';

export const addMessageToSession = async (session_id: string, request: AddMessageRequest) => {
  const response = await axios.post<CustomGPTResponse<ChatBotMessage>>(
    `/api/conversation/${session_id}/message`,
    request
  );

  return response.data;
};
