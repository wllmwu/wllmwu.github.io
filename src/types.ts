export type RouteHandle = {
  documentTitle?: string;
  crumb?: (() => React.ReactNode) | null;
};
