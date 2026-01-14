import { HiDocumentText } from "react-icons/hi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useContext } from "react";
import { Applications } from "../Store/Application-store.jsx";
import application from "../Store/Application-store.jsx";
const Application = ({ application }) => {
  const { removeApplication } = useContext(Applications);
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors ">
      <div className="flex items-start gap-3">
        <div className="mt-1">
          <HiDocumentText className="text-2xl text-emerald-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-800">
              {application.fullname}
            </h3>
            <span className="text-xs text-gray-500">#{application.id}</span>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            {application.serviceCategory}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>📱 {application.phonenumber}</span>
            <span>📍 {application.address}</span>
          </div>
        </div>
        <div
          className="mt-1 text-green-600 text-3xl hover:text-green-800 cursor-pointer"
          onClick={() => removeApplication(application.id)}
        >
          <IoCheckmarkDoneCircleSharp />
        </div>
      </div>
    </div>
  );
};

export default Application;
