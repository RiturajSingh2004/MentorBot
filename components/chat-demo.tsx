// components/ChatDemo.tsx
"use client"
 
import { useChat, type UseChatOptions } from "ai/react"
 

import { Chat } from "@/components/ui/chat"
 
type ChatDemoProps = {
  initialMessages?: UseChatOptions["initialMessages"]
}
 
export function ChatDemo(props: ChatDemoProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
    setMessages,
  } = useChat(props)
 
  return (
    <div className="flex h-[500px] w-full">
      <Chat
        className="grow bg-blue rounded-lg shadow-lg border border-transparent"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        setMessages={setMessages}
        suggestions={[
          "What are Neural Networks?",
          "How does Transformers neural network work?",
          "Top 10 AI companies in the world",
        ]}
      />
    </div>
  )
}