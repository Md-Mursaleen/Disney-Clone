/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);
  const handleAuth = () => {
    if (!userName) {
      auth.signInWithPopup(provider).then((response) => {
        setUser(response.user);
      }).catch((error) => {
        console.log(error);
      });
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    );
  };
  return (
    <NavBar>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+ Logo" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="Home Icon" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="Search Icon" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="Watchlist Icon" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="Originals Icon" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="Movies Icon" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="Series Icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 36px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #090b13;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  font-size: 0;

  img {
    width: 100%;
    display: block;
  }
`;

const NavMenu = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
  height: 100%;
  margin-left: 25px;
  margin-right: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    padding: 0 12px;
    display: flex;
    align-items: center;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      position: relative;
      padding: 2px 0px;
      margin-left: 10px;
      font-size: 13px;
      color: rgb(249, 249, 249);
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;

      &:before {
        position: absolute;
        bottom: -6px;
        right: 0px;
        left: 0px;
        height: 2px;
        width: auto;
        content: "";
        background-color: rgb(249, 249, 249);
        opacity: 0;
        border-radius: 0px 0px 4px 4px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        opacity: 1 !important;
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
`;

const Login = styled.a`
  padding: 12px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }

  @media (max-width:768px){
    padding: 8px 16px;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  padding: 10px;
  top: 48px;
  right: 0px;
  width: 100px;
  background: rgb(19, 19, 19);
  font-size: 14px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  letter-spacing: 3px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
