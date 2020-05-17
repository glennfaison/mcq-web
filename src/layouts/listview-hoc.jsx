import React, { useState } from 'react';
import { JsonListview } from './json-listview';
import { KanbanListview } from './kanban-listview';
import { Toolbar } from '../components';
import { listLayouts } from '../constants';

const layoutMap = {
  tabular: KanbanListview,
  kanban: KanbanListview,
  jsonListview: JsonListview,
};

export const ListviewHOC = ({
  listItems,
}) => {
  const [formattedItems, setFormattedItems] = useState(listItems);
  const filterItems = str => setFormattedItems(listItems.filter(i => i.name.includes(str)));
  const [layoutId, setLayoutId] = useState('kanban');
  const [hasSelection, setHasSelection] = useState(false);

  const SelectedLayout = layoutMap[layoutId];
  
  return (
    <div className="flex flex-grow flex-col overflow-hidden">
      <Toolbar
        onFilter={filterItems}
        layouts={listLayouts}
        onLayoutChange={setLayoutId}
        hasSelection={hasSelection}
      />
      <div className="flex-grow overflow-y-scroll">
        <SelectedLayout
          listItems={formattedItems}
          onSelectionChanged={setHasSelection}
        />
      </div>
    </div>
  );
};