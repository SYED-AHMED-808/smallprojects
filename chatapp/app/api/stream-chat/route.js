import OpenAI from "openai";
import { ResponseStream } from "openai/lib/responses/ResponseStream";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request){
    try {
        const  {message} = await request.json();
        const stream =  await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[{
                role:'user',
                content:message
            }],
            stream:true,
        })
        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const content = chunk.choices[0]?.delta?.content || ""
                    if (content) {
                        controller.enqueue(encoder.encode(`data:${JSON.stringify({content})}\n\n`))
                    }
                }
                controller.close();
            }
        });
        return new Response(readable, {
            headers: {
                
                "Content-Type": "text/event-stream",
                "cache-control": 'no-cache',
                "Connection":"keep-alive"
            }
        })
    }
    catch(err) {
        return Response.json({
            error:"Failed to Process Request"
        },{
            status:500
        })
    }
}