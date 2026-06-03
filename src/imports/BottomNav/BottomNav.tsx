import svgPaths from "./svg-n8tcdau1ee";
import imgImage from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

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

function NavItem2() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
        <div className="absolute inset-[12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pc4f6100} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[14px] text-center w-[min-content]">
        <p className="leading-[21px]">Post</p>
      </div>
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

function Profile() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[24px] shrink-0 size-[20px]" data-name="Profile">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative rounded-[24px] shrink-0 size-[16px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="bg-[#fffeff] content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]" data-name="profile">
        <Profile />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">Profile</p>
      </div>
    </div>
  );
}

export default function BottomNav() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex gap-[12px] items-center justify-center px-[16px] py-[8px] relative size-full" data-name="bottom-nav">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}