import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";
import logoImg from "../../assets/img/logo-web-white.png";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
// import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <NavLink to="/" className={classes.footer__logo}>
            <img
              src={logoImg}
              alt="logoImg"
              className={classes.footer__logoImg}
            />
          </NavLink>
          <div className={classes.footer__center}>
            <div className={classes.footer__centerText}>
              ELKAWTHER MARKET @ 2022.
            </div>
            <div className={classes.footer__centerText}>
              Made with ♥ by:{" "}
              <a
                href="https://www.mohamedahmed.ml"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerMo}
              >
                Mohamed Ahmed
              </a>
            </div>
          </div>
          <div className={classes.footer__right}>
            {/* <a
              className={classes.footer__rightLink}
              href="https://www.facebook.com"
              target="__blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={classes.footer__rightLink}
              href="https://www.instagram.com"
              target="__blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a> */}
            <a
              className={classes.footer__rightLink}
              href="whatsapp://send?text=order-from-website&phone=+201158242992"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
