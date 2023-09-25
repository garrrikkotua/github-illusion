// import { list } from "@vercel/blob";
// import PhotoBooth from "@/components/photo-booth";
// import Link from "next/link";

export default async function Gallery() {
  //   const { blobs } = await list({
  //     limit: 9,
  //   });
  return (
    <div className="z-10 w-full max-w-xl px-2.5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Gallery
      </h1>
      {/* <div className="grid grid-cols-3 gap-2">
        {blobs.map((blob) => (
          <Link
            href={`/t/${blob.pathname.split(".png")[0]}`}
            key={blob.pathname}
          >
            <PhotoBooth image={blob.url} />
          </Link>
        ))}
      </div> */}
    </div>
  );
}
