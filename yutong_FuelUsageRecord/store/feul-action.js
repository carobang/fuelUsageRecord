export const ADD_CONSUMPTION = 'ADD_CONSUMPTION';
export const REMOVE_CONSUMPTION = 'REMOVE_CONSUMPTION';
export const INIT_DATA = 'INIT_DATA';

export const initData = (data) => {
    return { type: INIT_DATA, item: data };
};

export const addConsumption = (newConsumption) => {
    return { type: ADD_CONSUMPTION, item: newConsumption };
};

export const removeConsumption = selectedConsumption => {
    return { type: REMOVE_CONSUMPTION, item: selectedConsumption };
};