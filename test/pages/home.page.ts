import {page} from "./page";

/**
 * Домашняя страница
 * локаторы
 */
class homePage extends page {
    /**
     * используем геттеры
     */
    get profileName() { return $('//*[@id="btnLoginName"]') }

    get newMsg() {return $(`//*[@id='e-tbr-btn_0']//*[normalize-space(.)='New']`)}

    get who() {return $(`//*[*[@id='autoTo']]/input[@class='e-dropdownbase']`)}

    get subject() {return $(`//input[@id='txtSubject']`)}
    
    get description() {return $(`//div[@id='mailContentMessage']`)}

    get addresat() {return $$(`//*[@id='autoTo_popup']//*[@class='contacts-item-subtext-style']`)}
}
export {homePage}