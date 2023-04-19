import {memo} from "react";
import "./examsDetails.scss";

const ExamsDetails = ({data}) => {
    return <div className='exams'>
        <h5>Экзамены</h5>
        <ul className='exams__teachers'>
            {data.teachers.map((teacher, key) => {
                return <li key={key} className='exams__teacher'>
                    {`${key + 1}. ${teacher.name} | С ${teacher.from}`}
                </li>
            })}
        </ul>
    </div>
};

export default memo(ExamsDetails);