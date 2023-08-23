export type WelcomeStackParamList = {
  AuthOptions: undefined;
};

export type DashboardBottomTabParamList = {
  Overview: undefined;
  'This Month': undefined;
  Offers: undefined;
  Settings: undefined;
};

export type OverviewStackParamList = {
  CreditScore: undefined;
}

export type BillsStackParamList = {
  Bills: undefined;
  Payments: undefined;
  Subscription: undefined
}

export type ExpensesStackParamList = BillsStackParamList & {
  MonthlyExpenses: undefined;
  'Bills&Utilities': undefined;
  'SubScriptions': undefined
}

export type MainAppStackParamList = DashboardBottomTabParamList & ExpensesStackParamList & OverviewStackParamList & {
  MainNav: undefined
}


export type RootStackParamList = WelcomeStackParamList & MainAppStackParamList & { MainApp: undefined; }
