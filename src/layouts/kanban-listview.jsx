import React, { useState } from 'react';
import { KanbanCard } from '../components';

/**
 *  Kanban Listview component
 *  @param {Object} props
 *  @param {any[]} props.listItems
 *  @returns {JSX.Element}
 */
export const KanbanListview = ({
  listItems,
  onSelectionChanged = () => {},
}) => {
  const [selection, setSelection] = useState(new Set());
  const itemSelected = (item, isSelected) => {
    const _selection = new Set(selection);
    isSelected ? _selection.add(item.id) : _selection.delete(item.id);
    onSelectionChanged(!!_selection.size);
    setSelection(_selection);
  };

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-3
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {listItems.map((item, i) =>
        <KanbanCard item={item} key={i}
          onSelectToggled={selected => itemSelected(item, selected)}
        />
      )}
    </div>
  );
};