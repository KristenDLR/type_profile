import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { MainLayout, SectionContainer } from "components";
import { IntroSection } from "sections";
import { AboutSection } from "sections/about/about.section";
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
      component: <AboutSection />,
    },
    {
      sectionId: SectionIdEnum.skills,
      component: <AboutSection />,
    },
    {
      sectionId: SectionIdEnum.projects,
      component: <AboutSection />,
    },
    {
      sectionId: SectionIdEnum.contact,
      component: <AboutSection />,
    },
  ];

  return (
    <MainLayout isScreenSmall={isScreenSmall}>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer key={sectionId} sectionId={sectionId}>
            <Divider />
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};
