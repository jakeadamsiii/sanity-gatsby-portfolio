import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from "../assets/images/logo.png"
import Img from 'gatsby-image';

const NavStyles = styled.nav`

.nav-container {
    display: block;
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    padding: 0 1rem;

    .logo-container {
        width: 10rem;
        height: 3.5rem;
        background-image: url(${logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .burger {
        width: 40px;
        height: 1.6rem;
        position: relative;
        margin: 0;
        box-sizing: border-box;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
        position: absolute;
        left: 1rem;

        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: var(--black);
            border-radius: 9px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
        }
    }


        .burger span:nth-child(1) {
            top: 0px;
            transform-origin: left center;
        }

        .burger span:nth-child(2) {
            top: 10px;
            transform-origin: left center;
        }

        .burger span:nth-child(3) {
            top: 20px;
            transform-origin: left center;
        }

        .burger.open span:nth-child(1) {
            transform: rotate(45deg);
            top: -3px;
            left: 8px;
        }

        .burger.open span:nth-child(2) {
            width: 0%;
            opacity: 0;
        }

        .burger.open span:nth-child(3) {
            transform: rotate(-45deg);
            top: 25px;
            left: 8px;
        }
}
  
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: fixed;
    width: 100%;
    background: var(--white);
    height: 100%;
    top: 0;
    left: -100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    transition: left 1s ease;
    z-index: 9;

    &.open {
        left: 0;
    }

    li {
        margin: 2rem;
        font-size: 1.5rem;

        &:nth-child(1) {
            display: none;
        }

        .logo {
            width: 10rem;
            height: 3.5rem;
            background-image: url(${logo});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            }
        a {
            text-decoration: none;
            color: var(--black);
        }
    }
}

  /* desktop */ 

  @media only screen and (min-width: 1024px) {

    .nav-container {
        display: none;
    }

    ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-direction: row;
    left: initial;
    transition: none;

    li {
        margin: 2rem;
        font-size: 1.5rem;

        &:nth-child(1) {
            display: block;
        }
    }

  }
}

`;


class Nav extends Component {

 constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
    };
  }
  
    render() {
        var app = this;

        function handleClick() {
            app.setState({navOpen: !app.state.navOpen});
        }

        function close() {
            app.setState({navOpen: false});
        }

        return (
            <NavStyles className="container">
        
                <div className="nav-container">
                    <div onClick={handleClick} className={this.state.navOpen ? 'burger open' : 'burger'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Link to="/" onClick={close}>
                        <Img fixed={this.props.logo.image.asset.fixed} alt={this.props.logo.alt}></Img>
                    </Link>
                </div>
        
                <ul className={this.state.navOpen ? 'open' : ''}>
                    <li>
                        <Link to="/" onClick={handleClick}>
                            <Img fixed={this.props.logo.image.asset.fixed} alt={this.props.logo.alt}></Img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/work" onClick={handleClick}>Work</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleClick}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={handleClick}>Contact</Link>
                    </li>
                </ul>
            </NavStyles>
            );
    }
  };
  
  export default Nav;