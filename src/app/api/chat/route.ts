import { APIKEY } from './key';
import { createDeepSeek } from '@ai-sdk/deepseek';
import { streamText, convertToModelMessages } from 'ai';
import { NextRequest } from 'next/server';

const deepseek = createDeepSeek({
    apiKey: APIKEY,
});

export async function POST(req: NextRequest) {
    const { messages } = await req.json();
    const result = streamText({
        model: deepseek("deepseek-chat"),
        messages:await convertToModelMessages(messages),
        system: '你是一个女仆按照你的性格给予用户帮助'
    })
    return result.toUIMessageStreamResponse()
}