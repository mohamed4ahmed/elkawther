import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
import {
  Albanwgebn,
  Mo3lbat,
  Bekala,
  Snaks,
  Hotdrinks,
  Khaltatwtwabl,
  Colddrinks,
  Icecream,
  Hlwyatsahltta7der,
  Soswsalsa,
  Monzfat,
  Fwater,
} from "../../app/ItemTypes";
import {
  setProductSpecial,
  setHeroProduct,
  setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.api.productsList);
  const heroProduct = useSelector((state) => state.api.heroProduct);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (!productsList) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const albanwgebn = [];
          const mo3lbat = [];
          const bekala = [];
          const snaks = [];
          const hotdrinks = [];
          const khaltatwtwabl = [];
          const colddrinks = [];
          const icecream = [];
          const hlwyatsahltta7der = [];
          const soswsalsa = [];
          const monzfat = [];
          const fwater = [];

          products.map((product, index) => {
            if (product.projectType === Albanwgebn) albanwgebn.push(product);
            else if (product.projectType === Mo3lbat) mo3lbat.push(product);
            else if (product.projectType === Bekala) bekala.push(product);
            else if (product.projectType === Snaks) snaks.push(product);
            else if (product.projectType === Hotdrinks) hotdrinks.push(product);
            else if (product.projectType === Khaltatwtwabl)
              khaltatwtwabl.push(product);
            else if (product.projectType === Colddrinks)
              colddrinks.push(product);
            else if (product.projectType === Icecream) icecream.push(product);
            else if (product.projectType === Hlwyatsahltta7der)
              hlwyatsahltta7der.push(product);
            else if (product.projectType === Soswsalsa) soswsalsa.push(product);
            else if (product.projectType === Monzfat) monzfat.push(product);
            else if (product.projectType === Fwater) fwater.push(product);

            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            albanwgebn: albanwgebn,
            mo3lbat: mo3lbat,
            bekala: bekala,
            snaks: snaks,
            hotdrinks: hotdrinks,
            khaltatwtwabl: khaltatwtwabl,
            colddrinks: colddrinks,
            icecream: icecream,
            hlwyatsahltta7der: hlwyatsahltta7der,
            soswsalsa: soswsalsa,
            monzfat: monzfat,
            fwater: fwater,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, productsList]);

  useEffect(() => {
    if (!heroProduct) {
      fetchHeroProduct()
        .then((data) => {
          const action = setHeroProduct(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, heroProduct]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          {" "}
          <HeroPage slides={heroProduct} idScrollTo="productList" />
          <ProductsList products={productsList} />
        </>
      )}
    </>
  );
};

export default Products;
