import styled from 'styled-components';

import { Grid, Segment, Button, List } from 'semantic-ui-react';

const backgroundImage =
  'https://static.herodev.es/images/pattern-fdesk-dark.svg';

export const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em;
  background: #d4e5e8 url(${backgroundImage}) no-repeat fixed bottom/100%;
`;

export const CenteredContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 780px;
  width: 80%;
`;

export const GridSized = styled(Grid)`
  &&& {
    height: 100vh;
  },
`;

export const FooterRow = styled(Grid.Row)`
  &&& {
    padding: 16px 0;
    text-align: center;
  }
`;

export const Credits = styled.em`
  font-size: 1em;
`;

export const LabelWeb3 = styled.div`
  padding: 0.8em !important;
  min-width: 2em;
  min-height: 2em;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
  background: none #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  display: inline-block;
  transition: background 0.1s ease;
  float: right;
`;

export const ColumnRight = styled(Grid.Column)`
  &&& {
    z-index: 99 !important;
    padding: 0px !important;
  }
`;

export const SegmentRight = styled(Segment)`
  &&& {
    min-height: 460px;
    margin-top: 50px !important;
    margin-left: -15px;
    padding-left: 30px;
  }
`;

export const ColumnLeft = styled(Grid.Column)`
  &&& {
    z-index: 100 !important;
    padding: 0px !important;
  }
`;

export const SegmentLeft = styled(Segment)`
  &&& {
    min-height: 840px !important;
    padding: 0 !important;
    border: none;
  }
`;

export const Title = styled.span`
  color: #104a50;
  font: 30px bold;
  line-height: 36px;
`;

export const HeaderRow = styled(Grid.Row)`
  &&& {
    margin: 0px 0px;
    display: inline !important;
  }
`;

export const TopReferal = styled.div`
  width: 100%;
`;

export const BottomReferal = styled.div`
  width: 100%;
  padding: 1em 1em;
  border-bottom-right-radius: 0.285714rem;
  border-bottom-left-radius: 0.285714rem;
  background-color: #ffffff;
`;

export const ButtonGreen = styled(Button)`
  &&&,
  &&&:focus,
  &&&.disabled {
    width: 100%;
    ${({ disabled }) => (disabled === 'true' ? 'opacity: 0.4 !important;' : '')}
    background: linear-gradient(134.72deg, #188E9B 0%, #6DD7C7 100%) !important;
    color: white;
    font: 18px bold;
    line-height: 24px;
  }
  &&&:hover {
    background: linear-gradient(134.72deg, #5aafb8 0%, #78d8ca 100%);
    color: white;
    font-weith: bold;
  }
  &&&:active {
    background-color: #188e9b;
    color: white;
    font-weith: bold;
  }
`;

export const RewardWrapper = styled.div`
  padding: 1em 1em;
`;

export const ContainerListFriends = styled.div`
  min-height: 300px;
  margin-bottom: 20px;
  padding-top: 55px;
`;

export const RewardAmount = styled.div`
  font-size: 26px;
  line-height: 36px;
  text-align: center;
`;
export const FriendsListItem = styled(List.Item)`
  &&& {
    margin: 20px 0px;
  }
`;
export const RewardMessage = styled.div`
  color: #5c5d5d;
  width: 60%;
  text-align: center;
  margin: auto;
  margin-top: 20%;
`;

export const MessageCoin = styled.span`
  font-size: 18px;
`;