import React from 'react';
import { Input, Icon, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from "styles/Home.module.css";

const Group1Page = () => {
  return (
    <div>
      <nav>
        <form className={styles.input-container}>
          <Input icon placeholder="Search ..." className={styles.input}>
            <input />
            <Icon name="search" className={styles.magnifier} />
          </Input>
        </form>

        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </nav>

      <main>
        <div className={styles.container}>
          <div className={styles.img}></div>

          <div className={styles.content-container}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.info}>
              If you're trying to cook or planning to cook for your family or friends, you can find some ingredients here. Enjoy Cooking!
            </p>
            <Button className={styles.main-btn} onClick={() => window.location.href = "final.js"}>back</Button>
          </div>
        </div>
      </main>

      <section className={styles.ingredients}>
        <span>
          <div className={styles.ing}>Ingredient 1</div>
          <div className={styles.ing}>Ingredient 2</div>
          <div className={styles.ing}>Ingredient 3</div>
        </span>
      </section>
    </div> 
  );
}

export default Group1Page;

