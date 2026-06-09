import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "@phosphor-icons/react";
import { ViewMoreButton } from "../ViewMoreButton";

export interface BrandPerson {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

const INITIAL_VISIBLE = 3;

export function PeopleTab({ people }: { people: BrandPerson[] }) {
  const navigate = useNavigate();
  const [followed, setFollowed] = useState<Set<number>>(new Set());
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const shown = people.slice(0, visible);

  function toggleFollow(id: number) {
    setFollowed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function openProfile(person: BrandPerson) {
    // Map person ID to one of the 5 designer configs (round-robin).
    // IDs are globally unique (101–1304); (id - 101) % 5 gives 0–4.
    const idx = ((person.id - 101) % 5) + 1;
    navigate("/designer-profile", {
      state: {
        designerId: `d${idx}`,
        name: person.name,
        role: person.role,
        company: person.company,
        avatar: person.avatar,
      },
    });
  }

  const initials = (name: string) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0]?.toUpperCase() ?? "")
      .join("");

  return (
    <div className="px-4 py-2">
      {shown.map((person) => {
        const isFollowed = followed.has(person.id);
        return (
          <div
            key={person.id}
            className="flex items-center gap-3 py-[14px] border-b border-[#e2d9ef]"
          >
            {/* Avatar — tappable, opens profile */}
            <button
              onClick={() => openProfile(person)}
              className="shrink-0 rounded-full cursor-pointer active:opacity-70 transition-opacity"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label={`View ${person.name}'s profile`}
            >
              {person.avatar ? (
                <img
                  src={person.avatar}
                  alt=""
                  className="w-[48px] h-[48px] rounded-full object-cover object-top border border-[#e2d9ef]"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-[48px] h-[48px] rounded-full bg-[#f5f0ff] border border-[#e2d9ef] flex items-center justify-center">
                  <span className="font-['Manrope',sans-serif] font-semibold text-[15px] text-[#7d3aea]">
                    {initials(person.name)}
                  </span>
                </div>
              )}
            </button>

            {/* Name + role — tappable, opens profile */}
            <button
              onClick={() => openProfile(person)}
              className="flex-1 min-w-0 text-left cursor-pointer active:opacity-70 transition-opacity"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <p className="font-['Manrope',sans-serif] font-semibold text-[14px] leading-[20px] text-[#1a1128] truncate">
                {person.name}
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[13px] leading-[19px] text-[#6b5f7a] truncate">
                {person.role}{person.company ? ` @ ${person.company}` : ""}
              </p>
            </button>

            {/* Follow / Followed toggle */}
            <button
              onClick={() => toggleFollow(person.id)}
              className="flex items-center gap-[4px] shrink-0"
              aria-label={isFollowed ? `Unfollow ${person.name}` : `Follow ${person.name}`}
            >
              {isFollowed ? (
                <>
                  <Check size={14} color="#7d3aea" weight="bold" />
                  <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#7d3aea]">
                    Followed
                  </span>
                </>
              ) : (
                <>
                  <span className="font-['Manrope',sans-serif] font-semibold text-[14px] text-[#7d3aea]">
                    Follow
                  </span>
                  <ArrowRight size={15} color="#7d3aea" weight="bold" />
                </>
              )}
            </button>
          </div>
        );
      })}

      {/* View More — reveals remaining people in increments of 3 */}
      {visible < people.length && (
        <ViewMoreButton onClick={() => setVisible((v) => v + 3)} />
      )}
    </div>
  );
}
