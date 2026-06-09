// routes
import { createBrowserRouter, redirect } from "react-router-dom";
// NOTE: HomeProfileCompletionPage removed — onboarding flows directly to /home/feed
import { OnboardingPage } from "./pages/OnboardingPage";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { MessagingPage } from "./pages/MessagingPage";
import { JobsPage } from "./pages/JobsPage";
import { MentorsPage } from "./pages/MentorsPage";
import { MentorProfilePage } from "./pages/MentorProfilePage";
import { MessagingChatLockedPage } from "./pages/MessagingChatLockedPage";
import { VideoCallPage } from "./pages/VideoCallPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SessionJournalPage } from "./pages/SessionJournalPage";
import { BrandProfilePage } from "./pages/BrandProfilePage";
import { DesignerProfilePage } from "./pages/DesignerProfilePage";
import { PostCreateProjectPage } from "./pages/PostCreateProjectPage";
import { PostProjectEditorAbout } from "./pages/PostProjectEditorAbout";
import { PostProjectEditorProcess } from "./pages/PostProjectEditorProcess";
import { PostProjectEditorCover } from "./pages/PostProjectEditorCover";
import { PostProjectCoverPreview } from "./pages/PostProjectCoverPreview";
import { PostProjectPreviewPage } from "./pages/PostProjectPreviewPage";
import { PostPublishPage } from "./pages/PostPublishPage";
import { PostPublishingPage } from "./pages/PostPublishingPage";
import { PostProjectDetailPage } from "./pages/PostProjectDetailPage";
import { Root, HydrateFallback } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback,
    children: [
      {
        index: true,
        loader: () => redirect("/onboarding"),
      },
      {
        path: "onboarding",
        Component: OnboardingPage,
      },
      {
        path: "auth",
        Component: AuthPage,
      },
      {
        path: "home",
        loader: () => redirect("/home/feed"),
      },
      {
        path: "home/feed",
        Component: HomePage,
      },
      {
        path: "notifications",
        Component: NotificationsPage,
      },
      {
        path: "messages",
        Component: MessagingPage,
      },
      {
        path: "jobs",
        Component: JobsPage,
      },
      {
        path: "mentors",
        Component: MentorsPage,
      },
      {
        path: "mentor-profile",
        Component: MentorProfilePage,
      },
      {
        path: "messaging/chat-locked",
        Component: MessagingChatLockedPage,
      },
      {
        path: "mentors/video-call",
        Component: VideoCallPage,
      },
      {
        path: "mentors/booking-review",
        lazy: async () => {
          const { BookingReviewPage } = await import("./pages/BookingReviewPage");
          return { Component: BookingReviewPage };
        },
      },
      {
        path: "mentors/booking-confirmed",
        lazy: async () => {
          const { BookingConfirmedPage } = await import("./pages/BookingConfirmedPage");
          return { Component: BookingConfirmedPage };
        },
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
      {
        path: "journal/summary",
        Component: SessionJournalPage,
      },
      {
        path: "booking-review",
        lazy: async () => {
          const { BookingReviewPage } =
            await import("./pages/BookingReviewPage");
          return { Component: BookingReviewPage };
        },
      },
      // ── Brand Profile ──────────────────────────────────────────────────────
      {
        path: "brand/overview",
        Component: BrandProfilePage,
      },
      // ── Designer Profile ───────────────────────────────────────────────────
      {
        path: "designer-profile",
        Component: DesignerProfilePage,
      },
      // ── Post / Create Project flow ─────────────────────────────────────────
      {
        path: "post/create-project",
        Component: PostCreateProjectPage,
      },
      {
        path: "post/project-editor/about",
        Component: PostProjectEditorAbout,
      },
      {
        path: "post/project-editor/process",
        Component: PostProjectEditorProcess,
      },
      {
        path: "post/project-editor/cover",
        Component: PostProjectEditorCover,
      },
      {
        path: "post/project-editor/cover-preview",
        Component: PostProjectCoverPreview,
      },
      {
        path: "post/project-editor/preview",
        Component: PostProjectPreviewPage,
      },
      {
        path: "post/publish",
        Component: PostPublishPage,
      },
      {
        path: "post/publishing",
        Component: PostPublishingPage,
      },
      // ── Project Detail ─────────────────────────────────────────────────────
      {
        path: "profile/project-detail-screen",
        Component: PostProjectDetailPage,
      },
      {
        path: "post/detail",
        Component: PostProjectDetailPage,
      },
    ],
  },
]);
