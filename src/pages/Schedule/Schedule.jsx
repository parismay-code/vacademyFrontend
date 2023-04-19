import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {useLoaderData} from 'react-router-dom';
import LecturesDetails from './components/LecturesDetails';
import ExamsDetails from './components/ExamsDetails/index.jsx';
import './schedule.scss';
import cn from 'classnames';
import {AppContext} from '../../contexts/AppContext.js';

const Schedule = () => {
  const {schedule} = useLoaderData();

  const controls = useRef();

  const appContext = useContext(AppContext);

  const [activeDay, setActiveDay] = useState(null);

  const toggleModalBg = useCallback((open) => {
    if (appContext.modalBg && controls.current) {
      if (open) {
        appContext.modalBg.classList.add('modal-background_open');
        controls.current.classList.add('schedule-controls_active');
        appContext.modalBg.onclick = () => {
          toggleModalBg(false);
          setActiveDay(null);
        };
      } else {
        appContext.modalBg.classList.remove('modal-background_open');
        controls.current.classList.remove('schedule-controls_active');
        appContext.modalBg.onclick = null;
      }
    }
  }, [appContext.modalBg, controls.current]);

  const changeActiveDay = useCallback((direction) => {
    setActiveDay((prev) => {
      const workDays = schedule.map((el, key) => {
        if (el.type !== 'free') {
          return key;
        }
      }).filter((value) => typeof value === 'number');

      const id = workDays.indexOf(prev);

      const nextValue = direction === 'next' ? id + 1 : id - 1;

      if (nextValue < 0) {
        return workDays[workDays.length - 1];
      }
      if (nextValue > workDays.length - 1) {
        return workDays[0];
      }

      return workDays[nextValue];
    });
  }, []);

  useEffect(() => {
    window.onkeydown = (event) => {
      if (event.code === 'Escape') {
        toggleModalBg(false);
        setActiveDay(null);
      }
    };

    return () => window.onkeydown = null;
  }, []);

  useEffect(() => {
    if (appContext.modalBg) {
      if (activeDay !== null) {
        toggleModalBg(true);
      } else {
        toggleModalBg(false);
      }
    }

    return () => toggleModalBg(false);
  }, [appContext.modalBg, activeDay]);

  return <main className="schedule">
    <div className="container schedule__container">
      {schedule.map((el, key) => {
        if (el.type !== 'free') {
          let details;

          switch (el.type) {
            case 'exams':
              details = <ExamsDetails data={el.exams}/>;
              break;
            default:
              details = <LecturesDetails data={el.lectures}/>;
              break;
          }

          return <div
              key={key}
              className={cn('paper-block',
                  activeDay === key && 'paper-block_active')}
              onClick={() => setActiveDay(key)}
          >
            <div className="paper-block__container">
              <div
                  className="paper-block__title">{`${el.day} | ${el.date}`}</div>
              {details}
            </div>
          </div>;
        }
      })}
    </div>
    <div className="schedule-controls" ref={controls}>
      <div
          className="schedule-controls__arrow schedule-controls__arrow_left"
          onClick={() => changeActiveDay('prev')}
      >
        {`<`}
      </div>
      <div
          className="schedule-controls__arrow schedule-controls__arrow_right"
          onClick={() => changeActiveDay('next')}
      >
        {`>`}
      </div>
    </div>
  </main>;
};

export default memo(Schedule);