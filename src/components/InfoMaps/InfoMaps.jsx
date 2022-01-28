import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Maps from "./Maps/Maps";

const InfoMaps = () => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Container maxWidth="lg">
        <div className={classes.infoRow}>
          <div className={classes.infoColumn}>
            <div className={classes.textWrapper}>
              <Typography variant="h4" className={classes.text}>
                STORE
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Address: 3 Al Elem Wal Iman, El Mahalla El Kubra, Gharbia
                  Governorate, Egypt
                </Typography>
                <Typography variant="h6" className={classes.subTitle}>
                  Phone number owner:{" "}
                  <a href="tel:+201158242992">
                    <FaPhone /> 01158242992
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Phone number service:{" "}
                  <a href="tel:+201158242992">
                    <FaPhone /> +201158242992
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Email:{" "}
                  <a href="mailto:s_yahia2011@yahoo.com">
                    <MdEmail /> s_yahia2011@yahoo.com
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  WhatsApp Owner:{" "}
                  <a href="whatsapp://send?text=test&phone=+201158242992">
                    <FaWhatsapp /> WhatsApp{" "}
                  </a>
                </Typography>
              </div>
              <a
                href="https://www.google.com/maps/place/3+Al+Elem+Wal+Iman,+Al+Mahalah+Al+Kubra+(Part+2),+El+Mahalla+El+Kubra+1,+Gharbia+Governorate+31951/@30.9720437,31.1819644,21z/data=!4m5!3m4!1s0x14f7a35acc287e4d:0x38e9773b9048e29f!8m2!3d30.9720326!4d31.1821458"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.button}>
                  <SiGooglemaps /> Get Directions
                </Button>
              </a>
            </div>
          </div>
          <div className={classes.infoColumn}>
            <div className={classes.imgWrapper}>
              <Maps />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoMaps;
