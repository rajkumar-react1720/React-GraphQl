const DataLoader = require('dataloader');
const db = require('../../dbAdapter').pgConnection;

module.exports =()=>({
    menuLoader: new DataLoader(async restaurant_ids => {
        const query = `SELECT * from menu where restaurant_id in (${restaurant_ids})`
        const restaurant_menuList = await db.manyOrNone(query);

        const restaurant_menu_mapping = restaurant_menuList.reduce((map, menu) => {
            map[menu.restaurant_id] ? (map[menu.restaurant_id] = [...map[menu.restaurant_id], menu])
            : (map[menu.restaurant_id] = [menu]);
            return map;
          }, {});

        const  restaurants_menu = restaurant_ids.map(restaurant_id => restaurant_menu_mapping[restaurant_id] || new Error(`No result for ${restaurant_id}`));
        return restaurants_menu;
    })
})