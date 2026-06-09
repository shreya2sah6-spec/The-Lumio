import svgPaths from "./svg-7l3jmegb1v";
import imgTemplateThumbnailWomenswear from "./2bbff255be2068af496d248303b6d6456d304285.png";
import imgTemplateThumbnailMenswear from "./2938191fef7ba1f8cd30dd88e1ce83bcae14ace0.png";
import imgTemplateThumbnailKidswear from "./8bc592fcf537c99cceb8a79bfe547cb9604d0814.png";
import imgTemplateThumbnailTextileDesign from "./a516701212bbe3d9f7817caded83c100aa5f72bc.png";
import imgTemplateThumbnailSurfaceDesign from "./6c4b255e9717aa20b2ecd0a59c9fd1cf844ac8de.png";
import imgTemplateThumbnailAccessoriesDesign from "./c7c1596aa09222415cd6d1ce725a79fd2802b929.png";
import imgTemplateThumbnailStyling from "./ceab631608136cc43ffa7e0a678b7552d7c8501e.png";
import imgTemplateThumbnailFashionIllustration from "./19f84c193dfcdc1950cfee73a8bab2f70c681b0a.png";
import imgTemplateThumbnailBranding from "./eb3548525bbbce4f67fcdff06d06a5a17db1cc0c.png";
import imgImage from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

function Pencil() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pencil">
          <path d={svgPaths.p125c880} fill="var(--fill-0, #6B5F7A)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function CustomTemplateCard() {
  return (
    <div className="aspect-[173/130] bg-white justify-self-stretch relative rounded-[8px] shrink-0" data-name="custom-template-card">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[16px] py-[20px] relative size-full">
          <Pencil />
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[21px]">Start from scratch</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TemplateContent() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px] font-[Manrope]">Womenswear</p>
      </div>
    </div>
  );
}

function WomenswearTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] self-start shrink-0" data-name="womenswear-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-womenswear">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailWomenswear} />
      </div>
      <TemplateContent />
    </div>
  );
}

function TemplateContent1() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">Menswear</p>
      </div>
    </div>
  );
}

function MenswearTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="menswear-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-menswear">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailMenswear} />
      </div>
      <TemplateContent1 />
    </div>
  );
}

function TemplateContent2() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">Kidswear</p>
      </div>
    </div>
  );
}

function KidswearTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="kidswear-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-kidswear">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailKidswear} />
      </div>
      <TemplateContent2 />
    </div>
  );
}

function TemplateContent3() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[21px]">Textile Design</p>
      </div>
    </div>
  );
}

function TextileTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="textile-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-textile-design">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailTextileDesign} />
      </div>
      <TemplateContent3 />
    </div>
  );
}

function TemplateContent4() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[21px]">Surface Design</p>
      </div>
    </div>
  );
}

function SurfaceDesignTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="surface-design-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-surface-design">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailSurfaceDesign} />
      </div>
      <TemplateContent4 />
    </div>
  );
}

function TemplateContent5() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] w-[159px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-center text-white">
        <p className="leading-[21px]">Accessories Design</p>
      </div>
    </div>
  );
}

function AccessoriesTemplateCard() {
  return (
    <div className="justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-name="accessories-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-accessories-design">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailAccessoriesDesign} />
      </div>
      <TemplateContent5 />
    </div>
  );
}

function TemplateContent6() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] w-[138px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-white">
        <p className="leading-[21px]">Styling</p>
      </div>
    </div>
  );
}

function StylingTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="styling-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-styling">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgTemplateThumbnailStyling} />
      </div>
      <TemplateContent6 />
    </div>
  );
}

function TemplateContent7() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] w-[154px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-white">
        <p className="leading-[21px]">Fashion Illustration</p>
      </div>
    </div>
  );
}

function FashionIllustrationTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="fashion-illustration-template-card">
      <TemplateContent7 />
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-fashion-illustration">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTemplateThumbnailFashionIllustration} />
          <div className="absolute inset-0 rounded-[8px]" style={{ backgroundImage: "linear-gradient(1.70005deg, rgba(26, 17, 40, 0.8) 20.041%, rgba(179, 174, 169, 0) 45.203%)" }} />
        </div>
      </div>
    </div>
  );
}

function TemplateContent8() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-center left-0 px-[16px] py-[12px] w-[90px]" data-name="template-content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-white">
        <p className="leading-[21px]">Branding</p>
      </div>
    </div>
  );
}

function BrandingTemplateCard() {
  return (
    <div className="aspect-[173/130] justify-self-stretch overflow-clip relative rounded-[8px] shrink-0" data-name="branding-template-card">
      <div className="absolute h-[130px] left-0 rounded-[8px] top-0 w-[173px]" data-name="template-thumbnail-branding">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgTemplateThumbnailBranding} />
          <div className="absolute bg-gradient-to-t from-[14.615%] from-[rgba(26,26,26,0.8)] inset-0 rounded-[8px] to-[53.846%] to-[rgba(196,186,178,0)]" />
        </div>
      </div>
      <TemplateContent8 />
    </div>
  );
}

function TemplateGrid() {
  return (
    <div className="-translate-x-1/2 absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(5,fit-content(100%))] left-1/2 max-w-[800px] min-w-[360px] pb-[24px] pt-[28px] px-[16px] top-[124px] w-[390px]" data-name="template-grid">
      <CustomTemplateCard />
      <WomenswearTemplateCard />
      <MenswearTemplateCard />
      <KidswearTemplateCard />
      <TextileTemplateCard />
      <SurfaceDesignTemplateCard />
      <AccessoriesTemplateCard />
      <StylingTemplateCard />
      <FashionIllustrationTemplateCard />
      <BrandingTemplateCard />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] py-[2px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="home">
        <div className="absolute inset-[9.37%_12.5%_12.5%_12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7502">
            <path d={svgPaths.p3cb33200} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Home</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="job">
        <div className="absolute inset-[9.38%_9.38%_15.63%_9.38%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 18">
            <path d={svgPaths.p37245000} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[14px] text-center w-[min-content]">
        <p className="leading-[21px]">Jobs</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
        <div className="absolute inset-[12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p2b7142c0} fill="var(--fill-0, #1A1128)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">Post</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <Icon />
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Users">
        <div className="-translate-y-1/2 absolute aspect-[23.58763313293457/15.011270523071289] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
            <path d={svgPaths.p2af865f0} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Mentors</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="bg-[#fffeff] content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="profile">
        <div className="relative rounded-[24px] shrink-0 size-[18px]" data-name="image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
            <img alt="" className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]" src={imgImage} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Profile</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[360px] w-[390px]" data-name="bottom-nav">
      
      
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

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center leading-[0] px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center not-italic relative shrink-0 text-[#1a1128] text-[24px] w-full">
            <p className="leading-[31px] font-[Roboto_Serif] font-bold">Choose a Project Template</p>
          </div>
          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[14px] w-full">
            <p className="leading-[21px] font-[Manrope]">Start with a structure and make it your own.</p>
          </div>
        </div>
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
      <Header />
    </div>
  );
}

export default function TemplatePickerScreen() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="template-picker-screen">
      <TemplateGrid />
      <BottomNav />
      <TopBar />
    </div>
  );
}