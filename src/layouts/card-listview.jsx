import React, { useState } from 'react';

/**
 *  Card Listview component
 *  @param {Object} props
 *  @param {any[]} props.listItems
 *  @returns {JSX.Element}
 */
export const CardListview = ({
  listItems,
  onSelectionChanged = () => {},
  cardComponent,
}) => {
  const [selection, setSelection] = useState(new Set());
  const itemSelected = (item, isSelected) => {
    const _selection = new Set(selection);
    isSelected ? _selection.add(item.id) : _selection.delete(item.id);
    onSelectionChanged(!!_selection.size);
    setSelection(_selection);
  };
  const CardComponent = cardComponent;

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-3
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {listItems.map((item, i) =>
        <CardComponent item={item} key={i}
          onSelectToggled={selected => itemSelected(item, selected)}
        />
      )}
    </div>
  );
};