import { NextPage } from 'next';
import { useEffect, useRef } from 'react';

interface Props {
    aaa: string;
}
const NaverMap: NextPage<any> = () => {
    const mapDiv = useRef(null);

    useEffect(() => {
        const { naver } = window;
        if (!mapDiv.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const map = new naver.maps.Map(mapDiv.current, {
            center: new naver.maps.LatLng(35.8836624, 128.5959743), //지도의 초기 중심 좌표
            zoom: 13, //지도의 초기 줌 레벨
            minZoom: 7, //지도의 최소 줌 레벨
            zoomControl: true, //줌 컨트롤의 표시 여부
            zoomControlOptions: {
                //줌 컨트롤의 옵션
                position: naver.maps.Position.TOP_RIGHT,
            },
            scrollWheel: true,
        });

        const marker = new naver.maps.Marker({
            // icon: {
            //     // url: './icon/heart-icon.png',
            //     scaledSize: new naver.maps.Size(30, 37),
            //     origin: new naver.maps.Point(0, 0),
            // },
            map: map,
            position: new naver.maps.LatLng(35.8836624, 128.5959743),
        });

        //setOptions 메서드를 이용해 옵션을 조정할 수도 있습니다.
        map.setOptions('mapTypeControl', true); //지도 유형 컨트롤의 표시 여부

        naver.maps.Event.addListener(map, 'zoom_changed', function (zoom) {
            console.log('zoom:' + zoom);
        });

        map.setOptions('minZoom', 10);
        console.log(
            '잘못된 참조 시점',
            map.getOptions('minZoom'),
            map.getOptions('minZoom') === 10,
        );

        // 지도의 옵션 참조는 init 이벤트 이후에 참조해야 합니다.
        naver.maps.Event.once(map, 'init', function () {
            console.log('올바른 참조 시점', map.getOptions('minZoom') === 10);
        });

        const contentString = [
            '<div class="iw_inner" style="padding:5px; margin: 5px 0px 5px 0px; width: 200px; height: 45px; text-align: center; color: black;">',
            '   <p style="foint-size: 1.5rem; margin: 0; color: black;">중앙컨벤션센터</p>',
            '   <p style="font-size: 0.8rem; margin: 0; color: black;">대구 북구 호암로 51 컨벤션동</p>',
            '</div>',
        ].join('');

        const infoWindow = new naver.maps.InfoWindow({
            content: contentString,
            maxWidth: 300,
            // height: 50,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 2,
            disableAnchor: true,
            // textAlign: 'center',
            // margin: 'auto',

            pixelOffset: new naver.maps.Point(0, -5),
        });

        naver.maps.Event.addListener(marker, 'click', function (e) {
            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker);
            }
        });

        infoWindow.open(map, marker);
    }, []);

    return (
        <>
            <div id="wrap" className="naver-map">
                <div
                    className="map"
                    ref={mapDiv}
                    style={{
                        backgroundColor: 'green',
                        width: '100%',
                        height: '400px',
                    }}
                />
                <code id="snippet" className="snippet" />
            </div>
        </>
    );
};
export default NaverMap;
