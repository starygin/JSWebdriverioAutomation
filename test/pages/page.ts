import { updateFunctionDeclaration } from "typescript"

/**
* базовая страница с общими методами
*/
class page {
    anyText(text: string) { return `=${text}`}
    
    /**
    * открываем ссылку
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    /**
     * Метод кликает по элементу с текстом
     * @param text string любой текст
     */
    clickByText(text: string) {
        $(this.anyText(text)).click()
    }
}
export {page}