import svgPaths from "./svg-s117gt7my4";
import imgAvatar from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";
import imgAboutImage from "./76ae4b7f2a4ed92c5b6590f918eac3b778e97c34.png";
import imgPostThumbnail from "./f83af4323ed17349164f483c50d5e9e721cbbfcd.png";
import imgPostThumbnail1 from "./d2a322f16c751ceb728333861c7d0f4601574181.png";
import imgImage from "./06ad09815f36bc85c8e439ebc39c81c3608d88de.png";
import imgImage1 from "./8d8cb47d126979904b08090e24b75a94fa6cfcaf.png";
import imgAvatarImage from "./40a55e11240d1f280bd2d46727f4c3745c016d02.png";
import imgAvatarImage1 from "./e21bfbc91d761c7bd6af9e2636361814de15e5dd.png";
import imgAvatarImage2 from "./1ba86bd95c41542063481b8e7645f2f1062e44a0.png";

function Edit() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <path d={svgPaths.p2c6d4000} fill="var(--fill-0, #6B5F7A)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function EditProfileDetailsButton() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-white content-stretch flex items-center left-[43.5px] p-[8px] rounded-[24px] top-[45px]" data-name="edit-profile-details-button">
      <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Edit />
    </div>
  );
}

function AvatarSection() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="avatar-section">
      <div className="absolute left-0 pointer-events-none rounded-[48px] size-[80px] top-0" data-name="avatar">
        <div className="absolute inset-0 overflow-hidden rounded-[48px]">
          <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-4.82%] w-full" src={imgAvatar} />
        </div>
        <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-0 rounded-[48px]" />
      </div>
      <EditProfileDetailsButton />
    </div>
  );
}

function UserTextContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 text-[#433059] text-center w-full" data-name="user-text-content">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[28px]">Sanya Gupta</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px]">Jr. Fashion Designer</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.8</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a]">
        <p className="leading-[18px]">(20)</p>
      </div>
    </div>
  );
}

function MentorsReview() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="mentors-review">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Mentors</p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[18px] items-center justify-center relative shrink-0" data-name="rating-group">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
          <Container />
        </div>
        <RatingsCount />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.8</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a]">
        <p className="leading-[18px]">(20)</p>
      </div>
    </div>
  );
}

function MenteeReview() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="mentee-review">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Mentee</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="rating-group">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
          <Container1 />
        </div>
        <RatingsCount1 />
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="reviews">
      <MentorsReview />
      <MenteeReview />
    </div>
  );
}

function UserDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="user-details">
      <UserTextContent />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-center text-ellipsis tracking-[0.24px] w-[min-content] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Open to full-time roles</p>
      </div>
      <Reviews />
    </div>
  );
}

function ProfileContentWrap() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="profile-content-wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] relative size-full">
          <AvatarSection />
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

function SettingsButton() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="settings-button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="settings-button">
          <path d={svgPaths.p3b6f3900} fill="var(--fill-0, #6B5F7A)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="content-stretch flex items-start pb-[12px] pt-[16px] px-[16px] relative shrink-0 w-[390px]" data-name="profile-header">
      <ProfileContentWrap />
      <SettingsButton />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="tab-group">
      <div aria-hidden className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[12px] h-[40px] items-center justify-end max-h-[40px] pt-[12px] px-[16px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-center text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[25px] overflow-hidden text-ellipsis">Overview</p>
        </div>
        <div className="bg-[#7d3aea] h-[2px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="indicator" />
      </div>
      <div className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">Mentors review</p>
        </div>
      </div>
      <div className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">Mentee review</p>
        </div>
      </div>
      <div className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">Mentee FAQ</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="content-stretch flex items-center pt-[12px] relative shrink-0 w-[358px]" data-name="tab-list">
      <TabGroup />
    </div>
  );
}

function AboutSectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="about-section-content">
      <div className="aspect-[3340/2230] relative rounded-[8px] shrink-0 w-full" data-name="about-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgAboutImage} />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433059] text-[14px] w-full">
        <p className="leading-[21px]">{`A curious designer who think like from a business point of view work like a artist. `}</p>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[28px] relative rounded-[12px] shrink-0 w-full" data-name="about-section">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">About</p>
      </div>
      <AboutSectionContent />
    </div>
  );
}

function PostInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-info">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] w-[214px]">
          <p className="leading-[18px]">1 min</p>
        </div>
      </div>
    </div>
  );
}

function PostInfo1() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-info">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] w-[214px]">
          <p className="leading-[18px]">6 July</p>
        </div>
      </div>
    </div>
  );
}

function PostsScroll() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="posts-scroll">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="post-card">
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[12px] relative rounded-[inherit] size-full">
          <div className="h-[140px] relative shrink-0 w-[246px]" data-name="post-thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPostThumbnail} />
          </div>
          <PostInfo />
        </div>
        <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="post-card">
        <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[12px] relative rounded-[inherit] size-full">
          <div className="h-[140px] relative shrink-0 w-[246px]" data-name="post-thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPostThumbnail1} />
          </div>
          <PostInfo1 />
        </div>
        <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      </div>
    </div>
  );
}

function RecentPosts() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[20px] relative rounded-[12px] shrink-0 w-full" data-name="recent-posts">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1128] text-[20px] w-[min-content]">
        <p className="leading-[28px]">Recent project</p>
      </div>
      <PostsScroll />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="logo">
      <div className="absolute left-0 rounded-[4px] size-[30px] top-0" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-w-px relative" data-name="content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">Myntra</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">Fashion Design Intern</p>
      </div>
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="leading">
      <Logo />
      <Content />
    </div>
  );
}

function Trailing() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="trailing">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Apr 2025-July 2025</p>
      </div>
    </div>
  );
}

function DetailRow() {
  return (
    <div className="bg-[#fffeff] content-stretch flex gap-[4px] items-start py-[4px] relative shrink-0 w-full" data-name="detail-row">
      <Leading />
      <Trailing />
    </div>
  );
}

function Experience() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[20px] relative rounded-[12px] shrink-0 w-full" data-name="experience">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Experience</p>
      </div>
      <DetailRow />
    </div>
  );
}

function Logo1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="logo">
      <div className="absolute left-0 rounded-[4px] size-[30px] top-0" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[0] min-w-px relative" data-name="content">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">School of Fashion Technology</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">Bachelors of Design, Fashion Design</p>
      </div>
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="leading">
      <Logo1 />
      <Content1 />
    </div>
  );
}

function Trailing1() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="trailing">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">2022-2026</p>
      </div>
    </div>
  );
}

function DetailRow1() {
  return (
    <div className="bg-[#fffeff] content-stretch flex gap-[4px] items-start py-[12px] relative shrink-0 w-full" data-name="detail-row">
      <Leading1 />
      <Trailing1 />
    </div>
  );
}

function Education() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[20px] relative rounded-[12px] shrink-0 w-full" data-name="education">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Education</p>
      </div>
      <DetailRow1 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#c8bbda] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Pattern Making</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#c8bbda] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Fabric Knowledge</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#c8bbda] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Garment Construction</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-white content-stretch flex h-[38px] items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#c8bbda] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Fit Analysis</p>
      </div>
    </div>
  );
}

function SkillsGrid() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center py-[8px] relative shrink-0 w-full" data-name="skills-grid">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Skills() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[12px] shrink-0 w-full" data-name="skills">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Top skills</p>
      </div>
      <SkillsGrid />
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center py-[20px] relative shrink-0 w-full" data-name="skills-content">
      <Skills />
      <div className="max-h-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="primary-button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
              <p className="leading-[20px]">View More</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-icon">
              <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Svg">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5008 9.00101">
                  <path d={svgPaths.p13567b00} fill="var(--fill-0, #7D3AEA)" id="Svg" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="profile-content">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <TabList />
        <AboutSection />
        <RecentPosts />
        <Experience />
        <Education />
        <SkillsContent />
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="profile-content">
      <ProfileHeader />
      <ProfileContent1 />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="profile">
      <ProfileContent />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="avatar">
      <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[256.05%] left-[-27.09%] max-w-none top-[-7.94%] w-[170.7%]" src={imgAvatarImage} />
        </div>
        <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function DesignerInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[54px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-name="designer-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Riya Roy</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Sr. Fashion Designer @ Anamika Khanna</p>
      </div>
    </div>
  );
}

function DesignerInfoRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="designer-info-row">
      <Avatar />
      <DesignerInfo />
    </div>
  );
}

function DesignerListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[12px] relative shrink-0 w-full" data-name="designer-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <DesignerInfoRow />
      <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="designer-action">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Follow</p>
        </div>
        <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
          <div className="absolute inset-[18.75%_12.5%]" data-name="svg">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
              <path d={svgPaths.p269480} fill="var(--fill-0, #7D3AEA)" id="svg" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="avatar">
      <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[192.59%] left-[-76.1%] max-w-none top-[-19.8%] w-[240.74%]" src={imgAvatarImage1} />
        </div>
        <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function DesignerInfo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[54px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-name="designer-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Rohan Singh</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Textile Designer @ Manish Malhotra</p>
      </div>
    </div>
  );
}

function DesignerInfoRow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="designer-info-row">
      <Avatar1 />
      <DesignerInfo1 />
    </div>
  );
}

function DesignerListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[12px] relative shrink-0 w-full" data-name="designer-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <DesignerInfoRow1 />
      <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="designer-action">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Follow</p>
        </div>
        <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
          <div className="absolute inset-[18.75%_12.5%]" data-name="svg">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
              <path d={svgPaths.p269480} fill="var(--fill-0, #7D3AEA)" id="svg" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="avatar">
      <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[217.6%] left-[-97.57%] max-w-none top-[-14.93%] w-[326.41%]" src={imgAvatarImage2} />
        </div>
        <div aria-hidden className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function DesignerInfo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[54px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-name="designer-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Akshit Verma</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Fashion Designer</p>
      </div>
    </div>
  );
}

function DesignerInfoRow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="designer-info-row">
      <Avatar2 />
      <DesignerInfo2 />
    </div>
  );
}

function DesignerListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center py-[12px] relative shrink-0 w-full" data-name="designer-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <DesignerInfoRow2 />
      <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="designer-action">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Follow</p>
        </div>
        <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] overflow-clip relative shrink-0 size-[24px]" data-name="arrow-right">
          <div className="absolute inset-[18.75%_12.5%]" data-name="svg">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
              <path d={svgPaths.p269480} fill="var(--fill-0, #7D3AEA)" id="svg" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignerListItem() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="designer-list-item">
      <DesignerListItem1 />
      <DesignerListItem2 />
      <DesignerListItem3 />
    </div>
  );
}

function DesignersList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="designers-list">
      <DesignerListItem />
      <div className="max-h-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="primary-button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
              <p className="leading-[20px]">View More</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-icon">
              <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Svg">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5008 9.00101">
                  <path d={svgPaths.p13567b00} fill="var(--fill-0, #7D3AEA)" id="Svg" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuggestedDesignersSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="suggested-designers-section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[20px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
            <p className="leading-[28px]">Designers you may know</p>
          </div>
          <DesignersList />
        </div>
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 max-w-[800px] min-w-[360px] top-[44px] w-[390px]" data-name="profile-screen">
      <Profile />
      <SuggestedDesignersSection />
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mentors">
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

function Profile1() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative rounded-[24px] shrink-0 size-[20px]" data-name="Profile">
      <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="relative rounded-[24px] shrink-0 size-[16px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="bg-[#fffeff] content-stretch flex items-center p-[2px] relative shrink-0 size-[24px]" data-name="profile">
        <Profile1 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">Profile</p>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[360px] w-[390px]" data-name="bottom-nav">
      <div className="bg-white content-stretch drop-shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex gap-[12px] h-[68px] items-center justify-center px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="bottom-nav">
        <NavItem />
        <NavItem1 />
        <NavItem2 />
        <NavItem3 />
        <NavItem4 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[46px] items-center justify-end pb-[8px] pt-[20px] px-[16px] relative shrink-0 w-[390px]" data-name="bottom-safe-area">
        <div className="bg-[#1a1128] h-[4px] relative rounded-[200px] shrink-0 w-[130px]" data-name="home-indicator" />
      </div>
    </div>
  );
}

export default function ProfileOverview() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="profile/overview">
      <ProfileScreen />
      <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex gap-[8px] h-[44px] items-center left-1/2 overflow-clip px-[16px] py-[8px] top-0 w-[390px]" data-name="system-status-bar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">9:41</p>
        </div>
        <Indicators />
      </div>
      <BottomNav />
    </div>
  );
}