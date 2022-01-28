import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
  name: API,
  initialState: {
    about: null,
    products: {
      special: null,
      albanwgebn: null,
      mo3lbat: null,
      bekala: null,
      snaks: null,
      hotdrinks: null,
      khaltatwtwabl: null,
      colddrinks: null,
      icecream: null,
      hlwyatsahltta7der: null,
      soswsalsa: null,
      monzfat: null,
      fwater: null,
    },
    productsList: null,
    posts: null,
    instaPosts: null,
    hero: null,
    heroProduct: null,
    heroBlog: null,
  },
  reducers: {
    setAboutData: (state, action) => {
      state.about = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setInstaPosts: (state, action) => {
      state.instaPosts = action.payload;
    },
    setHero: (state, action) => {
      state.hero = action.payload;
    },
    setProductSpecial: (state, action) => {
      state.products.special = action.payload;
    },
    setProductAlbanwgebn: (state, action) => {
      state.products.albanwgebn = action.payload;
    },
    setProductMo3lbat: (state, action) => {
      state.products.mo3lbat = action.payload;
    },
    setProductBekala: (state, action) => {
      state.products.bekala = action.payload;
    },
    setProductSnaks: (state, action) => {
      state.products.snaks = action.payload;
    },
    setProductHotdrinks: (state, action) => {
      state.products.hotdrinks = action.payload;
    },
    setProductKhaltatwtwabl: (state, action) => {
      state.products.khaltatwtwabl = action.payload;
    },
    setProductColddrinks: (state, action) => {
      state.products.colddrinks = action.payload;
    },
    setProductIcecream: (state, action) => {
      state.products.icecream = action.payload;
    },
    setProductHlwyatsahltta7der: (state, action) => {
      state.products.hlwyatsahltta7der = action.payload;
    },
    setProductSoswsalsa: (state, action) => {
      state.products.soswsalsa = action.payload;
    },
    setProductMonzfat: (state, action) => {
      state.products.monzfat = action.payload;
    },
    setProductFwater: (state, action) => {
      state.products.fwater = action.payload;
    },
    setHeroProduct: (state, action) => {
      state.heroProduct = action.payload;
    },
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
    setHeroBlog: (state, action) => {
      state.heroBlog = action.payload;
    },
  },
});

const { reducer, actions } = fetchApi;

export const {
  setAboutData,
  setPosts,
  setInstaPosts,
  setHero,
  setProductSpecial,
  setProductAlbanwgebn,
  setProductMo3lbat,
  setProductBekala,
  setProductSnaks,
  setProductHotdrinks,
  setProductKhaltatwtwabl,
  setProductColddrinks,
  setProductIcecream,
  setProductHlwyatsahltta7der,
  setProductSoswsalsa,
  setProductMonzfat,
  setProductFwater,
  setHeroProduct,
  setProductsList,
  setHeroBlog,
} = actions;

export default reducer;
