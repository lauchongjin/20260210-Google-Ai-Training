
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_PROMPT } from "../constants";

/**
 * Gets a response from Gemini using the chat interface.
 * History is passed to maintain context.
 */
export const getGeminiResponse = async (history: Message[], userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Construct the chat session with history
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    history: history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    })),
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
    }
  });

  // sendMessage returns a GenerateContentResponse
  const response = await chat.sendMessage({ message: userInput });
  // Use the .text property of GenerateContentResponse to get the output string.
  return response.text || "I'm sorry, I couldn't process that request.";
};

/**
 * Scores a lead using structured JSON output from Gemini.
 */
export const scoreLead = async (formData: any) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Analyze this lead and score it from 1-10 based on project scope and budget. Provide a short summary.
  Lead Data: ${JSON.stringify(formData)}
  `;

  // Use ai.models.generateContent for single generation tasks with JSON schema.
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          category: { type: Type.STRING },
          summary: { type: Type.STRING }
        },
        required: ["score", "category", "summary"]
      }
    }
  });

  // Access the .text property directly.
  const text = response.text;
  if (!text) return { score: 0, category: 'N/A', summary: 'No response from AI' };
  
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse AI response:", e);
    return { score: 0, category: 'Error', summary: 'Failed to process lead evaluation.' };
  }
};