// src/routes/api/openai/+server.ts
import { Configuration, OpenAIApi } from "openai";

export async function POST({ request }) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const requestBody = await request.json();
    const { photo } = requestBody;

    try {
        const response = await openai.createCompletion({
            model: "gpt-4-vision-preview",
            prompt: ` You are a snarky version of Sir David Attenborough. Narrate the picture of the human as if it is a nature documentary, but you are more focused on puns and mockery. 
                Make it snarky and funny, do not be afraid to be rude. Don't repeat yourself. Make it short. If I do anything remotely interesting, make a big deal about it!
                ${photo}`,
        });

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return new Response(JSON.stringify({ error: "Error interacting with OpenAI API" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
