/**
 * ─── Centralized Review Identity Registry ────────────────────────────────────
 *
 * RULE: One face = one person. Every review across the entire app must consume
 * identities from this file only. The same identity can appear on multiple
 * screens (natural distribution), but NEVER more than once on the same screen.
 *
 * Avatar images are stored locally in src/imports/review-users/ so they are
 * bundled at build time and never hot-linked at runtime.
 */

// ─── Local avatar imports ─────────────────────────────────────────────────────

import f01 from "@/imports/review-users/f01.jpg";
import f02 from "@/imports/review-users/f02.jpg";
import f03 from "@/imports/review-users/f03.jpg";
import f04 from "@/imports/review-users/f04.jpg";
import f05 from "@/imports/review-users/f05.jpg";
import f06 from "@/imports/review-users/f06.jpg";
import f07 from "@/imports/review-users/f07.jpg";
import f08 from "@/imports/review-users/f08.jpg";
import f09 from "@/imports/review-users/f09.jpg";
import f10 from "@/imports/review-users/f10.jpg";
import f11 from "@/imports/review-users/f11.jpg";
import f12 from "@/imports/review-users/f12.jpg";

import m01 from "@/imports/review-users/m01.jpg";
import m02 from "@/imports/review-users/m02.jpg";
import m03 from "@/imports/review-users/m03.jpg";
import m04 from "@/imports/review-users/m04.jpg";
import m05 from "@/imports/review-users/m05.jpg";
import m06 from "@/imports/review-users/m06.jpg";
import m07 from "@/imports/review-users/m07.jpg";
import m08 from "@/imports/review-users/m08.jpg";
import m09 from "@/imports/review-users/m09.jpg";
import m10 from "@/imports/review-users/m10.jpg";
import m11 from "@/imports/review-users/m11.jpg";
import m12 from "@/imports/review-users/m12.jpg";

// ─── Anonymous avatar ─────────────────────────────────────────────────────────

export const ANON_AVATAR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23E2D9EF'/%3E%3Ccircle cx='100' cy='78' r='34' fill='%23B090EF'/%3E%3Cellipse cx='100' cy='170' rx='54' ry='42' fill='%23B090EF'/%3E%3C/svg%3E";

// ─── Identity type ────────────────────────────────────────────────────────────

export interface ReviewIdentity {
  id: string;
  avatar: string;
  name: string;
  role: string;
}

// ─── Identity registry — 24 unique people ────────────────────────────────────
// Naming convention: F = female-presenting, M = male-presenting

export const R: Record<string, ReviewIdentity> = {
  // ── Female identities ──────────────────────────────────────────────────────
  F01: { id: "F01", avatar: f01, name: "Neha Agarwal",    role: "Fashion Design Student"      },
  F02: { id: "F02", avatar: f02, name: "Simran Kaur",     role: "Design Intern"               },
  F03: { id: "F03", avatar: f03, name: "Tanya Arora",     role: "Textile Design Student"      },
  F04: { id: "F04", avatar: f04, name: "Ritika Bose",     role: "Design Intern"               },
  F05: { id: "F05", avatar: f05, name: "Gayatri Naidu",   role: "Fashion Graduate"            },
  F06: { id: "F06", avatar: f06, name: "Muskaan Bedi",    role: "Textile Design Student"      },
  F07: { id: "F07", avatar: f07, name: "Lavanya Krishnan", role: "Design Intern"              },
  F08: { id: "F08", avatar: f08, name: "Preeti Sood",     role: "Fashion Design Student"      },
  F09: { id: "F09", avatar: f09, name: "Isha Fernandes",  role: "Sr. Fashion Designer @ MAX"  },
  F10: { id: "F10", avatar: f10, name: "Nikita Das",      role: "Fashion Consultant"          },
  F11: { id: "F11", avatar: f11, name: "Pallavi Sen",     role: "Creative Director"           },
  F12: { id: "F12", avatar: f12, name: "Bhavna Puri",     role: "Senior Stylist"              },

  // ── Male identities ────────────────────────────────────────────────────────
  M01: { id: "M01", avatar: m01, name: "Varun Shetty",       role: "Jr. Fashion Designer"    },
  M02: { id: "M02", avatar: m02, name: "Krish Malviya",      role: "Fashion Graduate"        },
  M03: { id: "M03", avatar: m03, name: "Harsh Vardhan",      role: "Associate Designer"      },
  M04: { id: "M04", avatar: m04, name: "Mohit Saxena",       role: "Jr. Designer"            },
  M05: { id: "M05", avatar: m05, name: "Tarun Khanna",       role: "Fashion Graduate"        },
  M06: { id: "M06", avatar: m06, name: "Tejas Pawar",        role: "Associate Designer"      },
  M07: { id: "M07", avatar: m07, name: "Amarjeet Gill",      role: "Jr. Designer"            },
  M08: { id: "M08", avatar: m08, name: "Lakshay Oberoi",     role: "Fashion Graduate"        },
  M09: { id: "M09", avatar: m09, name: "Akash Tripathi",     role: "Lead Designer @ Myntra"  },
  M10: { id: "M10", avatar: m10, name: "Sameer Chauhan",     role: "Head of Design"          },
  M11: { id: "M11", avatar: m11, name: "Atharv Mishra",      role: "Fashion Educator"        },
  M12: { id: "M12", avatar: m12, name: "Dhruv Kulshreshtha", role: "Fashion Graduate"        },
};

/**
 * Helper: build a ReviewEntry (avatar + name + role) from a registry ID.
 * Spread the result into your review object alongside rating/title/text.
 *
 * @example
 *   { ...rv("F01"), rating: 5, title: "…", text: "…" }
 */
export function rv(id: string): { avatar: string; name: string; role: string } {
  const identity = R[id];
  if (!identity) throw new Error(`Unknown review identity: ${id}`);
  return { avatar: identity.avatar, name: identity.name, role: identity.role };
}

/**
 * Anonymous review helper — always maps to the same silhouette avatar.
 */
export function rvAnon(): { avatar: string; name: string; role: string } {
  return { avatar: ANON_AVATAR, name: "Anonymous", role: "" };
}
