export const load = (data: {
    apiPath: any;
    method: any;
    param: any;
    config: any;
}) => {
    return {
        type: data.apiPath,
        method: data.method,
        param: data.param,
        config: data.config || {},
    };
};
