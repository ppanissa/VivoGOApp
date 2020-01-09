import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import {
  Container,
  ListWrapper,
  ItemWrapper,
  ItemTitle,
  ItemList,
  ItemText,
  ItemButton,
  ItemButtonText,
} from './styles';

const ReportRoutes = [
  {
    id: 1,
    title: 'Meta',
    icon: 'meta',
    reports: [
      {
        name: 'Por Filial',
        route: 'ReportMetaFilial',
      },
      {
        name: 'Por Vendedor',
        route: 'ReportMetaVendedor',
      },
    ],
  },
];

function Reports({ navigation, isFocused }) {
  const [report, setReport] = useState([]);

  useEffect(() => {
    function focusedScreen() {
      if (isFocused) {
        setReport(ReportRoutes);
      }
    }
    focusedScreen();
    return () => {
      setReport([]);
    };
  }, [isFocused, navigation]);

  const handleNavigateRoute = async route => {
    navigation.navigate(`${route}`);
  };

  return (
    <Layout navigation={navigation}>
      <Container>
        <Header>Relatórios</Header>
        <ListWrapper>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={report}
            renderItem={({ item }) => (
              <ItemWrapper style={{ flex: 1 }}>
                <ItemTitle>{item.title}</ItemTitle>
                {item.reports.map((rep, repIdx) => (
                  <ItemList key={`item-${item.id}-${repIdx.toString()}`}>
                    <ItemText>{rep.name}</ItemText>
                    <ItemButton onPress={() => handleNavigateRoute(rep.route)}>
                      <ItemButtonText>Ver</ItemButtonText>
                    </ItemButton>
                  </ItemList>
                ))}
              </ItemWrapper>
            )}
            keyExtractor={(_, idx) => idx.toString()}
          />
        </ListWrapper>
      </Container>
    </Layout>
  );
}

Reports.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Reports);
