function initAdManager() {
    debugLog("AD: init...");
}

function hasRewardedVideo(callback){
    callback(true);
}

const REWARDED_AD_STATUS_FAILED = "rewardAdFailed";
const REWARDED_AD_STATUS_REWARDED = "rewardAdDone";
function showRewardedVideo(placement, callback) {
    debugLog("AD: show rewarded ad...");
    PokiSDK.rewardedBreak().then(
        (success) => {
            if(success) {
                // video was displayed, give reward
                callback(REWARDED_AD_STATUS_REWARDED);
            }
            else {
                // video not displayed, should probably not give reward
                callback(REWARDED_AD_STATUS_FAILED);
            }
        }
    );
}

function hasInterstitialVideo(callback){
    callback(true);
}

const INTERSTITIAL_AD_STATUS_ENDED = "interstitialAdEnded";
const INTERSTITIAL_AD_STATUS_FAILED = "interstitialAdFailed";
function showInterstitialVideo(placement, callback) {
    PokiSDK.commercialBreak()
        .then(() => {
            debugLog("Commercial break finished, proceeding to game");
            callback(INTERSTITIAL_AD_STATUS_ENDED);
        })
        .catch(() => {
            debugLog("Commercial break error, proceeding to game");
            callback(INTERSTITIAL_AD_STATUS_FAILED);
        });
}