
import React from 'react';
import { X } from 'lucide-react';
import { StatementConfig } from '../types';

interface AccessibilityStatementProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'he' | 'en' | 'ar';
  config?: StatementConfig;
}

const content = {
  he: {
    title: 'הצהרת נגישות',
    intro: 'אנו רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים ובשיפור חווית הגלישה לתושבים עם מוגבלויות. בהתאם לכך, השקענו משאבים רבים בהנגשת האתר, במטרה להקל על השימוש בו ולהפוך את התוכן לזמין יותר עבור אנשים עם צרכים מיוחדים.',
    levelTitle: 'רמת הנגישות',
    levelText: 'האתר הותאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013. התאמות הנגישות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA, ומסמך WCAG2.0 הבינלאומי.',
    adjustmentsTitle: 'התאמות שבוצעו באתר',
    adjustmentsList: [
      'האתר מותאם לדפדפנים הנפוצים.',
      'האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת.',
      'מותאם לתצוגה במכשירים שונים (רספונסיבי).',
      'אפשרות להגדלת הגופן מבלי לפגוע בתוכן.',
      'אפשרות לשינוי ניגודיות הצבעים.',
      'אפשרות להפסקת אנימציות ותנועה.',
      'הדגשת קישורים וכותרות.'
    ],
    contactTitle: 'יצירת קשר ורכז נגישות',
    contactText: 'אם במהלך הגלישה באתר נתקלתם בקושי בנושא נגישות, נשמח לקבל מכם משוב. ניתן לפנות לרכז הנגישות שלנו:',
    close: 'סגור הצהרה',
    labels: {
      name: 'שם:',
      phone: 'טלפון:',
      email: 'דוא"ל:',
      updated: 'תאריך עדכון ההצהרה:'
    }
  },
  en: {
    title: 'Accessibility Statement',
    intro: 'We see great importance in providing equal service to all users and improving the browsing experience for citizens with disabilities. Accordingly, we have invested significant resources in making the site accessible to facilitate its use and make content more available for people with special needs.',
    levelTitle: 'Accessibility Level',
    levelText: 'The site has been adapted to the requirements of the Equal Rights for Persons with Disabilities Regulations (Service Accessibility Adjustments), 2013. The accessibility adjustments were made according to the recommendations of the Israeli Standard (IS 5568) for web content accessibility at level AA, and the international WCAG2.0 document.',
    adjustmentsTitle: 'Adjustments Made',
    adjustmentsList: [
      'The site is adapted for common browsers.',
      'The site provides semantic structure for assistive technologies and keyboard navigation support.',
      'Adapted for display on various devices (responsive).',
      'Option to increase font size without damaging content.',
      'Option to change color contrast.',
      'Option to stop animations and movement.',
      'Highlighting of links and headers.'
    ],
    contactTitle: 'Contact Us & Accessibility Coordinator',
    contactText: 'If you encounter any accessibility difficulty while browsing the site, we would be happy to receive your feedback. You can contact our accessibility coordinator:',
    close: 'Close Statement',
    labels: {
      name: 'Name:',
      phone: 'Phone:',
      email: 'Email:',
      updated: 'Statement updated on:'
    }
  },
  ar: {
    title: 'بيان إمكانية الوصول',
    intro: 'نرى أهمية كبيرة في تقديم خدمة متساوية لجميع المستخدمين وتحسين تجربة التصفح للمواطنين ذوي الإعاقة. وبناءً على ذلك، استثمرنا موارد كبيرة في جعل الموقع متاحًا لتسهيل استخدامه وجعل المحتوى أكثر توفرًا للأشخاص ذوي الاحتياجات الخاصة.',
    levelTitle: 'مستوى إمكانية الوصول',
    levelText: 'تم تكييف الموقع مع متطلبات لوائح المساواة في الحقوق للأشخاص ذوي الإعاقة (تعديلات إمكانية الوصول للخدمة)، 2013. تم إجراء تعديلات إمكانية الوصول وفقًا لتوصيات المعيار الإسرائيلي (IS 5568) لإمكانية الوصول إلى محتوى الويب عند المستوى AA، ووثيقة WCAG2.0 الدولية.',
    adjustmentsTitle: 'التعديلات التي تم إجراؤها',
    adjustmentsList: [
      'الموقع متكيف مع المتصفحات الشائعة.',
      'يوفر الموقع بنية دلالية للتقنيات المساعدة ودعم التنقل عبر لوحة المفاتيح.',
      'متكيف للعرض على أجهزة مختلفة (سريع الاستجابة).',
      'خيار لتكبير حجم الخط دون الإضرار بالمحتوى.',
      'خيار لتغيير تباين الألوان.',
      'خيار إيقاف الرسوم المتحركة.',
      'تمييز الروابط والعناوين.'
    ],
    contactTitle: 'اتصل بنا ومنسق إمكانية الوصول',
    contactText: 'إذا واجهت أي صعوبة في إمكانية الوصول أثناء تصفح الموقع، فسيسعدنا تلقي ملاحظاتك. يمكنك الاتصال بمنسق إمكانية الوصول لدينا:',
    close: 'إغلاق البيان',
    labels: {
      name: 'الاسم:',
      phone: 'هاتف:',
      email: 'بريد إلكتروني:',
      updated: 'تم تحديث البيان في:'
    }
  }
};

const AccessibilityStatement: React.FC<AccessibilityStatementProps> = ({ isOpen, onClose, language, config }) => {
  if (!isOpen) return null;

  const t = content[language];
  const isRtl = language === 'he' || language === 'ar';

  const defaultDetails = {
    name: config?.coordinatorName || 'ישראל ישראלי',
    phone: config?.coordinatorPhone || '050-0000000',
    email: config?.coordinatorEmail || 'access@example.com',
    date: config?.accessibilityUpdateDate || new Date().toLocaleDateString('he-IL')
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" dir={isRtl ? 'rtl' : 'ltr'}>
      <div 
        className="bg-white text-gray-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl relative p-8 border-t-4 border-blue-600"
        role="dialog"
        aria-modal="true"
        aria-labelledby="statement-title"
      >
        <button 
          onClick={onClose}
          className={`absolute top-4 p-2 hover:bg-gray-100 rounded-full transition-colors ${isRtl ? 'left-4' : 'right-4'}`}
          aria-label={t.close}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 id="statement-title" className="text-2xl font-bold mb-6 text-blue-700">{t.title}</h2>
        
        <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
          <p>{t.intro}</p>
          
          <h3 className="text-xl font-bold mt-4 text-gray-800">{t.levelTitle}</h3>
          <p>{t.levelText}</p>

          <h3 className="text-xl font-bold mt-4 text-gray-800">{t.adjustmentsTitle}</h3>
          <ul className={`list-disc list-inside space-y-2 marker:text-blue-500`}>
            {t.adjustmentsList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold mt-4 text-gray-800">{t.contactTitle}</h3>
          <p>{t.contactText}</p>
          
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-2 space-y-2">
            <p><strong>{t.labels.name}</strong> {defaultDetails.name}</p>
            <p><strong>{t.labels.phone}</strong> {defaultDetails.phone}</p>
            <p><strong>{t.labels.email}</strong> {defaultDetails.email}</p>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 border-t pt-2">
            {t.labels.updated} {defaultDetails.date}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto font-bold shadow-md"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
