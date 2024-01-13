// components
import CampaignCard from "./campaign-card";
import SelectCampaign from "./selected-campaign";

const DashboardArea = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
      <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-5">
        {new Array(4).fill(0).map((_, index) => (
          <CampaignCard key={index} index={index} />
        ))}
      </div>
      <div className="col-span-1">
        <SelectCampaign />
      </div>
    </div>
  );
};

export default DashboardArea;
