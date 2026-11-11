/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { PinLockModal } from './components/common/PinLockModal';
import { DashboardTab } from './components/dashboard/DashboardTab';
import { CustomerListTab } from './components/customers/CustomerListTab';
import { QuickCollectionTab } from './components/collection/QuickCollectionTab';
import { ReportsTab } from './components/reports/ReportsTab';
import { SettingsTab } from './components/settings/SettingsTab';
import { ReceiptModal } from './components/collection/ReceiptModal';
import { NavigationDrawer } from './components/common/NavigationDrawer';
import { AboutAppModal } from './components/common/AboutAppModal';
import { NewBillingCycleModal } from './components/billing/NewBillingCycleModal';

const MainAppContent: React.FC = () => {
  const { activeTab, activeReceipt, setActiveReceipt } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans select-none antialiased">
      {/* Navigation Drawer / Sidebar */}
      <NavigationDrawer />

      {/* About App Modal */}
      <AboutAppModal />

      {/* Monthly Billing Cycle Management Modal */}
      <NewBillingCycleModal />

      {/* 4-digit PIN Security Lock Screen */}
      <PinLockModal />

      {/* Mobile Sticky Header */}
      <Header />

      {/* Main View Area */}
      <main className="flex-1 max-w-md w-full mx-auto px-3.5 pt-2">
        {activeTab === 'home' && <DashboardTab />}
        {activeTab === 'customers' && <CustomerListTab />}
        {activeTab === 'collection' && <QuickCollectionTab />}
        {activeTab === 'reports' && <ReportsTab />}
        {activeTab === 'settings' && <SettingsTab />}
      </main>

      {/* Global Digital Receipt Modal */}
      <ReceiptModal
        receiptData={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      {/* Android 5-Tab Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
