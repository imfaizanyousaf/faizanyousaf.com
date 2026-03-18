"use client";

import { MessageCircle, SendIcon, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-m";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-muted-foreground/50"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Faizan's AI assistant. Ask me anything about him and his work!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 100)}px`;
  }, [input]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.ok
            ? data.response
            : "We're having some technical issues right now. Please try again in a moment, or reach out to Faizan directly at yousafmughal477@gmail.com.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "We're having some technical issues right now. Please try again in a moment, or reach out to Faizan directly at yousafmughal477@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed right-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] z-50 flex w-[min(380px,calc(100vw-2rem))] flex-col rounded-2xl border border-popover-border bg-background shadow-popover lg:right-8"
            style={{ maxHeight: "min(560px, calc(100dvh - 8rem))" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="relative shrink-0">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageCircle className="size-4" />
                </div>
                <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-background bg-green-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight">Faizan&apos;s Ghost</p>
                <p className="text-xs text-muted-foreground">AI assistant · always online</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-7 shrink-0 text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3">
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex gap-2",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "assistant" && (
                      <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MessageCircle className="size-3" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed",
                        message.role === "user"
                          ? "rounded-tr-sm bg-primary text-primary-foreground"
                          : "rounded-tl-sm bg-muted text-foreground"
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-end gap-2">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MessageCircle className="size-3" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-muted px-3.5 py-2.5">
                      <TypingDots />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 border-t border-border px-3 py-3">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything…"
                className="max-h-[100px] min-h-[36px] flex-1 resize-none rounded-xl border border-input bg-muted/50 px-3 py-2 text-sm leading-relaxed placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none disabled:opacity-50"
                rows={1}
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="mb-0.5 shrink-0"
              >
                <SendIcon className="size-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB trigger */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50 lg:right-8",
          "flex size-12 items-center justify-center rounded-full shadow-lg transition-colors",
          open
            ? "bg-muted text-foreground ring ring-border"
            : "bg-primary text-primary-foreground"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="size-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
