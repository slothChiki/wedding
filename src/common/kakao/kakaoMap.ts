declare global {
    interface Window {
        kakao: any;
    }
}

function kakaoMap() {
    return {
        createMap: (
            container: HTMLElement | null,
            latitude: number,
            longitude: number,
        ) => {
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
            };
            return new window.kakao.maps.Map(container, options);
        },
        createMarker: (latitude: number, longitude: number) => {
            const markerPosition = new window.kakao.maps.LatLng(
                latitude,
                longitude,
            );
            return new window.kakao.maps.Marker({
                position: markerPosition,
            });
        },
    };
}

export default kakaoMap;
