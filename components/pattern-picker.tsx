import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

const patterns = [
  "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/kk49gtk-XpDOG1662fNHYhVAQu8q7qEFema4S9.png",
];

export default function PatternPicker({
  setPattern,
  setOpenPopover,
}: {
  setPattern: Dispatch<SetStateAction<string>>;
  setOpenPopover: Dispatch<SetStateAction<boolean>>;
}) {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="w-full overflow-auto md:max-w-xl">
      <div className="p-4">
        <p className="py-2 font-display text-xl text-gray-700">
          Choose a pattern
        </p>
        <div className="grid grid-cols-4 gap-3">
          {patterns.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setPattern(p);
                setOpenPopover(false);
              }}
              className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-500"
            >
              <Image
                src={p}
                alt={p}
                width={400}
                height={400}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
