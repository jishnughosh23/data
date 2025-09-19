const reducer = (state , action) =>{
    if(action.type === "INC"){
        return (state = state+1);
    }
    if(action.type === "DEC"){
        let num = 0;
        state >= 1 ? (num = state-1) : (num = 0);
        return num;
    }
    return state;
}

export default reducer