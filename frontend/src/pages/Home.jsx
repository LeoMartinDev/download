import DownloadCard from "../components/DownloadCard/DownloadCard";
import ToggleButton from "../components/Button/ToggleButton";

export default function Home() {
  return (
    <div className="h-full">
      <div className="text-3xl font-semibold">Downloads</div>

      <div>
        <ToggleButton />
      </div>

      <DownloadCard
        className="mt-6"
        fileName="ubuntu-22.04-desktop-x86-1384ac8f2c2a6479ba2a9cbe90a585618834560c477a699a4a7ebe7b5345ddc1.dmg"
        status="done"
      />
    </div>
  );
}
