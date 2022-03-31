import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <header>헤더영역</header>
      <main>
        <section className={styles.main_wrap}>
          <aside>side</aside>
          <section>
            <div className={styles.list_wrap}>
              <div className={styles.list_header}>리스트 헤더</div>
              <div className={styles.list_toy_wrap}>
                <div>
                  <div className={styles.toy_img}>
                    <img
                      src="https://live.staticflickr.com/6/5262/5888367053_02a2192296_z.jpg"
                      alt="임시이미지"
                    />
                  </div>
                  <div>본문영역</div>
                </div>
                <div>
                  <div className={styles.toy_img}>
                    <img
                      src="https://live.staticflickr.com/6/5262/5888367053_02a2192296_z.jpg"
                      alt="임시이미지"
                    />
                  </div>
                  <div>본문영역</div>
                </div>
                <div>
                  <div className={styles.toy_img}>
                    <img
                      src="https://live.staticflickr.com/6/5262/5888367053_02a2192296_z.jpg"
                      alt="임시이미지"
                    />
                  </div>
                  <div>본문영역</div>
                </div>
                <div>
                  <div className={styles.toy_img}>
                    <img
                      src="https://live.staticflickr.com/6/5262/5888367053_02a2192296_z.jpg"
                      alt="임시이미지"
                    />
                  </div>
                  <div>본문영역</div>
                </div>
              </div>
            </div>
          </section>
          <aside>side</aside>
        </section>
      </main>
    </>
  );
};

export default Home;
