import { ADD_CONSUMPTION, REMOVE_CONSUMPTION, INIT_DATA } from "./feul-action"

const fuelReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_DATA:
            return {...state, ...action.item}
        case ADD_CONSUMPTION:
            const newConsumption = action.item;
            var data = {...state};
            data.usedList.push(newConsumption);
            data.userAllowance -= newConsumption.useAmount;
            console.log("fuelStore", data);
            return data;

        case REMOVE_CONSUMPTION:
            const deletedConsumption = action.item;
            var data = {...state};
            data.usedList = data.usedList.filter(item => item.id !== deletedConsumption.id);
            data.userAllowance += deletedConsumption.useAmount;
            return data;
        default:
            return state;
    }
}

export default fuelReducer;
