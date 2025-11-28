
import React, { useState, useEffect, useReducer, useRef } from 'react';
import { 
  Accessibility, 
  Type, 
  Eye, 
  Sun, 
  Link as LinkIcon, 
  Type as FontIcon, 
  X, 
  RotateCcw,
  ZoomIn,
  ZoomOut,
  PauseCircle,
  Moon,
  Contrast,
  FileText,
  MousePointer2,
  ScanLine,
  MoveHorizontal,
  Heading1,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Languages
} from 'lucide-react';
import { AccessibilityState, AccessibilityAction, StatementConfig } from '../types';
import { generateAccessibilityCSS } from '../services/accessibilityStyleGenerator';
import AccessibilityStatement from './AccessibilityStatement';

const STORAGE_KEY = 'israel-accessibility-widget-state';

const initialState: AccessibilityState = {
  textSize: 100,
  isGrayscale: false,
  isHighContrast: false,
  isNegativeContrast: false,
  isLightBackground: false,
  isLinksUnderlined: false,
  isReadableFont: false,
  areAnimationsStopped: false,
  isLargeCursor: false,
  isReadingGuide: false,
  isTextSpacing: false,
  isHighlightTitles: false,
  textAlign: null,
  language: 'en', // Default language changed to English
};

function reducer(state: AccessibilityState, action: AccessibilityAction): AccessibilityState {
  switch (action.type) {
    case 'INCREASE_TEXT':
      return { ...state, textSize: Math.min(state.textSize + 10, 200) };
    case 'DECREASE_TEXT':
      return { ...state, textSize: Math.max(state.textSize - 10, 80) };
    case 'TOGGLE_GRAYSCALE':
      return { ...state, isGrayscale: !state.isGrayscale, isHighContrast: false, isNegativeContrast: false };
    case 'TOGGLE_HIGH_CONTRAST':
      return { ...state, isHighContrast: !state.isHighContrast, isGrayscale: false, isNegativeContrast: false, isLightBackground: false };
    case 'TOGGLE_NEGATIVE_CONTRAST':
      return { ...state, isNegativeContrast: !state.isNegativeContrast, isGrayscale: false, isHighContrast: false, isLightBackground: false };
    case 'TOGGLE_LIGHT_BACKGROUND':
      return { ...state, isLightBackground: !state.isLightBackground, isHighContrast: false, isNegativeContrast: false };
    case 'TOGGLE_LINKS_UNDERLINE':
      return { ...state, isLinksUnderlined: !state.isLinksUnderlined };
    case 'TOGGLE_READABLE_FONT':
      return { ...state, isReadableFont: !state.isReadableFont };
    case 'TOGGLE_STOP_ANIMATIONS':
      return { ...state, areAnimationsStopped: !state.areAnimationsStopped };
    case 'TOGGLE_LARGE_CURSOR':
      return { ...state, isLargeCursor: !state.isLargeCursor };
    case 'TOGGLE_READING_GUIDE':
      return { ...state, isReadingGuide: !state.isReadingGuide };
    case 'TOGGLE_TEXT_SPACING':
      return { ...state, isTextSpacing: !state.isTextSpacing };
    case 'TOGGLE_HIGHLIGHT_TITLES':
      return { ...state, isHighlightTitles: !state.isHighlightTitles };
    case 'SET_TEXT_ALIGN':
      return { ...state, textAlign: state.textAlign === action.payload ? null : action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'RESET':
      // Preserve language on reset
      return { ...initialState, language: state.language };
    case 'LOAD_SAVED_STATE':
      return action.payload;
    default:
      return state;
  }
}

const translations = {
  he: {
    accessibility: 'נגישות',
    menuTitle: 'תפריט נגישות',
    reset: 'איפוס הגדרות',
    statement: 'הצהרת נגישות',
    standard: 'מותאם לתקן 5568',
    tools: {
      increaseText: 'הגדל טקסט',
      decreaseText: 'הקטן טקסט',
      grayscale: 'גווני אפור',
      highContrast: 'ניגודיות גבוהה',
      negativeContrast: 'ניגודיות הפוכה',
      lightBackground: 'רקע בהיר',
      linksUnderline: 'הדגשת קישורים',
      highlightTitles: 'הדגשת כותרות',
      readableFont: 'גופן קריא',
      largeCursor: 'סמן גדול',
      readingGuide: 'סרגל קריאה',
      textSpacing: 'ריווח טקסט',
      stopAnimations: 'עצור אנימציות',
      alignRight: 'יישור לימין',
      alignCenter: 'יישור למרכז',
      alignLeft: 'יישור לשמאל',
    }
  },
  en: {
    accessibility: 'Accessibility',
    menuTitle: 'Accessibility Menu',
    reset: 'Reset Settings',
    statement: 'Statement',
    standard: 'Standard 5568',
    tools: {
      increaseText: 'Increase Text',
      decreaseText: 'Decrease Text',
      grayscale: 'Grayscale',
      highContrast: 'High Contrast',
      negativeContrast: 'Negative Contrast',
      lightBackground: 'Light Background',
      linksUnderline: 'Highlight Links',
      highlightTitles: 'Highlight Titles',
      readableFont: 'Readable Font',
      largeCursor: 'Large Cursor',
      readingGuide: 'Reading Guide',
      textSpacing: 'Text Spacing',
      stopAnimations: 'Stop Animations',
      alignRight: 'Align Right',
      alignCenter: 'Align Center',
      alignLeft: 'Align Left',
    }
  },
  ar: {
    accessibility: 'سهولة الوصول',
    menuTitle: 'قائمة الوصول',
    reset: 'إعادة تعيين',
    statement: 'بيان الوصول',
    standard: 'معيار 5568',
    tools: {
      increaseText: 'تكبير النص',
      decreaseText: 'تصغير النص',
      grayscale: 'تدرج الرمادي',
      highContrast: 'تباين عالي',
      negativeContrast: 'تباين عكسي',
      lightBackground: 'خلفية فاتحة',
      linksUnderline: 'تمييز الروابط',
      highlightTitles: 'تمييز العناوين',
      readableFont: 'خط مقروء',
      largeCursor: 'مؤشر كبير',
      readingGuide: 'دليل القراءة',
      textSpacing: 'تباعد النص',
      stopAnimations: 'إيقاف الحركة',
      alignRight: 'محاذاة لليمين',
      alignCenter: 'محاذاة للوسط',
      alignLeft: 'محاذاة لليسار',
    }
  }
};

const ReadingGuideOverlay: React.FC = () => {
  const guideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (guideRef.current) {
        guideRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={guideRef}
      className="fixed left-0 w-full h-8 bg-black/20 border-t-2 border-b-2 border-yellow-400 pointer-events-none z-[2147483640]"
      style={{ transform: 'translateY(-50%)', boxShadow: '0 0 0 9999px rgba(0,0,0,0.3)' }}
    />
  );
};

export interface AccessibilityWidgetProps {
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  primaryColor?: string;
  statementConfig?: StatementConfig;
}

const AccessibilityWidget: React.FC<AccessibilityWidgetProps> = ({ 
  position = 'bottom-left',
  primaryColor = '#1d4ed8',
  statementConfig
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.language) parsed.language = 'en'; // Default fallback if no language saved
        dispatch({ type: 'LOAD_SAVED_STATE', payload: parsed });
      } catch (e) {
        console.error('Failed to parse accessibility settings', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage and Inject CSS
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    const styleId = 'accessibility-widget-styles';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = generateAccessibilityCSS(state);

  }, [state, isLoaded]);

  // Focus Trap Logic for Keyboard Navigation
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        } else if (e.key === 'Escape') {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      };

      menuRef.current.addEventListener('keydown', handleTab);
      // Focus first element when opened
      firstElement?.focus();

      return () => {
        menuRef.current?.removeEventListener('keydown', handleTab);
      };
    } else if (!isOpen && isLoaded) {
       // Return focus to toggle button when closed
       // toggleRef.current?.focus(); 
    }
  }, [isOpen, isLoaded]);

  const toggleWidget = () => setIsOpen(!isOpen);

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom-right': return { bottom: '20px', right: '20px' };
      case 'top-left': return { top: '20px', left: '20px' };
      case 'top-right': return { top: '20px', right: '20px' };
      default: return { bottom: '20px', left: '20px' };
    }
  };

  const t = translations[state.language];
  const isRtl = state.language === 'he' || state.language === 'ar';

  const tools = [
    { 
      label: t.tools.increaseText, 
      icon: <ZoomIn className="w-5 h-5" />, 
      action: () => dispatch({ type: 'INCREASE_TEXT' }),
      active: state.textSize > 100 
    },
    { 
      label: t.tools.decreaseText, 
      icon: <ZoomOut className="w-5 h-5" />, 
      action: () => dispatch({ type: 'DECREASE_TEXT' }),
      active: state.textSize < 100 
    },
    { 
      label: t.tools.grayscale, 
      icon: <Eye className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_GRAYSCALE' }),
      active: state.isGrayscale 
    },
    { 
      label: t.tools.highContrast, 
      icon: <Contrast className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_HIGH_CONTRAST' }),
      active: state.isHighContrast 
    },
    { 
      label: t.tools.negativeContrast, 
      icon: <Moon className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_NEGATIVE_CONTRAST' }),
      active: state.isNegativeContrast 
    },
    { 
      label: t.tools.lightBackground, 
      icon: <Sun className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_LIGHT_BACKGROUND' }),
      active: state.isLightBackground 
    },
    { 
      label: t.tools.linksUnderline, 
      icon: <LinkIcon className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_LINKS_UNDERLINE' }),
      active: state.isLinksUnderlined 
    },
    { 
      label: t.tools.highlightTitles, 
      icon: <Heading1 className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_HIGHLIGHT_TITLES' }),
      active: state.isHighlightTitles 
    },
    { 
      label: t.tools.readableFont, 
      icon: <FontIcon className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_READABLE_FONT' }),
      active: state.isReadableFont 
    },
    { 
      label: t.tools.largeCursor, 
      icon: <MousePointer2 className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_LARGE_CURSOR' }),
      active: state.isLargeCursor 
    },
    { 
      label: t.tools.readingGuide, 
      icon: <ScanLine className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_READING_GUIDE' }),
      active: state.isReadingGuide 
    },
    { 
      label: t.tools.textSpacing, 
      icon: <MoveHorizontal className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_TEXT_SPACING' }),
      active: state.isTextSpacing 
    },
    { 
      label: t.tools.stopAnimations, 
      icon: <PauseCircle className="w-5 h-5" />, 
      action: () => dispatch({ type: 'TOGGLE_STOP_ANIMATIONS' }),
      active: state.areAnimationsStopped 
    },
    { 
      label: t.tools.alignRight, 
      icon: <AlignRight className="w-5 h-5" />, 
      action: () => dispatch({ type: 'SET_TEXT_ALIGN', payload: 'right' }),
      active: state.textAlign === 'right' 
    },
    { 
      label: t.tools.alignCenter, 
      icon: <AlignCenter className="w-5 h-5" />, 
      action: () => dispatch({ type: 'SET_TEXT_ALIGN', payload: 'center' }),
      active: state.textAlign === 'center' 
    },
    { 
      label: t.tools.alignLeft, 
      icon: <AlignLeft className="w-5 h-5" />, 
      action: () => dispatch({ type: 'SET_TEXT_ALIGN', payload: 'left' }),
      active: state.textAlign === 'left' 
    },
  ];

  return (
    <>
      {state.isReadingGuide && <ReadingGuideOverlay />}
      
      <div 
        className={`fixed z-[2147483647] font-sans select-none ${isRtl ? 'rtl' : 'ltr'}`}
        style={getPositionStyles()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Toggle Button */}
        {!isOpen && (
          <button
            ref={toggleRef}
            onClick={toggleWidget}
            className="group flex items-center gap-2 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ring-blue-400"
            style={{ backgroundColor: primaryColor }}
            aria-label={t.accessibility}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
          >
            <Accessibility className="w-6 h-6 md:w-8 md:h-8" />
            <span className="hidden group-hover:block whitespace-nowrap font-bold text-sm md:text-base">{t.accessibility}</span>
          </button>
        )}

        {/* Main Widget Panel */}
        {isOpen && (
          <div 
            ref={menuRef}
            className="bg-white rounded-xl shadow-2xl border border-gray-200 w-[300px] sm:w-[340px] md:w-[380px] overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[80vh] transition-all animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-label={t.menuTitle}
            tabIndex={-1}
          >
            {/* Header */}
            <div className="p-4 text-white flex flex-col gap-3 shrink-0" style={{ backgroundColor: primaryColor }}>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-6 h-6" />
                  <h2 className="text-lg font-bold">{t.menuTitle}</h2>
                </div>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => toggleRef.current?.focus(), 50); // Restore focus
                  }}
                  className="hover:bg-black/20 p-1.5 rounded-full transition focus:ring-2 ring-white"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher */}
              <div className="flex gap-2 p-1 bg-black/10 rounded-lg self-start">
                <button 
                  onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'en' })}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${state.language === 'en' ? 'bg-white text-blue-700' : 'text-white hover:bg-white/10'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'he' })}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${state.language === 'he' ? 'bg-white text-blue-700' : 'text-white hover:bg-white/10'}`}
                >
                  עברית
                </button>
                <button 
                  onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'ar' })}
                  className={`px-3 py-1 rounded text-xs font-bold transition-colors ${state.language === 'ar' ? 'bg-white text-blue-700' : 'text-white hover:bg-white/10'}`}
                >
                  العربية
                </button>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-3 grid grid-cols-3 gap-2">
                {tools.map((tool, index) => (
                  <button
                    key={index}
                    onClick={tool.action}
                    className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all border min-h-[80px] focus:ring-2 ring-blue-500 focus:outline-none
                      ${tool.active 
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold ring-1 ring-blue-500 shadow-inner' 
                        : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-300 text-gray-700 shadow-sm'
                      }
                    `}
                    aria-pressed={tool.active}
                  >
                    <div className={`mb-1.5 ${tool.active ? 'text-blue-700' : 'text-gray-500'}`}>
                      {tool.icon}
                    </div>
                    <span className="text-[11px] leading-tight text-center">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-3 bg-gray-50 border-t border-gray-200 shrink-0 space-y-2">
              <button
                onClick={() => dispatch({ type: 'RESET' })}
                className="w-full flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-red-50 py-2 rounded-md transition font-medium border border-gray-200 text-sm shadow-sm focus:ring-2 ring-red-500"
              >
                <RotateCcw className="w-4 h-4" />
                {t.reset}
              </button>
              
              <div className="flex justify-between items-center pt-1">
                <button
                  onClick={() => setShowStatement(true)}
                  className="flex items-center gap-1 text-blue-700 hover:underline text-xs focus:ring-1 ring-blue-500 rounded px-1"
                >
                  <FileText className="w-3 h-3" />
                  {t.statement}
                </button>
                <span className="text-[10px] text-gray-400">{t.standard}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <AccessibilityStatement 
        isOpen={showStatement} 
        onClose={() => setShowStatement(false)} 
        language={state.language}
        config={statementConfig}
      />
    </>
  );
};

export default AccessibilityWidget;