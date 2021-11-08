import { render, screen } from '@testing-library/react';

import App from './App';

beforeEach(() => {
  render(<App />);
});

test('render banner', () => {
  const bannerImg = screen.getByRole('img', {
    name: /banner instrumentos/i,
  });
  const pageCounterImg = screen.getByRole('img', {
    name: /contador para pagina web/i,
  });

  const linkItems = [
    'ingresar',
    'servicios',
    'noticias',
    'equipo ubuntu',
    'contacto',
  ];

  expect(bannerImg).toBeInTheDocument();
  expect(pageCounterImg).toBeInTheDocument();

  linkItems.forEach((link) => {
    const linkItem = screen.getByRole('link', {
      name: new RegExp(link, 'i'),
    });
    expect(linkItem).toBeInTheDocument();
  });
});

test('render home sections', () => {
  const sections = ['servicios', 'noticias', 'equipo ubuntu', 'contacto'];
  sections.forEach((section) => {
    const sectionItem = screen.queryAllByRole('heading', {
      name: new RegExp(section, 'i'),
    });
    expect(sectionItem.length).toBeGreaterThan(0);
  });
});

test('render teams', () => {
  const team = [
    'ana maría giraldo',
    'gloria gutiérrez',
    'adriana gislena gil',
    'cielo rueda',
  ];
  team.forEach((member) => {
    const memberItem = screen.getAllByRole('heading', {
      name: new RegExp(member, 'i'),
    });
    expect(memberItem.length).toBeGreaterThan(0);
  });
});
