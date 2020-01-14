import React, { useContext } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  HeaderWrapper,
  HeaderGroup,
  HeaderLogo,
  HeaderMenu,
  HeaderLogout,
  HeaderMenuItem,
  RaiseHeader
} from './DesktopHeader.styles';
import Balance from '../Balance';
import Web3Address from '../Web3Address';
import theme from '../../theme';
import AppContext from '../AppContext';
import useMenuVisibility from '../../hooks/useMenuVisibility';
import MyAccountButton from './MyAccountButton';
import { HEADER_MENU_SIZE } from '../../commons/constants';
import TopBanner from '../TopBanner';

const DesktopHeader = () => {
  const {
    history,
    onSetGetStarted,
    store: {
      user,
      auth: {
        login: { logged: isLogged }
      }
    },
    web3Status: { hasDeposit }
  }: any = useContext(AppContext);
  const { visible, visibleMenu } = useMenuVisibility();
  const {
    details: { kyc_status, accounttype_id }
  } = user;
  const enableBanner = visibleMenu && accounttype_id === 2;

  const onKYC = () => history.push('/kyc');
  const onDepositAction = () => history.push('/deposit');
  const scrollToTop = () => scroll.scrollToTop();

  const navigateAndScroll = () => {
    history.push('/');
    scrollToTop();
  };

  const openLogin = () => {
    history.push('/login');
  }

  const openSignup = () => {
    history.push('/join');
  }

  // If there is a parent for TopBanner and HeaderWrapper, it will break the sticky css rule and menu will not get fixed once scroll
  return visible ? (
    <>
      <TopBanner
        kycStatus={kyc_status}
        kycAction={onKYC}
        hasDeposit={hasDeposit}
        hasDepositAction={onDepositAction}
        enabled={enableBanner}
      />
      <HeaderWrapper>
        <RaiseHeader>
          <HeaderGroup>
            <HeaderLogo onClick={() => history.push('/')}>
              <img src={`${theme.resources}/images/logo.svg`} />
            </HeaderLogo>
            {isLogged && visibleMenu && (
              <HeaderMenu>
                {user.details.accounttype_id === 1 ? (
                  <HeaderMenuItem onClick={() => history.push('/create-loan')}>
                    Create loan
                  </HeaderMenuItem>
                ) : (
                    <Link
                      to="toGetStarted"
                      spy
                      smooth
                      duration={500}
                      offset={HEADER_MENU_SIZE.toGetStarted}
                    >
                      <HeaderMenuItem onClick={onSetGetStarted}>Get Started</HeaderMenuItem>
                    </Link>
                  )}
                <HeaderMenuItem>
                  <Link
                    onClick={() => history.location.pathname !== '/' && navigateAndScroll()}
                    to="myActivity"
                    spy
                    smooth
                    duration={500}
                    offset={HEADER_MENU_SIZE.myActivity}
                  >
                    My activity
                  </Link>
                </HeaderMenuItem>
              </HeaderMenu>
            )}
          </HeaderGroup>
          <HeaderGroup className="right">
            <>
              {isLogged && visibleMenu && (
                <>
                  <Balance />
                  <Web3Address />
                  <MyAccountButton />
                </>
              )}
              <HeaderLogout
                onLogin={openLogin}
                onSignup={openSignup}
              />
            </>
          </HeaderGroup>
        </RaiseHeader>
      </HeaderWrapper>
    </>
  ) : null;
};

export default DesktopHeader;
