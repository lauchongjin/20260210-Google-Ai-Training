
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";
import { SYSTEM_PROMPT } from "../constants";

/**
 * Always initialize GoogleGenAI with a named parameter for the API key.
 * The API key is obtained exclusively from process.env.API_KEY.
 */
export const getGeminiResponse = async (history: Message[], userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
    }
  });

  // Use the .text property of GenerateContentResponse to get the output string.
  const response = await chat.sendMessage({ message: userInput });
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

  // Always use ai.models.generateContent to query GenAI with both model name and prompt.
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
  
  return JSON.parse(text);
};
