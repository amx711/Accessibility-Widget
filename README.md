# React Accessibility Widget — Free & Open Source

A modern, customizable, plug-and-play accessibility widget built for **React**, supporting **WCAG 2.1 AA** and **Israeli Standard 5568** UI requirements.

This widget provides essential accessibility tools such as contrast modes, text resizing, link highlighting, animation stopping, RTL/LTR support, and more — all with zero dependencies and full customization.

---

### Disclamer

- **We do not take any risk or liability. This tool will NOT make your site 100% accessible automatically. YOU MUST CONSULT A LAWYER.**
- **For More Info about the risks check our website.**

## 🚀 Features

- ✔ **Plug & Play** — Works instantly inside any React project  
- ✔ **WCAG 2.1 AA UI Tools**  - The world wide accessibility requirements
- ✔ **Supports Israeli Standard 5568**  
- ✔ **Text Resize, Contrast Modes, Highlight Links, Reading Guide**  
- ✔ **Built-in Accessibility Statement Component**  
- ✔ **Multi-Language (EN / HE / AR) with RTL support**  
- ✔ **Lightweight & Optimized** (no heavy dependencies)  
- ✔ **LocalStorage persistence**  
- ✔ **100% Free & Open Source**

---

## 📦 Installation

Copy the component files into your React project:


### Usage

```tsx
import AccessibilityWidget from './components/AccessibilityWidget';

const App = () => {
  return (
    <div>
      {/* Your website content here */}

      <AccessibilityWidget
        position="bottom-left"
        statementConfig={{
          coordinatorName: "John Doe",
          coordinatorPhone: "050-1234567",
        }}
      />
    </div>
  );
};

export default App;
```

## Star our project
If you like this project, please star ⭐ the repository — it helps support future updates!
