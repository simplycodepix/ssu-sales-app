const sql = require('../db');

const Checks = function ({ user_id, price_total }) {
    this.user_id = user_id;
    this.date_created = new Date();
    this.price_total = price_total;
};

Checks.getSingle = ({ location_id }, callback) => {
    sql.query("SELECT * FROM checks WHERE id = ?", [location_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
};

Checks.getChecksTableData = (callback) => {
    sql.query("SELECT * FROM checks ORDER BY id", function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Checks.findByUserId = ({ user_id }, callback) => {
    let query = `
        SELECT DISTINCT c.id, c.date_created, c.price_total 
        FROM checks c WHERE user_id = ? 
        ORDER BY id
    `;

    sql.query(query, [user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Checks.getProductsInCheck = ({ user_id }, callback) => {
    let categoriesSubSelect = `
        (SELECT GROUP_CONCAT(DISTINCT c.name SEPARATOR ', ') AS categories 
        FROM product_categories pc
        LEFT JOIN categories c ON c.id = pc.category_id
        WHERE p.id = pc.product_id)
    `;

    let query = `
        SELECT *, ${categoriesSubSelect} as categories FROM check_item ci
        LEFT JOIN products p on ci.product_id = p.id
        WHERE check_id IN (
            SELECT DISTINCT c.id 
            FROM checks c WHERE user_id = ? 
            ORDER BY id
        );
    `;

    sql.query(query, [user_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

Checks.getAverageCheck = ({ interval }, callback) => {
    let query = `
        SELECT ROUND(AVG(price_total),2) as average
        FROM checks
        WHERE DATE_SUB(CURDATE(),INTERVAL ? DAY) <= date_created;
    `;

    sql.query(query, [interval], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result[0] });
    });
}

// TODO

Checks.addCheck = function (newCheck, callback) {
    sql.query("INSERT INTO checks set ?", newCheck, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ check_id: result.insertId });
    });
};

Checks.addCheckItem = function (newCheckItem, callback) {
    sql.query("INSERT INTO check_item set ?", newCheckItem, function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result: result.insertId });
    });
};

Checks.updateCheckItem = ({ location_id, data }, callback) => {
    sql.query("UPDATE check_item SET location = ? WHERE id = ?", [data.location, location_id], function (error, result) {
        if (error) {
            console.log("error: ", error);
            return callback({ error });
        }
        callback({ result });
    });
};

module.exports = Checks;