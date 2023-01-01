import React, { useState } from "react";
import { WorkExperienceData } from "../../constants";
import { Accordian } from "../common";

const WorkExperience = () => {
  const [currentItem, setCurrentItem] = useState();

  const onItemClick = (item) => {
    setCurrentItem((val) => (!val ? item : val.key === item.key ? null : item));
  };

  return (
    <div className="flex flex-col">
      {WorkExperienceData.map((data) => (
        <Accordian
          key={data.key}
          onClick={() => onItemClick(data)}
          id={`work-experience-${data.key}`}
          isOpen={currentItem?.key === data.key}
        >
          {/* Accordian Summary */}
          <div>
            <p className="font-bold text-md md:text-lg">{data.title}</p>
            <p>{data.company}</p>
            <p>{data.location}</p>
          </div>
          {/* Accordian Content */}
          <ul className="list-disc inline-block">
            {data.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Accordian>
      ))}
    </div>
  );
};

export default WorkExperience;
