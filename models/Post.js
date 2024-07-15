    const db = require('../config/database');

    //fetches all blogs from database(blogdb)
    class Blog {
        static all(callback) {
            db.query('SELECT * FROM myblogs', (err, results) => {
                if (err) {
                    console.error('Error fetching blogs:', err);
                    return callback(err, null);
                }
                callback(null, results);
            });
        }

    //add a new blog data to the database
    static create(blog, callback) {
        db.query('INSERT INTO myblogs SET ?', blog, (err, result) => {
            if (err) {
                console.error('Error creating blog:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    //searched and finds the particular blog through id
    static find(id, callback) {
        db.query('SELECT * FROM myblogs WHERE id = ?', id, (err, result) => {
            if (err) {
                console.error('Error finding blog by id:', err);
                return callback(err, null);
            }
            if (result.length === 0) {
                return callback(null, null);
            }
            callback(null, result[0]);
        });
    }

    //update the blog
    static update(id, blog, callback) {
        db.query('UPDATE myblogs SET ? WHERE id = ?', [blog, id], (err, result) => {
            if (err) {
                console.error('Error updating blog:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }

    //deletes the blog from db
    static delete(id, callback) {
        db.query('DELETE FROM myblogs WHERE id = ?', id, (err, result) => {
            if (err) {
                console.error('Error deleting blog:', err);
                return callback(err, null);
            }
            callback(null, result);
        });
    }
}

module.exports = Blog;
