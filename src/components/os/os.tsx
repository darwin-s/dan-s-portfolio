import Desktop from "@/components/desktop/desktop";
import Taskbar from "@/components/taskbar/taskbar";
import Window from "@/components/window/window";

export default function Os() {
  return (
    <div className="relative h-screen w-screen overflow-hidden select-none flex flex-col">
      <Desktop />
      <Window title="Test App"/>
      <Taskbar />
    </div>
  );
}
