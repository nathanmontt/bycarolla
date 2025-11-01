import React from 'react';

function RightSidebar({ activeTab, tabs, activeSubheadingId }) {
  return (
    <aside className="sm:hidden md:hidden lg:block lg:col-span-3 sidebar-sticky">
      <nav className="py-12">
        <h3 className="font-semibold text-black mb-4">Nesta Página</h3>
        {React.cloneElement(tabs[activeTab].toc, { activeSubheadingId })}
      </nav>
    </aside>
  );
}

export default RightSidebar;