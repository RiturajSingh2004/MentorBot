import { ChatDemo } from "@/components/chat-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-full mx-auto">
      <div className="border rounded-md p-4 border-transparent w-full max-w-5xl h-[80vh]">
        <ChatDemo />
      </div>
    </main>
  );
}