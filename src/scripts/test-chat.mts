import 'dotenv/config';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function main() {
  console.log("Starting request...");
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324",
      messages: [{ role: "user", content: "Hello!" }],
      temperature: 1,
      top_p: 0.95,
      max_tokens: 16384,
    });

    const responseMessage = completion.choices[0]?.message;
    const reasoning = (responseMessage as any)?.reasoning || (responseMessage as any)?.reasoning_content;
    const content = responseMessage?.content || "";

    const fullResponse = (reasoning ? reasoning + "\n\n" : "") + content;
    console.log("Response:", fullResponse);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
