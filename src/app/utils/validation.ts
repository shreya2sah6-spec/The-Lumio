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
 * - Must start with 6, 7, 8, or 9
 * - No spaces, letters, or special characters
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { valid: false, error: "Phone number is required" };
  }
  if (phone.length !== 10) {
    return { valid: false, error: "Phone number must be 10 digits" };
  }
  if (!/^[6-9]/.test(phone)) {
    return {
      valid: false,
      error: "Phone number must start with 6, 7, 8, or 9",
    };
  }
  if (!/^\d{10}$/.test(phone)) {
    return { valid: false, error: "Phone number must contain only digits" };
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
 * Name validation.
 * - Minimum 3 characters
 * - Letters and spaces only
 * - No numbers or special characters
 */
export function validateName(name: string): ValidationResult {
  if (!name) {
    return { valid: false, error: "Name is required" };
  }
  const trimmed = name.trim();
  if (trimmed.length < 3) {
    return {
      valid: false,
      error: "Name must be at least 3 characters",
    };
  }
  if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
    return {
      valid: false,
      error: "Name can only contain letters and spaces",
    };
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
