import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Images, Palette, Package, Bag } from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import { AppLayout } from "../components/AppLayout";
import { CreateProjectStepper } from "../components/CreateProjectStepper";
import { PortfolioComposerToolbar } from "../components/PortfolioComposerToolbar";
import { UploadBlock, AddMoreBlock } from "../components/UploadBlock";
import { usePostDraft } from "../stores/postDraftStore";
import type { ReactNode } from "react";

const MAX_CHARS = 5000;

const FIXED_SLOTS: { label: string; icon: ReactNode }[] = [
  { label: "Upload Inspiration",     icon: <Images size={28} /> },
  { label: "Upload color Story",     icon: <Palette size={28} /> },
  { label: "Upload material story",  icon: <Package size={28} /> },
  { label: "Upload styling details", icon: <Bag size={28} /> },
];

export function PostProjectEditorAbout() {
  const navigate = useNavigate();
  const { draft, setDraft, setAboutImage } = usePostDraft();

  // Extra slots (beyond the 4 fixed ones) added via "Add more"
  const [extraCount, setExtraCount] = useState(0);

  const totalSlots = FIXED_SLOTS.length + extraCount;

  function handleUpload(index: number, url: string) {
    setAboutImage(index, url);
  }

  function validate() {
    const hasImage = draft.aboutImages.some(Boolean);
    if (!hasImage) return "Please upload at least 1 image before continuing.";
    return null;
  }

  return (
    <AppLayout
      hideNav
      header={
        <>
          <PageHeader
            title="Add Your Project"
            onBack={() => navigate("/post/create-project")}
          />
          <CreateProjectStepper currentStep={1} />
        </>
      }
    >
      <div className="pb-[140px]">
        <div className="flex flex-col pt-2">

          {/* Section heading */}
          <h2 className="px-4 mb-4 font-display font-semibold text-[#2d2040] text-[22px] leading-[30px]">
            About the collection
          </h2>

          {/* Description textarea */}
          <div className="px-4 mb-4">
            <div className="border border-[#e2d9ef] rounded-[8px] bg-[#fffeff] px-3 pt-3 pb-2">
              <textarea
                value={draft.aboutText}
                onChange={(e) => setDraft({ aboutText: e.target.value.slice(0, MAX_CHARS) })}
                placeholder="Describe your collection, the concept, the story behind it..."
                className="w-full resize-none bg-transparent outline-none font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px] placeholder:text-[#9d90ad] min-h-[100px]"
              />
              <p className="text-right font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px]">
                {draft.aboutText.length}/{MAX_CHARS}
              </p>
            </div>
          </div>

          {/* Upload slots — no gap between consecutive previews */}
          {Array.from({ length: totalSlots }, (_, i) => {
            const slot = FIXED_SLOTS[i];
            const previewUrl = draft.aboutImages[i];
            const inPreview = !!previewUrl;

            return (
              <div
                key={i}
                className={inPreview ? "" : "px-4 mb-4"}
              >
                <UploadBlock
                  icon={slot?.icon ?? <Images size={28} />}
                  label={slot?.label ?? "Upload image"}
                  previewUrl={previewUrl}
                  onUpload={(url) => handleUpload(i, url)}
                  fullBleed={inPreview}
                />
              </div>
            );
          })}

          {/* Add more */}
          <div className="px-4 mt-4">
            <AddMoreBlock onAdd={() => setExtraCount((n) => n + 1)} />
          </div>

        </div>
      </div>

      <PortfolioComposerToolbar validate={validate} />
    </AppLayout>
  );
}

