import { observable } from '@legendapp/state';
import { Itemsdata1 } from '../data/pages/ecommerces/ecommercedata';

// État global Legend-State équivalent à initialState Redux
export const legendState = observable({
  lang: 'en',
  dir: 'ltr',
  dataThemeMode: 'light',
  dataMenuStyles: 'dark',
  dataNavLayout: 'vertical',
  dataHeaderStyles: 'light',
  dataVerticalStyle: 'overlay',
  dataToggled: '',
  dataNavStyle: '',
  horStyle: '',
  dataPageStyle: 'regular',
  dataWidth: 'fullwidth',
  dataMenuPosition: 'fixed',
  dataHeaderPosition: 'fixed',
  loader: 'disable',
  iconOverlay: '',
  colorPrimaryRgb: '',
  colorPrimary: '',
  bodyBg: '',
  Light: '',
  darkBg: '',
  inputBorder: '',
  bgImg: '',
  formControlBg: '',
  iconText: '',
  body: '',
  ecommercedata: Itemsdata1,
});

// Actions équivalentes aux cases du reducer Redux
export function setTheme(payload: any) {
  legendState.set(payload);
}

export function addToCart(payload: string) {
  legendState.ecommercedata.set(Itemsdata1.filter(idx => idx.id === payload));
}

export function setProduct(payload: string) {
  legendState.ecommercedata.set(Itemsdata1.filter(idx => idx.id == payload));
}
