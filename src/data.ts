/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompetencyCard } from './types';
import logoUrl from './logo.PNG';
import heroImage from './hero.jpeg';

export const LOGO_URL = logoUrl;

export const HERO_BATTERY_IMAGE = heroImage;

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
