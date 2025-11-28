
import React from 'react';
import DemoContent from './components/DemoContent';
import AccessibilityWidget from './components/AccessibilityWidget';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* 
         This is your existing website content. 
         Nothing needs to change here for the widget to work.
      */}
      <DemoContent />
      
      {/* 
         ACCESSIBILITY WIDGET PLUGIN
         Simply drop this component into your root App or Layout.
         You can configure the position, color, and contact details.
      */}
      <AccessibilityWidget 
        position="bottom-left" 
        primaryColor="#2563eb"
        statementConfig={{
          coordinatorName: "John Doe",
          coordinatorPhone: "054-1234567",
          coordinatorEmail: "access@example.com",
          companyName: "Company Ltd",
          accessibilityUpdateDate: "01/01/2025"
        }} 
      />
    </div>
  );
};

export default App;