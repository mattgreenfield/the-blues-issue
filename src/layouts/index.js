import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipLink from '../components/SkipLink';
import Wrapper from '../components/Wrapper';

import './index.css';

const TemplateWrapper = ({ children, location, data }) => {
  const siteName = data.site.siteMetadata.title;

  return (
    <div>
      <Helmet
        title={siteName}
        meta={[
          {
            name: 'description',
            content:
              'The Blues Issue are a Blues Band from Worthing and Brighton, England. Playing a mix of blues classics and their own original songs',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <SkipLink />
      <Wrapper size="large">
        <Header removeLogo={location.pathname === '/'} />
      </Wrapper>
      <main id="page-main">{children()}</main>
      <Footer siteName={siteName} />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
