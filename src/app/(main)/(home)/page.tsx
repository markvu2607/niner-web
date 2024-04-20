import { ReadingChallengeBlock } from "./components/reading-challenge-block";
import { CurrentlyReadingBlock } from "./components/currently-reading-block";

export default function HomePage() {
  return (
    <main className="w-full">
      <div className="w-full max-w-[1200px] mx-auto px-4 flex gap-4">
        <div>
          <div className="w-[300px] sticky top-20 space-y-4">
            <CurrentlyReadingBlock />
            <ReadingChallengeBlock />
          </div>
        </div>
        <div className="flex-1 h-[5000px]">main</div>
        <div>
          <div className="w-[300px] sticky top-20">right</div>
        </div>
      </div>
    </main>
  );
}
