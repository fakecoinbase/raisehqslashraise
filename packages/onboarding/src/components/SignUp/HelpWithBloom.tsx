import React from 'react';
import { HelpWithBloomWrapper, FollowingStepsTitle, IconWrapper } from '../styles';
import { Icon } from 'semantic-ui-react';

const HelpWithBloom = ({ setIsOpenHelp, setIsScreenIdle, method }) => {
  return (
    <HelpWithBloomWrapper>
      <IconWrapper>
        <Icon
          name="close"
          onClick={() => {
            setIsOpenHelp(false);
            setIsScreenIdle(true);
          }}
        />
      </IconWrapper>
      <FollowingStepsTitle>Are you having problems to { method } with Bloom?</FollowingStepsTitle>
      <p>Please, make sure to have your Country registered at Bloom.</p>
      <p>If you need help send email to help@raise.it</p>
    </HelpWithBloomWrapper>
  );
};

export default HelpWithBloom;