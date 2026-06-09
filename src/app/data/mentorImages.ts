/**
 * ─── Centralized Mentor Image Registry ───────────────────────────────────────
 *
 * Single source of truth for all mentor-related image imports.
 * Consumed by: MentorsPage, MentorProfilePage.
 *
 * Sections:
 *   MENTOR_AVATARS    — profile face images for the 10 named mentors
 *   WEBINAR_HOSTS     — host avatar images used in session/webinar cards
 *   MENTOR_ABOUT      — about-section editorial images per mentor
 *   MENTOR_WEBINAR    — webinar cover images per mentor
 */

// ─── Mentor profile avatars ───────────────────────────────────────────────────
import _shrutiJain   from "@/imports/mentors/shruti jain.png";
import _priyaMehta   from "@/imports/mentors/priya mehta.png";
import _raviKumar    from "@/imports/mentors/ravi kumar.png";
import _snehaPane    from "@/imports/mentors/sneha patel.png";
import _amitSharma   from "@/imports/mentors/amit sharma.png";
import _nehaVerma    from "@/imports/mentors/neha verma.png";
import _vikramSingh  from "@/imports/mentors/vikram singh.png";
import _anjaliNair   from "@/imports/mentors/anjali nair.png";
import _rajeshPatel  from "@/imports/mentors/rajesh patel.png";
import _kavitaReddy  from "@/imports/mentors/kavita reddy.png";

// ─── Webinar host avatars ─────────────────────────────────────────────────────
import _webinarHost  from "@/imports/webinar/host-avatar.png";
import _webinarHost1 from "@/imports/webinar/host-avatar-1.png";
import _webinarHost2 from "@/imports/webinar/host-avatar-2.png";

// ─── About-me editorial images per mentor ─────────────────────────────────────
import _aboutShrutiJain  from "@/imports/mentors-about-me/shruti-jain.png";
import _aboutSnehaPane   from "@/imports/mentors-about-me/sneha-patel.png";
import _aboutAnjaliNair  from "@/imports/mentors-about-me/anjali-nair.png";
import _aboutRajeshPatel from "@/imports/mentors-about-me/rajesh-patel.png";

// ─── Webinar cover images per mentor ──────────────────────────────────────────
import _webinarShrutiJain from "@/imports/mentors-webinar/shruti-jain.png";
import _webinarPriyaMehta from "@/imports/mentors-webinar/priya-mehta.png";
import _webinarRaviKumar  from "@/imports/mentors-webinar/ravi-kumar.png";
import _webinarSnehaPane  from "@/imports/mentors-webinar/sneha-patel.png";
import _webinarAmitSharma from "@/imports/mentors-webinar/amit-sharma.png";

// ─── Exports ──────────────────────────────────────────────────────────────────

/** Profile face avatars for the 10 named mentors. */
export const MENTOR_AVATARS = {
  shrutiJain:  _shrutiJain,
  priyaMehta:  _priyaMehta,
  raviKumar:   _raviKumar,
  snehaPatel:  _snehaPane,
  amitSharma:  _amitSharma,
  nehaVerma:   _nehaVerma,
  vikramSingh: _vikramSingh,
  anjaliNair:  _anjaliNair,
  rajeshPatel: _rajeshPatel,
  kavitaReddy: _kavitaReddy,
} as const;

/** Host avatars used in the webinar session cards. */
export const WEBINAR_HOSTS = {
  main:  _webinarHost,
  alt1:  _webinarHost1,
  alt2:  _webinarHost2,
} as const;

/** About-section editorial images — only for mentors with dedicated assets. */
export const MENTOR_ABOUT = {
  shrutiJain:  _aboutShrutiJain,
  snehaPatel:  _aboutSnehaPane,
  anjaliNair:  _aboutAnjaliNair,
  rajeshPatel: _aboutRajeshPatel,
} as const;

/** Webinar cover images — one per mentor that has a webinar. */
export const MENTOR_WEBINAR = {
  shrutiJain:  _webinarShrutiJain,
  priyaMehta:  _webinarPriyaMehta,
  raviKumar:   _webinarRaviKumar,
  snehaPatel:  _webinarSnehaPane,
  amitSharma:  _webinarAmitSharma,
} as const;
