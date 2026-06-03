import svgPaths from "./svg-fwzo04x0sb";

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
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center max-w-[300px] px-[16px] py-[12px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[16px] shrink-0 w-[45px]" data-name="message-bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Hi</p>
      </div>
    </div>
  );
}

function ReceivedMessageRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="received-message-row">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[12px] relative size-full">
        <MessageBubble />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] w-[min-content]">
          <p className="leading-[18px]">02:35 PM</p>
        </div>
      </div>
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center max-w-[300px] px-[16px] py-[12px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] shrink-0 w-[153px]" data-name="message-bubble">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">Hi, i need your help</p>
      </div>
    </div>
  );
}

function SentMessageRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="sent-message-row">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-end px-[16px] py-[12px] relative size-full">
          <MessageBubble1 />
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-[min-content]">
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

function ReceivedMessageRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="received-message-row">
      <div className="content-stretch flex flex-col gap-[2px] items-start px-[16px] py-[12px] relative size-full">
        <MessageBubble2 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] w-[min-content]">
          <p className="leading-[18px]">03:00 PM</p>
        </div>
      </div>
    </div>
  );
}

function MessageList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="message-list">
      <ReceivedMessageRow />
      <SentMessageRow />
      <ReceivedMessageRow1 />
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] items-center left-1/2 py-[28px] top-[116px] w-[390px]" data-name="chat-screen">
      <DateDivider />
      <MessageList />
    </div>
  );
}

function InputPlaceholderWrap() {
  return (
    <div className="bg-[#fffeff] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px py-[12px] relative" data-name="input-placeholder-wrap">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#6b5f7a] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">Messages</p>
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="send-icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="send-icon">
          <path d={svgPaths.p2189ad00} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function SendButton() {
  return (
    <div className="bg-[#7d3aea] content-stretch flex h-[47px] items-center justify-center p-[8px] relative rounded-[16px] shrink-0 w-[45px]" data-name="send-button">
      <SendIcon />
    </div>
  );
}

function MessageInputRow() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_1.5px_rgba(200,192,212,0.6)] flex gap-[8px] h-[64px] items-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[358px]" data-name="message-input-row">
      <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <InputPlaceholderWrap />
      <SendButton />
    </div>
  );
}

function MessageComposer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[16px] py-[12px] top-[710px] w-[390px]" data-name="message-composer">
      <MessageInputRow />
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
        <p className="leading-[31px]">Priya Desai</p>
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

function LockIcon() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex items-center p-[12px] relative rounded-[200px] shrink-0" data-name="lock-icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="locked">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20.25">
            <path d={svgPaths.p1a875d00} fill="var(--fill-0, #7D3AEA)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ModalCopy() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-center w-full" data-name="modal-copy">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1a1128] text-[18px] w-full">
        <p className="leading-[28px]">Chat is locked</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[14px] w-full">
        <p className="leading-[21px]">Unlock to message directly</p>
      </div>
    </div>
  );
}

function ModalIconStack() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[175px]" data-name="modal-icon-stack">
      <LockIcon />
      <ModalCopy />
    </div>
  );
}

function ModalActions() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="modal-actions">
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center max-h-[48px] min-h-[48px] px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[112px]" data-name="primary-button">
        <div aria-hidden className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
          <p className="leading-[20px]">{`Close `}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r flex-[1_0_0] from-[#7d3aea] max-h-[48px] min-h-[48px] min-w-px relative rounded-[8px] to-[#5e28b5]" data-name="primary-button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
              <p className="leading-[20px]">Unlock Chat for ₹99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LockedChatModal() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch drop-shadow-[0px_4px_2px_rgba(200,192,212,0.6)] flex flex-col gap-[28px] items-center left-1/2 px-[16px] py-[20px] rounded-[12px] top-[calc(50%+0.5px)] w-[358px]" data-name="locked-chat-modal">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <ModalIconStack />
      <ModalActions />
    </div>
  );
}

export default function MessagingChatLocked() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="messaging/chat-locked">
      <ChatScreen />
      <MessageComposer />
      <div className="absolute bg-[#fffeff] content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] top-[44px] w-[390px]" data-name="header">
        <NavActions />
      </div>
      <div className="-translate-x-1/2 absolute backdrop-blur-[7.5px] bg-[rgba(26,26,26,0.2)] h-[754px] left-1/2 top-[44px] w-[390px]" data-name="blur-overlay" />
      <div className="absolute bg-[#fffeff] content-stretch flex gap-[8px] h-[44px] items-center left-0 overflow-clip px-[16px] py-[8px] top-0 w-[390px]" data-name="system-status-bar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">9:41</p>
        </div>
        <Indicators />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col h-[46px] items-center justify-end left-0 pb-[8px] pt-[20px] px-[16px] top-[798px] w-[390px]" data-name="bottom-safe-area">
        <div className="bg-[#1a1128] h-[4px] relative rounded-[200px] shrink-0 w-[130px]" data-name="home-indicator" />
      </div>
      <LockedChatModal />
    </div>
  );
}