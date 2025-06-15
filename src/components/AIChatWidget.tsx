
import React, { useState, useRef, useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Bot, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = { type: "user" | "ai"; text: string };

type AIChatWidgetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userName?: string;
  projectContext?: string;
};

function buildInitialPrompt(userName?: string, projectContext?: string) {
  let intro = "Hi! 👋 I’m your AI assistant.";
  if (userName && userName.trim()) {
    intro = `Hi ${userName.trim()}! 👋 I’m your AI assistant.`;
  }
  let context = "";
  if (projectContext && projectContext.trim()) {
    context = `\n\nThanks for sharing your project details: ${projectContext}`;
  }
  return (
    intro +
    context +
    "\nAsk me anything about AI, automation, app building, or your unique project challenges. I'll tailor my answers to your needs!"
  );
}

export default function AIChatWidget({
  open,
  onOpenChange,
  userName,
  projectContext,
}: AIChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    { type: "ai", text: buildInitialPrompt(userName, projectContext) },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  // Reset initial message if userName/projectContext changes on open
  useEffect(() => {
    if (open) {
      setMessages([{ type: "ai", text: buildInitialPrompt(userName, projectContext) }]);
    }
    // eslint-disable-next-line
  }, [open, userName, projectContext]);

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

    setTimeout(() => {
      let aiText =
        "I'm here to help! Could you share more details or clarify your goals?";
      if (/automation/i.test(trimmed))
        aiText = "AI automation can streamline your business and save time. How can I tailor automation to your project?";
      else if (/agent/i.test(trimmed))
        aiText = "AI agents help automate specialized business tasks. Would you like advice on building or deploying one?";
      else if (/n8n/i.test(trimmed))
        aiText = "n8n allows for powerful workflow automation—let's connect it with AI for even greater results!";
      else if (/prompt/i.test(trimmed))
        aiText = "Great! Prompt engineering means crafting instructions for AI to get ideal responses. What kind of output do you need?";
      else if (/solopreneur|product|revenue/i.test(trimmed))
        aiText = "Solopreneurs benefit from focused AI solutions for rapid growth and easy scaling. Want strategies or tech advice?";
      setMessages((prev) => [...prev, { type: "ai", text: aiText }]);
      setLoading(false);
    }, 900);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-md mx-auto">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 mr-1" />
            AI Chat Assistant
          </DrawerTitle>
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
          This is a demo AI chat simulation.<br/>For intelligent project advice, connect a backend or AI API.
        </div>
      </DrawerContent>
    </Drawer>
  );
}
