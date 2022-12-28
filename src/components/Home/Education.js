import React from "react";
import { EductionData } from "../../constants";

const Education = () => {
  return (
    <div className="grid grid-rows-2 overflow-auto">
      {EductionData.map((data) => (
        <div
          key={data.key}
          className="flex box-border p-4 border rounded-md shadow-md bg-slate-50 my-4 flex-col md:flex-row items-center text-sm md:text-md"
        >
          <img src={data.logo} className="h-20 w-20" />
          <div className="flex-1 pl-4 flex flex-col md:justify-center">
            <div className="flex justify-between font-bold text-md md:text-lg flex-col md:flex-row">
              <p className="mb-2">{data.institute}</p>
              <p className="mb-2">
                {data.graduationDate}
                {!data.graduated ? "(Expected)" : ""}
              </p>
            </div>
            <p className="mb-2">
              {data.degree} in {data.branch}
            </p>
            {data.gpa ? (
              <p>
                GPA - {data.gpa} out of {data.maxGpa}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
