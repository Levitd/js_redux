
export function loger(state) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            return next(action)
        }
    }
}