import svgPaths from "./svg-qgafcdr1f2";
import imgNewProjectCoverImage from "./12451d3691bf068690fd93e531ef4c9fcac941b0.png";

function PostCaption() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full" data-name="post-caption">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full max-w-[351px] px-4">
        <p className="leading-[25px] w-full">Draped in confidence, styled in red.</p>
      </div>
    </div>
  );
}

function IdentificationBadgeIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="identification-badge-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="identification-badge-icon">
          <path d={svgPaths.pca9d300} fill="var(--fill-0, #6B5F7A)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function CollaborationItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="collaboration-item">
      <IdentificationBadgeIcon />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">Co-created with</p>
      </div>
    </div>
  );
}

function ItemChevronAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-chevron-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ChevronIcon">
        <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00101 16.5008">
            <path d={svgPaths.pebee80} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CollaborationSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="collaboration-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <CollaborationItem />
      <ItemChevronAction />
    </div>
  );
}

function SquaresFourIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="squares-four-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="squares-four-icon">
          <path d={svgPaths.p13b60970} fill="var(--fill-0, #6B5F7A)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function DomainItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="domain-item">
      <SquaresFourIcon />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">Domain</p>
      </div>
    </div>
  );
}

function ItemChevronAction1() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-chevron-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ChevronIcon">
        <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00101 16.5008">
            <path d={svgPaths.pebee80} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DomainSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="domain-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <DomainItem />
      <ItemChevronAction1 />
    </div>
  );
}

function PenNibIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pen-nib-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pen-nib-icon">
          <path d={svgPaths.p3367de00} fill="var(--fill-0, #6B5F7A)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function ToolsItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="tools-item">
      <PenNibIcon />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">Tools Used</p>
      </div>
    </div>
  );
}

function ItemChevronAction2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-chevron-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ChevronIcon">
        <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00101 16.5008">
            <path d={svgPaths.pebee80} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ToolsSection() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="tools-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <ToolsItem />
      <ItemChevronAction2 />
    </div>
  );
}

function MetadataSections() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="metadata-sections">
      <CollaborationSection />
      <DomainSection />
      <ToolsSection />
    </div>
  );
}

function PostInformation() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-information">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <PostCaption />
        <MetadataSections />
      </div>
    </div>
  );
}

function PostContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-start left-1/2 max-w-[800px] min-w-[320px] py-[20px] top-[108px] w-full" data-name="post-content">
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="new-project-cover-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewProjectCoverImage} />
      </div>
      <PostInformation />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="action-buttons">
      
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="footer">
      <ActionButtons />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[320px] w-full" data-name="footer-section">
      <Footer />
      
    </div>
  );
}

function Time() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="time">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="time">
          <path d={svgPaths.p27eb4960} fill="var(--fill-0, #1A1128)" id="time_2" />
        </g>
      </svg>
    </div>
  );
}

function NetworkIcons() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="network-icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="network-icons">
          <path d={svgPaths.pca88280} fill="var(--fill-0, #1A1128)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="battery">
          <path d={svgPaths.p27942200} id="outline-border" opacity="0.35" stroke="var(--stroke-0, #C8BBDA)" strokeWidth="0.8" />
          <path d={svgPaths.p3909c300} fill="var(--fill-0, #1A1128)" id="node" opacity="0.4" />
          <path d={svgPaths.p2d66c280} fill="var(--fill-0, #1A1128)" id="charge" />
        </g>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="indicators">
      <Time />
      <NetworkIcons />
      <Battery />
    </div>
  );
}

function BackButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="back-button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="back-button">
        <div className="absolute inset-[18.75%_12.5%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
            <path d={svgPaths.p33185f40} fill="var(--fill-0, #1A1128)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="nav-actions">
      <BackButton />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[24px] whitespace-nowrap">
        <p className="font-['Roboto_Serif'] text-[24px] font-bold leading-[31px]">New Project</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-full max-w-[800px] min-w-[320px]" data-name="top-bar">
      <div className="bg-[#fffeff] content-stretch flex gap-[8px] h-[44px] items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-full" data-name="system-status-bar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">9:41</p>
        </div>
        <Indicators />
      </div>
      <div className="bg-[#fffeff] relative shrink-0 w-full" data-name="header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
            <NavActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PostDetails() {
  return (
    <div className="bg-[#fffeff] relative w-full min-h-screen" data-name="post/details">
      <PostContent />
      <FooterSection />
      <TopBar />
    </div>
  );
}