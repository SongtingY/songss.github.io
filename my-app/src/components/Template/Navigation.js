import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../data/routes'

const Navigation = () => (
    <header className='header'>
        <h1 className='indexLink'>
            {routes.filter((l) => l.index).map((l)=>(
                <Link key={l.label} to={l.path}>{l.path}</Link>
            ))}
        </h1>
        <nav className='links'>
            <ul>
                {routes.filter((l) => !l.index).map((l)=>(
                    <li key={l.label}>
                        <Link to={l.path}>{l.path}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Navigation;