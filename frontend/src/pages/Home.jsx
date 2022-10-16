import DownloadCard from "../components/DownloadCard/DownloadCard";

export default function Home() {
  return <div className="h-full">
    <DownloadCard fileName="ubuntu-22.04-desktop-x86.dmg" status="done" />
  </div>;
}
