export type DashboardSubItem = {
  name: string;
};

export type DashboardItem = {
  name: string;
  subitems: DashboardSubItem[];
  isExpanded: boolean; // To track expanded/collapsed state
  icon?: string;
};

export type StatData = {
  title: string;
  value: string;
  percentage: string;
  comparison: string;
};
