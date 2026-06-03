import svgPaths from "./svg-n6naebbpps";
import imgImage from "./6ca93572b5770c64f3e111e4acb75fbc9a4e48ed.png";

function DateDivider() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="date-divider">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">Mon, 03:34</p>
      </div>
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center max-w-[300px] px-[16px] py-[12px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[45px]" data-name="message-bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Hi</p>
      </div>
    </div>
  );
}

function ReceivedMessage() {
  return (
    <div className="relative shrink-0 w-full" data-name="received-message">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[12px] relative size-full">
        <MessageBubble />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#9d90ad] text-[12px] tracking-[0.24px] w-[min-content]">
          <p className="leading-[18px]">02:35 PM</p>
        </div>
      </div>
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="bg-[#9f99e6] content-stretch flex items-center justify-center max-w-[300px] px-[16px] py-[12px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[153px]" data-name="message-bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Hi, i need your help</p>
      </div>
    </div>
  );
}

function SenderMessage() {
  return (
    <div className="relative shrink-0 w-full" data-name="sender-message">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-end px-[16px] py-[12px] relative size-full">
          <MessageBubble1 />
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#9d90ad] text-[12px] text-right tracking-[0.24px] w-[min-content]">
            <p className="leading-[18px]">02:37 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble2() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center max-w-[300px] px-[16px] py-[12px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="message-bubble">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">{`I'm excited to contribute!`}</p>
      </div>
    </div>
  );
}

function ReceivedMessage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="received-message">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[12px] relative size-full">
        <MessageBubble2 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#9d90ad] text-[12px] tracking-[0.24px] w-[min-content]">
          <p className="leading-[18px]">03:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function MessagesList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="messages-list">
      <ReceivedMessage />
      <SenderMessage />
      <ReceivedMessage1 />
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center left-1/2 max-w-[800px] min-w-[360px] py-[28px] top-[116px] w-[390px]" data-name="chat-screen">
      <DateDivider />
      <MessagesList />
    </div>
  );
}

function SafeArea() {
  return (
    <div className="bg-[#fffeff] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[12px] relative" data-name="safe-area">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#9d90ad] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">Messages</p>
      </div>
    </div>
  );
}

function SendMessage() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="send-message">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="send-message">
          <path d={svgPaths.p2189ad00} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function SendButton() {
  return (
    <div className="bg-[#7d3aea] content-stretch flex h-[47px] items-center justify-center p-[8px] relative rounded-[16px] shrink-0 w-[45px]" data-name="send-button">
      <SendMessage />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_1.5px_rgba(200,192,212,0.6)] flex gap-[8px] h-[64px] items-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[358px]" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <SafeArea />
      <SendButton />
    </div>
  );
}

function MessageInputField() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="message-input-field">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function BottomSafeArea() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-[390px]" data-name="bottom-safe-area">
      <div className="-translate-x-1/2 absolute bg-[#1a1128] bottom-[7.69px] h-[4.808px] left-1/2 rounded-[200px] w-[128.846px]" data-name="home-indicator" />
    </div>
  );
}

function MessageInputFooter() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col items-start left-1/2 w-[390px]" data-name="message-input-footer">
      <MessageInputField />
      <BottomSafeArea />
    </div>
  );
}

function IOsIconSmallMobileSignal() {
  return (
    <div className="h-[15.385px] relative shrink-0 w-[19.231px]" data-name="iOS / icon / small / Mobile Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2308 15.3846">
        <g id="iOS / icon / small / Mobile Signal">
          <path d={svgPaths.p34f07b00} fill="var(--fill-0, #1A1128)" id="Time" />
        </g>
      </svg>
    </div>
  );
}

function NetworkIcons() {
  return (
    <div className="relative shrink-0 size-[15.385px]" data-name="NetworkIcons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3846 15.3846">
        <g id="NetworkIcons">
          <path d={svgPaths.p19e22200} fill="var(--fill-0, #1A1128)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[15.385px] relative shrink-0 w-[24.038px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0385 15.3846">
        <g id="Battery">
          <path d={svgPaths.p19d3a300} id="outline border" opacity="0.35" stroke="var(--stroke-0, #9D94AA)" strokeOpacity="0.4" strokeWidth="0.961538" />
          <path d={svgPaths.p2a856600} fill="var(--fill-0, #1A1128)" id="node" opacity="0.4" />
          <path d={svgPaths.p3ec88600} fill="var(--fill-0, #1A1128)" id="charge" />
        </g>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="indicators">
      <IOsIconSmallMobileSignal />
      <NetworkIcons />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-[#fffeff] content-stretch flex h-[44px] items-center justify-between overflow-clip px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="status-bar">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20.192px] min-w-px relative text-[#1a1128] text-[14.423px] tracking-[-0.3077px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <Indicators />
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

function Received() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="received">
      <div className="relative shrink-0 size-[40px]" data-name="image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgImage} width="40" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1a1128] text-[20px] text-ellipsis whitespace-nowrap">
        <p className="leading-[28px] overflow-hidden text-ellipsis">Rahul Desai</p>
      </div>
    </div>
  );
}

function NavActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="nav-actions">
      <BackButton />
      <Received />
    </div>
  );
}

function MenuButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0 size-[40px]" data-name="menu-button">
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="menu-icon">
        <div className="absolute inset-[18.75%_45.31%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.625 17.5">
            <path d={svgPaths.p37c5a400} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fffeff] relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <NavActions />
          <MenuButton />
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]" data-name="top-bar">
      <StatusBar />
      <Header />
    </div>
  );
}

export default function MessagingChat() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="messaging/chat">
      <ChatScreen />
      <MessageInputFooter />
      <TopBar />
    </div>
  );
}