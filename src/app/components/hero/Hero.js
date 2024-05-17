import { Button } from "@mui/material";
import Image from "next/image";
import React, { memo } from "react";
import heroimages from "../../assets/images/heroright.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper__left">
            <h1>
              Raqamli ta'lim muhitida KT talabalarining innavatsion faoliyatini
              rivojlantirish
            </h1>
            <p>
              Raqamli ta’lim muhitida talabalar intelektini rivojlantirish Oliy
              ta’lim tizimidatalabalar intelektini rivojlantirish har bir
              talabaning imkoniyatlari va qobiliyatini hisobga olishni o‘z
              ichiga olgan mustaqil ta’limni rivojlantirishimiz kerak. Afsuski,
              bizning ta’lim tizimimizda uzoq vaqt davomida talabalar mustaqil
              ta’limga individual yondashish imkonini beradigan real mexanizmlar
              mavjud emas edi.
            </p>
            <Button className="hero__btn" variant="contained">
              read more
            </Button>
          </div>
          <Image className="hero__right__img" src={heroimages} alt="rasm" />
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
