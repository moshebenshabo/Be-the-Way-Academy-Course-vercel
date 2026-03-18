/* eslint-disable */
import React, { useState } from 'react';
import { Crown, Users, User, Star, ChevronLeft, Phone, PlayCircle, ShieldCheck, Video, MonitorPlay, MessageCircle, MapPin, ClipboardList, Link, Lock, Unlock, EyeOff, Briefcase, FileText } from 'lucide-react';

// נוסיף אייקון של וואטסאפ (אפשר להשתמש באייקון דומה מ-lucide-react או ליצור אחד פשוט)
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isManagerMode, setIsManagerMode] = useState(false);
  const [internalInfoProduct, setInternalInfoProduct] = useState(null);
  const [showWaToast, setShowWaToast] = useState(false);

  const products = [
    {
      id: 1,
      title: 'תוכנית ליווי קבוצתית',
      subtitle: 'הכוח של הלהקה',
      description: 'תוכנית הדגל שלנו הבנויה מ-4 שכבות עבודה עוצמתיות: כנסי זום, קורס דיגיטלי, ליווי אישי צמוד, ומעטפת פולואפים ליצירת תוצאות מובטחות בשטח.',
      icon: <Users className="w-10 h-10 text-amber-400" />,
      features: ['4 כנסי זום חווייתיים', '3 פרקי קורס דיגיטלי', '4 מפגשי ליווי אישי בשטח', 'פולואפים (טלפון/וואטסאפ)'],
      extendedDetails: [
        { icon: <MonitorPlay className="w-5 h-5 text-amber-500" />, title: '4 מפגשי זום (כנסים)', desc: 'כנס איזון, מנהיגות, חוויה ומפגש סיכום. כל מפגש בנוי כ"כנס" חווייתי עם אינטראקציה, תוכן מרתק והובלה.' },
        { icon: <Video className="w-5 h-5 text-amber-500" />, title: 'קורס דיגיטלי מקביל', desc: '3 פרקים מרכזיים (איזון, מנהיגות, חוויה). הפרקים נלמדים בין הכנסים ומהווים את חלק ההעמקה והיישום.' },
        { icon: <User className="w-5 h-5 text-amber-500" />, title: '4 מפגשי ליווי אישי', desc: 'מפגשי אחד על אחד עם מאמן להתאמה אישית לכלב שלכם. זה החלק שמחבר בין התוכן לבין החיים עצמם.' },
        { icon: <Phone className="w-5 h-5 text-amber-500" />, title: 'פולואפים וליווי שוטף', desc: 'שיחות קצרות (10-15 דק\') או וואטסאפ בין השלבים כדי לבדוק יישום, לדייק, לזהות קושי ולשמור על מחויבות.' }
      ],
      internalDetails: [
        { icon: <Briefcase className="w-5 h-5 text-rose-500" />, title: 'תשלום למאמן (דרך האקדמיה)', desc: 'האקדמיה מוכרת את העסקה ומשלמת למאמנ/ת שכר של 150₪ לכל שיעור בפועל מתוך המפגשים הכלולים.' },
        { icon: <FileText className="w-5 h-5 text-rose-500" />, title: 'המשך טיפול (אקסטרה מפגשים)', desc: 'לקוח שרוצה עוד מפגשים סוגר מול המאמן ישירות או מול האקדמיה - המאמן מעביר עמלה של 200₪ לכל מפגש נוסף.' },
        { icon: <Users className="w-5 h-5 text-rose-500" />, title: 'לקוח המגיע דרך המאמן', desc: 'המאמן רוכש את הקורס בהנחה וגובה מחיר מלא מהלקוח, או שולח אלינו לרכישה ומקבל עמלה.' },
        { icon: <ShieldCheck className="w-5 h-5 text-rose-500" />, title: 'עבודה ע"פ פרוטוקול', desc: 'כל עוד עובדים ע"פ הפרוטוקול ובצמוד לקורס, משולמת עמלה לאקדמיה על טיפולי המשך (מבוסס על אמון).' }
      ],
      price: 'החל מ-₪2,400'
    },
    {
      id: 2,
      title: 'תהליך ליווי פרטני',
      subtitle: 'יחס אישי וממוקד',
      description: 'ליווי אישי של אחד על אחד במתכונת VIP. התהליך משלב קורס דיגיטלי מקיף יחד עם סדרת מפגשי אימון פרטניים.',
      icon: <User className="w-10 h-10 text-amber-400" />,
      features: ['קורס דיגיטלי מקיף', '6 מפגשי אימון פרטניים', 'עבודה ע"פ פרוטוקול מובנה', 'סנכרון מלא לתכני הקורס'],
      extendedDetails: [
        { icon: <Video className="w-5 h-5 text-amber-500" />, title: 'קורס דיגיטלי', desc: 'גישה מלאה לקורס הדיגיטלי המקיף שלנו, המהווה את הבסיס התיאורטי והמעשי לתהליך.' },
        { icon: <User className="w-5 h-5 text-amber-500" />, title: '6 מפגשי אימון', desc: '6 מפגשי אימון אישיים (אחד על אחד) לתרגול מעשי, דיוק ויישום החומר בשטח.' },
        { icon: <ClipboardList className="w-5 h-5 text-amber-500" />, title: 'פרוטוקול עבודה מובנה', desc: 'התהליך כולו מתנהל על פי פרוטוקול מקצועי, מסודר ומוכח להשגת תוצאות מקסימליות.' },
        { icon: <Link className="w-5 h-5 text-amber-500" />, title: 'סנכרון לתכני הקורס', desc: 'כל מפגש פרטני נבנה ועובד בצמוד ובסנכרון מושלם לפרקים ולשלבים בקורס הדיגיטלי.' }
      ],
      internalDetails: [
        { icon: <Briefcase className="w-5 h-5 text-rose-500" />, title: 'תשלום למאמן (דרך האקדמיה)', desc: 'האקדמיה מוכרת את העסקה ומשלמת למאמנ/ת שכר של 150₪ לכל שיעור בפועל מתוך ה-6 הכלולים.' },
        { icon: <FileText className="w-5 h-5 text-rose-500" />, title: 'המשך טיפול (אקסטרה מפגשים)', desc: 'לקוח שרוצה עוד מפגשים סוגר מול המאמן ישירות או מול האקדמיה - המאמן מעביר עמלה של 200₪ לכל מפגש נוסף.' },
        { icon: <Users className="w-5 h-5 text-rose-500" />, title: 'לקוח המגיע דרך המאמן', desc: 'המאמן רוכש את הקורס בהנחה וגובה מחיר מלא מהלקוח, או שולח אלינו לרכישה ומקבל עמלה.' },
        { icon: <ShieldCheck className="w-5 h-5 text-rose-500" />, title: 'עבודה ע"פ פרוטוקול', desc: 'כל עוד עובדים ע"פ הפרוטוקול ובצמוד לקורס, משולמת עמלה לאקדמיה על טיפולי המשך (מבוסס על אמון).' }
      ],
      price: 'בהתאמה אישית'
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900">
      
      {/* Navigation / Header */}
      <nav className="border-b border-white/10 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              <Crown className="text-slate-900 w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide text-white">Be the Way</h1>
              <p className="text-xs text-amber-400 tracking-widest uppercase">אקדמיה לכלבנות</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsManagerMode(!isManagerMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isManagerMode ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50' : 'bg-slate-800 text-slate-400 border border-white/5 hover:bg-slate-700'}`}
            >
              {isManagerMode ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              <span className="hidden sm:inline">{isManagerMode ? 'מצב מנהל פעיל' : 'כניסת צוות'}</span>
            </button>
            <button className="hidden md:flex items-center gap-2 bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 px-6 py-2 rounded-full font-medium">
              <Phone className="w-4 h-4" />
              <span>תיאום פגישת ייעוץ</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium">סטנדרט חדש של אילוף בישראל</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            הדרך <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 to-amber-600">הנכונה</span> <br/>
            לכלב המושלם
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 tracking-wide">
            זה לא קסם, זו שיטה שעובדת
          </h3>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            ברוכים הבאים לאקדמיה לכלבנות. בחרנו בקפידה את מסלולי ההכשרה שלנו כדי להבטיח תוצאות מקסימליות, תוך שילוב טכנולוגיה, למידה דיגיטלית ועבודה מעשית בשטח.
          </p>
        </div>
      </header>

      {/* Products Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-gradient-to-l from-amber-400/50 to-transparent flex-1"></div>
          <h3 className="text-3xl font-bold text-white text-center">המסלולים שלנו</h3>
          <div className="h-px bg-gradient-to-r from-amber-400/50 to-transparent flex-1"></div>
        </div>

        {/* Updated grid to 2 columns and centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-amber-400/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl group-hover:bg-amber-400/10 transition-colors"></div>
              
              <div className="mb-6 relative">
                {product.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-2">{product.title}</h4>
              <p className="text-amber-400 text-sm font-medium mb-4">{product.subtitle}</p>
              
              <p className="text-slate-400 mb-8 line-clamp-3 flex-grow">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="text-lg font-bold text-white mb-4">{product.price}</div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-amber-500 hover:text-slate-900 text-white py-3 rounded-xl transition-all duration-300 font-medium"
                  >
                    <span>פרטים נוספים</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {isManagerMode && product.internalDetails && (
                    <button 
                      onClick={() => setInternalInfoProduct(product)}
                      className="w-full flex items-center justify-center gap-2 bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-400 border border-rose-500/30 py-3 rounded-xl transition-all duration-300 font-medium"
                    >
                      <EyeOff className="w-4 h-4" />
                      <span>מידע פיננסי לצוות</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Expanded View */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-amber-400/30 rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="flex justify-center mb-6">
              {selectedProduct.icon}
            </div>
            <h3 className="text-3xl font-bold text-white text-center mb-2">{selectedProduct.title}</h3>
            <p className="text-center text-slate-400 mb-8 max-w-lg mx-auto">{selectedProduct.description}</p>
            
            {/* Extended Details Grid */}
            {selectedProduct.extendedDetails && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selectedProduct.extendedDetails.map((detail, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-amber-400/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      {detail.icon}
                      <h5 className="text-white font-bold">{detail.title}</h5>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{detail.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all">
              התחל עכשיו - {selectedProduct.price}
            </button>
          </div>
        </div>
      )}

      {/* Internal/Manager Info Modal */}
      {internalInfoProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="bg-slate-900 border-2 border-rose-500/50 rounded-3xl p-8 max-w-2xl w-full shadow-[0_0_40px_rgba(244,63,94,0.15)] relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setInternalInfoProduct(null)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-rose-500" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white text-center mb-2">מידע פנימי לאקדמיה</h3>
            <p className="text-center text-rose-400 mb-8 max-w-lg mx-auto font-medium">
              מודל תמחור ועבודה מול מאמנים - {internalInfoProduct.title}
            </p>
            
            <div className="space-y-4 mb-8">
              {internalInfoProduct.internalDetails.map((detail, idx) => (
                <div key={idx} className="bg-rose-950/30 p-5 rounded-xl border border-rose-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    {detail.icon}
                    <h5 className="text-white font-bold text-lg">{detail.title}</h5>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pr-8">{detail.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setInternalInfoProduct(null)}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all"
            >
              סגור חלונית סודית
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Be the Way - אקדמיה לכלבנות. כל הזכויות שמורות.</p>
      </footer>

      {/* WhatsApp Toast Notification (Feedback for Preview environment) */}
      {showWaToast && (
        <div className="fixed bottom-24 left-6 z-50 bg-slate-800 text-white px-4 py-3 rounded-xl border border-green-500/30 shadow-2xl flex items-center gap-3 animate-pulse">
          <MessageCircle className="w-5 h-5 text-green-400" />
          <div className="text-sm">
            <p className="font-bold text-green-400">הקליק עבד!</p>
            <p className="text-slate-300">באתר האמיתי זה יפתח מיד את הוואטסאפ.</p>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/972555517516" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={(e) => {
          // מציג את ההודעה בתצוגה המקדימה למשך 4 שניות
          setShowWaToast(true);
          setTimeout(() => setShowWaToast(false), 4000);
        }}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300"
        aria-label="שלח הודעת וואטסאפ"
      >
        <WhatsAppIcon className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm font-medium py-1.5 px-3 rounded-lg border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl">
          דברו איתנו בוואטסאפ
        </span>
      </a>
    </div>
  );
}
