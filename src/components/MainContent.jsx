import React from 'react';

function MainContent({ activeTab, setActiveTab, tabs, tabIds, activeSubheadingId }) {
  return (
    <main className="col-span-12 md:col-span-9 lg:col-span-7 py-8 lg:pt-16">

      <nav className="mb-8 md:hidden">
        <label htmlFor="tabs-mobile" className="block text-sm font-medium text-neutral-700 mb-2">
          Navegar pela Documentação
        </label>
        <select
          id="tabs-mobile"
          name="tabs-mobile"
          className="rounded-md border border-neutral-300 shadow-sm focus:border-black focus:ring-black py-2"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabIds.map((tabId) => (
            <option key={tabId} value={tabId}>
              {tabs[tabId].label}
            </option>
          ))}
        </select>
      </nav>

      <div>
        {React.cloneElement(tabs[activeTab].content, { activeSubheadingId })}
      </div>

    </main>
  );
}

export default MainContent;