import { SidenavItem } from '../model/sidenav-item.model';

export class SidenavItemFactory {
  public static buildSidenav(): SidenavItem[] {
    const sidenavItems: SidenavItem[] = [];
   // sidenavItems.push(new SidenavItem('add_circle', 'SSE', '/solicitacao'));
    sidenavItems.push(new SidenavItem('add_circle', 'Movimentacao', 'movimentacao'));
   // sidenavItems.push(new SidenavItem('storage', 'Lista SSE', 'solicitacao/relatorio'));
    sidenavItems.push(new SidenavItem('storage', 'Lista Movimentacao', 'movimentacao/relatorio'));
    // sidenavItems.push(new SidenavItem('library_books', 'Relatórios', '/relatorio/dashboard'));
    return sidenavItems;
  }
}

// add_circle_outline
