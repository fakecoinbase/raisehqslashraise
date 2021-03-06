import styled from 'styled-components';
// eslint-disable-next-line
import { Grid, Segment, Button, List, Divider } from 'semantic-ui-react';
import { device } from '../../commons/breakpoints';

export const CenteredContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 780px;
  width: 80%;
`;
export const ContainerGrid = styled(Grid)`
  padding: 0px 0px 0px 0px;
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

export const SegmentRight = styled(Grid.Row)`
  &&& {
    margin-top: 25px !important;
  }
`;

export const ColumnLeft = styled(Grid.Column)`
  &&& {
    z-index: 100 !important;
    padding: 0px !important;
    margin: 20px 0px 40px 0px;
  }
`;

export const SegmentLeft = styled(Segment)`
  &&& {
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

export const TopReferal = styled(Grid.Row)`
  width: 100%;
  padding: 0 !important;
  margin-top: 20px;
`;
export const MidReferral = styled(Grid.Row)`
  width: 100%;
  padding: 0 !important;

  border-bottom-right-radius: 0.285714rem;
  border-bottom-left-radius: 0.285714rem;
`;
export const BottomReferal = styled(Grid.Row)`
  width: 100%;

  padding: 0 !important;
  border-bottom-right-radius: 0.285714rem;
  border-bottom-left-radius: 0.285714rem;
`;

/**
 * ######### RESUME ########
 */

export const ResumeContainer = styled(Grid)`
  margin-top: 50px !important;
  margin: 0 !important;
  padding: 0 !important;
  background-color: #ffffff;

  @media ${device.mobileL} {
  }
`;

export const ButtonGreen = styled(Button)`
  &&&,
  &&&:focus,
  &&&.disabled {
    width: 85%;
    ${({ disabled }) => (disabled === 'true' ? 'opacity: 0.4 !important;' : '')}
    background: linear-gradient(134.72deg, #188E9B 0%, #6DD7C7 100%) !important;
    color: white;
    font: 18px bold;
    line-height: 24px;
    height: 45px;
    @media ${device.tablet} {
      margin: 0 0px 0 22px !important;
      padding: 0;
    }
  }
  &&&:hover {
    background: linear-gradient(134.72deg, #5aafb8 0%, #78d8ca 100%);
    color: white;
    font-weith: bold;
    height: 45px;
    @media ${device.tablet} {
      margin: 0 0px 0 22px !important;
      padding: 0;
    }
  }
  &&&:active {
    background-color: #188e9b;
    color: white;
    font-weith: bold;
    height: 45px;
    @media ${device.tablet} {
      margin: 0 0px 0 22px !important;
      padding: 0;
    }
  }
`;

export const ContainerListFriends = styled(Grid.Row)`
  height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const CenterContainer = styled.div`
  display: -webkit-flex; /* Safari */
  -webkit-align-items: center; /* Safari 7.0+ */
  display: flex;
  align-items: center;
`;

export const RewardWrapper = styled(Grid)`
  margin: 0px 0px 0px 15px;
  width: 100%
  
  padding: 0 !important;
  @media ${device.mobileL} {
    margin: 0px 0px 0px 0px;
  }
`;

export const RewardMessage = styled.div`
  color: #5a5a5a;
  font-weight: bold;
  padding: 0;
  margin: 15px 0px -15px 0px;
  text-align: center;
`;

export const RewardMessageFriends = styled.div`
  color: #5a5a5a;
  font-weight: bold;
  padding: 0;
  margin: -10px 0px 10px 0px;
  text-align: center;
`;

export const RewardMessageSubTitle = styled.div`
  color: #5a5a5a;
  font-weight: normal;
  padding: 0;
  margin: 15px 0px 10px 0px;
  text-align: center;
`;

export const RewardAmount = styled.span`
  color: #5c5d5d;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  text-align: left;
`;

export const FriendsListItem = styled(List.Item)`
  &&& {
    margin: 20px 0px 0px 15px;
  }
  @media ${device.mobileL} {
    margin: 20px 0px 0px 50px;
  }
`;

export const MessageCoin = styled.span`
  color: #5a5a5a;
  font-size: 10px;
  line-height: 21px;
  text-align: left;
`;

export const Separator = styled(Divider)`
  margin: 0px 15px 0px 0px !important;

  background-color: #99a6b8;
  @media ${device.mobileL} {
    margin: 0px 50px 0px 50px !important;
    padding: 0;
  }
`;
