import React from "react";
import "./CodeInputKids.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdDelete } from "react-icons/md";

export const CodeInputKids = ({ code, setCode, reorderCode }) => {
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    const updatedCode = reorder(code, source.index, destination.index);
    setCode(updatedCode);
    reorderCode(updatedCode);
  };

  const handleInputChange = (index, value) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
    reorderCode(updatedCode);
  };

  const handleDeleteItem = (index) => {
    const updatedCode = [...code];
    updatedCode.splice(index, 1);
    setCode(updatedCode);
    reorderCode(updatedCode);
  };

  const handleAddPrint = () => {
    setCode([...code, "imprimir[**]"]);
  };

  const handleAddVariable = () => {
    setCode([...code, "variable = **"]);
  };

  return (
    <div>
      <div className="btn_input_container">
        <button className="btn btn-primary" onClick={handleAddPrint}>
          Agregar Impresión
        </button>
        <button className="btn btn-primary" onClick={handleAddVariable}>
          Agregar Variable
        </button>
      </div>

      {code.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="task-container"
              >
                {code.map((cod, index) => (
                  <Draggable
                    key={index}
                    draggableId={cod + index}
                    index={index}
                  >
                    {(draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className="task-item"
                      >
                        <input
                          className="form-control"
                          type="text"
                          value={cod}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        />
                        <MdDelete onClick={() => handleDeleteItem(index)} />
                      </li>
                    )}
                  </Draggable>
                ))}

                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <div className="put_something">
          <img src="https://cdn-icons-png.flaticon.com/512/2554/2554267.png" />
          <p>¿Qué tal si codificamos un poco?</p>
        </div>
      )}
    </div>
  );
};
