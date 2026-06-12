/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface CompetencyCard {
  id: string;
  title: string;
  iconName: 'ev' | 'energy' | 'battery' | 'grid';
  bullets: string[];
}
