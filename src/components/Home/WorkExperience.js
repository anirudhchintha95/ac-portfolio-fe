import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { WorkExperienceData } from "../../constants";

const WorkExperience = (props) => {
  const { currentItem, setCurrentItem } = props;

  const onChangeCurrentExperience = (data) => {
    setCurrentItem(data);
  };

  return currentItem ? (
    <div className="flex flex-col box-border p-4 border rounded-md shadow-md bg-slate-50 my-4 items-center text-sm md:text-md w-full">
      <div className="p-4 flex flex-col md:justify-center border-b w-full">
        <p className="font-bold text-md md:text-lg">{currentItem.title}</p>
        <p>{currentItem.company}</p>
        <p>{currentItem.location}</p>
      </div>
      <div className="p-4">
        <ul className="list-disc inline-block">
          {currentItem.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="grid grid-rows-2 overflow-auto">
      {WorkExperienceData.map((data) => (
        <div
          key={data.key}
          className="flex box-border p-4 border rounded-md shadow-md bg-slate-50 my-4 items-center text-sm md:text-md justify-between cursor-pointer"
          onClick={() => onChangeCurrentExperience(data)}
        >
          <div className="flex-1 pl-4 flex flex-col md:justify-center">
            <p className="font-bold text-md md:text-lg">{data.title}</p>
            <p>{data.company}</p>
            <p>{data.location}</p>
          </div>
          <IoIosArrowForward />
        </div>
      ))}
    </div>
  );
};

WorkExperience.propTypes = {
  currentItem: PropTypes.any,
  setCurrentItem: PropTypes.func.isRequired,
};

export default WorkExperience;
