import React, { useState } from "react";
import {
  DraggableProvided,
  DroppableProvided,
  DropResult,
  Draggable,
  Droppable,
  DragDropContext,
} from "react-beautiful-dnd";

const droppableId = "id-1";
const list = ["Hello", "World", "nishisuke"]; // List for dnd. Each item must be identified.

const sort = <T,>(list: T[], before: number, after: number): T[] => {
  const copy = [...list];
  const [moving] = copy.splice(before, 1);
  copy.splice(after, 0, moving);

  return copy;
};

const BeautifulDnd: React.FC = () => {
  const [uniqTexts, setUniqTexts] = useState(list);

  const dndHandler = (result: DropResult) => {
    alert(
      `destination=${result.destination?.index},source=${result.source.index}`
    );

    if (
      !result.destination ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    const sorted = sort(
      uniqTexts,
      result.source.index,
      result.destination.index
    );
    setUniqTexts(sorted);
  };
  return (
    <DragDropContext onDragEnd={dndHandler}>
      <Droppable droppableId={droppableId}>
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {uniqTexts.map((t, i) => (
              <Draggable key={t} draggableId={t} index={i}>
                {(provided: DraggableProvided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {t}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default BeautifulDnd;
