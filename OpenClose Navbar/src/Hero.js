import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            İnternet için Ödemenin en kolay yolu
            <br />
          </h1>
          <p>
            Her ölçekten milyonlarca
            şirket, ödemeleri kabul etmek, ödemeleri göndermek ve işlerini
            çevrimiçi olarak yönetmek için Bzk'in yazılımını ve API'lerini
            kullanır.
          </p>
          <button className="btn">Hemen Başla</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
