import { SidenavItem } from '../model/sidenav-item.model';

export class SidenavItemFactory {
  public static buildSidenav(): SidenavItem[] {
    const sidenavItems: SidenavItem[] = [];
   // sidenavItems.push(new SidenavItem('add_circle', 'SSE', '/solicitacao'));
    sidenavItems.push(new SidenavItem('add_circle', 'Movimentacao', 'movimentacao'));
    sidenavItems.push(new SidenavItem('add_circle', 'Enel', 'enel'));
    sidenavItems.push(new SidenavItem('add_circle', 'IPTU', 'iptu'));
    sidenavItems.push(new SidenavItem('add_circle', 'Notas Fiscais', 'nf'));
    sidenavItems.push(new SidenavItem('add_circle', 'Guias', 'guia'));
   // sidenavItems.push(new SidenavItem('storage', 'Lista SSE', 'solicitacao/relatorio'));
    sidenavItems.push(new SidenavItem('storage', 'Relatório', 'movimentacao/relatorio'));
    // sidenavItems.push(new SidenavItem('library_books', 'Relatórios', '/relatorio/dashboard'));
    return sidenavItems;
  }
}

// add_circle_outline
