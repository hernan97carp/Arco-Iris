export interface RouterLink {
  name: string
  path: string
  title: string
}

export const routeLinks: RouterLink[] = [
  { path: '/', name: 'inicio', title: 'Inicio' },
  { path: '/sobreNosotros', name: 'sobre', title: 'Sobre Nosotros' },
  { path: '/servicios', name: 'servicios', title: 'Servicios' }
]
