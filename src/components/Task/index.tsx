import * as React from 'react';
import '../../index.css'

export interface TaskInterface {
    id?: string;
    title?: string;
    state?: any;
    updatedAt?: Date
}

export interface TaskProps {
    task: TaskInterface;
    onArchiveTask?: any;
    onPinTask?: any
}

const Task: React.FC<TaskProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {

  // const dispatch = useDispatch()

    return (
        <div className={`list-item ${state}`}>
        <div className="title">
          <input type="text" value={title} readOnly={true} placeholder="Input title" />
        </div>
  
        <div className="actions" onClick={event => event.stopPropagation()}>
          {state !== 'TASK_ARCHIVED' && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a  href='/'  onClick={() => onPinTask(id)}>
              <span  onClick={(e)=> {e.preventDefault()} } className={`icon-star`} />
            </a>
          )}
          
        </div>
      </div>
    )


    
}

export default Task



