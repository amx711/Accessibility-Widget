
export interface AccessibilityState {
  textSize: number; // Percentage (e.g., 100, 110, 120)
  isGrayscale: boolean;
  isHighContrast: boolean;
  isNegativeContrast: boolean;
  isLightBackground: boolean;
  isLinksUnderlined: boolean;
  isReadableFont: boolean;
  areAnimationsStopped: boolean;
  
  // New Options
  isLargeCursor: boolean;
  isReadingGuide: boolean;
  isTextSpacing: boolean;
  isHighlightTitles: boolean;
  textAlign: 'right' | 'left' | 'center' | 'justify' | null;
  
  // Language
  language: 'he' | 'en' | 'ar';
}

export type AccessibilityAction = 
  | { type: 'INCREASE_TEXT' }
  | { type: 'DECREASE_TEXT' }
  | { type: 'TOGGLE_GRAYSCALE' }
  | { type: 'TOGGLE_HIGH_CONTRAST' }
  | { type: 'TOGGLE_NEGATIVE_CONTRAST' }
  | { type: 'TOGGLE_LIGHT_BACKGROUND' }
  | { type: 'TOGGLE_LINKS_UNDERLINE' }
  | { type: 'TOGGLE_READABLE_FONT' }
  | { type: 'TOGGLE_STOP_ANIMATIONS' }
  | { type: 'TOGGLE_LARGE_CURSOR' }
  | { type: 'TOGGLE_READING_GUIDE' }
  | { type: 'TOGGLE_TEXT_SPACING' }
  | { type: 'TOGGLE_HIGHLIGHT_TITLES' }
  | { type: 'SET_TEXT_ALIGN'; payload: AccessibilityState['textAlign'] }
  | { type: 'SET_LANGUAGE'; payload: 'he' | 'en' | 'ar' }
  | { type: 'RESET' }
  | { type: 'LOAD_SAVED_STATE'; payload: AccessibilityState };

export interface StatementConfig {
  coordinatorName?: string;
  coordinatorPhone?: string;
  coordinatorEmail?: string;
  companyName?: string;
  accessibilityUpdateDate?: string;
}
