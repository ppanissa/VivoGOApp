import caixa from './caixa.svg';
import primeiraChamada from './primeira-chamada.svg';
import vendaCancelada from './venda-cancelada.svg';
import venda from './venda.svg';

export default async function Icon(name) {
  const registerSvg = {
    caixa,
    primeiraChamada,
    vendaCancelada,
    venda,
  };

  const camelizeCase = str => {
    const arr = str.split('-');
    const capital = arr.map((item, index) =>
      index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item
    );
    return capital.join('');
  };

  const nameCase = await camelizeCase(name);

  return registerSvg[nameCase];
}
