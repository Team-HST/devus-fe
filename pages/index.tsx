import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userNameFormatSelector } from 'atoms/user/selector';
import { themeState } from 'atoms/common/atom';

import Switch from 'react-switch';

import style from '../styles/main/main.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faList,
  faTablet,
  faMagnifyingGlass,
  faXmark,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import defalutimg from './img/default_image.png';

interface HomeProps {
  isMobile: boolean;
}

const Home = ({ isMobile }: HomeProps) => {
  const data = [
    {
      id: 1,
      src: defalutimg,
      title: 'title1',
      text: 'text1',
    },
    {
      id: 2,
      src: defalutimg,
      title: 'title2',
      text: 'text2',
    },
    {
      id: 3,
      src: defalutimg,
      title: 'title3',
      text: 'text3',
    },
    {
      id: 4,
      src: defalutimg,
      title: 'title4',
      text: 'text4',
    },
    {
      id: 5,
      src: defalutimg,
      title: 'title5',
      text: 'text5',
    },
  ];
  const [listStyle, SetListStyle] = useState(true);
  const [mobilemenu, SetMobilemenu] = useState(false);
  const [setting, SetSetting] = useState(false);
  const [userName, setUserName] = useState('Kim Younghoon');
  const [userNameFortmat, setUserNameFormat] = useRecoilState(userNameFormatSelector);

  const [darkmodeatom, Setdarkmodeatom] = useRecoilState(themeState);
  const [darkmodebool, Setdarkmodebool] = useState(false);

  useEffect(() => {
    setUserNameFormat(userName);
  }, [userName, setUserNameFormat]);

  function onToggleMenu() {
    SetMobilemenu((prev) => !prev);
  }

  function darkModeChange() {
    if (darkmodeatom == 'light') {
      document.getElementsByTagName('html')[0].classList.add('darkmode');
      Setdarkmodeatom('dark');
      Setdarkmodebool(true);
    } else {
      document.getElementsByTagName('html')[0].classList.remove('darkmode');
      Setdarkmodeatom('light');
      Setdarkmodebool(false);
    }
  }

  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <div className="container">
        {isMobile ? (
          <>
            <header id="header_M" className={style.header_M}>
              <div onClick={onToggleMenu} style={{ width: '15px;' }}>
                <FontAwesomeIcon icon={mobilemenu ? faXmark : faBars}></FontAwesomeIcon>
              </div>
              <div>Logo</div>
              <div>
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
              </div>
            </header>

            {mobilemenu ? (
              <ul id="header_M_menu" className={`${style.header_M_menu} p-3`}>
                <li>
                  <div className={style.search_bar}>
                    <input type="text" className={style.inputtext} />
                    <span className="pointer">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                  </div>
                </li>
                <li>
                  <a href="">menu1</a>
                </li>
                <li>
                  <a href="">menu2</a>
                </li>
                <li>
                  <a href="">menu3</a>
                </li>
                <li>
                  <a href="">menu4</a>
                </li>
              </ul>
            ) : null}
          </>
        ) : (
          <header id="header_PC" className={`${style.header_PC}`}>
            <div className="container">
              <div>
                <span className="me-4">Logo</span>
                <div className={`${style.search_bar} d-inline-block me-3"`}>
                  <input type="text" className={style.inputtext} placeholder="Search" />
                  <span className={`${style.search_icon} pointer`}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
                <a href="">menu1</a>
                <a href="">menu2</a>
                <a href="">menu3</a>
                <a href="">menu4</a>
              </div>
              <div className={style.header_PC_right}>
                <FontAwesomeIcon
                  icon={faGear}
                  className="pointer"
                  onClick={() => SetSetting((prev) => !prev)}
                />
                {setting && (
                  <div className={style.header_PC_right_menu}>
                    <div>
                      <div style={{ marginRight: '10px' }}>DARKMODE</div>
                      <Switch
                        onChange={darkModeChange}
                        checked={darkmodebool}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        width={30}
                        height={15}
                      />
                    </div>
                    <div className="pointer">
                      <a href="">LOGOUT</a>{' '}
                      <FontAwesomeIcon icon={faRightFromBracket} style={{ marginLeft: '5px' }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>
        )}{' '}
        <main className={style.main}>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          Full User Name : {userNameFortmat}
          <div className="wrap">
            <section className="col-20 text-center border">
              <h1>Left</h1>
            </section>
            <section className="col-60">
              <div className="d-flex border-bottom pb-1 mb-3">
                <div className="ms-auto d-flex align-items-center">
                  <span
                    className="pointer"
                    onClick={() => {
                      SetListStyle(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                  </span>
                  <span
                    className="mx-5 pointer"
                    onClick={() => {
                      SetListStyle(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faTablet}></FontAwesomeIcon>
                  </span>
                  <a href="" style={{ fontWeight: 'bold' }}>
                    글쓰기
                  </a>
                </div>
              </div>
              {listStyle ? (
                <>
                  {data.map((data) => (
                    <div className={`${style.contents} d-flex border p-3 mb-3`} key={data.id}>
                      <Image src={data.src} alt="img" width="150px" height="150px" />
                      <div className="ms-1">
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div className="wrap">
                    {data.map((data) => (
                      <div className="col-33 mb-3" key={data.id}>
                        <div className={`${style.contents} p-3 text-center border`}>
                          <Image src={data.src} alt="img" width="150px" height="150px" />
                          <div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </section>
            <section className="col-20 text-center border">
              <h1>Right</h1>
            </section>
          </div>
        </main>
      </div>
      <footer className={`${style.footer} border-top`}>footer </footer>{' '}
    </>
  );
};

export default Home;
