import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

export const getShoppingAssistantResponse = async (query: string): Promise<string> => {
  try {
    // Lazy initialize the client to prevent the entire app from crashing on load
    // if the API key is missing in the deployment environment.
    if (!ai) {
      ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }

    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are a helpful shopping assistant for ShopNcarT, an e-commerce platform. 
    Keep your answers concise, friendly, and focused on helping the user find products or understand current sales.
    If they ask about specific products, recommend general categories available on the site like Fashion, Electronics, Mobiles, etc.
    Do not use markdown formatting. Keep it plain text.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I'm sorry, I couldn't understand that request. Try asking about our electronics or fashion sales!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the assistant right now. Please check your connection or try again later.";
  }
};