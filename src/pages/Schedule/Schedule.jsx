import {memo} from "react";
import {useLoaderData} from "react-router-dom";
import LecturesDetails from "./components/LecturesDetails";
import ExamsDetails from "./components/ExamsDetails/index.jsx";
import "./schedule.scss";

const Schedule = () => {
    const {schedule} = useLoaderData();

    return <main className='schedule'>
        <div className='container schedule__container'>
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

                    return <div key={key} className='paper-block'>
                        <div className='paper-block__container'>
                            <div className='paper-block__title'>{`${el.day} | ${el.date}`}</div>
                            {details}
                        </div>
                    </div>
                }
            })}
        </div>
    </main>
};

export default memo(Schedule);