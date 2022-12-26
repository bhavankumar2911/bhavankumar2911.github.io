import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <li
      className="mb-10 sm:mx-5 sm:flex-1 md:flex-none sm:mb-0 md:mt-5"
      key={project.id}
    >
      <Link href={project.link} target="_blank">
        <center>
          {/* image container */}
          <div className="relative w-11/12 overflow-hidden h-[150px] sm:h-[200px] md:h-[200px] md:w-[240px]">
            <Image
              className="object-cover transition hover:scale-110"
              src={project.thumbnail}
              fill
            />
          </div>
          {/* project title */}
          <h3 className="font-semibold text-center mt-5 flex items-center justify-center">
            {project.title}
            <span className="inline-block ml-1">
              <AiOutlineLink />
            </span>
          </h3>
        </center>
      </Link>
    </li>
  );
};

export default ProjectCard;
