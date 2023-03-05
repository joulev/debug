import dynamic from "next/dynamic";
const AudioPlayer = dynamic(() => import("~/app/audio-player"), { ssr: false });

export default function Page() {
  return <AudioPlayer />;
}
