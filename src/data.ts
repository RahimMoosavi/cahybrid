/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompetencyCard } from './types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AP1WRLtjeup_JShC9CT74tnVatTYsbOxV-0TETcqB_JMOwC9BgPjlk7wS558gXgQ48EsNCtm0vkCStIDvAVFPc5pXfGqTTZHCfJ3Jyd-S3itNsY1tqFYvkc-ViRNUoInGvzU5hWGecm_5NBGM94XiTeHSEE91W6AuKAt_HwBgcwq8VlZ343SaXDUfpxZK195fJSAj8zxLEz44CYDzHeP_hYw9sby4764fGI3iVMG-8bN4QoariHthJA3EzV1rw";

export const HERO_BATTERY_IMAGE = "https://lh3.googleusercontent.com/aida/AP1WRLtAdrnSfNtk8D_LQ8VMLen4bGNKt0Lg742R_YffXcpb9Ot85Z0l8WMgdU50HViUb56N6_ceGmyVZ5vpytdGt0sQ2y6yg2leKTTMhv0lxoEHYLmwfTH6RqXAjmZHbyjaLMKcRyUatY1qjTKQLkVc1tQova206DQ3D8FDGQ6q5Yb0ob2Ybh4IaZYC7fkrLYX-5Fx0B5PMhr8gcjiK0Th-D3afUkOtd1BFbeRBqJepr3dyViSXqN8FK3qiAQ";

export const ABOUT_WIND_IMAGE = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&auto=format&q=80";

export const ABOUT_FACILITY_IMAGE = "https://images.unsplash.com/photo-1612618062562-ad6f0d83785e?w=800&h=600&fit=crop&auto=format&q=80";

export const ABOUT_SOLAR_IMAGE = "https://images.unsplash.com/photo-1589276534126-adef63a95e05?w=800&h=600&fit=crop&auto=format&q=80";

export const ABOUT_HYDROELECTRIC_IMAGE = "https://images.unsplash.com/photo-1509390874189-d75fd22f19f7?w=800&h=600&fit=crop&auto=format&q=80";

export const COMPETENCIES: CompetencyCard[] = [
  {
    id: 'ev-charging',
    title: 'EV Charging',
    iconName: 'ev',
    bullets: [
      'EV charging technologies',
      'Bidirectional charging'
    ]
  },
  {
    id: 'energy-management',
    title: 'Energy Management',
    iconName: 'energy',
    bullets: [
      'Residential and commercial energy management',
      'Distributed energy resources'
    ]
  },
  {
    id: 'energy-storage',
    title: 'Energy Storage',
    iconName: 'battery',
    bullets: [
      'Power Battery Systems',
      'Seamless transition of power'
    ]
  },
  {
    id: 'smart-grid',
    title: 'Smart Grid',
    iconName: 'grid',
    bullets: [
      'Microgrid supervisory control',
      'Interconnection studies',
      'System Analysis'
    ]
  }
];

export const CONTACT_INFO = {
  email: 'nabavi@cahybrid.com',
  linkedinUrl: 'https://www.linkedin.com/in/ali-nabavi-phd-peng-65576a3a/',
  linkedinName: 'Ali Nabavi'
};
