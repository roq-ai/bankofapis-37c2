const mapping: Record<string, string> = {
  'account-balances': 'account_balance',
  'bank-accounts': 'bank_account',
  clients: 'client',
  'transaction-histories': 'transaction_history',
  users: 'user',
  'user-authentications': 'user_authentication',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
