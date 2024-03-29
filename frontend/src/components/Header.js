import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
    const logoutHandler = () => {
        dispatch(logout())
        document.location.href = '/'
    }

    return <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">WikiEngine</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {userInfo?(
                        <LinkContainer to='/premiumArticles'>
                            <Nav.Link><i className='fas fa-newspaper'></i> Articles</Nav.Link>
                        </LinkContainer>
                        ):(
                        <LinkContainer to='/articles'>
                            <Nav.Link><i className='fas fa-newspaper'></i> Articles</Nav.Link>
                        </LinkContainer>
                        )
                    }
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                        <LinkContainer to={`/profile`}>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/createArticle'>
                            <NavDropdown.Item>Write an Article</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                        </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <LinkContainer to='/login'>
                        <Nav.Link>
                            <i className='fas fa-user'></i> Sign In
                        </Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
}

export default Header
