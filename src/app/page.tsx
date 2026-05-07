import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white selection:text-black">
      <div className="relative">
        {/* Scrollytelling Section */}
        <ScrollyCanvas frameCount={120} />
        
        {/* Text Overlay Section */}
        <Overlay />
      </div>

      {/* Projects Grid Section */}
      <Projects />
    </main>
  );
}
