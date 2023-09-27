// @ts-ignore
import PhotoBooth from "@/components/photo-booth";
import Link from "next/link";

const ids = [
  "UkVGEPQ",
  "2FAL1k5",
  "4ROSAnh",
  "5NVCbBV",
  "NsGwYpR",
  "QX1fpOE",
  "RHKy5cj",
  "RYIP03P",
  "SmNX3WQ",
  "X1eRouH",
  "YYj3ZnK",
  "ay9gmAa",
  "pnDVeK7",
  "s05xRGB",
  "vABtm1p",
  "DvcH4ln",
  "5aRlgYl",
  "tVeBZZP",
];

const images: Record<string, string> = {
  UkVGEPQ:
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/UkVGEPQ-ZgE1nHu1YhfrC6TiazD377mBAkhHEm.png",
  "2FAL1k5":
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/2FAL1k5-rPsCor2JCyu0Ak3lK0iqD6SxMhFJZh.png",
  "4ROSAnh":
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/4ROSAnh-LeeHNcVQRdKXJYb330l3ZuhZfXEhhL.png",
  "5NVCbBV":
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/5NVCbBV-oKx6XllPrTGbWlJ88RlZhZNZ9RiFaG.png",
  NsGwYpR:
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/NsGwYpR-PDOfJAyFOhZcQ0mQHeDFWJScEOVvbX.png",
  QX1fpOE:
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/QX1fpOE-BQvMmy88KOkCDcikpJCUgNe7b6HSyc.png",
  RHKy5cj:
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/RHKy5cj-SFsaiDVYvbjlcnoiNn8LOUeJgRlmJG.png",
  RYIP03P:
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/RYIP03P-RzxjN8HzCBkPPPMvFkTIYVIpsGSh7c.png",
  s05xRGB:
    "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/s05xRGB-wrsS1Rzc4GY7pTc6j4lWdO5Dfm3CTJ.png",
};

export default async function Gallery() {
  return (
    <div className="z-10 w-full max-w-xl px-2.5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Gallery
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(images).map((key) => (
          <Link href={`/t/${key}`} key={key}>
            <PhotoBooth image={images[key]} />
          </Link>
        ))}
      </div>
    </div>
  );
}
