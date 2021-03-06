import React from 'react';
import { Testimonials, BenefitsSection, InterestRateSection } from '@raisehq/components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';
import AboveTheFold from '../components/AboveTheFold';
import PressReleases from '../components/PressReleases';
import HomeLayout from '../layouts/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IndexPage = ({ pageContext: { data } }: any) => {
  const {
    above_the_fold_section,
    benefits_section,
    interest_rate_section,
    press_releases_section,
    press_releases_title,
    testimonials_section,
    testimonials_title
  } = data.allButterPage.nodes[0];

  return (
    <Layout>
      <div>
        <SEO />
        <TagManager />
        <AboveTheFold data={above_the_fold_section} />
        <HomeLayout>
          <BenefitsSection benefits={benefits_section} />
          <InterestRateSection data={interest_rate_section} />
          {testimonials_section && testimonials_section.length > 0 && (
            <Testimonials data={testimonials_section} title={testimonials_title} />
          )}
          <PressReleases data={press_releases_section} title={press_releases_title} />
        </HomeLayout>
      </div>
    </Layout>
  );
};

export default IndexPage;
