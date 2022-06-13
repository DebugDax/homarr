import { MantineTheme } from '@mantine/core';
import { OptionValues } from '../components/modules/modules';

export interface Settings {
  searchUrl: string;
  title?: string;
  logo?: string;
  favicon?: string;
  primaryColor?: MantineTheme['primaryColor'];
  secondaryColor?: MantineTheme['primaryColor'];
  primaryShade?: MantineTheme['primaryShade'];
  background?: string;
  appOpacity?: number;
  widgetPosition?: string;
}

export interface Config {
  name: string;
  services: serviceItem[];
  settings: Settings;
  modules: {
    [key: string]: ConfigModule;
  };
}

interface ConfigModule {
  title: string;
  enabled: boolean;
  options: {
    [key: string]: OptionValues;
  };
}

export const ServiceTypeList = [
  'Other',
  'Click To Ping',
  'Emby',
  'Deluge',
  'Lidarr',
  'Plex',
  'Radarr',
  'Readarr',
  'Sonarr',
  'qBittorrent',
  'Transmission',
];
export type ServiceType =
  | 'Other'
  | 'Click To Ping'
  | 'Emby'
  | 'Deluge'
  | 'Lidarr'
  | 'Plex'
  | 'Radarr'
  | 'Readarr'
  | 'Sonarr'
  | 'qBittorrent'
  | 'Transmission';

export interface serviceItem {
  id: string;
  name: string;
  type: string;
  url: string;
  icon: string;
  category?: string;
  apiKey?: string;
  password?: string;
  username?: string;
  openedUrl?: string;
}
