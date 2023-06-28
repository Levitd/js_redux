export function createStore(reducer, initialState) {
    let state = initialState;
    let listners = [];

    function getState() {
        return state;
    };
    function dispath(action) {
        state = reducer(state, action);
        for (let i = 0; i < listners.length; i++) {
            const listner = listners[i];
            listner();
        }
    };
    function subsribe(listner) {
        listners.push(listner);
    };
    return { getState, dispath, subsribe };
}