
export enum SubsidiaryStatus {
  ACTIVE = 'Active',
  LAUNCHING = 'Launching',
  COMING_SOON = 'Coming Soon'
}

export interface Subsidiary {
  id: string;
  name: string;
  industry: string;
  description: string;
  status: SubsidiaryStatus;
  imageUrl?: string;
}

export interface StrategicCapability {
  title: string;
  description: string;
}

export interface Service {
  name: string;
  description: string;
  logoPlaceholder: string;
}
