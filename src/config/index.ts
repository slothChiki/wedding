import Config from './default';
import { cloneDeep, merge } from 'lodash';

const CONFIG = cloneDeep(Config);

if (process.env.NODE_ENV) {
    try {
        const EnvConfig = require(`./${process.env.NODE_ENV}`).default;
        merge(CONFIG, EnvConfig);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(
            `[config]Cannot find configs for env=${process.env.NODE_ENV}`,
        );
    }
}

export { CONFIG };
