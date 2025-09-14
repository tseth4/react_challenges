import React, { useState } from 'react'

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div>
      <div>
        {tabs.map((tab, i) => (
          <button
            role="tab"
            aria-selected={i == activeIndex}
            onClick={() => setActiveIndex(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
export default Tabs