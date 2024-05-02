import { writable, type Writable } from 'svelte/store';

export type Seat = {
  color: string;
  created: string;
  index: string;
  name: string;
  note: string;
  productionDate: string;
  rentstart: string;
  rentend: string;
  serialNumber: string;
  type: string;
  updated: string;
};

export const seats = <Writable<Array<Seat>>>writable();