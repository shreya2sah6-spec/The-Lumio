import svgPaths from "./svg-wbs63h72o1";

function Step() {
  return (
    <div className="bg-[#9f99e6] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[200px] shrink-0 size-[30px]" data-name="step">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] w-full">
        <p className="leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[4px] relative shrink-0" data-name="container">
      <Step />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">About</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-[100.5px]" data-name="container">
      <div className="bg-[#c9b4f6] h-[2px] relative shrink-0 w-full" data-name="connector" />
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-[#9f99e6] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[200px] shrink-0 size-[30px]" data-name="step">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] w-full">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[4px] relative shrink-0" data-name="container">
      <Step1 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">Process</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[20px] relative" data-name="container">
      <div className="bg-[#c9b4f6] h-[2px] relative shrink-0 w-full" data-name="connector" />
    </div>
  );
}

function MiddleStep() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="middle-step">
      <Container1 />
      <div className="content-stretch flex flex-col h-[63px] items-center justify-center relative shrink-0" data-name="stepper-status">
        <Container2 />
      </div>
      <Container3 />
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[200px] shrink-0 size-[30px]" data-name="step">
      <div aria-hidden className="absolute border border-[#9f99e6] border-solid inset-0 pointer-events-none rounded-[200px]" />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] w-full">
        <p className="leading-[18px]">3</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[4px] relative shrink-0" data-name="container">
      <Step2 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9d90ad] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Cover</p>
      </div>
    </div>
  );
}

function Steps() {
  return (
    <div className="relative shrink-0 w-full" data-name="steps">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="content-stretch flex flex-col h-[63px] items-center justify-center relative shrink-0" data-name="stepper-status">
            <Container />
          </div>
          <MiddleStep />
          <div className="content-stretch flex flex-col h-[63px] items-center justify-center relative shrink-0 w-[47px]" data-name="stepper-status">
            <Container4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="relative shrink-0 w-full" data-name="sub-heading">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#433059] text-[20px]">
            <p className="leading-[28px]">Cover page and caption</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadTextContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Upload cover image</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">JPEG, PNG</p>
      </div>
    </div>
  );
}

function UploadContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="upload-content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="upload-inspiration">
        <div className="absolute inset-[12.5%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p3cecbae8} fill="var(--fill-0, #7D3AEA)" id="svg" />
          </svg>
        </div>
      </div>
      <UploadTextContent />
    </div>
  );
}

function UploadDropzone() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="upload-dropzone">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <UploadContent />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9d90ad] text-[12px] text-right tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">0/200</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[90px] items-end justify-between relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] w-full">
        <p className="leading-[18px]">Add a caption</p>
      </div>
      <Frame />
    </div>
  );
}

function TextBox1() {
  return (
    <div className="bg-white h-[114px] relative rounded-[8px] shrink-0 w-full" data-name="Text_Box">
      <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function TextBox() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="text-box">
      <TextBox1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="upload-documents">
            <UploadDropzone />
          </div>
          <TextBox />
        </div>
      </div>
    </div>
  );
}

function ProjectEditor1Screen() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 max-w-[800px] min-w-[360px] top-[108px] w-[390px]" data-name="project/editor-1-screen">
      <Steps />
      <SubHeading />
      <Frame1 />
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
            <path d={svgPaths.p3431f700} fill="var(--fill-0, #6B5F7A)" id="svg" />
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
        <p className="leading-[31px] font-[Roboto_Serif] font-bold">Add you Project</p>
      </div>
    </div>
  );
}

function NavLeading() {
  return <div className="content-stretch flex gap-[12px] h-[40px] items-center justify-end relative shrink-0 w-[92px]" data-name="nav-leading" />;
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
            <NavLeading />
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
      <FooterSection />
      <TopBar />
    </div>
  );
}