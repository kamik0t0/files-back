const path = require("path");
const fs = require("fs");

/**
 * @function создает дерево каталогов
 * @name makeTree
 * @param {array} root массив названий каталогов
 * @param {string} rootPath путь к корневому каталогу
 * @returns {object} возращает дерево каталогов
 */

function makeTree(root, rootPath) {
    /**
     * @type {{name: string, selfPath: string, children:(string|object)[]}}
     */
    const CatalogTree = {
        name: "uploads",
        selfPath: path.resolve(rootPath),
        children: root,
    };

    recursive(CatalogTree);

    /**
     * @function рекурсивно обходит каталоги и строит "дерево" мутируя объект CatalogTree
     * @name recursive
     * @param {string} selfPath путь к текущему каталогу
     * @param {array} children массив названий элементов внутри каталога
     */

    function recursive({ selfPath, children }) {
        for (let i = 0; i < children.length; i++) {
            let elem = children[i];
            let pathStat = path.resolve(selfPath + "/" + elem);

            if (
                fs.existsSync(pathStat) &&
                fs.lstatSync(pathStat).isDirectory()
            ) {
                children.splice(i, 1, {
                    name: elem,
                    selfPath: pathStat,
                    children: [],
                });

                children[i].children = fs.readdirSync(
                    path.resolve(selfPath + "/" + elem)
                );

                recursive(children[i]);
            }
            if (
                !fs.existsSync(pathStat) &&
                fs.lstatSync(pathStat).isDirectory()
            ) {
                children.push(elem);
            }
        }
    }
    return CatalogTree;
}

module.exports = makeTree;
