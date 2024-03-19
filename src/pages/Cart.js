import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import DataSplitter from "../components/DataSplitter";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Cart.module.css";

const Cart = () => {
  const navigate = useNavigate();

  const onRENCOSTUMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.cart}>
      <header className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-9@2x.png"
          />
        </div>
        <div className={styles.rencostumeWrapper}>
          <b className={styles.rencostume} onClick={onRENCOSTUMETextClick}>
            RENCOSTUME
          </b>
        </div>
        <div className={styles.rentWrapper}>
          <div className={styles.rent}>Rent</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.whatAreYou}>What are you looking for?</div>
            <img
              className={styles.gridiconssearch}
              alt=""
              src="/gridiconssearch.svg"
            />
          </div>
        </div>
        <div className={styles.orderTrackingWrapper}>
          <div className={styles.orderTracking}>Order Tracking</div>
        </div>
        <div className={styles.signInWrapper}>
          <div className={styles.signIn}>Sign in</div>
        </div>
        <div className={styles.mdiheartOutlineWrapper}>
          <img
            className={styles.mdiheartOutlineIcon}
            loading="lazy"
            alt=""
            src="/mdiheartoutline.svg"
          />
        </div>
        <div className={styles.iconShoppingCartWrapper}>
          <img
            className={styles.iconShoppingCart}
            loading="lazy"
            alt=""
            src="/-icon-shopping-cart.svg"
          />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>3</div>
        </div>
      </header>
      <main className={styles.cartInner}>
        <section className={styles.frameGroup}>
          <FrameComponent9 />
          <FrameComponent7 />
          <DataSplitter />
        </section>
      </main>
      <FrameComponent1 group9="/group-9-1@2x.png" propMarginTop="unset" />
    </div>
  );
};

export default Cart;
