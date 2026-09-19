import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Pequena variação sobre o Aurora (mesma família — sidebar/tokens idênticos, já com a correção
// do rail colapsado): aqui o Header volta a ser full-width no topo, cobrindo a sidebar também,
// que passa a começar ABAIXO dele — arranjo mais convencional que o "rail" do Aurora (onde a
// sidebar tem altura inteira e o header só cobre a coluna de conteúdo). A densidade/padding
// compacta da sidebar continua a mesma (SidebarLeftSlot/SidebarNavLink deste tema são cópias
// inalteradas do Aurora).
//
// Footer mora DENTRO da coluna de conteúdo (abaixo de ContentSlot) — o `flex` interno
// (align-items: stretch, default) estica a SidebarLeftSlot pra acompanhar a altura de
// Content+Footer somados.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <HeaderSlot {...header} />
      <div className="flex flex-1">
        <SidebarLeftSlot {...sidebarLeft} />
        <div className="flex min-w-0 flex-1 flex-col">
          <ContentSlot
            sidebarContextualEnabled={sidebarContextualEnabled}
            sidebarContextual={sidebarContextual}
            breadcrumbs={breadcrumbs}
            breadcrumbsJsonLd={breadcrumbsJsonLd}
          >
            {children}
          </ContentSlot>
          <FooterSlot {...footer} />
        </div>
      </div>
    </div>
  );
}
