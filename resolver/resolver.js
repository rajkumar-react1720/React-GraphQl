const db = require('../dbAdapter').postgressSQL;

const resolvers = {
  Query: {
    restaurant() {
      const query = `SELECT * from restaurants`;
      const res = db.many(query);
      return res;
    }
  },

  Restaurant: {
    menu_list: async (restaurant) => {
      try {
        const query = `SELECT * from menu where restaurant_id=${restaurant.id}`;
        console.log(query);
        const res = await db.manyOrNone(query);
        return res;
      } catch (err) {
        console.log(err)
        return null
      }
    }
  }
}

exports.resolvers = resolvers;