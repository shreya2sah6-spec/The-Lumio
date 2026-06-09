import svgPaths from "./svg-1nrbgu9560";
import imgImage from "./846815df5564164f2f6919ab3ef355ec01c28320.png";
import imgImage1 from "./5e0b1e20482fe6dcd68080b2012e3df25f2c4384.png";
import imgImage2 from "./e87648c80aef9266af694e497ad0e2ef854d8d80.png";
import imgImage3 from "./f29fd164e841cb5399d8efa56b4e03f335a09cca.png";
import imgImage4 from "./33d7c937e764df3d97ca355ec84ff836a8263483.png";
import imgImage5 from "./39b4f5f4f1b6a5b717c7f179c9de961b3dabee6b.png";
import imgImage6 from "./d4fc02422f3bb6033260cc2dcd1f6ff1f4a77b83.png";
import imgImage7 from "./12451d3691bf068690fd93e531ef4c9fcac941b0.png";

function ProjectTitle() {
  return (
    <div className="content-stretch flex items-center justify-center py-[12px] relative shrink-0 w-full" data-name="project-title">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d2040] text-[16px] w-[358px]">
        <p className="leading-[24px]">Draped in confidence, styled in red.</p>
      </div>
    </div>
  );
}

function UploadCoverSection() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="upload-cover-section">
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function ProjectSectionOne() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="project-section-one">
      <ProjectTitle />
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <UploadCoverSection />
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function ProjectTitle1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[12px] relative shrink-0 w-full" data-name="project-title">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d2040] text-[16px] w-[358px]">
        <p className="leading-[24px]">Inspired by Mars and the Button Masala technique, this project presents no-stitch, modular garments made using buttons and rubber bands. The garments are flexible and easily adaptable to Mars’s unpredictable environment. The bold red color symbolizes the Martian surface, while the design’s sustainable principles ensure durability, zero waste, and ease of assembly. This concept blends functionality with creativity offering adaptable fashion for future explorers.</p>
      </div>
    </div>
  );
}

function UploadCoverSection1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="upload-cover-section">
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function ProjectSectionTwo() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="project-section-two">
      <div className="aspect-[390/246] relative shrink-0 w-full" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[141.46%] left-[-0.01%] max-w-none top-0 w-[100.01%]" src={imgImage4} />
        </div>
      </div>
      <ProjectTitle1 />
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <UploadCoverSection1 />
      <div className="aspect-[1280/1142] relative shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function ProjectEditor1Screen() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 max-w-[800px] min-w-[360px] top-[108px] w-[390px]" data-name="project/editor-1-screen">
      <ProjectSectionOne />
      <ProjectSectionTwo />
    </div>
  );
}

function CommentsIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="comments-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="comments-icon">
          <path d={svgPaths.p254e7f00} fill="var(--fill-0, #1A1128)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function CommentsButton() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex items-center p-[8px] relative rounded-[200px] shrink-0" data-name="comments-button">
      <div aria-hidden className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <CommentsIcon />
    </div>
  );
}

function CommentsFabArea() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[160px] pointer-events-auto pt-[32px] px-[16px] sticky top-0" data-name="comments-fab-area">
      <CommentsButton />
    </div>
  );
}

function AddImageIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add-image-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add-image-icon">
          <path d={svgPaths.p2f65cd80} fill="var(--fill-0, #1A1128)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function AddImageButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="add-image-button">
      <AddImageIcon />
    </div>
  );
}

function AddVideoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add-video-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add-video-icon">
          <path d={svgPaths.p3df30900} fill="var(--fill-0, #1A1128)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function AddVideoButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="add-video-button">
      <AddVideoIcon />
    </div>
  );
}

function AddLinkIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add-link-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add-link-icon">
          <path d={svgPaths.p2d011e00} fill="var(--fill-0, #1A1128)" id="Svg" />
        </g>
      </svg>
    </div>
  );
}

function AddLinkButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="add-link-button">
      <AddLinkIcon />
    </div>
  );
}

function VoiceInputButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="voice-input-button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mic">
        <div className="-translate-y-1/2 absolute aspect-[15/21.75] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 20">
            <path d={svgPaths.p3431f700} fill="var(--fill-0, #1A1128)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MediaActions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="media-actions">
      <AddImageButton />
      <AddVideoButton />
      <AddLinkButton />
      <VoiceInputButton />
    </div>
  );
}

function IdeasIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ideas-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ideas-icon">
          <path d={svgPaths.p35ef2900} fill="var(--fill-0, #1A1128)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function AiSuggestionsButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="ai-suggestions-button">
      <IdeasIcon />
    </div>
  );
}

function AssistantActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="assistant-actions">
      <AiSuggestionsButton />
    </div>
  );
}

function UtilityActions() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="utility-actions">
      <div className="h-[24px] relative shrink-0 w-0" data-name="toolbar-divider">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 24">
            <path d="M0.5 0V24" id="toolbar-divider" stroke="var(--stroke-0, #E2D9EF)" />
          </svg>
        </div>
      </div>
      <AssistantActions />
    </div>
  );
}

function ContinueButton() {
  return (
    <div className="bg-[#7d3aea] content-stretch flex items-center p-[8px] relative rounded-[200px] shrink-0" data-name="continue-button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-icon">
        <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00101 16.5008">
            <path d={svgPaths.pebee80} fill="var(--fill-0, white)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[360px] w-[390px]" data-name="footer-section">
      <div className="bg-[#fffeff] content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[390px]" data-name="portfolio-composer-toolbar">
        <MediaActions />
        <div className="flex flex-row items-center self-stretch">
          <UtilityActions />
        </div>
        <ContinueButton />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[46px] items-center justify-end pb-[8px] pt-[20px] px-[16px] relative shrink-0 w-[390px]" data-name="bottom-safe-area">
        <div className="bg-[#1a1128] h-[4px] relative rounded-[200px] shrink-0 w-[130px]" data-name="home-indicator" />
      </div>
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
        <p className="leading-[31px] font-[Roboto_Serif] font-bold">Preview</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]" data-name="top-bar">
      <div className="bg-[#fffeff] content-stretch flex gap-[8px] h-[44px] items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="system-status-bar">
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

export default function ProjectEditor2Preview() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="project/editor-2-preview">
      <ProjectEditor1Screen />
      <div className="absolute bottom-0 h-[3270px] pointer-events-none right-0">
        <CommentsFabArea />
      </div>
      <FooterSection />
      <TopBar />
    </div>
  );
}