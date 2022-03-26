import { atom } from "jotai";
//landing page
export const locationAtom = atom("");
export const bookingRangeAtom = atom([null, null]);
export const displayDateAtom = atom(null);
export const guestNumAtom = atom(0);
//booking page
export const actualGuestsNumAtom = atom(0);