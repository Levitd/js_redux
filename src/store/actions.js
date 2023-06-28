import * as actionTypes from './actionTypes';

export function taskComplited(id) {
    return { type: actionTypes.taskUpdated, payload: { id, complited: true } };
};

export function titleChanged(id) {
    return { type: actionTypes.taskUpdated, payload: { id, title: `New Title for ${id}` } };
};
export function taskDeleted(id) {
    return { type: actionTypes.taskDeleted, payload: { id } };
};