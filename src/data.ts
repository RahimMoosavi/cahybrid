/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompetencyCard } from './types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AP1WRLtjeup_JShC9CT74tnVatTYsbOxV-0TETcqB_JMOwC9BgPjlk7wS558gXgQ48EsNCtm0vkCStIDvAVFPc5pXfGqTTZHCfJ3Jyd-S3itNsY1tqFYvkc-ViRNUoInGvzU5hWGecm_5NBGM94XiTeHSEE91W6AuKAt_HwBgcwq8VlZ343SaXDUfpxZK195fJSAj8zxLEz44CYDzHeP_hYw9sby4764fGI3iVMG-8bN4QoariHthJA3EzV1rw";

export const HERO_BATTERY_IMAGE = "https://lh3.googleusercontent.com/aida/AP1WRLtAdrnSfNtk8D_LQ8VMLen4bGNKt0Lg742R_YffXcpb9Ot85Z0l8WMgdU50HViUb56N6_ceGmyVZ5vpytdGt0sQ2y6yg2leKTTMhv0lxoEHYLmwfTH6RqXAjmZHbyjaLMKcRyUatY1qjTKQLkVc1tQova206DQ3D8FDGQ6q5Yb0ob2Ybh4IaZYC7fkrLYX-5Fx0B5PMhr8gcjiK0Th-D3afUkOtd1BFbeRBqJepr3dyViSXqN8FK3qiAQ";

export const ABOUT_FACILITY_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBwHocaohGlWWcGrcfrHpfNaUOgJxVKtKqjqnYOjOQHE4oQT96j6tNtRKMpLgpnHWUaPeW3_lwcDxa815cU6AjutSIuSQLLxqIZ_qpehdy8oOAb9EUjfUKOFkLJDmBk7F7ZHcYXCOLNj_K5ePcs7PPJldHXSuW8oHxuADY0JBk-wuL64P6icA2O68_slRKC2OBpfdpJzk_95zJHFvd47Zi_Fh4CZfSkOKTrpFDieE-_M51-zHWgr1CrCM05SnXsz7MF4tPdYE94BXc";

export const ABOUT_SOLAR_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCIhsmJZww_vzQfjYFfgoVVS2W1x6TH4fa9hcslordKfyn8C5fdDZI5NlNgyVvqAQqpjxzVXjgaNVlEj0vCMTTh2CiO-XoNEG3b9qYjcuXthZXtXJhZk-aRgEEq37x4o9yfUqKyOD52vC0su-057CFK6gh2u1Y0V18aEutP1ztCcPzmyNjp0nSnWStx9UsQMd9AzS5Ckt1cqc1ACzK8YmRuVGyd3-R2SJaESOpwAk2RzE4kxD517czOzaYWy9_SOjCOC_CXYbMbY8Q";

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
