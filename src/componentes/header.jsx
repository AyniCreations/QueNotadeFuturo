/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import encabezadoImg from '../assets/img/encabezado1.jpg';
import logoImg from '../assets/img/logo que nota de futuro.png';

const styles = {
  color: 'rgb(252, 182, 5)',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: 'bold',
};

export function Header() {
  return (
    <header className='container-lg header-section'>
      <div className='row align-items-center header-container'>
        <div className='row banner col-lg-12 col-md-6'>
          <img
            className='img-responsive'
            src={encabezadoImg}
            alt='Banner instrumentos'
            style={{ height: 'auto' }}
          />
        </div>
        <div className='col-12 col-lg-2 logo-container'>
          <img
            className='logo-container__site-logo'
            src={logoImg}
            alt='Logo Que nota de futuro'
          />
        </div>
        <div className='col-12 col-lg-8 site-title'>
          <h1>¡QUE NOTA DE FUTURO!</h1>
        </div>
        <div className='col-12 col-lg-2 contadorVisitas'>
          <a
            /*href="https://www.contadorvisitasgratis.com"*/ title='contador para pagina web'
          >
            <img
              src='https://counter10.stat.ovh/private/contadorvisitasgratis.php?c=wk3cbxq7ha8rur949agkaqtkh5ww5bbw'
              border='0'
              title='contador para pagina web'
              alt='contador para pagina web'
            />
          </a>
        </div>
        <div>
          <h3>Humanidad hacia otros</h3>
        </div>

        <div className='row col-12 col-lg-12'>
          <nav className='nav-list'>
            <ul className='site-nav' style={{ listStyle: 'none' }}>
              {' '}
              <li>
                <Link to='/' style={styles}>
                  INGRESAR
                </Link>
              </li>
              <li className='nav-menu-item'>
                <a href='#services' style={styles}>
                  SERVICIOS
                </a>
              </li>
              <li className='nav-menu-item'>
                <a href='#news' style={styles}>
                  NOTICIAS
                </a>
              </li>
              <li className='nav-menu-item'>
                <a href='#team' style={styles}>
                  EQUIPO UBUNTU
                </a>
              </li>
              <li className='nav-menu-item'>
                <a href='#contact' style={styles}>
                  CONTACTO
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
