import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getAssistantResponse, suggestionPrompts } from "../utils/aiEngine.js";
import { trackAIChatOpen } from "../utils/analytics.js";
import { icons } from "./icons.js";

const initialMessages = [
  {
    role: "assistant",
    text: "Hi, I'm Charan AI. I can tell you about Charan's experience, projects, skills, and achievements. Try asking one of the questions below.",
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1" aria-label="Charan AI is typing">
      {[0, 1, 2].map((item) => (
        <motion.span
          key={item}
          className="h-1.5 w-1.5 rounded-full bg-cyan-100/80"
          animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: item * 0.12 }}
        />
      ))}
    </div>
  );
}

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const MessageIcon = icons.MessageCircle;
  const XIcon = icons.X;
  const SendIcon = icons.Send;
  const BotIcon = icons.Bot;
  const UserIcon = icons.User;
  const SparklesIcon = icons.Sparkles;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [messages, isThinking, shouldReduceMotion]);

  const openChat = () => {
    trackAIChatOpen();
    setIsOpen(true);
  };

  const submitMessage = (value = input) => {
    const trimmed = value.trim();
    if (!trimmed || isThinking) {
      return;
    }

    setMessages((current) => [...current, { role: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: getAssistantResponse(trimmed) },
      ]);
      setIsThinking(false);
    }, shouldReduceMotion ? 0 : 720);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={openChat}
        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        className="fixed bottom-4 left-4 right-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-200/20 bg-slate-100 px-4 text-sm font-bold text-black shadow-glow transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:bottom-7 sm:left-auto sm:right-7 sm:w-auto"
        aria-label="Open Ask Charan AI chatbot"
      >
        <MessageIcon className="h-4 w-4" aria-hidden="true" />
        <span>Ask Charan AI</span>
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-end bg-black/60 p-3 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="glass-panel flex max-h-[86vh] w-full max-w-[440px] flex-col overflow-hidden rounded-xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300/10 text-cyan-100">
                    <BotIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="chatbot-title" className="text-sm font-semibold text-white">
                      Ask Charan AI
                    </h2>
                    <p className="text-xs text-slate-400">Client-side portfolio assistant</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg text-slate-400 transition hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora"
                  aria-label="Close chatbot"
                >
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div ref={scrollRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
                <div className="rounded-lg border border-cyan-200/12 bg-cyan-300/8 p-3 text-xs leading-6 text-cyan-50">
                  Runs entirely in the browser using a local portfolio knowledge base. No external AI APIs or paid services.
                </div>

                <AnimatePresence initial={false}>
                  {messages.map((message, index) => {
                    const isUser = message.role === "user";
                    const Icon = isUser ? UserIcon : SparklesIcon;
                    return (
                      <motion.div
                        key={`${message.role}-${index}-${message.text}`}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`flex gap-3 ${isUser ? "justify-end" : ""}`}
                      >
                        {!isUser ? (
                          <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-cyan-100">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                        ) : null}
                        <div
                          className={`max-w-[82%] rounded-xl px-4 py-3 text-sm leading-6 ${
                            isUser
                              ? "bg-slate-100 text-black"
                              : "border border-white/10 bg-white/[0.06] text-slate-200"
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {isThinking ? (
                  <motion.div
                    className="flex gap-3"
                    aria-live="polite"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  >
                    <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-cyan-100">
                      <SparklesIcon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                ) : null}
              </div>

              <div className="border-t border-white/10 p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {suggestionPrompts.map((prompt) => (
                    <button
                      type="button"
                      key={prompt}
                      onClick={() => submitMessage(prompt)}
                      className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-left text-xs text-slate-300 transition hover:border-cyan-200/20 hover:bg-white/[0.09] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <form
                  className="flex gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    submitMessage();
                  }}
                >
                  <label className="sr-only" htmlFor="chatbot-input">
                    Ask about Charan
                  </label>
                  <input
                    ref={inputRef}
                    id="chatbot-input"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask about projects, skills, or internships"
                    className="min-h-12 min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40 focus:ring-2 focus:ring-cyan-200/20"
                  />
                  <button
                    type="submit"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-slate-100 text-black transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Send message"
                    disabled={isThinking}
                  >
                    <SendIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
