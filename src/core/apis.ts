const apis = {
  auth: {
    signIn: 'auth/sign-in',
    signUp: 'auth/sign-up',
  },
  general: {
    price: 'general/price',
    volume1: 'general/volume1',
    volume2: 'general/volume2',
    ohlc: 'general/ohlc',
  },
  volatility: {
    real: 'volatility/real',
    estimate: 'volatility/estimate',
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
};

export {
  apis,
};
