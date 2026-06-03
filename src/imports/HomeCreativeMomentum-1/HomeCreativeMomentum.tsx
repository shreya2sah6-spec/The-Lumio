import svgPaths from "./svg-7imwi9ik2l";
import imgCreativeCard01 from "./face000ede768d26b40001cc4c84e82e51041d2f.png";

function ProgressFill() {
  return (
    <div
      className="-translate-y-1/2 absolute h-[4px] left-0 right-[42.31%] rounded-[200px] top-1/2"
      data-name="progress-fill"
    >
      <div
        className="absolute bg-[#7d3aea] h-[4px] left-0 right-[0.35%] rounded-[200px] top-0"
        data-name="inner-line"
      />
    </div>
  );
}

function StoryProgress() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
      data-name="story-progress"
    >
      <div
        className="flex-[1_0_0] h-[4px] min-w-px overflow-clip relative rounded-[200px]"
        data-name="progress-segment"
      >
        <div
          className="-translate-y-1/2 absolute bg-white border-[#e2d9ef] border-[0.2px] border-solid h-[4px] left-0 right-0 rounded-[200px] top-1/2"
          data-name="progress-track"
        />
        <ProgressFill />
      </div>
      <div
        className="bg-white flex-[1_0_0] h-[4px] min-w-px overflow-clip relative rounded-[200px]"
        data-name="progress-segment"
      >
        <div
          className="absolute bg-white border-[#e2d9ef] border-[0.2px] border-solid h-[4px] left-0 right-0 rounded-[200px] top-0"
          data-name="progress-track"
        />
      </div>
      <div
        className="bg-white flex-[1_0_0] h-[4px] min-w-px overflow-clip relative rounded-[200px]"
        data-name="progress-segment"
      >
        <div
          className="absolute bg-white border-[#e2d9ef] border-[0.2px] border-solid h-[4px] left-0 right-0 rounded-[200px] top-0"
          data-name="progress-track"
        />
      </div>
      <div
        className="bg-white flex-[1_0_0] h-[4px] min-w-px overflow-clip relative rounded-[200px]"
        data-name="progress-segment"
      >
        <div
          className="absolute bg-white border-[#e2d9ef] border-[0.2px] border-solid h-[4px] left-0 right-0 rounded-[200px] top-0"
          data-name="progress-track"
        />
      </div>
      <div
        className="bg-white flex-[1_0_0] h-[4px] min-w-px overflow-clip relative rounded-[200px]"
        data-name="progress-segment"
      >
        <div
          className="absolute bg-white border-[#e2d9ef] border-[0.2px] border-solid h-[4px] left-0 right-0 rounded-[200px] top-0"
          data-name="progress-track"
        />
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <div
      className="backdrop-blur-[2px] bg-white content-stretch flex items-center p-[8px] relative rounded-[200px] shrink-0"
      data-name="back-button"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[200px]"
      />
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="chevron-icon"
      >
        <div
          className="absolute inset-[15.62%_34.37%_15.62%_28.12%]"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 9.00101 16.5008"
          >
            <path
              d={svgPaths.p3289c580}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="eye">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="eye">
          <path d={svgPaths.p1e1a2a80} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function Views() {
  return (
    <div
      className="bg-[rgba(26,26,26,0.6)] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0"
      data-name="views"
    >
      <Eye />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2.5k</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="action"
    >
      <BackButton />
      <Views />
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-1/2 max-w-[800px] px-[16px] py-[24px] top-0 w-[390px]"
      data-name="top-bar"
    >
      <StoryProgress />
      <Action />
    </div>
  );
}

function Content() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start justify-end leading-[0] relative shrink-0 text-center text-white w-full"
      data-name="content"
    >
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[28px]">Florals return in bold new ways</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[21px]">
          Runways from New York to Paris are embracing expressive florals again
          from sculpted petals to soft botanical prints. The trend signals a
          shift toward more emotional, feel-good fashion storytelling.
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-white content-stretch flex items-center p-[8px] relative rounded-[200px] shrink-0"
      data-name="button"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="share-button"
      >
        <div
          className="absolute inset-[9.38%_6.25%_18.75%_6.25%]"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20.9996 17.2504"
          >
            <path
              d={svgPaths.p1adc0700}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomOverlay() {
  return (
    <div
      className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[32px] items-center justify-end left-1/2 max-w-[800px] px-[16px] py-[32px] w-[390px]"
      data-name="bottom-overlay"
    >
      <Content />
      <Button />
    </div>
  );
}

function HomeCreativeMomentumScreenContent() {
  return (
    <div
      className="absolute h-[754px] left-0 top-[44px] w-[390px]"
      data-name="home/creative-momentum-screen-content"
    >
      <div
        className="-translate-y-1/2 absolute aspect-[1560/3028] left-0 right-0 top-[calc(50%-0.5px)]"
        data-name="creative-card-01"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgCreativeCard01}
        />
      </div>
      <TopBar />
      <BottomOverlay />
    </div>
  );
}

function IOsIconSmallMobileSignal() {
  return (
    <div
      className="h-[15.385px] relative shrink-0 w-[19.231px]"
      data-name="iOS / icon / small / Mobile Signal"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19.2308 15.3846"
      >
        <g id="iOS / icon / small / Mobile Signal">
          <path
            d={svgPaths.p34f07b00}
            fill="var(--fill-0, #1A1128)"
            id="Time"
          />
        </g>
      </svg>
    </div>
  );
}

function NetworkIcons() {
  return (
    <div className="relative shrink-0 size-[15.385px]" data-name="NetworkIcons">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.3846 15.3846"
      >
        <g id="NetworkIcons">
          <path
            d={svgPaths.p19e22200}
            fill="var(--fill-0, #1A1128)"
            id="icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div
      className="h-[15.385px] relative shrink-0 w-[24.038px]"
      data-name="Battery"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24.0385 15.3846"
      >
        <g id="Battery">
          <path
            d={svgPaths.p19d3a300}
            id="outline border"
            opacity="0.35"
            stroke="var(--stroke-0, #9D94AA)"
            strokeOpacity="0.4"
            strokeWidth="0.961538"
          />
          <path
            d={svgPaths.p2a856600}
            fill="var(--fill-0, #1A1128)"
            id="node"
            opacity="0.4"
          />
          <path
            d={svgPaths.p3ec88600}
            fill="var(--fill-0, #1A1128)"
            id="charge"
          />
        </g>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center relative shrink-0"
      data-name="indicators"
    >
      <IOsIconSmallMobileSignal />
      <NetworkIcons />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex h-[44px] items-center justify-between left-1/2 overflow-clip px-[16px] py-[8px] top-0 w-[390px]"
      data-name="status-bar"
    >
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20.192px] min-w-px relative text-[#1a1128] text-[14.423px] tracking-[-0.3077px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        9:41
      </p>
      <Indicators />
    </div>
  );
}

function BottomSafeArea() {
  return (
    <div
      className="absolute bg-white bottom-0 h-[46px] left-0 right-0"
      data-name="bottom-safe-area"
    >
      <div
        className="-translate-x-1/2 absolute bg-[#1a1128] bottom-[7.69px] h-[4.808px] left-1/2 rounded-[200px] w-[128.846px]"
        data-name="home-indicator"
      />
    </div>
  );
}

export default function HomeCreativeMomentum() {
  return (
    <div
      className="bg-[#fffeff] relative size-full"
      data-name="home/creative-momentum"
    >
      <HomeCreativeMomentumScreenContent />
      <StatusBar />
      <BottomSafeArea />
    </div>
  );
}
