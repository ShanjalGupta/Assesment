
const handleSelect = (item) => {
  setIsOpen(false);
  if (item.type === 'page') {
    router.push(item.path);
  } else if (item.type === 'prospect' || item.type === 'company') {
    // Handle viewing details of a prospect or company
  } else if (item.type === 'action' && item.action === 'addTask') {
    // Open a modal or perform an action to add a task
  }
};
