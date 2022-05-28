import React from "react";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      {props.sections.map((section) => {
        return (
          <div className="experience-section">
            <h2>{section["title"]}</h2>
            {section["experiences"].map((experience) => {
              return (
                <DegreeCard degree={experience} theme={theme} />        
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceAccordion;
