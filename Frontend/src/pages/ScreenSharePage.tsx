import { FC } from 'react';
import ScreenShare from '@/components/ScreenShare';
import { WebSocketProvider } from '@/components/WebSocketProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ScreenSharePage: FC = () => {
  return (
    <WebSocketProvider url="ws://localhost:8000">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
        <Header />
        <div className="flex-grow pt-24 pb-12">
          <ScreenShare />
        </div>
        <Footer />
      </div>
    </WebSocketProvider>
  );
};

export { ScreenSharePage };
