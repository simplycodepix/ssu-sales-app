const sql = require('../db');

const Product = function (product) {
    this.name = product.name;
    this.price = product.price;
    this.in_stock = product.in_stock;
};

Product.getSingle = ({ product_id }, callback) => {
    sql.query("SELECT * FROM products WHERE id = ?", [product_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Product.updateProduct = ({ id, data }, callback) => {
    sql.query("UPDATE products SET name = ?, price = ?, in_stock = ? WHERE id = ?", [data.name, data.price, data.in_stock, id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ product: result.insertId });
    });
};

Product.updateProductStock = ({ in_stock, id }, callback) => {
    sql.query("UPDATE products SET in_stock = ? WHERE id = ?", [in_stock, id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ product: result.insertId });
    });
};

Product.deleteProduct = ({ id }, callback) => {
    sql.query("DELETE FROM products WHERE id = ?", [id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ product: result.insertId });
    });
};

Product.getCountTotal = (callback) => {
    sql.query("SELECT COUNT(*) AS count FROM products", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ count: result && result[0].count ? result[0].count : 0 });
    });
};

Product.getProductsTableData = (callback) => {
    let query = `SELECT * FROM products;`;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Product.deleteById = ({ product_id }, callback) => {
    sql.query("DELETE FROM products WHERE id = ?", [product_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Product.getProducts = ({ limit = false, offset = false, top = false }, callback) => {
    let pagination = `${limit ? 'LIMIT ' + limit : ''} ${offset ? 'OFFSET ' + offset : ''}`;

    let query = `
        SELECT p.id, p.name, p.price, p.in_stock, 
            GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS categories 
        FROM products p
        LEFT JOIN product_categories pc ON p.id = pc.product_id
        LEFT JOIN categories c ON c.id = pc.category_id
        GROUP BY p.id
        ${pagination};
    `;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Product.getProductsByDate = ({ limit = false, offset = false, interval = 1 }, callback) => {
    let categoriesSubSelect = `
        (SELECT GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS categories 
        FROM product_categories pc
        LEFT JOIN categories c ON c.id = pc.category_id
        WHERE p.id = pc.product_id)
    `;
    let pagination = `${limit ? 'LIMIT ' + limit : ''} ${offset ? 'OFFSET ' + offset : ''}`;

    let query = `
        SELECT DISTINCT p.id, p.name, p.price, p.in_stock, ${categoriesSubSelect} as categories
        FROM checks c
        LEFT JOIN check_item ci ON c.id = ci.check_id
        LEFT JOIN products p ON p.id = ci.product_id
        WHERE DATE_SUB(CURDATE(),INTERVAL ${interval} DAY) < c.date_created
        ${pagination};
    `;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Product.getPopularProducts = ({ limit = false, interval = 30 }, callback) => {
    let categoriesSubSelect = `
        (SELECT GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS categories 
        FROM product_categories pc
        LEFT JOIN categories c ON c.id = pc.category_id
        WHERE p.id = pc.product_id)
    `;

    let query = `
        SELECT COUNT(ci.product_id) as count, p.id, p.name, p.price, p.in_stock,
            ${categoriesSubSelect} as categories
        FROM checks c
        LEFT JOIN check_item ci ON c.id = ci.check_id
        LEFT JOIN products p ON p.id = ci.product_id
        ${interval ? `WHERE DATE_SUB(CURDATE(),INTERVAL ${interval} DAY) <= c.date_created` : ''}
        GROUP BY ci.product_id
        ORDER BY count DESC
        ${limit ? "LIMIT " + limit : ''};
    `;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Product.getExpensiveProducts = ({ limit = false, interval = 30 }, callback) => {
    let categoriesSubSelect = `
        (SELECT GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS categories 
        FROM product_categories pc
        LEFT JOIN categories c ON c.id = pc.category_id
        WHERE p.id = pc.product_id)
    `;

    let query = `
        SELECT p.id, p.name, p.price, p.in_stock,
            ${categoriesSubSelect} as categories
        FROM products p
        ORDER BY price DESC
        ${limit ? "LIMIT " + limit : ''};
    `;

    sql.query(query, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

module.exports = Product;