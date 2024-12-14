import { useNavigate } from "react-router";
import styles from "./App.module.css";
import { pageLinks } from "../../shared/lib/helpers/links.ts";

export function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pageLinks.tickets);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.card}>
        <div className={styles.panel}>
          <div className={styles.systembuttons}>
            <div className={styles.systemButton} />
            <div className={styles.systemButton} />
            <div className={styles.systemButton} />
          </div>
          <div className={styles.tabitem}>
            <div className={styles.tabitemcategory}>cv</div>
            about.js
          </div>
          <div className={styles.tabitem} onClick={handleClick}>
            <div className={styles.tabitemcategory}>ТЗ</div>
            Открыть Задание
          </div>
        </div>
        <div className={styles.cardbody}>
          <pre>
            <code>
              {/* eslint-disable */}
              <div className={styles.line}>
                <span style={{ color: '#768390' }}>&#47;&#47; some information about me</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#F47067' }}>const</span>
                <span style={{ color: '#ADBAC7' }}> </span>
                <span style={{ color: '#DCBDFB' }}>aboutMe</span>
                <span style={{ color: '#ADBAC7' }}> </span>
                <span style={{ color: '#F47067' }}>=</span>
                <span style={{ color: '#ADBAC7' }}> </span>
                <span style={{ color: '#F47067' }}>function</span>
                <span style={{ color: '#ADBAC7' }}>() &#123;</span>
              </div>
              <br />
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>  </span>
                <span style={{ color: '#F47067' }}>return</span>
                <span style={{ color: '#ADBAC7' }}> &#123;</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>   name: </span>
                <span style={{ color: '#96D0FF' }}>'Zainulabidov Uzunhair'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>   position: </span>
                <span style={{ color: '#96D0FF' }}>'fullstack-developer'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>   website: </span>
                <span style={{ color: '#96D0FF' }}>'https://v05.ru'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>   telegram: </span>
                <span style={{ color: '#96D0FF' }}>'https://t.me/uzunhair'</span>
                <span style={{ color: '#ADBAC7' }}>,</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>  &#125;</span>
              </div>
              <div className={styles.line}>
                <span style={{ color: '#ADBAC7' }}>&#125;</span>
              </div>
              {/* eslint-enable */}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
