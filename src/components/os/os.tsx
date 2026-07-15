import Desktop from "@/components/desktop/desktop";
import Taskbar from "@/components/taskbar/taskbar";
import Window from "@/components/window/window";

export default function Os() {
  return (
    <div className="relative flex h-screen w-screen flex-col overflow-hidden select-none">
      <Desktop />
      <Window title="Test App" />
      <Taskbar />
    </div>
  );
}
