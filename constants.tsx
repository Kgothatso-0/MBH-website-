import { Subsidiary, SubsidiaryStatus, StrategicCapability, Service } from './types';

export const INDUSTRIES = [
  "Automotive",
  "Marketing & Brand Strategy",
  "Housekeeping Services",
  "Business Development"
];

export const SERVICES: Service[] = [
  {
    name: "MBH Housekeeping",
    description: "Professional housekeeping and property maintenance services operated under the MBH group.",
    logoPlaceholder: "HK"
  },
  {
    name: "MBH Automotive",
    description: "Vehicle sales and related automotive business activities within the MBH portfolio.",
    logoPlaceholder: "AU"
  },
  {
    name: "Studio MBH",
    description: "Strategic marketing, brand development, and growth support across MBH businesses.",
    logoPlaceholder: "ST"
  }
];

export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: '1',
    name: "MBH Automotive",
    industry: "Automotive",
    description: "Direct vehicle sales and automotive supply chain management.",
    status: SubsidiaryStatus.ACTIVE,
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '2',
    name: "Studio MBH",
    industry: "Marketing & Brand Strategy",
    description: "Visual identity, digital strategy, and high-level market positioning.",
    status: SubsidiaryStatus.ACTIVE,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '3',
    name: "MBH Housekeeping",
    industry: "Housekeeping Services",
    description: "Premium property maintenance and cleaning solutions for high-end residential and commercial estates.",
    status: SubsidiaryStatus.ACTIVE,
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '4',
    name: "Strategic Growth Partners",
    industry: "Business Development",
    description: "Advising mid-sized firms on operational frameworks and institutional scaling.",
    status: SubsidiaryStatus.COMING_SOON,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const CAPABILITIES: StrategicCapability[] = [
  {
    title: "Strategy & Growth",
    description: "Precision planning and market positioning for global expansion."
  },
  {
    title: "Brand Development",
    description: "Curating professional market presence and group identity."
  },
  {
    title: "Operational Scaling",
    description: "Building frameworks for efficiency, reliability, and speed."
  },
  {
    title: "Asset Allocation",
    description: "Disciplined resource deployment for long-term value."
  }
];