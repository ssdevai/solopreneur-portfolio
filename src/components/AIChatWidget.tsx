
import React, { useState, useRef, useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Bot, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = { type: "user" | "ai"; text: string };

const initialPrompt = "Hi! 👋 I’m your AI assistant. Ask me anything about AI automation, agents, prompt engineering, or solopreneur topics.";

type AIChatWidgetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function AIChatWidget({ open, onOpenChange }: AIChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([{ type: "ai", text: initialPrompt }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { type: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      // Basic AI echo with minimal tailoring (replace with real API later!)
      let aiText = "I'm here to help! Could you share more details?";
      if (/automation/i.test(trimmed)) aiText = "AI automation streamlines tasks and improves productivity. How would you like to automate your workflow?";
      else if (/agent/i.test(trimmed)) aiText = "AI agents act autonomously to complete tasks. I build custom agents for SaaS and n8n!";
      else if (/n8n/i.test(trimmed)) aiText = "n8n is amazing for workflow automation—connect it with AI for even greater power!";
      else if (/prompt/i.test(trimmed)) aiText = "Prompt engineering is about crafting instructions for AIs to get precise results. What task do you have in mind?";
      else if (/solopreneur|product|revenue/i.test(trimmed)) aiText = "Solopreneurs thrive with lean AI tools and focused strategies. Let's discuss your next AI-powered product!";
      setMessages((prev) => [...prev, { type: "ai", text: aiText }]);
      setLoading(false);
    }, 900);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-md mx-auto">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2"><Bot className="w-5 h-5 mr-1" />AI Chat Assistant</DrawerTitle>
          <DrawerClose className="absolute right-4 top-4 text-gray-500 hover:text-blue-700" />
        </DrawerHeader>
        {/* Chat messages display */}
        <div
          ref={messagesRef}
          className="px-4 pb-1 md:pb-0 overflow-y-auto max-h-[40vh] md:max-h-[250px] min-h-[180px] space-y-3"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={cn(
              "flex",
              msg.type === "ai" ? "justify-start" : "justify-end"
            )}>
              <div className={cn(
                "px-3 py-2 rounded-lg text-sm max-w-xs md:max-w-md",
                msg.type === "ai"
                  ? "bg-blue-50 text-blue-900 flex items-center gap-2"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              )}>
                {msg.type === "ai" && <Bot size={16} className="mr-1 shrink-0" />}
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-blue-50 text-blue-500 px-3 py-2 rounded-lg text-sm flex items-center gap-2 animate-pulse">
                <Bot size={16} className="mr-1 shrink-0" />
                <span>Typing…</span>
              </div>
            </div>
          )}
        </div>
        {/* Chat input */}
        <form
          className="flex items-center border-t border-gray-200 mt-2 px-4 py-2 gap-2"
          onSubmit={handleSend}
        >
          <Input
            type="text"
            value={input}
            disabled={loading}
            placeholder="Type your message…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) handleSend(e); }}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </form>
        <div className="p-2 text-xs text-center text-gray-400">
          This is a demo AI chat simulation.<br/>For a true AI chat, connect a backend or external API.
        </div>
      </DrawerContent>
    </Drawer>
  );
}
