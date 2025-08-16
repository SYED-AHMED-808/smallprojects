import OpenAI from "openai";
import { ResponseStream } from "openai/lib/responses/ResponseStream";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request){
    try {
        const  {message} = await request.json();
        const completions =  await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[{
                role:'user',
                content:message
            }]
        })
        return Response.json({
            response: completions.choices[0].message.content,
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