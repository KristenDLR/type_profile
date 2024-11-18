import { useMediaQuery, useTheme } from "@mui/material";
import { MainLayout, SectionContainer } from "components";
import { IntroSection } from "sections";
import { AboutSection } from "sections/about/about.section";
import { ContactSection } from "sections/contact/contact.section";
import { ProjectsSection } from "sections/projects/project.section";
import { SkillsSection } from "sections/skills/skills.section";
import { SectionIdEnum } from "types";

export const Maine: React.FC = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const sections = [
    {
      sectionId: SectionIdEnum.intro,
      component: <IntroSection isScreenSmall={isScreenSmall} />,
    },
    {
      sectionId: SectionIdEnum.about,
      component: <AboutSection isScreenSmall={isScreenSmall} />,
    },
    {
      sectionId: SectionIdEnum.skills,
      component: <SkillsSection isScreenSmall={isScreenSmall} />,
    },
    {
      sectionId: SectionIdEnum.projects,
      component: <ProjectsSection />,
    },
    {
      sectionId: SectionIdEnum.contact,
      component: <ContactSection isScreenSmall={isScreenSmall} />,
    },
  ];

  return (
    <MainLayout isScreenSmall={isScreenSmall}>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer key={sectionId} sectionId={sectionId}>
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};
