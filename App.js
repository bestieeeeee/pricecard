import "./App.css";
import React from "react";
import PriceCard from "./components/PriceCard";

let data = [
  {
    plan:"FREE",
    price:"0",
    users: "single user", 
    userEnabler:"true",
    storage: "5GB storage",
    storageEnabler:"true",
    publicProjects: "unlimited Public Projects",
    publicProjectsEnabler:"true",
    communityAccess: "community Access",
    communityAccessEnabler:"true",
    privateProjects: "unlimited private projects",
    privateProjectsEnabler:"false",
    phoneSupport: "dedicated Phone Support",
    phoneSupportEnable:"false",
    subDomain: "free SubDomain",
    subDomainEnabler:"false",
    statusReport: "monthly Status Report",
    statusReportEnabler:"false"
  },
  {
    plan:"plus",
    price:"9",
    users: "five user", 
    userEnabler:"true",
    storage: "50GB storage",
    storageEnabler:"true",
    publicProjects: "unlimited Public Projects",
    publicProjectsEnabler:"true",
    communityAccess: "community Access",
    communityAccessEnabler:"true",
    privateProjects: "unlimited private projects",
    privateProjectsEnabler:"true",
    phoneSupport: "dedicated Phone Support",
    phoneSupportEnable:"true",
    subDomain: "free SubDomain",
    subDomainEnabler:"true",
    statusReport: "monthly Status Report",
    statusReportEnabler:"false"
    
  },
  {
    plan:"pro",
    price:"49",
    users: "unlimited user", 
    userEnabler:"true",
    storage: "150GB storage",
    storageEnabler:"true",
    publicProjects: "unlimited Public Projects",
    publicProjectsEnabler:"true",
    communityAccess: "community Access",
    communityAccessEnabler:"true",
    privateProjects: "unlimited private projects",
    privateProjectsEnabler:"true",
    phoneSupport: "dedicated Phone Support",
    phoneSupportEnable:"true",
    subDomain: "unlimited free SubDomain",
    subDomainEnabler:"true",
    statusReport: "monthly Status Report",
    statusReportEnabler:"true"
   
  }
]

function App() {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <PriceCard data={data[0]} />
            <PriceCard data={data[1]} />
            <PriceCard data={data[2]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
