
import React from 'react';
import { 
  Check, 
  Code, 
  ShieldAlert, 
  Download, 
  Globe, 
  Palette, 
  Smartphone,
  Zap,
  Gavel
} from 'lucide-react';

const DemoContent: React.FC = () => {
  return (
    <div className="min-h-screen ltr font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">React Accessibility Widget</h1>
                <p className="text-xs text-gray-500">Free Open Source Standard 5568 Tool</p>
              </div>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
              <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#install" className="hover:text-blue-600 transition-colors">Install</a>
              <a href="#legal" className="text-red-600 hover:text-red-700 transition-colors font-bold">Legal Disclaimer</a>
            </div>
            <a href="https://github.com/amx711/Accessibility-Widget/" target="_blank" rel="noreferrer" className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition flex items-center gap-2">
              <Code className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-bold mb-6 backdrop-blur-sm">
            Free • Open Source • No Subscriptions
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Web Accessibility.<br/>
            <span className="text-blue-400">Made Simple.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A comprehensive React component offering UI tools compliant with Israeli Standard 5568 and WCAG 2.1 Level AA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition shadow-lg flex items-center justify-center gap-2" onClick={window.open("https://github.com/amx711/Accessibility-Widget/", "_blank");}>
              <Download className="w-5 h-5" />
              Get it Now
            </button>
            <button 
              onClick={() => document.querySelector('[aria-label="Accessibility Menu"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Try Demo (Bottom Left)
            </button>
          </div>
        </div>
      </header>

      {/* IMPORTANT LEGAL DISCLAIMER */}
      <section id="legal" className="bg-red-50 border-y-4 border-red-500 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-6">
            <div className="bg-red-100 p-4 rounded-full shrink-0">
              <Gavel className="w-10 h-10 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CRITICAL LEGAL DISCLAIMER</h3>
              <div className="prose prose-red text-gray-800">
                <p className="font-bold text-lg mb-4">
                  We do not take any risk or liability. This tool will NOT make your site 100% accessible automatically.
                </p>
                <p className="mb-4">
                  Using this widget helps with the <strong>User Interface (UI)</strong> requirements of Israeli Standard 5568 and WCAG 2.1 (like contrast, text size, and stopping animations). 
                  However, true accessibility requires manual work that no plugin can do, such as:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Writing proper <strong>Alt Text</strong> for images.</li>
                  <li>Ensuring correct HTML semantic structure (H1, H2 hierarchies).</li>
                  <li>Making custom components keyboard navigable.</li>
                  <li>Ensuring compatibility with screen readers (NVDA, JAWS).</li>
                </ul>
                <div className="bg-white p-4 border-l-4 border-red-500 shadow-sm">
                  <p className="font-bold text-red-700">
                    YOU MUST CONSULT A LAWYER.
                  </p>
                  <p className="text-sm mt-1">
                    We accept no responsibility for legal lawsuits or claims. Website owners are solely responsible for their compliance. You should consult with a qualified legal counsel and a certified accessibility expert to ensure your site meets all legal requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why use this widget?</h3>
            <p className="text-gray-500">A plug-and-play solution saving development time.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Smartphone className="w-6 h-6 text-blue-600" />,
                title: 'Plug & Play', 
                desc: 'Simple installation. Drop the component into your App root and it works instantly without changing existing code.' 
              },
              { 
                icon: <Palette className="w-6 h-6 text-purple-600" />,
                title: 'Customizable', 
                desc: 'Match your brand colors, change widget position, and configure contact details for the legal statement.' 
              },
              { 
                icon: <Globe className="w-6 h-6 text-green-600" />,
                title: 'Multi-Language', 
                desc: 'Full support for English, Hebrew, and Arabic out of the box. Automatically handles RTL and LTR layouts.' 
              },
              { 
                icon: <Zap className="w-6 h-6 text-yellow-600" />,
                title: 'Performance First', 
                desc: 'Zero dependencies heavy-lifting. Saves settings to localStorage. CSS is injected dynamically only when needed.' 
              },
              { 
                icon: <Check className="w-6 h-6 text-cyan-600" />,
                title: 'Compliance Tools', 
                desc: 'Includes Contrast modes, Text Resizing, Reading Guides, Link Highlighting, and a built-in Accessibility Statement.' 
              },
              { 
                icon: <Code className="w-6 h-6 text-pink-600" />,
                title: 'Open Source', 
                desc: 'Free for commercial and personal use. Modify it, fork it, and improve it as you see fit.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Code */}
      <section id="install" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-6">Easy Installation</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Add the component to your application's root file (App.tsx or Layout.tsx).
                Pass your accessibility coordinator's details via props.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">1</span>
                  <span>Copy component files to your project</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">2</span>
                  <span>Import in your main App file</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">3</span>
                  <span>Add the tag and configure!</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="bg-black/50 rounded-xl p-6 border border-gray-700 font-mono text-sm shadow-2xl overflow-x-auto">
                <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-blue-300">import</pre> 
                <pre className="text-white"> AccessibilityWidget </pre>
                <pre className="text-blue-300">from</pre>
                <pre className="text-green-400"> './components/AccessibilityWidget'</pre>;
                <br/>
                <pre className="text-purple-400">const</pre> <pre className="text-yellow-200">App</pre> = () ={'>'} {'{'}<br/>
                &nbsp;&nbsp;<pre className="text-purple-400">return</pre> (<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-red-400">div</span>{'>'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{/* Your Website Content */}'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-yellow-200">Component</span> /{'>'}<br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{/* Accessibility Plugin */}'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="text-yellow-200">AccessibilityWidget</span> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position=<span className="text-green-400">"bottom-left"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statementConfig={'{{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordinatorName: <span className="text-green-400">"John Doe"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coordinatorPhone: <span className="text-green-400">"050-1234567"</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}}'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/{'>'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="text-red-400">div</span>{'>'}<br/>
                &nbsp;&nbsp;);<br/>
                {'}'};
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 text-center">
        <p className="text-gray-600 text-sm mb-2">
          Developed with care for the global developer community 🌎
        </p>
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Accessibility Widget. Open Source License.
        </p>
      </footer>
    </div>
  );
};

export default DemoContent;
