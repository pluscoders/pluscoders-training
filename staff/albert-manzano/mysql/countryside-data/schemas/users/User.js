const DAO = require('../../DAO')
const mySQLWrapper = require('../../mySQLWrapper')

class User extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'users'
    }

    static async getByID(_, {id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */

    static async findMatching(_, fields) {
        if (Object.keys(fields).length === 0) return this.findAll()
        
        return this.findByFields({
            fields
        })
    }

    static async createEntry(_, {name , surname, rol, password, age}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    name , surname, rol, password, age
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a user
     */
    static async updateEntry(_, {name , surname, rol, password, age}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    name , surname, rol, password, age
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = User