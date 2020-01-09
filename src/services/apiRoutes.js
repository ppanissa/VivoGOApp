import { AsyncStorage } from 'react-native';

export default async function apiRoutes() {
  const Uf = async () => {
    const uf = await AsyncStorage.getItem('@VivoGO:UF');

    return `${uf}`;
  };
  /**
   * Config Routes
   */
  // Permissões Listar
  const API_CONFIG_NOTIFY_PERMISSION = `/app/notificacoes/usuario/permissoes?estado=${await Uf()}`;
  // Permissões Alterar
  const API_CONFIG_NOTIFY_PERMISSION_EDIT = `/app/notificacoes/usuario/permissoes/modificar?estado=${await Uf()}`;
  /**
   * Notificações Histórico do Usuário
   */
  const API_NOTIFY_HISTORY = `/app/notificacoes/usuario/historico?estado=${await Uf()}`;

  /**
   * Token do Expo
   */
  // List
  const API_GET_EXPO_TOKEN = `/app/notificacoes/usuario/token-expo?estado=${await Uf()}`;
  // Create
  const API_POST_EXPO_TOKEN_CREATE = `/app/notificacoes/usuario/token-expo/salvar?estado=${await Uf()}`;
  // Remove
  const API_POST_EXPO_TOKEN_DELETE = `/app/notificacoes/usuario/token-expo/remover?estado=${await Uf()}`;

  return {
    API_CONFIG_NOTIFY_PERMISSION,
    API_CONFIG_NOTIFY_PERMISSION_EDIT,
    API_NOTIFY_HISTORY,
    API_GET_EXPO_TOKEN,
    API_POST_EXPO_TOKEN_CREATE,
    API_POST_EXPO_TOKEN_DELETE,
  };
}
