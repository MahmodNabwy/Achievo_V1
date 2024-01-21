export const UnReadAnnouncements = () => {
  return (
    <div className="AnnouncementsCards">
      <div className="grid grid-cols-2 lg:grid-cols-2 w-full pt-4 gap-4">
        <div className="col-span-full  announcements-card">
          <div
            className="flex justify-between h-full"
            style={{
              borderLeft: "26px solid #178CE1",
              borderRadius: "7px",
              justifyContent: "space-between",
            }}
          >
            <div className="pl-4">
              <p className="title">Update Innovation</p>
              <span className="info">
                You enrolled for Review an Innovation updated name: High rate of
                defects, please check your Innovation page
              </span>
            </div>

            <div className="dates-info flex justify-center pt-4">
              <div>
                <p className="dates-content">24-05-2023</p>

                <span className="dates-content">02:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full  announcements-card">
          <div
            className="flex justify-between h-full"
            style={{
              borderLeft: "26px solid #60B527",
              borderRadius: "7px",
              justifyContent: "space-between",
            }}
          >
            <div className="pl-4">
              <p className="title">Update Innovation</p>
              <span className="info">
                You enrolled for Review an Innovation updated name: High rate of
                defects, please check your Innovation page
              </span>
            </div>

            <div className="dates-info flex justify-center pt-4">
              <div>
                <p className="dates-content">24-05-2023</p>

                <span className="dates-content">02:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
