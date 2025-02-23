import styles, { layout } from "../styles/styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from '../components';
import {app} from '../assets/index';

const Explore = () => {
  return (
    <section id="explore" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Move ahead with us to  <br className="hidden md:block" />explore the world
        </h2>
        <Button title="Let's Get Started" icon={<AiOutlineArrowRight></AiOutlineArrowRight>} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={app} alt="App" />
      </div>
    </section>
  )
}

export default Explore;