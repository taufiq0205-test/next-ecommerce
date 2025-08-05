// A simplified page preview for the bottom bar thumbnails
const PageThumbnail = ({ leftLayout, rightLayout, isCover }: { leftLayout: string; rightLayout: string; isCover?: boolean; }) => {
    return (
        <div className="w-40 h-20 bg-white border border-gray-300 rounded-sm p-1 flex gap-0.5 items-center justify-center">
            {/* Mini Left Page */}
            <div className="w-1/2 h-full bg-gray-200 rounded-sm">
                {/* Future: render mini-layout based on leftLayout */}
            </div>

            {/* Spine for cover, crease for inner pages */}
            {isCover ? (
                <div className="w-1.5 h-full bg-gray-400"></div>
            ) : (
                <div className="w-px h-full bg-gray-300"></div>
            )}

            {/* Mini Right Page */}
            <div className="w-1/2 h-full bg-gray-200 rounded-sm">
                {/* Future: render mini-layout based on rightLayout */}
            </div>
        </div>
    );
};

export default PageThumbnail;
