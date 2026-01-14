import { BiNews } from "react-icons/bi";
const NewsSidebar = () => {
  return (
    <div className="w-64 sm:w-72 md:w-80 lg:w-96 bg-gradient-to-b from-emerald-50 to-white/70 border-r border-emerald-200 h-screen overflow-y-auto sticky top-0 shadow-lg">
      <div className="p-6 border-b border-emerald-100 bg-emerald-100/50 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-emerald-900 tracking-tight flex items-center gap-2">
          <BiNews /> Latest News
        </h2>
        <p className="text-xs text-emerald-700 mt-1 font-medium">
          Live municipal updates
        </p>
      </div>

      <div className="p-4 space-y-3">
        {/* Your articles with upgrades: better shadows, scale hover */}
        <article className="group hover:bg-emerald-50 p-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]">
          {/* ... */}
          <h3 className="... text-gray-900 line-clamp-2 group-hover:text-emerald-800"></h3>
        </article>
        {/* Add "View All" button */}
        <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          View All News
        </button>
      </div>
    </div>
  );
};
export default NewsSidebar;
