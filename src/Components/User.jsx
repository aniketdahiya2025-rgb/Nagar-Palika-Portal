import ApplicationIssueandReview from "./ApplicationIssueandReview";
import Dashboard from "./Dashboard";
import DSidebar from "./DSidebar";
import { useState } from "react";
const User = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  return (
    <div className="flex w-full overflow-visible">
      <DSidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      {selectedMenu === "dashboard" ? (
        <Dashboard className="overflow-visible" />
      ) : (
        <ApplicationIssueandReview className="overflow-visible" />
      )}
    </div>
  );
};

export default User;
