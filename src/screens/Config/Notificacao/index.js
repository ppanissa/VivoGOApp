import React, { useEffect, useState } from 'react';
import { FlatList, Switch } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';
import apiRoutes from '~/services/apiRoutes';

import Loading from '~/components/Loading/Config/Notificacao';

import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import {
  Container,
  Wrapper,
  WrapperSafe,
  TitleContainer,
  TitleText,
  ItemWrapper,
  ItemText,
  ItemSwitchContainer,
} from './styles';

function Main({ navigation, isFocused }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function initScreen() {
      try {
        setLoading(true);
        const { API_CONFIG_NOTIFY_PERMISSION } = await apiRoutes();
        const {
          data: { data: dataResponse },
        } = await api.get(API_CONFIG_NOTIFY_PERMISSION);
        setData(dataResponse);
        setLoading(false);
      } catch (e) {
        console.tron.log(e);
        setLoading(false);
      }
    }
    initScreen();

    // Cleanup
    return () => {
      setData([]);
      setLoading(true);
    };
  }, [isFocused]);

  const handleChandgeValue = async (id, value) => {
    try {
      const renewData = data.map(item => {
        if (item.ne_id === id) {
          item.ativo = value;
        }
        return item;
      });

      setData(renewData);

      const { API_CONFIG_NOTIFY_PERMISSION_EDIT } = await apiRoutes();

      await api.post(API_CONFIG_NOTIFY_PERMISSION_EDIT, {
        ne_id: id,
        ativo: +value,
      });
    } catch (e) {
      console.tron.log(e);
    }
  };

  return (
    <Layout navigation={navigation}>
      <Container>
        <Header>Configurações</Header>
        <Wrapper>
          {loading ? (
            <Loading list={12} />
          ) : (
            <WrapperSafe>
              <TitleContainer>
                <TitleText>notificações</TitleText>
              </TitleContainer>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                  <ItemWrapper>
                    <ItemText>{item.ne_nome}</ItemText>
                    <ItemSwitchContainer>
                      <Switch
                        hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                        value={item.ativo}
                        onValueChange={e => handleChandgeValue(item.ne_id, e)}
                      />
                    </ItemSwitchContainer>
                  </ItemWrapper>
                )}
                keyExtractor={item => item.ne_id.toString()}
              />
            </WrapperSafe>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Main);
