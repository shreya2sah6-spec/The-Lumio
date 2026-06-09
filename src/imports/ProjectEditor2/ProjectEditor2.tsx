import svgPaths from "./svg-etc5okfwgx";

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
    <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-[100.5px]" data-name="container">
      <div className="bg-[#f5f0ff] h-[2px] relative shrink-0 w-full" data-name="connector" />
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
          <div className="content-stretch flex flex-col h-[63px] items-center justify-center relative shrink-0" data-name="stepper-status">
            <Container4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubHeading() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[390px]" data-name="sub-heading">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#433059] text-[20px]">
        <p className="leading-[28px]">Design process and research</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9d90ad] text-[12px] text-right tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">0/5000</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[90px] items-end justify-between relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] w-full">
        <p className="leading-[18px]">Describe your design process, final garment, techpack</p>
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

function UploadTextContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Upload fashion figures</p>
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="pencil-line">
        <div className="absolute inset-[9.38%_9.37%_12.5%_12.5%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7507 18.7498">
            <path d={svgPaths.p1761c00} fill="var(--fill-0, #7D3AEA)" id="svg" />
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

function UploadTextContent1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Upload iterations</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">JPEG, PNG</p>
      </div>
    </div>
  );
}

function UploadContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="upload-content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="scissors">
        <div className="absolute inset-[15.72%_6.26%_15.64%_9.37%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2486 16.4737">
            <path d={svgPaths.p19978a80} fill="var(--fill-0, #7D3AEA)" id="svg" />
          </svg>
        </div>
      </div>
      <UploadTextContent1 />
    </div>
  );
}

function UploadDropzone1() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="upload-dropzone">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <UploadContent1 />
        </div>
      </div>
    </div>
  );
}

function UploadTextContent2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Upload collection overview</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">JPEG, PNG</p>
      </div>
    </div>
  );
}

function UploadContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="upload-content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="rows">
        <div className="absolute inset-[18.75%_12.5%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
            <path d={svgPaths.p2adf7100} fill="var(--fill-0, #7D3AEA)" id="svg" />
          </svg>
        </div>
      </div>
      <UploadTextContent2 />
    </div>
  );
}

function UploadDropzone2() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="upload-dropzone">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <UploadContent2 />
        </div>
      </div>
    </div>
  );
}

function UploadTextContent3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Upload measurements</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">JPEG, PNG</p>
      </div>
    </div>
  );
}

function UploadContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="upload-content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ruler">
        <div className="absolute inset-[6.25%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0014 20.9995">
            <path d={svgPaths.p81e5700} fill="var(--fill-0, #7D3AEA)" id="svg" />
          </svg>
        </div>
      </div>
      <UploadTextContent3 />
    </div>
  );
}

function UploadDropzone3() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="upload-dropzone">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <UploadContent3 />
        </div>
      </div>
    </div>
  );
}

function UploadTextContent4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Upload garment Samples</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">JPEG, PNG</p>
      </div>
    </div>
  );
}

function UploadContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="upload-content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="t-shirt">
        <div className="absolute inset-[12.5%_0_12.5%_0.01%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9982 18">
            <path d={svgPaths.p8d4a980} fill="var(--fill-0, #7D3AEA)" id="svg" />
          </svg>
        </div>
      </div>
      <UploadTextContent4 />
    </div>
  );
}

function UploadDropzone4() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="upload-dropzone">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <UploadContent4 />
        </div>
      </div>
    </div>
  );
}

function AddButton() {
  return (
    <div className="bg-[#7d3aea] content-stretch flex items-center p-[8px] relative rounded-[200px] shrink-0" data-name="add-button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
        <div className="absolute inset-[12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pc4f6100} fill="var(--fill-0, white)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function UploadTextContent5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap" data-name="upload-text-content">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Add more</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">JPEG, PNG</p>
      </div>
    </div>
  );
}

function UploadContent5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="upload-content">
      <AddButton />
      <UploadTextContent5 />
    </div>
  );
}

function UploadDropzone5() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="upload-dropzone">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[12px] relative size-full">
          <UploadContent5 />
        </div>
      </div>
    </div>
  );
}

function AddImage() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-[358px]" data-name="add-image">
      <UploadDropzone5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <TextBox />
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-[358px]" data-name="upload-documents">
          <UploadDropzone />
        </div>
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-[358px]" data-name="upload-documents">
          <UploadDropzone1 />
        </div>
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-[358px]" data-name="upload-documents">
          <UploadDropzone2 />
        </div>
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-[358px]" data-name="upload-documents">
          <UploadDropzone3 />
        </div>
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-[358px]" data-name="upload-documents">
          <UploadDropzone4 />
        </div>
        <AddImage />
      </div>
    </div>
  );
}

function ProjectEditor1Screen() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[800px] min-w-[360px] top-[108px] w-[390px]" data-name="project/editor-1-screen">
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
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white"
      data-name="footer-section"
    >
      <div
        className="bg-[#fffeff] border-t border-[#E2D9EF] flex items-center justify-between px-4 py-3 gap-4"
        data-name="portfolio-composer-toolbar"
      >
        <MediaActions />

        <div className="flex flex-row items-center self-stretch">
          <UtilityActions />
        </div>

        <ContinueButton />
      </div>

      <div
        className="bg-white flex flex-col items-center justify-end pb-2 pt-5 px-4 h-[46px]"
        data-name="bottom-safe-area"
      >
        <div
          className="bg-[#1A1128] h-[4px] rounded-[200px] w-[130px]"
          data-name="home-indicator"
        />
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

function SecondaryAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="secondary-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="reorder">
        <div className="absolute inset-[21.88%_12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13.5">
            <path d={svgPaths.p186000} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavLeading() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="nav-leading">
      <SecondaryAction />
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
            <NavLeading />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectEditor() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="project/editor-2">
      <ProjectEditor1Screen />
      <FooterSection />
      <TopBar />
    </div>
  );
}