export const load = (data) => {
    return {
        type: data.apiPath,
        method: data.method,
        param: data.param,
        config: data.config || {},
    };
};
