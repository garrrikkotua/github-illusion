import Form from "@/components/form";
import { Twitter } from "@/components/icons";
import PhotoBooth from "@/components/photo-booth";
import { CountDisplay, GeneratedCount } from "./generated-count";
import { Suspense } from "react";

export default function FormRSC({
  prompt,
  pattern,
  image,
  newsletter,
}: {
  prompt?: string;
  pattern?: string;
  image: string | null;
  newsletter?: boolean;
}) {
  return (
    <div className="z-10 w-full max-w-xl px-2.5 xl:px-0">
      {newsletter ? (
        <a
          href="https://stargazerweekly.beehiiv.com/subscribe"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-violet-200 px-7 py-2 transition-colors hover:bg-violet-300"
        >
          <p className="text-center text-sm font-semibold text-purple-500">
            Subscribe to our open-source newsletter &nbsp; 🚀
          </p>
        </a>
      ) : (
        <a
          href="https://twitter.com/garrrikkotua/status/1707071883202404780"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-violet-200 px-7 py-2 transition-colors hover:bg-violet-300"
        >
          <Twitter className="h-5 w-5 text-purple-500" />
          <p className="text-sm font-semibold text-purple-500">
            Introducing OctoArt
          </p>
        </a>
      )}

      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        OctoArt
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Generate beautiful GitHub octocat art with one click. Promote
        open-source!
      </p>
      <Form promptValue={prompt} patternValue={pattern} />
      <Suspense fallback={<CountDisplay />}>
        <GeneratedCount />
      </Suspense>
      <PhotoBooth image={image} />
    </div>
  );
}
