import Script from 'next/script';

export default function Scripts() {
    return (
        <>
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
            // 지도 인터랙션 옵션
            $("#interaction").on("click", function(e) {
            e.preventDefault();

            if (map.getOptions("draggable")) {
            map.setOptions({ //지도 인터랙션 끄기
            draggable: false,
            pinchZoom: false,
            scrollWheel: false,
            keyboardShortcuts: false,
            disableDoubleTapZoom: true,
            disableDoubleClickZoom: true,
            disableTwoFingerTapZoom: true
        });

            $(this).removeClass("control-on");
        } else {
            map.setOptions({ //지도 인터랙션 켜기
            draggable: true,
            pinchZoom: true,
            scrollWheel: true,
            keyboardShortcuts: true,
            disableDoubleTapZoom: false,
            disableDoubleClickZoom: false,
            disableTwoFingerTapZoom: false
        });

            $(this).addClass("control-on");
        }
        });

            // 관성 드래깅 옵션
            $("#kinetic").on("click", function(e) {
            e.preventDefault();

            if (map.getOptions("disableKineticPan")) {
            map.setOptions("disableKineticPan", false); //관성 드래깅 켜기
            $(this).addClass("control-on");
        } else {
            map.setOptions("disableKineticPan", true); //관성 드래깅 끄기
            $(this).removeClass("control-on");
        }
        });

            // 타일 fadeIn 효과
            $("#tile-transition").on("click", function(e) {
            e.preventDefault();

            if (map.getOptions("tileTransition")) {
            map.setOptions("tileTransition", false); //타일 fadeIn 효과 끄기

            $(this).removeClass("control-on");
        } else {
            map.setOptions("tileTransition", true); //타일 fadeIn 효과 켜기
            $(this).addClass("control-on");
        }
        });

            // min/max 줌 레벨
            $("#min-max-zoom").on("click", function(e) {
            e.preventDefault();

            if (map.getOptions("minZoom") === 10) {
            map.setOptions({
            minZoom: 7,
            maxZoom: 21
        });
            $(this).val(this.name + ': 7 ~ 21');
        } else {
            map.setOptions({
            minZoom: 10,
            maxZoom: 21
        });
            $(this).val(this.name + ': 10 ~ 21');
        }
        });

            //지도 컨트롤
            $("#controls").on("click", function(e) {
            e.preventDefault();

            if (map.getOptions("scaleControl")) {
            map.setOptions({ //모든 지도 컨트롤 숨기기
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            zoomControl: false,
            mapTypeControl: false
        });
            $(this).removeClass('control-on');
        } else {
            map.setOptions({ //모든 지도 컨트롤 보이기
            scaleControl: true,
            logoControl: true,
            mapDataControl: true,
            zoomControl: true,
            mapTypeControl: true
        });
            $(this).addClass('control-on');
        }
        });

            $("#interaction, #tile-transition, #controls").addClass("control-on");`,
                }}
            />
        </>
    );
}
