import { renderCoins } from './components';
import './style.css';

const fakeCoins = [
  { name: 'USD', value: 5.280 },
  { name: 'EUR', value: 5.570 },
];

renderCoins(fakeCoins, 'BRL');
