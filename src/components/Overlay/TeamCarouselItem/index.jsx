import React from "react";

// Icons
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Styles
import "./style.css";

// Store
import { useStore } from "../../../store/store";

const TeamCarouselItem = ({ member }) => {
  const updateCursorType = useStore((store) => store.updateCursorType);

  return (
    <div className="carousel">
      <img src={member.image} alt="" />
      <div className="member-details">
        <p className="name">{member.name}</p>
        <div className="experience">
          <p>
           {member.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCarouselItem;
