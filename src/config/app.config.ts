interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Owner'],
  customerRoles: [],
  tenantRoles: ['Account Owner', 'Business Account Manager'],
  tenantName: 'Client',
  applicationName: 'BankOfApis',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user authentication',
    'Manage account balance',
    'Manage transaction history',
    'Manage bank account',
    'Manage user data',
    'Manage client data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5d1f56fa-6f52-4ff2-a07a-fc75d8cc3b5c',
};
