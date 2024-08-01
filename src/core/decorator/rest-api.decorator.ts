import { applyDecorators, SetMetadata } from '@nestjs/common';

export const RestApiPropertyName = Symbol('RestApi');

/**
 * api 요청일 때 오류가 났을 때 HTTP 500 으로 redirect 안되게 하기 위함
 * @constructor
 */
export function RestApi(): MethodDecorator & ClassDecorator {
    return applyDecorators(
        // 나중에 `MetadataScanner`를 통해서 값을 가져옴
        SetMetadata(RestApiPropertyName, true),
    );
}
