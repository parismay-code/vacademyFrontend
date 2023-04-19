import {useRouteError, Link} from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    console.log(error);

    return <main id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/'>На главную</Link>
    </main>
};

export default Error;