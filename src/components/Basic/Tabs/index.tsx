import React, { useState } from 'react';
import './index.less';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tab-list">
                {React.Children.map(children, (child, index) => (
                    <div
                        className={`tab-item ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {child.props.label}
                        <div className="line"></div>
                    </div>
                ))}
            </div>
            <div className="tab-content animate-tab">
                {children[activeTab]}
            </div>
        </div>
    );
};

const TabPane = ({ children }) => {
    return <div>{children}</div>;
};

export { Tabs, TabPane };
