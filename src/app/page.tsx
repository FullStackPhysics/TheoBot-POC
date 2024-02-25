import ChatMessage from '@/components/chat/chat-message';

export default function Home() {
  return (
    <main className='relative h-full w-full flex-1 overflow-auto transition-width wg-bg-grey-500'>
      <div role='presentation' className='flex h-full flex-col'>
        <ChatMessage />
      </div>
    </main>
  );
}
