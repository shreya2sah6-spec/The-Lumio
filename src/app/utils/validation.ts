/**
 * Lightweight validation utilities for forms.
 * All validators return { valid: boolean, error?: string }
 */

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Phone number validation.
 * - Must be exactly 10 digits
 * - Must start with 6, 7, 8, or 9 (Indian mobile prefixes)
 * - No repeated fake numbers (8888888888 etc.)
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { valid: false, error: "Phone number is required" };
  }
  if (!/^\d+$/.test(phone)) {
    return { valid: false, error: "Phone number must contain only digits" };
  }
  if (phone.length !== 10) {
    return { valid: false, error: "Phone number must be 10 digits" };
  }
  // Must start with 6, 7, 8, or 9 — numbers starting 1-5 are not valid Indian mobile numbers
  if (!/^[6-9]/.test(phone)) {
    return { valid: false, error: "Enter a valid number" };
  }
  // Reject repeated-digit numbers (e.g. 8888888888, 9999999999)
  if (new Set(phone.split("")).size === 1) {
    return { valid: false, error: "Enter a valid number" };
  }
  return { valid: true };
}

/**
 * OTP validation (4 digits).
 * - Must be exactly 4 digits
 * - Only numeric input
 */
export function validateOtp(otp: string): ValidationResult {
  if (!otp) {
    return { valid: false, error: "OTP is required" };
  }
  if (otp.length !== 4) {
    return { valid: false, error: "OTP must be 4 digits" };
  }
  if (!/^\d{4}$/.test(otp)) {
    return { valid: false, error: "OTP must contain only digits" };
  }
  return { valid: true };
}

/**
 * Detects obvious gibberish patterns in a name.
 * Rules (applied to the name without spaces, lowercased):
 *   1. All same character   → gibberish  (uuu, zzz)
 *   2. Short (≤4 chars) with no vowels → gibberish  (qrt, kjhg)
 *   3. Exactly 3 chars with any consecutive-consonant pair → gibberish  (ukd, kds)
 *      Real 3-letter names (Raj, Ava, Ari) never have two consonants in a row.
 */
function isGibberish(s: string): boolean {
  const lower = s.toLowerCase().replace(/\s+/g, "");
  const isVowel = (c: string) => "aeiou".includes(c);
  const len = lower.length;

  // Rule 1 — all same character
  if (new Set(lower.split("")).size === 1) return true;

  // Rule 2 — short names with no vowels at all
  if (len <= 4 && !lower.split("").some(isVowel)) return true;

  // Rule 3 — 3-char names: any two consecutive consonants = gibberish
  if (len === 3) {
    for (let i = 0; i < len - 1; i++) {
      if (!isVowel(lower[i]) && !isVowel(lower[i + 1])) return true;
    }
  }

  return false;
}

/**
 * Name validation.
 * - Minimum 3 characters
 * - Letters and spaces only
 * - No obvious gibberish / keyboard-mashing patterns
 */
export function validateName(name: string): ValidationResult {
  if (!name) {
    return { valid: false, error: "Name is required" };
  }
  const trimmed = name.trim();
  if (trimmed.length < 3) {
    return { valid: false, error: "Name must be at least 3 characters" };
  }
  if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
    return { valid: false, error: "Name can only contain letters and spaces" };
  }
  if (isGibberish(trimmed)) {
    return { valid: false, error: "Enter a valid name" };
  }
  return { valid: true };
}

/**
 * Email validation.
 * - Basic format check (simple pattern)
 * - Must have @ and domain
 */
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { valid: false, error: "Email is required" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Please enter a valid email address" };
  }
  return { valid: true };
}

/**
 * Single OTP digit validation (for individual digit fields).
 * - Must be a single digit 0-9
 */
export function validateOtpDigit(digit: string): boolean {
  return /^\d$/.test(digit);
}

/**
 * Phone digit validation (numeric input only).
 * - Allows 0-9
 */
export function isPhoneDigit(char: string): boolean {
  return /^\d$/.test(char);
}

/**
 * Name character validation (letters and spaces only).
 */
export function isNameChar(char: string): boolean {
  return /^[a-zA-Z\s]$/.test(char);
}

/**
 * Converts a user-entered name to Title Case for display.
 * Handles lowercase, uppercase, and mixed-case input.
 * Preserves internal spacing between words.
 * Safe for multi-word Indian names (e.g. "sanya gupta" → "Sanya Gupta").
 * Does NOT affect emails or usernames — only call on name values.
 */
export function toTitleCase(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
