import { useNavigate } from "react-router-dom";
import { PencilSimple } from "@phosphor-icons/react";
import { AppLayout } from "../components/AppLayout";

import imgWomenswear        from "@/imports/TemplatePickerScreen/2bbff255be2068af496d248303b6d6456d304285.png";
import imgMenswear          from "@/imports/TemplatePickerScreen/2938191fef7ba1f8cd30dd88e1ce83bcae14ace0.png";
import imgKidswear          from "@/imports/TemplatePickerScreen/8bc592fcf537c99cceb8a79bfe547cb9604d0814.png";
import imgTextileDesign     from "@/imports/TemplatePickerScreen/a516701212bbe3d9f7817caded83c100aa5f72bc.png";
import imgSurfaceDesign     from "@/imports/TemplatePickerScreen/6c4b255e9717aa20b2ecd0a59c9fd1cf844ac8de.png";
import imgAccessoriesDesign from "@/imports/TemplatePickerScreen/c7c1596aa09222415cd6d1ce725a79fd2802b929.png";
import imgStyling           from "@/imports/TemplatePickerScreen/ceab631608136cc43ffa7e0a678b7552d7c8501e.png";
import imgFashionIllustration from "@/imports/TemplatePickerScreen/19f84c193dfcdc1950cfee73a8bab2f70c681b0a.png";
import imgBranding          from "@/imports/TemplatePickerScreen/eb3548525bbbce4f67fcdff06d06a5a17db1cc0c.png";

const IMAGE_TEMPLATES = [
  { id: "womenswear",          label: "Womenswear",           img: imgWomenswear },
  { id: "menswear",            label: "Menswear",             img: imgMenswear },
  { id: "kidswear",            label: "Kidswear",             img: imgKidswear },
  { id: "textile-design",      label: "Textile Design",       img: imgTextileDesign },
  { id: "surface-design",      label: "Surface Ornamentations", img: imgSurfaceDesign },
  { id: "accessories-design",  label: "Accessories Design",   img: imgAccessoriesDesign },
  { id: "styling",             label: "Styling",              img: imgStyling },
  { id: "fashion-illustration",label: "Fashion Illustration", img: imgFashionIllustration },
  { id: "branding",            label: "Branding",             img: imgBranding },
];

export function PostCreateProjectPage() {
  const navigate = useNavigate();

  function goToEditor(templateId: string) {
    navigate("/post/project-editor/about", { state: { template: templateId } });
  }

  return (
    <AppLayout>
      <div className="px-4 pt-4 pb-6">
          {/* Heading */}
          <h1 className="font-['Roboto_Serif',serif] font-bold text-[#1a1128] text-[26px] leading-[34px] mb-1">
            Choose a Project Template
          </h1>
          <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] mb-6">
            Start with a structure and make it your own.
          </p>

          {/* 2-column template grid */}
          <div className="grid grid-cols-2 gap-3">

            {/* Start from scratch — first cell */}
            <button
              onClick={() => goToEditor("scratch")}
              className="aspect-[173/130] bg-white rounded-[8px] border border-[#e2d9ef] flex flex-col items-center justify-center gap-3 active:opacity-70 transition-opacity"
            >
              <PencilSimple size={24} color="#6B5F7A" />
              <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                Start from scratch
              </span>
            </button>

            {/* Image-based templates */}
            {IMAGE_TEMPLATES.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => goToEditor(tpl.id)}
                className="aspect-[173/130] rounded-[8px] overflow-hidden relative active:opacity-80 transition-opacity"
              >
                <img
                  src={tpl.img}
                  alt={tpl.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5">
                  <span className="font-['Manrope',sans-serif] font-normal text-white text-[14px] leading-[21px]">
                    {tpl.label}
                  </span>
                </div>
              </button>
            ))}

          </div>
      </div>
    </AppLayout>
  );
}
