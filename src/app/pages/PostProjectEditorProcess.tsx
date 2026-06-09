import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PencilSimple, Scissors, Rows, Ruler, TShirt, Images } from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import { StatusBar } from "../components/StatusBar";
import { CreateProjectStepper } from "../components/CreateProjectStepper";
import { PortfolioComposerToolbar } from "../components/PortfolioComposerToolbar";
import { UploadBlock, AddMoreBlock } from "../components/UploadBlock";
import { usePostDraft } from "../stores/postDraftStore";
import type { ReactNode } from "react";

const MAX_CHARS = 5000;

const FIXED_SLOTS: { label: string; icon: ReactNode }[] = [
  { label: "Upload fashion figures",     icon: <PencilSimple size={28} /> },
  { label: "Upload iterations",          icon: <Scissors size={28} /> },
  { label: "Upload collection overview", icon: <Rows size={28} /> },
  { label: "Upload measurements",        icon: <Ruler size={28} /> },
  { label: "Upload garment Samples",     icon: <TShirt size={28} /> },
];

export function PostProjectEditorProcess() {
  const navigate = useNavigate();
  const { draft, setDraft, setProcessImage } = usePostDraft();

  const [extraCount, setExtraCount] = useState(0);

  const totalSlots = FIXED_SLOTS.length + extraCount;

  function validate() {
    const hasImage = draft.processImages.some(Boolean);
    if (!hasImage) return "Please upload at least 1 image before continuing.";
    return null;
  }

  return (
    <div className="bg-[#fffeff] min-h-screen">
      <div className="sticky top-0 z-20 bg-[#fffeff]">
        <StatusBar />
        <PageHeader
          title="Add Your Project"
          onBack={() => navigate("/post/project-editor/about")}
        />
        <CreateProjectStepper currentStep={2} />
      </div>

      <div className="pb-[140px]">
        <div className="flex flex-col pt-2">

          <h2 className="px-4 mb-4 font-display font-semibold text-[#2d2040] text-[22px] leading-[30px]">
            Design process and research
          </h2>

          {/* Process notes textarea */}
          <div className="px-4 mb-4">
            <div className="border border-[#e2d9ef] rounded-[8px] bg-[#fffeff] px-3 pt-3 pb-2">
              <textarea
                value={draft.processText}
                onChange={(e) => setDraft({ processText: e.target.value.slice(0, MAX_CHARS) })}
                placeholder="Describe your design process, final garment, techpack"
                className="w-full resize-none bg-transparent outline-none font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px] placeholder:text-[#9d90ad] min-h-[100px]"
              />
              <p className="text-right font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px]">
                {draft.processText.length}/{MAX_CHARS}
              </p>
            </div>
          </div>

          {/* Upload slots */}
          {Array.from({ length: totalSlots }, (_, i) => {
            const slot = FIXED_SLOTS[i];
            const previewUrl = draft.processImages[i];
            const inPreview = !!previewUrl;

            return (
              <div key={i} className={inPreview ? "" : "px-4 mb-4"}>
                <UploadBlock
                  icon={slot?.icon ?? <Images size={28} />}
                  label={slot?.label ?? "Upload image"}
                  previewUrl={previewUrl}
                  onUpload={(url) => setProcessImage(i, url)}
                  fullBleed={inPreview}
                />
              </div>
            );
          })}

          <div className="px-4 mt-4">
            <AddMoreBlock onAdd={() => setExtraCount((n) => n + 1)} />
          </div>

        </div>
      </div>

      <PortfolioComposerToolbar validate={validate} />
    </div>
  );
}
