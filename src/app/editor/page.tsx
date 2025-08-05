"use client";
import { useState } from "react";
import BottomBar from "@/components/Editor/BottomBar";
import SideBar from "@/components/Editor/SideBar";
import TopBar from "@/components/Editor/TopBar";
import CoverView from "@/components/Editor/CoverView";
import InnerPageView from "@/components/Editor/InnerPageView";

// Define the shape of a spread
export interface Spread {
  id: string;
  isCover?: boolean;
  left: { layout: string };
  right: { layout: string };
  label: string;
}

const EditorPage = () => {
  // Master list of all spreads in the photobook
  const [spreads, setSpreads] = useState<Spread[]>([
    { id: 'cover', isCover: true, left: { layout: 'cover-back' }, right: { layout: 'cover-front' }, label: 'Cover' },
    { id: 'spread1', left: { layout: 'single' }, right: { layout: 'double' }, label: 'Pages 2-3' },
    { id: 'spread2', left: { layout: 'double' }, right: { layout: 'single' }, label: 'Pages 4-5' },
  ]);

  // The currently selected spread, which controls the main view
  const [activeSpread, setActiveSpread] = useState<Spread>(spreads[0]);

  // Handler to add a new spread at a specific position
  const handleAddSpread = (index: number) => {
    const newSpread: Spread = {
      id: `spread${Date.now()}`,
      left: { layout: 'single' },
      right: { layout: 'single' },
      label: `Pages ${spreads.length * 2}-${spreads.length * 2 + 1}`,
    };
    const newSpreads = [...spreads];
    newSpreads.splice(index, 0, newSpread);
    setSpreads(newSpreads);
  };

  return (
    <div className='flex flex-col h-screen'>
      <TopBar />
      <div className="flex flex-grow overflow-hidden">
        <SideBar />
        {/* Conditionally render the correct view based on the active spread */}
        <div className="flex-1 flex flex-col">
            {activeSpread.isCover 
                ? <CoverView /> 
                : <InnerPageView spreadLabel={activeSpread.label} />
            }
        </div>
      </div>
      <BottomBar 
        spreads={spreads}
        activeSpread={activeSpread}
        onSelectSpread={setActiveSpread}
        onAddSpread={handleAddSpread}
      />
    </div>
  );
};

export default EditorPage;
