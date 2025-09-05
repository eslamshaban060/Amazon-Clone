// Type definitions for authentication system
// This file contains all TypeScript interfaces and types used across the auth components

/**
 * User interface - defines the structure of a user object
 * Used for storing user data in localStorage and Redux state
 */
export interface User {
  name: string;     // User's email address (used as username)
  mobile: string;   // User's mobile phone number (11 digits)
  password: string; // User's password (minimum 8 characters)
}

/**
 * AuthState interface - defines the Redux authentication state structure
 * This represents the complete auth slice state in the Redux store
 */
export interface AuthState {
  user: User | null;           // Currently logged-in user data (null if not logged in)
  isAuthenticated: boolean;    // Boolean flag indicating if user is authenticated
  message?: string;            // Optional message for success/error feedback to user
}

/**
 * LoginForm interface - defines the structure of login form data
 * Used for type-safe form handling in LoginForm component
 */
export interface LoginForm {
  emailOrMobile: string; // Can accept either email or mobile number for login
  password: string;      // User's password for authentication
}

/**
 * RegisterForm interface - defines the structure of registration form data
 * Used for type-safe form handling in RegisterForm component
 */
export interface RegisterForm {
  name: string;     // User's email address (serves as username)
  mobile: string;   // User's mobile phone number
  password: string; // User's chosen password
}

/**
 * ValidationResult interface - defines the return type of form validation functions
 * Provides consistent structure for validation feedback
 */
export interface ValidationResult {
  valid: boolean;   // Whether the validation passed (true) or failed (false)
  message: string;  // Descriptive message about validation result
}

/**
 * MessageState interface - defines the structure for component-level messages
 * Used in RegisterForm for local message state management
 */
export interface MessageState {
  text: string;    // The message text to display to user
  status: boolean; // Whether it's a success (true) or error (false) message
}