export default function IubendaScript() {
    return (
        <>
            <Script
                id="onload-id"
                src="//cdn.iubenda.com/cs/iubenda_cs.js"
                src="//cdn.iubenda.com/cs/gpp/stub.js"
                onLoad={() => {
                    var _iub = _iub || [];
                    _iub.csConfiguration = { "askConsentAtCookiePolicyUpdate": true, "countryDetection": true, "enableLgpd": true, "enableUspr": true, "floatingPreferencesButtonDisplay": "bottom-right", "lang": "en", "lgpdAppliesGlobally": false, "perPurposeConsent": true, "siteId": 3020686, "whitelabel": false, "cookiePolicyId": 77821801, "banner": { "acceptButtonDisplay": true, "closeButtonDisplay": false, "customizeButtonDisplay": true, "explicitWithdrawal": true, "fontSizeBody": "12px", "listPurposes": true, "position": "float-bottom-right", "rejectButtonDisplay": true, "showPurposesToggles": true }; }
                }}
            />
        </>
    )
}