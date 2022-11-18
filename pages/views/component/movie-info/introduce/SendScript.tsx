export default function SendScript() {
    return (
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                (function($){
                    var redirect = function() {
                        var web2appOptions = {
                            urlScheme: 'kakaotalk://kakaopay/money/to/qr?qr_code=FGvNZV8Af',
                            appName: '카카오톡',
                            intentURI: 'intent://kakaopay/money/to/qr?qr_code=FGvNZV8Af#Intent;scheme=kakaotalk;package=com.kakao.talk;end;',
                            storeURL: 'itms-apps://itunes.apple.com/app/id362057947',
                            willInvokeApp: function () {
                            },
                            onUnsupportedEnvironment: function () {
                                $("#move_mobile").hide();
                                $("#move_err").show();
                            }
                        };
                        daumtools.web2app(web2appOptions);
                    };
            
                    $("#forceRedirect").click(function(e){
                        e.preventDefault();
                        redirect();
                    });
            
                    if (daumtools.userAgent().platform === 'pc') {
                        $("#move_mobile").hide();
                        $("#move_pc").show();
                    } else {
                        setTimeout(redirect, 500);
                    }
                })(jQuery);
                
`,
            }}
        />
    );
}
