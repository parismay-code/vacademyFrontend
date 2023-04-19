import {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import cn from "classnames";
import routes from "../../configs/routes.jsx";
import debounce from "../../utils/debounce.js";
import "./header.scss";

const Header = () => {
    const location = useLocation();
    const mark = useRef();
    const activeLink = useRef();
    const header = useRef();

    useEffect(() => {
        window.onscroll = (event) => {
            if (header.current.offsetTop > 80) {
                header.current.classList.add('header_hidden');
            } else {
                header.current.classList.remove('header_hidden');
            }
        }

        return () => {
            window.onscroll = null;
        }
    }, []);

    useEffect(() => {
        if (mark.current) {
            const width = activeLink.current.offsetWidth * .8;
            const left = activeLink.current.offsetLeft + (width * .15);

            mark.current.style.boxShadow = '0 5px 0 0 #f62121';
            mark.current.style.left = `${left}px`;
            mark.current.style.width = `${width}px`;

            const timeoutId = setTimeout(() => mark.current.style.boxShadow = '0 5px 3rem .5rem #f62121', 300);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [mark.current, activeLink.current]);

    return <header ref={header} className='header'>
        <div className='container'>
            <nav className='header-nav'>
                <div ref={mark} className='header-nav__mark'/>

                <ul className='horizontal-nav'>
                    {routes.map((route, key) => {
                        if (route.nav) {
                            const isActive = location.pathname === route.path;

                            return <li key={key} className='horizontal-nav__element'>
                                <Link
                                    ref={isActive ? activeLink : null}
                                    className={cn('link', isActive && 'link_active')}
                                    to={route.path}
                                    onClick={(event) => {
                                        activeLink.current = event.target;
                                    }}
                                >
                                    {route.title}
                                </Link>
                            </li>
                        }
                    })}
                </ul>
            </nav>
        </div>
    </header>
};

export default memo(Header);