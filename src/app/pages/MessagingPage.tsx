import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  ArrowLeft,
  Plus,
  DotsThreeVertical,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { SearchBar } from "../components/SearchBar";
import imgRahul from "@/imports/MessagingInbox-3/915a716cc5b6ad4efd2b16355a601dbc5e28776c.png";
import imgPriya from "@/imports/MessagingInbox-3/424a03d1946d4f9a9f1bbebe51d8413d38f90e7e.png";
import imgNeha from "@/imports/MessagingInbox-3/0e24066874f0be293f0c1d91df85f101e8dea5b1.png";
import imgSneha from "@/imports/MessagingInbox-3/4d8c1cdcbd72c0d90f93dc409460ca3438894fda.png";
import imgChirag from "@/imports/MessagingInbox-3/e34caf60e58ca4e206248426862d5b85ef3277e7.png";
import imgKaran from "@/imports/MessagingInbox-3/080e35c814459028d879ec28439f5343daed2224.png";
import imgRahulChat from "@/imports/MessagingChat/6ca93572b5770c64f3e111e4acb75fbc9a4e48ed.png";
import imgEmpty from "@/imports/MessagingInboxBrand/eedf342cad310292a79df8bce47faa6c2b3825c1.png";

// Status bar SVG paths kept as Figma-exact UI chrome
const SIGNAL_BARS =
  "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z";
const SIGNAL_WIFI =
  "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z";
const BATTERY_OUTLINE =
  "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z";
const BATTERY_TIP =
  "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643";
const BATTERY_FILL =
  "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z";

// ─── Types ────────────────────────────────────────────────────────────────────

type InboxTab = "All" | "Brands" | "Groups" | "Requests" | "Favourite";

