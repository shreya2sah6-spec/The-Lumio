// routes
import { createBrowserRouter, redirect } from "react-router";
import { OnboardingPage } from "./pages/OnboardingPage";
import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { HomeProfileCompletionPage } from "./pages/HomeProfileCompletionPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { MessagingPage } from "./pages/MessagingPage";
import { JobsPage } from "./pages/JobsPage";
import { MentorsPage } from "./pages/MentorsPage";
import { MentorProfilePage } from "./pages/MentorProfilePage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import { Root, HydrateFallback } from "./Root";

function homeLoader() {
  const done = localStorage.getItem("profileComplete") === "true";
  return redirect(done ? "/home/feed" : "/home/profile-completion");
}

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
        loader: homeLoader,
      },
      {
        path: "home/profile-completion",
        Component: HomeProfileCompletionPage,
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
        path: "profile",
        Component: ProfilePage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
      {
        path: "booking-review",
        lazy: async () => {
          const { BookingReviewPage } =
            await import("./pages/BookingReviewPage");
          return { Component: BookingReviewPage };
        },
      },
    ],
  },
]);
