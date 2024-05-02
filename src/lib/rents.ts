import { writable, type Writable } from 'svelte/store';

export type Rent = {
  created: string;
  email: string;
  endDate: string;
  index: string;
  name: string;
  note: string;
  phone: string;
  shipping: boolean;
  startDate: string;
  updated: string;
  seatName: string;
  part: {
    color: string;
    created: string;
    index: string;
    name: string;
    note: string;
    productionDate: string;
    rentstart: string;
    serialNumber: string;
    type: string;
    updated: string;
  };
};

export const rents = <Writable<Array<Rent>>>writable();