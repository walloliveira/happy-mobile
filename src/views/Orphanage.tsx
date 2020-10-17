import { Image } from './Image';

export interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  opens_at_weekends: boolean;
  images: Array<Image>
}
