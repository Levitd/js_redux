import httpService from "./http.services"

const todosEndpoint = "todos/";

const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndpoint, {
            params: {
                _page: 1,
                _limit: 10
            }
        });
        return data;
    },
    create: async (dataPost) => {
        const { data } = await httpService.post(todosEndpoint, {
            params: dataPost
        });
        return data;
    }
}
export default todosService;
