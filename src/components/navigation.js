import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    },
    {
        title: 'Sign Up',
        path: '/sign-up'
    },
]

const url = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

export default function Navigation({user}) {
    const [menuActive,setMenuActive]=useState(false);
    // https://ionic.io/ionicons
    return (
        <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
            <span className="menu-title"> My Blog </span>
            <div className="menu-content-container">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>

                    ))
                    }
                </ul>
                <div className="menu-avatar-container">
                    <Avatar src={url} size={50} />
                    <span className='menu-avatar-name'> {`${user.firstName} ${user.lastName}`} </span>
                </div>
                
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={(e)=>setMenuActive(!menuActive)}/>
            
        </nav>
    );
};