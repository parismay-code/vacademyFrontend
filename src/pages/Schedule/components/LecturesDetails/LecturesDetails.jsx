import {memo} from "react";
import "./lecturesDetails.scss";

const LecturesDetails = ({data}) => {
    return <div className='lectures'>
        <div className='lectures__container'>
            <h5>Дневные</h5>
            <ul className='lectures__list'>
                <li className='lectures__element lecture'>
                    <div className='lecture__title'>
                        {`${data.daytime.first.lectureId}. Название лекции - ${data.daytime.first.time}`}
                    </div>
                    <div className='lecture__teacher'>{data.daytime.first.teacher.name}</div>
                </li>
                <li className='lectures__element lecture'>
                    <div className='lecture__title'>
                        {`${data.daytime.second.lectureId}. Название лекции - ${data.daytime.second.time}`}
                    </div>
                    <div className='lecture__teacher'>{data.daytime.second.teacher.name}</div>
                </li>
            </ul>
        </div>
        <div className='lectures__container'>
            <h5>Вечерние</h5>
            <ul className='lectures__list'>
                <li className='lectures__element lecture'>
                    <div className='lecture__title'>
                        {`${data.evening.first.lectureId}. Название лекции - ${data.evening.first.time}`}
                    </div>
                    <div className='lecture__teacher'>{data.daytime.first.teacher.name}</div>
                </li>
                <li className='lectures__element lecture'>
                    <div className='lecture__title'>
                        {`${data.evening.second.lectureId}. Название лекции - ${data.evening.second.time}`}
                    </div>
                    <div className='lecture__teacher'>{data.evening.second.teacher.name}</div>
                </li>
            </ul>
        </div>
    </div>
};

export default memo(LecturesDetails);