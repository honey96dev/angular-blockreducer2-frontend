const apis = {
  auth: {
    signIn: 'auth/sign-in',
    signUp: 'auth/sign-up',
  },
  dashboard: {
    currentSymbol: 'dashboard/current-symbol',
  },
  general: {
    price: 'general/price',
    volume0: 'general/volume0',
    volume1: 'general/volume1',
    volume2: 'general/volume2',
    ohlc: 'general/ohlc',
  },
  volatility: {
    real: 'volatility/real',
    estimate: 'volatility/estimate',
    recalculate: 'volatility/recalculate',
  },
  marketSentiment: {
    one: 'market-sentiment/one',
    collection: 'market-sentiment/collection',
  },
  exchangeInfo: {
    cryptoMarkets: 'exchange-info/crypto-markets',
    subscribe: 'exchange-info/subscribe',
  },
  deribit: {
    instruments: 'deribit/instruments',
    data: 'deribit/data',
  },
  settings: {
    password: 'settings/password',
  },
  admin: {
    users: 'admin/users',
  },
};

export {
  apis,
};
