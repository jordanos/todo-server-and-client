import { Task } from 'shared/store/reducers/taskReducer';

type Header = {
  id: string;
  type: Task['status'];
  title: string;
};

export const getDashHeaders = (tasks: Task[]): Header[] => {
  const formatHeaderText = (title: string, count: number): string => {
    return `${title} ${count}`;
  };

  let todoCount = 0;
  let progressCount = 0;
  let doneTodayCount = 0;
  let doneThisWeekCount = 0;
  let doneThisMonthCount = 0;
  const date = new Date();

  tasks.forEach((task) => {
    switch (task.status) {
      case 'todo':
        todoCount += 1;
        return;
      case 'progress':
        progressCount += 1;
        return;
      case 'done':
        if (
          task.date.getFullYear() === date.getFullYear() &&
          task.date.getMonth() === date.getMonth()
        ) {
          if (task.date.getDate() === date.getDate()) doneTodayCount += 1;
          if (
            task.date.getMonth() === date.getMonth() &&
            task.date.getDate() <= date.getDate() + 7
          )
            doneThisWeekCount += 1;
          doneThisMonthCount += 1;
        }
        return;
      default:
        console.log('Unknown task');
    }
  });

  const headers = [
    {
      id: 'dash-header1',
      type: 'todo' as const,
      title: formatHeaderText('ToDo', todoCount),
    },
    {
      id: 'dash-header2',
      type: 'progress' as const,
      title: formatHeaderText('In progress', progressCount),
    },
    {
      id: 'dash-header3',
      type: 'done' as const,
      title: formatHeaderText('Done today', doneTodayCount),
    },
    {
      id: 'dash-header4',
      type: 'done' as const,
      title: formatHeaderText('Done this week', doneThisWeekCount),
    },
    {
      id: 'dash-header5',
      type: 'done' as const,
      title: formatHeaderText('Done this month', doneThisMonthCount),
    },
  ];
  return headers;
};

export default getDashHeaders;