interface ChatMessage {
  id: string;
  type: "received" | "sent" | "divider";
  text: string;
  time?: string;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  messages: ChatMessage[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const contacts: Contact[] = [
  {
    id: "rahul",
    name: "Rahul Desai",
    avatar: imgRahul,
    lastMessage: "Hey! I saw your recent post — the floral...",
    time: "2m",
    unread: 2,
    messages: [
      { id: "1", type: "divider", text: "Today" },
      {
        id: "2",
        type: "received",
        text: "Hey! I saw your recent post — the floral fashion comeback piece was stunning.",
        time: "10:20 AM",
      },
      {
        id: "3",
        type: "sent",
        text: "Thank you so much! It took a lot of research to pull together.",
        time: "10:22 AM",
      },
      {
        id: "4",
        type: "received",
        text: "Would love to collaborate sometime. I'm working on a similar editorial for spring.",
        time: "10:23 AM",
      },
      {
        id: "5",
        type: "sent",
        text: "Absolutely! DM me your portfolio and we can set up a call.",
        time: "10:25 AM",
      },
    ],
  },
  {
    id: "priya",
    name: "Priya Sharma",
    avatar: imgPriya,
    lastMessage: "Can we reschedule our call to Thursday?",
    time: "1h",
    messages: [
      { id: "1", type: "divider", text: "Yesterday" },
      {
        id: "2",
        type: "received",
        text: "Hi! Are we still on for tomorrow's call?",
        time: "4:00 PM",
      },
      {
        id: "3",
        type: "sent",
        text: "Yes, 11am works great for me.",
        time: "4:05 PM",
      },
      { id: "4", type: "divider", text: "Today" },
      {
        id: "5",
        type: "received",
        text: "Can we reschedule our call to Thursday?",
        time: "9:40 AM",
      },
    ],
  },
  {
    id: "neha",
    name: "Neha Nair",
    avatar: imgNeha,
    lastMessage:
      "Loved the Pitti Uomo coverage! The men's footwear trends post was 🔥",
    time: "3h",
    messages: [
      { id: "1", type: "divider", text: "Today" },
      {
        id: "2",
        type: "received",
        text: "Loved the Pitti Uomo coverage! The men's footwear trends post was 🔥",
        time: "8:15 AM",
      },
      {
        id: "3",
        type: "sent",
        text: "Glad you liked it! The brogues comeback was my fave too.",
        time: "8:30 AM",
      },
    ],
  },
  {
    id: "sneha",
    name: "Sneha Gupta",
    avatar: imgSneha,
    lastMessage: "Sent you the mood board for review.",
    time: "1d",
    messages: [
      { id: "1", type: "divider", text: "Yesterday" },
      {
        id: "2",
        type: "sent",
        text: "Can you share the mood board when ready?",
        time: "2:00 PM",
      },
      {
        id: "3",
        type: "received",
        text: "Sent you the mood board for review.",
        time: "5:45 PM",
      },
    ],
  },
  {
    id: "chirag",
    name: "Chirag Patel",
    avatar: imgChirag,
    lastMessage: "The jackets editorial is going live Friday.",
    time: "2d",
    messages: [
      { id: "1", type: "divider", text: "2 days ago" },
      {
        id: "2",
        type: "received",
        text: "The jackets editorial is going live Friday. Can you review?",
        time: "11:00 AM",
      },
      {
        id: "3",
        type: "sent",
        text: "On it! Will send feedback by EOD.",
        time: "11:30 AM",
      },
    ],
  },
  {
    id: "karan",
    name: "Karan Singh",
    avatar: imgKaran,
    lastMessage: "Thanks for the intro to the Sabyasachi team!",
    time: "3d",
    messages: [
      { id: "1", type: "divider", text: "3 days ago" },
      {
        id: "2",
        type: "received",
        text: "Thanks for the intro to the Sabyasachi team! It really helped.",
        time: "6:00 PM",
      },
      {
        id: "3",
        type: "sent",
        text: "Happy to help! Good luck with the interview.",
        time: "6:10 PM",
      },
    ],
  },
];

const TABS: InboxTab[] = ["All", "Brands", "Groups", "Requests", "Favourite"];

// ─── StatusBar ────────────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div className="w-full bg-[#fffeff] flex h-[44px] items-center justify-between px-4 py-2 shrink-0">
      <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-[#1a1128] tracking-[-0.3077px]">
        9:41
      </p>
      <div className="flex gap-[2px] items-center shrink-0">
        <div className="h-[15.385px] relative w-[19.231px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 19.2308 15.3846"
          >
            <path d={SIGNAL_BARS} fill="#1A1128" />
          </svg>
        </div>
        <div className="relative size-[15.385px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.3846 15.3846"
          >
            <path d={SIGNAL_WIFI} fill="#1A1128" />
          </svg>
        </div>
        <div className="h-[15.385px] relative w-[24.038px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24.0385 15.3846"
          >
            <path
              d={BATTERY_OUTLINE}
              opacity="0.35"
              stroke="#9D94AA"
              strokeOpacity="0.4"
              strokeWidth="0.961538"
              fill="none"
            />
            <path d={BATTERY_TIP} fill="#1A1128" opacity="0.4" />
            <path d={BATTERY_FILL} fill="#1A1128" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Inbox view ───────────────────────────────────────────────────────────────

function InboxView({
  contacts,
  onOpenChat,
}: {
  contacts: Contact[];
  onOpenChat: (contact: Contact) => void;
}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<InboxTab>("All");

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="shrink-0 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
        <StatusBar />
        <div className="flex items-center gap-3 px-4 h-[52px]">
          <button
            onClick={() => navigate("/home/feed")}
            className="p-1 cursor-pointer shrink-0"
          >
            <ArrowLeft size={18} color="#1A1128" />
          </button>
          <SearchBar
            placeholder="Search messages"
            size="sm"
            dimPlaceholder
            className="flex-1"
          />
        </div>
        {/* Tabs row: "+" add-tab button + horizontally scrollable tabs */}
        <div
          className="flex items-end gap-3 px-4 pt-4 pb-2 overflow-x-auto border-b border-[#e2d9ef]"
          style={{ scrollbarWidth: "none" }}
        >
          <button className="bg-[#f7f4fa] flex items-center justify-center p-2 rounded-[8px] shrink-0 mb-2 cursor-pointer">
            <Plus size={18} color="#7D3AEA" />
          </button>
          <div className="flex gap-3 border-b border-[#E2D9EF]">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center justify-end h-[40px] px-4 whitespace-nowrap cursor-pointer font-['Manrope',sans-serif] text-[16px] leading-[25px] shrink-0 gap-0 ${
                  activeTab === tab
                    ? "font-medium text-[#1e1530]"
                    : "font-normal text-[#6b5f7a]"
                }`}
              >
                <span className="pb-[6px]">{tab}</span>
                {activeTab === tab && (
                  <div className="h-[2px] w-full bg-[#7d3aea] rounded-tl-[2px] rounded-tr-[2px]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === "All" ? (
          contacts.map((c) => {
            const lastRealMsg = [...c.messages]
              .reverse()
              .find((m) => m.type !== "divider");
            const preview = lastRealMsg
              ? lastRealMsg.type === "sent"
                ? `You: ${lastRealMsg.text}`
                : lastRealMsg.text
              : "";
            return (
              <button
                key={c.id}
                onClick={() => onOpenChat(c)}
                className="w-full flex gap-3 items-center px-4 py-4 border-b border-[#f0ecf7] cursor-pointer text-left hover:bg-[#faf8ff] transition-colors"
              >
                <img
                  src={c.avatar}
                  alt=""
                  className="size-[54px] rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0 h-[54px] flex flex-col gap-[2px] justify-center">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] truncate">
                      {c.name}
                    </p>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] shrink-0 whitespace-nowrap">
                      {c.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] truncate">
                      {preview}
                    </p>
                    {c.unread ? (
                      <div className="bg-[#7d3aea] flex flex-col items-center justify-center p-[8px] rounded-[200px] shrink-0 size-[26px]">
                        <span className="font-['Manrope',sans-serif] font-medium text-white text-[12px] leading-[18px] tracking-[0.24px]">
                          {c.unread}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </button>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center gap-6 py-16 px-8">
            <img src={imgEmpty} alt="" className="w-48 h-auto object-contain" />
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
                No messages yet
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                {activeTab === "Brands"
                  ? "Messages from brands and labels will appear here."
                  : activeTab === "Groups"
                    ? "Join or create a group to see messages here."
                    : activeTab === "Requests"
                      ? "Message requests from new connections will appear here."
                      : "Your favourite conversations will appear here."}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="h-[34px] w-full bg-[#fffeff] flex items-end justify-center pb-[8px] shrink-0">
        <div className="bg-[#1a1128] h-[5px] rounded-[200px] w-[134px]" />
      </div>
    </div>
  );
}

// ─── Chat view ────────────────────────────────────────────────────────────────

function ChatView({
  contact,
  onBack,
  onSend,
}: {
  contact: Contact;
  onBack: () => void;
  onSend: (msg: ChatMessage) => void;
}) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(contact.messages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    const newMsg: ChatMessage = {
      id: String(Date.now()),
      type: "sent",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMsg]);
    onSend(newMsg);
    setInput("");
  }

  return (
    <div className="flex flex-col" style={{ height: "100dvh" }}>
      <div className="bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)] shrink-0">
        <StatusBar />
        <div className="flex items-center gap-3 px-4 h-[60px]">
          <button
            onClick={onBack}
            className="p-1 cursor-pointer shrink-0"
          >
            <ArrowLeft size={18} color="#1A1128" />
          </button>
          <img
            src={contact.id === "rahul" ? imgRahulChat : contact.avatar}
            alt=""
            className="size-10 rounded-full object-cover shrink-0"
          />
          <p className="flex-1 font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[25px] truncate">
            {contact.name}
          </p>
          <button className="p-1 cursor-pointer shrink-0">
            <DotsThreeVertical size={20} color="#1A1128" weight="bold" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
        {messages.map((msg) => {
          if (msg.type === "divider") {
            return (
              <div key={msg.id} className="flex items-center justify-center py-1">
                <div className="bg-[#EFE9FC] px-4 py-3 rounded-[8px]">
                  <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px] leading-[21px] tracking-[0.14px] whitespace-nowrap">
                    {msg.text}
                  </span>
                </div>
              </div>
            );
          }
          return (
            <div
              key={msg.id}
              className={`flex flex-col gap-1 ${msg.type === "sent" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 ${
                  msg.type === "sent"
                    ? "bg-[#9F99E6] rounded-tl-[8px] rounded-bl-[8px] rounded-br-[8px]"
                    : "bg-[#F5F0FF] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px]"
                }`}
              >
                <p className="font-['Manrope',sans-serif] font-normal text-[14px] leading-[21px] text-[#1a1128]">
                  {msg.text}
                </p>
              </div>
              {msg.time && (
                <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px]">
                  {msg.time}
                </span>
              )}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      <div className="bg-white border-t border-[#e2d9ef] shrink-0">
        <div className="px-4 py-3 flex items-center gap-3">
          <div className="flex-1 bg-white border border-[#e2d9ef] rounded-[16px] flex items-center gap-2 px-4 h-[47px] drop-shadow-[0px_4px_1.5px_rgba(200,192,212,0.6)]">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Messages"
              className="flex-1 bg-transparent font-['Manrope',sans-serif] font-medium text-[14px] leading-[21px] text-[#1a1128] placeholder:text-[#9d90ad] outline-none tracking-[0.14px]"
            />
          </div>
          <button
            onClick={handleSend}
            className="w-[45px] h-[47px] rounded-[16px] bg-[#7d3aea] flex items-center justify-center cursor-pointer shrink-0"
          >
            <PaperPlaneTilt size={20} color="white" weight="fill" />
          </button>
        </div>
        <div className="h-[46px] flex items-end justify-center pb-[8px]">
          <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function MessagingPage() {
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [clearedUnread, setClearedUnread] = useState<Set<string>>(new Set());
  // Persists all user-sent messages per contact across chat opens
  const [sentMessagesByContact, setSentMessagesByContact] = useState<
    Record<string, ChatMessage[]>
  >({});

  function handleOpenChat(contact: Contact) {
    const original = contacts.find((c) => c.id === contact.id) ?? contact;
    // Merge persisted sent messages so they survive back-navigation and reopen
    const sentMessages = sentMessagesByContact[original.id] ?? [];
    const merged: Contact = sentMessages.length
      ? { ...original, messages: [...original.messages, ...sentMessages] }
      : original;
    if (contact.unread) {
      setClearedUnread((prev) => new Set([...prev, contact.id]));
    }
    setActiveContact(merged);
  }

  function handleSentMessage(contactId: string, msg: ChatMessage) {
    setSentMessagesByContact((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] ?? []), msg],
    }));
  }

  // contactsWithState: for inbox preview, append the last sent message so
  // InboxView's existing "You: …" logic picks it up automatically
  const contactsWithState = contacts.map((c) => {
    let contact: Contact = clearedUnread.has(c.id) ? { ...c, unread: undefined } : c;
    const sent = sentMessagesByContact[c.id];
    if (sent && sent.length > 0) {
      const last = sent[sent.length - 1];
      contact = {
        ...contact,
        messages: [
          ...contact.messages,
          { id: `__preview_${c.id}`, type: "sent" as const, text: last.text },
        ],
      };
    }
    return contact;
  });

  return (
    <div className="h-screen bg-[#f0ecf7] flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col h-full overflow-hidden">
        {activeContact ? (
          <ChatView
            contact={activeContact}
            onBack={() => setActiveContact(null)}
            onSend={(msg) => handleSentMessage(activeContact.id, msg)}
          />
        ) : (
          <InboxView contacts={contactsWithState} onOpenChat={handleOpenChat} />
        )}
      </div>
    </div>
  );
}
