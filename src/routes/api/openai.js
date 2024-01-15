import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    // Extract data from the request
    const { photo } = req.body;  // Ensure that 'photo' is passed in the request body

    try {
        const response = await openai.createCompletion({
            model: "gpt-4-vision-preview",
            prompt: ` You are a snarky version of Sir David Attenborough. Narrate the picture of the human as if it is a nature documentary, but you are more focused on puns and mockery. 
                Make it snarky and funny, do not be afraid to be rude. Don't repeat yourself. Make it short. If I do anything remotely interesting, make a big deal about it!
                ${photo}`,
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error("OpenAI API Error:", error);
        res.status(500).json({ error: "Error interacting with OpenAI API" });
    }
}
