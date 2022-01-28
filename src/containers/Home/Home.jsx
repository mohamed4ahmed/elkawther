import React, { useEffect, useState } from "react";
import {
  FullPage,
  HighlightPosts,
  InfoMaps,
  InfoSection,
  InstaPosts,
  Products,
  SectionLink,
  SpinnerBook,
} from "../../components";
import {
  setAboutData,
  setHero,
  setInstaPosts,
  setPosts,
  setProductsList,
  setProductSpecial,
} from "../../app/slice/fetchApi";
import { useDispatch } from "react-redux";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  fetchAboutData,
  fetchBlogData,
  fetchHeroData,
  fetchInstaPost,
  fetchProduct,
} from "../../api";
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
import { useSelector } from "react-redux";
import feedbackImg from "../../assets/img/feedback.svg";
import { AiOutlineStar } from "react-icons/ai";

const feedback = {
  subHeader: "ELKAWTHER MARKET",
  header: "ELKAWTHER MARKET Service Rating",
  description:
    "Each of your comments will help ELKAWTHER MARKET improve its service to serve you better!",
  linkBtn: "/feedback",
  contentBtn: "Evaluate",
  img: feedbackImg,
  icon: <AiOutlineStar />,
};

const Home = () => {
  const [spinner, setSpinner] = useState(true);
  const dispatch = useDispatch();

  const special = useSelector((state) => state.api.products.special);
  const posts = useSelector((state) => state.api.posts);
  const hero = useSelector((state) => state.api.hero);
  const about = useSelector((state) => state.api.about);
  const instaPosts = useSelector((state) => state.api.instaPosts);

  useEffect(() => {
    document.title = "ELKAWTHER MARKET - HomePage";
  }, []);

  useEffect(() => {
    if (!hero) {
      fetchHeroData()
        .then((data) => {
          const action = setHero(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, hero]);

  useEffect(() => {
    if (!about) {
      fetchAboutData()
        .then((data) => {
          const action = setAboutData(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, about]);

  useEffect(() => {
    if (!posts) {
      fetchBlogData()
        .then((posts) => {
          let postSort = [];
          postSort = posts.slice().sort((value1, value2) => {
            const dateValue1 = new Date(value1.publishedAt).getTime();
            const dateValue2 = new Date(value2.publishedAt).getTime();
            return dateValue1 < dateValue2 ? 1 : -1;
          });
          const action = setPosts(postSort);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, posts]);

  useEffect(() => {
    if (!instaPosts) {
      fetchInstaPost()
        .then((instaPosts) => {
          let postsSort = [];
          postsSort = instaPosts.slice().sort((value1, value2) => {
            const dateValue1 = new Date(value1.publishedAt).getTime();
            const dateValue2 = new Date(value2.publishedAt).getTime();
            return dateValue1 < dateValue2 ? 1 : -1;
          });
          const action = setInstaPosts(postsSort);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, instaPosts]);

  useEffect(() => {
    if (!special) {
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
  }, [dispatch, special]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          <FullPage />
          <LazyLoadComponent>
            <InfoSection />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <InfoMaps />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <Products products={special} />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <HighlightPosts />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <InstaPosts />
          </LazyLoadComponent>
          <LazyLoadComponent>
            <SectionLink
              subHeader={feedback.subHeader}
              header={feedback.header}
              description={feedback.description}
              linkBtn={feedback.linkBtn}
              img={feedback.img}
              contentBtn={feedback.contentBtn}
              iconBtn={feedback.icon}
              dark
            />
          </LazyLoadComponent>
        </>
      )}
    </div>
  );
};

export default Home;
