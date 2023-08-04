const db = require('../../dbAdapter').pgConnection;

const resolvers = {
  Query: {
    restaurant() {
      const query = `SELECT * from restaurants`;
      const res = db.many(query).then(res=> res);
      return res;
    }
  },

  // Restaurant: {
  //   menu_list: async (restaurant) => {
  //     try {
  //       const query = `SELECT * from menu where restaurant_id=${restaurant.id}`;
  //       console.log(query);
  //       const res = await db.manyOrNone(query);
  //       return res;
  //     } catch (err) {
  //       console.log(err)
  //       return null
  //     }
  //   }
  // }

  Restaurant:{
    menu_list: async ({id}, arg, {menuLoader})=>{
      const restaurant = await menuLoader.load(id);
      return restaurant;
    }
  }
}

exports.resolvers = resolvers;