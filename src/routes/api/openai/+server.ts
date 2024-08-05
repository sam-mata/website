// src/routes/api/openai/+server.ts
import OpenAI from "openai";
import { VITE_OPENAI_API_KEY } from '$env/static/private';

export async function POST({ request }) {
    if (!VITE_OPENAI_API_KEY) {
        console.error("VITE_OPENAI_API_KEY is not set in the environment variables");
        return new Response(JSON.stringify({ error: "OpenAI API key is not configured" }), {
            status: 500,
            headers: {x
                'Content-Type': 'application/json'
            }
        });
    }

    const openai = new OpenAI({
        apiKey: VITE_OPENAI_API_KEY,
    });

    try {
        const requestBody = await request.json();
        const { photo } = requestBody;

        if (!photo) {
            throw new Error("No photo provided in the request body");
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: [
                        { 
                            type: "text", 
                            text: "You are a snarky version of Sir David Attenborough. Narrate the picture of the human as if it is a nature documentary, but you are more focused on puns and mockery. Make it snarky and funny, do not be afraid to be rude. Don't repeat yourself. Make it short. If I do anything remotely interesting, make a big deal about it!" 
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: photo
                            }
                        }
                    ],
                },
            ],
            max_tokens: 300,
        });

        return new Response(JSON.stringify(response.choices[0].message), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Detailed OpenAI API Error:", error);
        return new Response(JSON.stringify({ error: error.message || "Error interacting with OpenAI API" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}