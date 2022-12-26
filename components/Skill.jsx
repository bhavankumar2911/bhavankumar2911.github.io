import React from "react";

const Skill = ({ skill }) => {
  return (
    // <li className="flex flex-col mb-5">
    //   <span className="text-sm mb-1 inline-block">{skill.name}</span>
    //   <span className="bg-gray-200 h-[1px] w-full ">
    //     <span
    //       style={{ width: `${skill.percentage}%` }}
    //       className={`absolute top-0 left-0 h-full bg-gray-600`}
    //     ></span>
    //   </span>
    //   {/* <progress className="w-full h-[1px]" value={skill.percentage} max="100" /> */}
    // </li>
    <li className="mb-3" key={skill.id}>
      <div className="flex items-center justify-between">
        <span className="w-[100px] text-sm font-semibold xs:w-[230px]">
          {skill.name}
        </span>
        <span className="h-[5px] w-[60%] inline-flex overflow-hidden bg-gray-200">
          <span
            className="inline-block h-full bg-green-600"
            style={{
              width: `${skill.percentage}%`,
            }}
          ></span>
        </span>
      </div>
    </li>
  );
};

export default Skill;
