const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
