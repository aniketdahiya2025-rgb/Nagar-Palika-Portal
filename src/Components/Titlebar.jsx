import ashokstambhUrl from "../assets/NAS.png";
import logoUrl from "../assets/logo.png";
import independenceDayUrl from "../assets/75.png";
import "../App.css";
function Titlebar() {
  return (
    <div className="bg-white  justify-between flex">
      <div className="flex ">
        <img
          src={ashokstambhUrl}
          className="w-full h-8 object-cover items-center"
        />
        <img src={logoUrl} className="w-full h-8 object-cover items-center" />
        <div className="ml-4 flex flex-col justify-center font-bold text-xs">
          <div className="flex gap-1">
            <div>Nagar </div> <div> Palika</div>
          </div>
          <div className="text-center">Portal</div>
        </div>
      </div>
      <div className="mt-2">
        <img
          src={independenceDayUrl}
          className="w-full h-8 object-cover items-center"
        />
      </div>
    </div>
  );
}
export default Titlebar;
