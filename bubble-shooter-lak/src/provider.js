let appConfig = {
    platform : "poki",
    appId : "0",
    appPage : "",
   
    ab : {
  version : 1,
  groups : {
    a : {
      percent : 50
    },
    b : {
      percent : 50
    }
  }
},
    rate : {
    enabled : false,
    version : 1,
    level : 8,
    delaySuccess : 259200000,
    delayFail : 259200000,
    delayClose : 259200000,
    offer : "rate"
},
    favorites : {
    enabled : false,
    version : 1,
    level : 12,
    delaySuccess : 259200000,
    delayFail : 259200000,
    delayClose : 259200000,
    offer : "favorite",
    message : "favorite_popup_description_icon"
},
    ads : {
    interstitialActive : true,
    rewardedActive : true,
    autoAdActive : true,
    interstitialDelay : 0,
    autoAdDelay : 180000,
    desktop : {}
}
}

let connector = new Connector();
connector.init(appConfig);

function getConfig(callback) {
    callback(appConfig);
}

function prepare(data, callback) {
    connector.prepare(data, callback);
}

function login(platform, callback) {
    connector.login(callback);
}

function logout(callback) {
    connector.logout(callback);
}

function save(platform, callback) {
    callback(true);
}

function initNotifications(callback){
    connector.initNotifications(callback);
}

function share(object, callback) {
    connector.share(object, callback);
}

function showPayment(data, callback) {
    connector.showPayment(data, callback);
}

function showSubscription(data, callback) {
    connector.showSubscription(data, callback);
}

function requestFriend(data, callback) {
    connector.requestFriend(data, callback);
}

function getUserSaves(callback){
    connector.getUserSaves(callback);
}

function addUserSaves(data, callback){
    connector.addUserSaves(data, callback);
}

function inviteFriends(data, callback){
    connector.inviteFriends(data, callback);
}

function getFriends(callback) {
    connector.getFriends(callback);
}

function getFriendsInApp(callback) {
    connector.getFriendsInApp(callback);
}

function getUsersInfo(ids, callback) {
    connector.getUsersInfo(ids, callback);
}

function isFavorite(callback) {
    connector.isFavorite(callback);
}

function toFavorite(callback) {
    connector.toFavorite(callback);
}

function isCommunityMember(callback) {
    connector.isCommunityMember(callback);
}

function joinCommunity(callback) {
    connector.joinCommunity(callback);
}

function setLeaderboard(id, score){
    connector.setLeaderboard(id, score);
}

function getLeaderboard(id, callback){
    connector.getLeaderboard(id, callback);
}

function isReviewAble(callback){
    connector.isReviewAble(callback);
}

function writeReview(){
    isReviewAble(result => {
        if(result) {
            connector.writeReview();
        }
    })
}

function getAuthData(platform, callback) {
    return connector.getAuthData(callback);
}

function getLanguage(){
    return connector.getLanguage();
}

function getUid() {
    return connector.getUid();
}

function getAppVersions(key) {
    return appVersions[key];
}

function getActivePlatform() {
    return appConfig["platform"];
}

function rateGame(callback) {
    connector.rateGame(callback);
}

function rateAvailable(callback) {
    connector.rateAvailable(callback);
}

function playloadData(callback){
    connector.playloadData(callback);
}

function getFlags(callback){
    connector.getFlags(callback);
}

function notifyFirstFrameReady(){
    if(connector.notifyFirstFrameReady){
        connector.notifyFirstFrameReady();
    }
}

function notifyGameReady(){
    if(connector.notifyGameReady){
        connector.notifyGameReady();
    }
}

function isAudioEnabled(){
    return connector.isAudioEnabled ? connector.isAudioEnabled() : true;
}

function openYTVideo(id, callback){
    connector.openYTVideo ? connector.openYTVideo(id, callback) : (callback ? callback(false) : 0);
}

function openYTPlayable(id, callback){
    connector.openYTPlayable ? connector.openYTPlayable(id, callback) : (callback ? callback(false) : 0);
}

function debugLog(...args){
    //console.log(args);
}