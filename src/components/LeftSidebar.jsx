function LeftSidebar({ activeTab, setActiveTab, tabs, tabIds }) {
  return (
    <aside className="hidden md:block md:col-span-3 lg:col-span-2 sidebar-sticky">
      <nav className="py-12">
        <ul className="space-y-2">
          {tabIds.map((tabId) => (
            <li key={tabId}>
              <button
                onClick={() => setActiveTab(tabId)}
                className={`
                  ${activeTab === tabId ? 'font-semibold text-[#d84052]' : 'text-[#bd646f] hover:text-[#DA5162]'}
                  transition-colors text-left cursor-pointer
                `}
              >
                {tabs[tabId].label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default LeftSidebar;