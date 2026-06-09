import { useNavigate } from "react-router-dom";
import { Images } from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import { StatusBar } from "../components/StatusBar";
import { CreateProjectStepper } from "../components/CreateProjectStepper";
import { PortfolioComposerToolbar } from "../components/PortfolioComposerToolbar";
import { UploadBlock } from "../components/UploadBlock";
import { usePostDraft } from "../stores/postDraftStore";

const MAX_CAPTION = 200;

export function PostProjectEditorCover() {
  const navigate = useNavigate();
  const { draft, setDraft } = usePostDraft();

  const coverUrl = draft.coverUrl;
  const caption = draft.caption;

  function validate() {
    if (!coverUrl) return "Please upload at least 1 image before continuing.";
    return null;
  }

  return (
    <div className="bg-[#fffeff] min-h-screen">
      <div className="sticky top-0 z-20 bg-[#fffeff]">
        <StatusBar />
        <PageHeader
          title="Add Your Project"
          onBack={() => navigate("/post/project-editor/process")}
        />
        <CreateProjectStepper currentStep={3} />
      </div>

      <div className="pb-[140px]">
        <div className="flex flex-col pt-2">

          <h2 className="px-4 mb-4 font-display font-semibold text-[#2d2040] text-[22px] leading-[30px]">
            Cover page
          </h2>

          {/* Cover image upload — tall variant, full-bleed when preview */}
          {coverUrl ? (
            <UploadBlock
              icon={<Images size={32} />}
              label="Upload cover image"
              previewUrl={coverUrl}
              onUpload={(url) => setDraft({ coverUrl: url })}
              aspectRatio="1.12 / 1"
              fullBleed
            />
          ) : (
            <div className="px-4 mb-4">
              <UploadBlock
                icon={<Images size={32} />}
                label="Upload cover image"
                onUpload={(url) => setDraft({ coverUrl: url })}
                tall
              />
            </div>
          )}

          {/* Caption textarea */}
          <div className="px-4 mt-4">
            <div className="border border-[#e2d9ef] rounded-[8px] bg-[#fffeff] px-3 pt-3 pb-2">
              <textarea
                value={caption}
                onChange={(e) => setDraft({ caption: e.target.value.slice(0, MAX_CAPTION) })}
                placeholder="Add a caption"
                className="w-full resize-none bg-transparent outline-none font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px] placeholder:text-[#9d90ad] min-h-[100px]"
              />
              <p className="text-right font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px]">
                {caption.length}/{MAX_CAPTION}
              </p>
            </div>
          </div>

        </div>
      </div>

      <PortfolioComposerToolbar validate={validate} />
    </div>
  );
}

