const sql = require('../db');

const Category = function (category) {
    this.title = category.name;
};

Category.getSingle = ({ category_id }, callback) => {
    sql.query("SELECT * FROM categories WHERE id = ?", [category_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Category.getCategories = (callback) => {
    sql.query("SELECT * FROM categories", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Category.deleteCategory = ({ category_id }, callback) => {
    sql.query("DELETE FROM categories WHERE id = ?", [category_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Category.deleteFromProductCategory = ({ product_id, category_id }, callback) => {
    sql.query("DELETE FROM product_categories WHERE product_id = ? OR category_id = ?", [product_id, category_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Category.updateCategory = ({ category_id, data }, callback) => {
    sql.query("UPDATE categories SET name = ? WHERE id = ?", [data.name, category_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
}

Category.getCategoriesByProductIds = ({ ids }, callback) => {
    let query = `
        SELECT c.name FROM product_categories pc
        LEFT JOIN categories c ON pc.category_id = c.id
        LEFT JOIN products p ON pc.product_id = p.id
        WHERE pc.product_id in (?)
        GROUP BY c.name
    `;
    sql.query(query, [ids], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

module.exports = Category;