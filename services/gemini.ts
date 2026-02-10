
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_PROMPT } from "../constants";

export const getGeminiResponse = async (history: Message[], userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
    }
  });

  // We only send the message, chat handles history internally if we want, 
  // but for simplicity here we just use sendMessage.
  // In a real app we'd map history to Gemini's format.
  const response = await chat.sendMessage({ message: userInput });
  return response.text || "I'm sorry, I couldn't process that request.";
};

export const scoreLead = async (formData: any) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Analyze this lead and score it from 1-10 based on project scope and budget. Provide a short summary.
  Lead Data: ${JSON.stringify(formData)}
  `;

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

  return JSON.parse(response.text);
};
