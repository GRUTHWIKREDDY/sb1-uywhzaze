import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ComparePlans } from './components/ComparePlans';

function App() {
  const [showComparePlans, setShowComparePlans] = useState(false);

  const handleLogoClick = () => {
    setShowComparePlans(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={handleLogoClick} />
      <main>
        {showComparePlans ? (
          <ComparePlans />
        ) : (
          <>
            <Hero />
            <SubscriptionPlans onCompare={() => setShowComparePlans(true)} />
            <Features />
            <FAQ />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;