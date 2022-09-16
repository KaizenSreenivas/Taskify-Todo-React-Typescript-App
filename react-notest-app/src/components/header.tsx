import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
    <Container >
      <Navbar.Brand className='padding-right:20px'>
        React Typescript Notes App
        </Navbar.Brand> 

    </Container>

    </Navbar>
  );
};

export default Header;
