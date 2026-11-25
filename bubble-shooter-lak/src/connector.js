/**
 * POKI
 *
 * В метод init() передай параметры:
 * platform - ключ платформы
 */
class Connector{


    constructor() {
        this.currency = "USD";
        this.uid = "not_secure_user";

        // Выключаем браузерное управление клавиатурой.
        document.addEventListener('keydown', function (ev) {
            ev.preventDefault();
        }, true);

        document.addEventListener('keyup', function (ev) {
            ev.preventDefault();
        }, true);

        document.addEventListener('wheel', function (ev) {
            ev.preventDefault();
        }, {passive: false, capture: true});
    }

    /**
     * Инициализация специфики площадки
     * @param data
     */
    init(data){
        this.platform = data["platform"];
    }

    prepare(data, callback){
        callback({
            "currency" : this.currency
        });
    }

    /**
     * Логин с использованием платформы
     */
    login(callback) {
        callback({
            "id" : this.uid,
            "platform" : this.platform
        });
    }

    /**
     * Выходим из платформы
     * @param callback
     */
    logout(callback) {
        callback(true);
    }

    getUserSaves(callback) {
        //При первом вызове считаем что игра загрузилась
        if (!this.firstLoading){
            this.firstLoading = true;
        }
        callback();
    }

    addUserSaves(data, callback){
        callback(true);
    }

    /**
     * Запрос ID всех друзей
     */
    getFriends(callback) {
        callback([]);
    }

    /**
     * Запрос ID друзей в игре
     * @param callback
     */
    getFriendsInApp(callback) {
        callback([]);
    }

    /**
     * Запрос подробной инфы по пользователям
     * @param ids
     * @param callback
     */
    getUsersInfo(ids, callback) {
        callback({});
    }

    /**
     * Список групп пользователя
     * @param callback
     */
    getOwnerGroups(callback) {
        callback([]);
    }

    /**
     * Позвать друзей в приложение
     * @param data
     * @param callback
     */
    inviteFriends(data, callback) {
        callback(false);
    }

    /**
     * Шара в соц. сеть
     * @param object
     * @param callback
     */
    share(object, callback) {
        callback(false);
    }

    /**
     * Отправка запроса другу
     * @param data
     * @param callback
     */
    requestFriend(data, callback) {
        callback(false);
    }

    /**
     * Окно оплаты
     * @param data
     * @param callback
     */
    showPayment(data, callback) {
        callback(false);
    }

    /**
     * Окно подписки
     * @param data
     * @param callback
     */
    showSubscription(data, callback){
        this.showPayment(data, callback);
    }

    setLeaderboard(id, score){

    }

    getLeaderboard(id, callback){
        callback([]);
    }

    /**
     * Избранные
     * @param callback
     */
    isFavorite(callback) {
    }

    toFavorite(callback) {
    }

    isFavoriteAble(){
        return false;
    }

    isReviewAble(callback){
        callback(false);
    }

    writeReview(){
    }

    getAuthData(callback) {
        callback("Y3ePDQBzG1");
    }

    getLanguage(){
        try{
            return window.navigator.language.split("-")[0];
        }catch (e) {
            debugLog("Error getting user language", e);
        }
        return "en";
    }

    playloadData(callback){
        callback();
    }

    getUid(){
        return this.uid;
    }
}
