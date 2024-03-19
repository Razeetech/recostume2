import DecisionTreeRoot from "../components/DecisionTreeRoot";
import FrameComponent6 from "../components/FrameComponent6";
import NetworkVertex from "../components/NetworkVertex";
import Logarithm from "../components/Logarithm";
import IOException from "../components/IOException";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingpage}>
      <DecisionTreeRoot />
      <div className={styles.landingpageChild} />
      <FrameComponent6 />
      <NetworkVertex />
      <div className={styles.switchCase}>
        <img
          className={styles.switchCaseChild}
          loading="lazy"
          alt=""
          src="/group-16.svg"
        />
        <img
          className={styles.pexelsJenniferEnujiugha4166Icon}
          alt=""
          src="/pexelsjenniferenujiugha4166354removebgpreview-1@2x.png"
        />
      </div>
      <Logarithm />
      <IOException />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent4 />
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-20@2x.png"
        />
      </section>
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
