import React, { useState } from 'react';
import { JsonListview } from './json-listview';
import { CardListview } from './card-listview';
import { Toolbar } from '../components';
import { listLayouts } from '../constants';
import { TabularListview } from './tablular-listview';

const layoutMap = {
  tabular: TabularListview,
  card: CardListview,
  jsonListview: JsonListview,
};

export const ListviewHOC = ({
  listItems,
  headerMappings = {},
  columnMappings = { 'Items': (item) => JSON.stringify(item, null, 2) },
  pageSize = 5,
  cardComponent,
}) => {
  const [formattedItems, setFormattedItems] = useState(listItems);
  const filterItems = str => setFormattedItems(listItems.filter(i => i.name.includes(str)));
  const [layoutId, setLayoutId] = useState('tabular');
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
      <div className="flex-grow overflow-y-scroll px-4">
        <SelectedLayout
          listItems={formattedItems}
          onSelectionChanged={setHasSelection}
          headerMappings={headerMappings}
          columnMappings={columnMappings}
          pageSize={pageSize}
          cardComponent={cardComponent}
        />
      </div>
    </div>
  );
};