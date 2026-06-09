import { useNavigate } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { PortfolioComposerToolbar } from "../components/PortfolioComposerToolbar";
import { usePostDraft } from "../stores/postDraftStore";

export function PostProjectCoverPreview() {
  const navigate = useNavigate();
  const { draft } = usePostDraft();

  return (
    <div className="flex flex-col h-full bg-[#fffeff]">
      <PageHeader
        title="Cover Preview"
        onBack={() => navigate("/post/project-editor/cover")}
        sticky
      />
      <div className="flex-1 overflow-y-auto">

        {/* Cover image — full-bleed */}
        {draft.coverUrl ? (
          <div className="w-full overflow-hidden">
            <img
              src={draft.coverUrl}
              alt="Cover preview"
              className="w-full object-cover"
              style={{ maxHeight: "70vh" }}
            />
          </div>
        ) : (
          <div className="w-full h-[260px] bg-[#f5f0ff] flex items-center justify-center">
            <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px]">
              No cover image yet
            </p>
          </div>
        )}

        {/* Caption */}
        {draft.caption ? (
          <div className="px-4 pt-4 pb-6">
            <p className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]">
              {draft.caption}
            </p>
          </div>
        ) : null}

      </div>
      <PortfolioComposerToolbar />
    </div>
  );
}
