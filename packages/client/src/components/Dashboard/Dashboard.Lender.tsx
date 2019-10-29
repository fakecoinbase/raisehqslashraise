import React, { useContext, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import { DashboardContainer, DashboardWrapper, DashboardTab } from './Dashboard.styles';
import KycMessage from '../KycMessage';
import { AppContext } from '../App';
import GetStarted from '../GetStarted';
import Suggesteds from './Dashboard.Suggesteds';
import Tab from './Dashboard.Tab';
import Queryies from '../../helpers/queryies';
import { Element } from 'react-scroll';

const Dashboard = () => {
  const {
    actions: {
      loan: { onGetSuggestedAuctionsSubscription, onGetLenderInvestmentSubscription }
    },
    store: {
      loan: { suggested, lenderInvestments },
      user: {
        cryptoAddress: { address }
      }
    },
    webSocket: { webSocket }
  }: any = useContext(AppContext);

  useEffect(() => {
    if (webSocket) {
      const { query, subscriptionName } = Queryies.subscriptions.lenderInvestmentsByAccount;
      const variables = {
        address
      };
      const callback = onGetLenderInvestmentSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket, address]);

  useEffect(() => {
    if (webSocket) {
      const { query, variables, subscriptionName } = Queryies.subscriptions.lenderSuggestions;

      const callback = onGetSuggestedAuctionsSubscription;
      webSocket.subscribe(query, variables, subscriptionName, callback);
    }
  }, [webSocket]);

  const panes = [
    {
      menuItem: 'Auctions',
      render: () => <Tab auctions={lenderInvestments} states={[0]} type="lender" />
    },
    {
      menuItem: 'Investments',
      render: () => <Tab auctions={lenderInvestments} states={[1, 2, 3, 4, 5, 6]} type="lender" />
    }
  ];
  return (
    <DashboardWrapper>
      <KycMessage />
      <GetStarted />
      <DashboardContainer>
        <Header as="h1">Investment opportunities</Header>
        <Suggesteds auctions={suggested} states={[0]} />
       <Element name="myActivity" className="element">
        <Header as="h1" id="my-activity">
          My Activity
        </Header>
        </Element>
        <DashboardTab renderActiveOnly menu={{ secondary: true, pointing: true }} panes={panes} />
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
