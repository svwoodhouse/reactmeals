import React from 'react';
// Create context object; Takes a default context or app/component wide state
const MealsContext = React.createContext({
    itemsTotal: 0,
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});
export default MealsContext;