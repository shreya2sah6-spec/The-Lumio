/**
 * Post draft store — persists all step content across the multi-step post
 * creation flow, and accumulates published posts so ProfilePage → Recent
 * Projects can display them.
 *
 * Pattern: module-level singleton identical to appliedJobsStore.
 */

import { useState, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

export interface PublishedPost {
  id: string;
  coverUrl: string;
  caption: string;
  publishedAt: string;
}

/**
 * A single content item in the ordered post draft.
 * type "text" = paragraph block, type "image" = uploaded image URL.
 */
export interface DraftItem {
  type: "text" | "image";
  value: string;
}

interface Draft {
  // Step 1 — About
  aboutText: string;
  /** Ordered list of uploaded image URLs from About step (slot order). */
  aboutImages: (string | undefined)[];

  // Step 2 — Process
  processText: string;
  /** Ordered list of uploaded image URLs from Process step (slot order). */
  processImages: (string | undefined)[];

  // Step 3 — Cover
  coverUrl?: string;
  caption: string;
}

// ── Module-level singleton ─────────────────────────────────────────────────────

const EMPTY_DRAFT: Draft = {
  aboutText: "",
  aboutImages: [],
  processText: "",
  processImages: [],
  caption: "",
};

let _draft: Draft = { ...EMPTY_DRAFT };
let _posts: PublishedPost[] = [];
const _listeners = new Set<() => void>();

function notify() {
  _listeners.forEach((fn) => fn());
}

export const postDraftStore = {
  getDraft: (): Draft => _draft,
  getPosts: (): PublishedPost[] => _posts,

  setDraft(patch: Partial<Draft>) {
    _draft = { ..._draft, ...patch };
    notify();
  },

  /** Set a single image in a step's image array at a given slot index. */
  setAboutImage(index: number, url: string) {
    const imgs = [..._draft.aboutImages];
    imgs[index] = url;
    _draft = { ..._draft, aboutImages: imgs };
    notify();
  },

  setProcessImage(index: number, url: string) {
    const imgs = [..._draft.processImages];
    imgs[index] = url;
    _draft = { ..._draft, processImages: imgs };
    notify();
  },

  clearDraft() {
    _draft = { ...EMPTY_DRAFT };
    notify();
  },

  publishPost() {
    const { coverUrl, caption } = _draft;
    const newPost: PublishedPost = {
      id: `post-${Date.now()}`,
      coverUrl: coverUrl ?? "",
      caption,
      publishedAt: "Just now",
    };
    _posts = [newPost, ..._posts];
    _draft = { ...EMPTY_DRAFT };
    notify();
  },

  subscribe(fn: () => void): () => void {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  },
};

// ── React hooks ────────────────────────────────────────────────────────────────

export function usePostDraft() {
  const [draft, setDraftState] = useState<Draft>(() => postDraftStore.getDraft());

  useEffect(
    () => postDraftStore.subscribe(() => setDraftState({ ...postDraftStore.getDraft() })),
    [],
  );

  return {
    draft,
    setDraft: postDraftStore.setDraft.bind(postDraftStore),
    setAboutImage: postDraftStore.setAboutImage.bind(postDraftStore),
    setProcessImage: postDraftStore.setProcessImage.bind(postDraftStore),
    clearDraft: postDraftStore.clearDraft.bind(postDraftStore),
    publishPost: postDraftStore.publishPost.bind(postDraftStore),
  };
}

export function usePublishedPosts() {
  const [posts, setPosts] = useState<PublishedPost[]>(() => postDraftStore.getPosts());

  useEffect(
    () => postDraftStore.subscribe(() => setPosts([...postDraftStore.getPosts()])),
    [],
  );

  return posts;
}
