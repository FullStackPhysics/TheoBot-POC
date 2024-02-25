import { CreateConversationResponse } from '@/types/conversation';
import { CustomGPTError, CustomGPTResponse } from '@/types/custom-gpt';
import { AddMessageRequest, ChatBotMessage } from '@/types/message';
import axios from 'axios';
import { NextRequest } from 'next/server';

export const maxDuration = 300;

export async function POST(req: NextRequest, { params }: { params: { session_id: string } }) {
  const body: AddMessageRequest = await req.json();

  const sessionId = params.session_id;
  if (sessionId === undefined) {
    return Response.json(
      {
        data: { message: 'Session ID not included.', code: 400 },
        status: 'error',
      } as CustomGPTResponse<CustomGPTError>,
      {
        status: 400,
      }
    );
  }
  const response = await axios.post<CustomGPTResponse<ChatBotMessage>>(
    `https://app.customgpt.ai/api/v1/projects/${process.env.CustomGPTProjectKey}/conversations/${sessionId}/messages?stream=false&lang=en`,
    body,
    {
      headers: {
        Authorization: `Bearer ${process.env.CustomGPTApiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  return Response.json(response.data);
}
