import BottomBar from "@/components/Editor/BottomBar";
import EditorView from "@/components/Editor/EditorView";
import SideBar from "@/components/Editor/SideBar";
import TopBar from "@/components/Editor/TopBar";

const Editor = () => {
  return (
    <div className='flex flex-col h-screen'>
      <TopBar />
      <div className="flex flex-grow">
        <SideBar />
        <EditorView />
      </div>
      <BottomBar />
    </div>
  );
}
export default Editor;