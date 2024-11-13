import { Divider } from '@mui/material';
import { MainLayout, SectionContainer } from 'components';
import { IntroSection } from 'sections';
import { SectionIdEnum } from 'types';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.skills,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.projects,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <IntroSection />,
  },
];

export const Maine: React.FC = () => {
  return (
    <MainLayout>
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
