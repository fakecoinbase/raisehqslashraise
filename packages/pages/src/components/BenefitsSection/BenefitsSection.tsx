import React, { useState, useEffect } from 'react';
import { GroupButton } from '@raisehq/components';
import { Icon } from 'semantic-ui-react';
import find from 'lodash/find';
import { useTransition, animated } from 'react-spring';
import {
  Wrapper,
  Row,
  Title,
  ImageWrapper,
  StepWrapper,
  SpecialRow,
  ControlWrapper,
  Column,
  CheckLoanText,
  IconWrapper
} from './styles';
import Step from './Step';

const BenefitsSection = ({ benefits }): [any] => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [stepsBorrowers, setStepsBorrowers] = useState([]);
  const [stepsInvestors, setStepsInvestors] = useState([]);
  const [mainTitle, setMainTitle] = useState('');
  const [linkTextInvestors, setLinkTextInvestors] = useState('');
  const [linkTextBorrowers, setLinkTextBorrowers] = useState('');
  const [slides, setSlides] = useState([
    { id: 0, url: '' },
    { id: 1, url: '' }
  ]);

  const transitions = useTransition(slides[selectedOption - 1], (item) => item.id, {
    unique: true,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useEffect(() => {
    const {
      main_title,
      step_one,
      step_two,
      step_three,
      text_link_to_app: linkInvestors,
      image: image_investor
    } = find(benefits, (role) => role.id === 'investors');
    const {
      step_one: step_one_borrower,
      step_two: step_two_borrower,
      step_three: step_three_borrower,
      text_link_to_app: linkBorrowers,
      image: image_borrower
    } = find(benefits, (role) => role.id === 'borrowers');

    setMainTitle(main_title);
    setLinkTextInvestors(linkInvestors);
    setLinkTextBorrowers(linkBorrowers);

    setStepsInvestors([
      { number: 1, text: step_one },
      { number: 2, text: step_two },
      { number: 3, text: step_three }
    ]);

    setStepsBorrowers([
      { number: 1, text: step_one_borrower },
      { number: 2, text: step_two_borrower },
      { number: 3, text: step_three_borrower }
    ]);

    setSlides([
      { id: 0, url: image_investor },
      { id: 1, url: image_borrower }
    ]);
  }, [benefits]);

  return (
    <Wrapper>
      <Row>
        <Title>{mainTitle}</Title>
      </Row>
      <Row>
        <ControlWrapper>
          <GroupButton
            options={[
              { key: '1', value: 1, text: 'Investors' },
              { key: '2', value: 2, text: 'Borrowers' }
            ]}
            onClick={setSelectedOption}
            selectedIndex={selectedOption}
          />
        </ControlWrapper>
      </Row>
      <SpecialRow>
        <ImageWrapper>
          {transitions.map(({ item, props, key }) => (
            <animated.div
              key={key}
              style={{
                ...props,
                backgroundImage: item.url
              }}
            >
              <img src={item.url} alt={selectedOption === 1 ? 'investors' : 'borrowers'} />
            </animated.div>
          ))}
        </ImageWrapper>
        <Column>
          <StepWrapper>
            {selectedOption === 1
              ? stepsInvestors.map((item) => (
                  <Step number={`0${item.number}`} text={item.text} key={item.number + 1} />
                ))
              : stepsBorrowers.map((item) => (
                  <Step number={`0${item.number}`} text={item.text} key={item.number} />
                ))}
          </StepWrapper>
          <CheckLoanText href={`${process.env.REACT_APP_HOST_URL}`}>
            <span>{selectedOption === 1 ? linkTextInvestors : linkTextBorrowers}</span>
            <IconWrapper>
              <Icon name="chevron right" />
            </IconWrapper>
          </CheckLoanText>
        </Column>
      </SpecialRow>
    </Wrapper>
  );
};

export default BenefitsSection;
