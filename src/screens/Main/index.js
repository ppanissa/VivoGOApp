import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';

// Loading Components
import Loading from '~/components/Loading/Main/LoadingList';
// import { useDispatch } from 'react-redux';
import api from '~/services/api';
import apiRoutes from '~/services/apiRoutes';
import dateFormat from '~/utils/dateFormat';
import { dateTitle, dateTitleWeek } from '~/utils/dateTitle';

import Layout from '~/components/_layouts/Portrait';
import Header from '~/components/Header';
import Icon from '~/components/Svg/NotifyIcon';

import {
  Container,
  ListWrapper,
  GroupContainer,
  GroupTitleContainer,
  GroupTitleDate,
  GroupTitleWeek,
  ItemContainer,
  ItemButton,
  ItemIcon,
  ItemInfo,
  ItemTitle,
  ItemDesc,
} from './styles';

function Main({ navigation, isFocused }) {
  // const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [notify, setNotify] = useState([]);

  const handleOnRefresh = React.useCallback(() => {
    async function refreshApi() {
      try {
        setRefreshing(true);
        const { API_NOTIFY_HISTORY } = await apiRoutes();
        const { data } = await api.get(API_NOTIFY_HISTORY);

        const groups = data.reduce((group, item) => {
          const date = item.data_envio.split(' ')[0];
          if (!group[date]) {
            group[date] = [];
          }
          group[date].push(item);
          return group;
        }, {});

        const groupArrays = Object.keys(groups).map(date => {
          return {
            date,
            items: groups[date],
          };
        });
        console.tron.warn(groupArrays);
        setNotify(groupArrays);
        setRefreshing(false);
      } catch (e) {
        setRefreshing(false);
      }
    }
    refreshApi();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (isFocused) {
        try {
          setLoading(true);
          const { API_NOTIFY_HISTORY } = await apiRoutes();
          const { data } = await api.get(API_NOTIFY_HISTORY);

          const groups = data.reduce((group, item) => {
            const date = item.data_envio.split(' ')[0];
            if (!group[date]) {
              group[date] = [];
            }
            group[date].push(item);
            return group;
          }, {});

          const groupArrays = Object.keys(groups).map(date => {
            return {
              date,
              items: groups[date],
            };
          });

          setNotify(groupArrays);
          setLoading(false);
        } catch (e) {
          console.tron.log(e);
          setLoading(false);
        }
      }
    }
    fetchData();

    // Unmounted
    function cleanup() {
      if (!isFocused) {
        setLoading(true);
        setNotify([]);
      }
    }

    cleanup();
  }, [isFocused]);

  return (
    <Layout navigation={navigation}>
      <Container>
        <Header>Últimas Atividades</Header>
        <ListWrapper>
          {loading ? (
            <Loading list={10} />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={notify}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleOnRefresh}
                />
              }
              renderItem={({ item }) => (
                <GroupContainer>
                  <GroupTitleContainer>
                    <GroupTitleDate>{dateTitle(item.date)}</GroupTitleDate>
                    <GroupTitleWeek>
                      {`(${dateTitleWeek(item.date)})`}
                    </GroupTitleWeek>
                  </GroupTitleContainer>
                  {item.items.map((data, idx) => (
                    <ItemContainer key={`ìtem-${idx.toString()}`}>
                      <ItemButton>
                        <ItemIcon>
                          <Icon id={data.id_tipo_notificacao} />
                        </ItemIcon>
                        <ItemInfo>
                          <ItemTitle>{data.nome_tipo_notificacao}</ItemTitle>
                          <ItemDesc>
                            {data.titulo} - {dateFormat(data.data_envio)}
                          </ItemDesc>
                        </ItemInfo>
                      </ItemButton>
                    </ItemContainer>
                  ))}
                </GroupContainer>
              )}
              keyExtractor={(_, idx) => idx.toString()}
            />
          )}
        </ListWrapper>
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
