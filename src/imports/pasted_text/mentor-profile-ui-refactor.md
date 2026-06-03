Refine and improve this mentor profile mobile screen into a production-quality premium mentoring marketplace UI while preserving the current overall structure, visual language, and tab layout.

IMPORTANT:

* Keep the existing mobile-first structure
* Keep the existing tabs and overall flow
* Do NOT redesign the page completely
* Improve spacing, hierarchy, consistency, responsiveness, and premium feel
* Maintain React JSX + Tailwind CSS output
* Keep reusable clean components
* Preserve current color palette and design direction

PRIMARY GOAL:
The screen should feel like a polished production-ready mentoring marketplace app similar to Topmate, ADPList, Contra, or Superhuman-quality mobile UI.

---

## GLOBAL LAYOUT FIXES

* Maintain consistent 16px horizontal padding across the entire page
* Improve vertical spacing rhythm between sections
* Remove excessive empty whitespace
* Ensure all sections align perfectly to the same content grid
* Improve mobile readability and visual balance
* Preserve clean rounded card language

Page background:
#F7F4FA

Card background:
#FFFFFF

Secondary subtle surfaces:
#F5F0FF

Borders:
#E2D9EF

Primary purple:
#7D3AEA

---

## STICKY FOOTER FIXES

CRITICAL:
The sticky footer is currently overlapping content and creating broken scroll behavior.

Fix the footer system completely.

Requirements:

* Sticky footer should ONLY appear inside the Overview tab
* Footer must feel docked naturally to bottom safe area
* Content should never get hidden behind footer
* Add reserved bottom padding equal to footer height
* Footer should remain visible while scrolling
* Footer should have subtle elevation/shadow when page scrolls

Footer structure:

1. Unlock chat banner
2. Action buttons
3. Safe area indicator

Footer styling:

* Premium floating dock feel
* Smooth top shadow
* Clean spacing
* Proper safe-area support

---

## TABS FIXES

Current tab positioning feels disconnected from the page hierarchy.

Fix:

* Tabs should appear directly below mentor hero section
* Tabs should remain sticky while scrolling
* Overview content starts below tabs
* Booking section belongs INSIDE Overview tab content
* Preserve current tab styling and underline indicator
* Improve active/inactive visual hierarchy

Add:

* smooth animated tab transitions
* subtle underline animation
* improved spacing between tab labels

---

## MENTOR HERO SECTION

Improve the hero section hierarchy and spacing.

Fix:

* Reduce excessive vertical spacing
* Compress metadata spacing
* Improve alignment between:

  * profile image
  * mentor name
  * role/company
  * ratings
  * badges
  * stats
* Keep profile compact but premium

Typography:

* Mentor name:
  24px Roboto Serif semibold
* Metadata:
  14px Manrope
* Stats/meta:
  12px Manrope

Buttons:

* Follow button should feel balanced, not oversized
* Save/share icons should align perfectly with CTA height
* Improve spacing consistency

Pricing card:

* Reduce visual heaviness
* Improve hierarchy between:
  old price
  current price
  free chat label

---

## BOOKING SECTION

The booking section should feel integrated into the Overview flow rather than a separate widget.

Improve:

* spacing between date selector and time slots
* selected states
* CTA hierarchy
* interaction polish

Date selector:

* More premium selected state
* Better spacing rhythm
* Smoother scrolling

Time slots:

* Cleaner borders
* Better active state
* Improve readability

CTA button:

* Strong premium gradient
* Better shadow/elevation
* Proper spacing from slots

---

## ABOUT ME SECTION

Improve readability and editorial spacing.

Requirements:

* Better line-height
* More premium typography rhythm
* Comfortable reading width
* Consistent paragraph spacing
* Preserve elegant serif section heading

Do NOT make this section feel too dense.

---

## WEBINAR SECTION

Current webinar section feels unfinished.

Add:

* Webinar title
* Short subtitle/description
* Optional metadata row:

  * date
  * duration
  * attendees
* Optional CTA chip/button

Image:

* rounded corners
* premium crop
* maintain aspect ratio
* improve spacing below heading

---

## RECENT PROJECTS SECTION

Improve horizontal project cards.

Requirements:

* Add horizontal snap scrolling
* Improve card spacing consistency
* Reduce oversized card feeling
* Better image cropping
* Add:

  * project title
  * category/date
  * optional tag

Cards should feel premium and content-rich, not empty.

---

## EXPERIENCE & EDUCATION

IMPORTANT:
Do NOT use bulky bordered cards.

Preserve original flatter elegant row design from provided Figma snippets.

Use:

* compact rows
* subtle separators
* light duration chips
* clean inline layout

Each row should contain:

* logo
* title
* subtitle
* duration chip

Visual style:

* minimal
* clean
* elegant
* lightweight

Avoid:

* thick borders
* oversized containers
* heavy shadows

---

## TOP SKILLS SECTION

Improve skill chip layout and interactions.

Requirements:

* Better wrapping rhythm
* Consistent chip spacing
* Cleaner typography
* Softer borders

View More:

* align properly with chip grid
* improve spacing
* smooth expand/collapse animation

Expanded state should feel natural and polished.

---

## OTHER HIGHEST RATED MENTORS

Current mentor cards feel too empty.

Improve cards by adding:

* mentor image
* name
* role/company
* rating
* pricing
* top mentor badge

Fix:

* reduce whitespace
* improve density
* improve hierarchy
* maintain premium look

Cards should feel compact, polished, and informative.

---

## VISUAL CONSISTENCY

Ensure:

* consistent corner radius system
* consistent shadows
* consistent borders
* unified spacing system
* proper visual hierarchy
* balanced typography scale

Use:

* soft shadows only
* subtle gradients
* premium mobile spacing
* clean alignment

---

## INTERACTIONS & MOTION

Add subtle premium motion:

* smooth tab switching
* button press feedback
* slot selection animation
* sticky footer elevation on scroll
* smooth horizontal scrolling
* hover/active states
* animated View More expansion

Animations should feel subtle and premium, not excessive.

---

## RESPONSIVENESS

Ensure:

* perfect mobile responsiveness
* no content overlap
* proper safe-area support
* proper sticky behavior
* smooth scrolling performance

---

## FINAL OUTPUT

Generate:

* production-quality React JSX
* Tailwind CSS
* reusable clean components
* premium mobile UI patterns
* polished spacing system
* optimized hierarchy
* refined UX behavior

The final UI should feel significantly more polished, premium, modern, and product-ready while preserving the original structure and design intent.
