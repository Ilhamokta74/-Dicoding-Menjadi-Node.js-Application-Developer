const { getUserInfo, getUserOrders, getUserCartItems } = require('./utils');

async function getUserData(userId) {
  try {
    // 1. `userInfo` dari fungsi `getUserInfo`
    const userInfo =  await getUserInfo(userId)
    // 2. `userOrders` dari fungsi `getUserOrders`
    const userOrders = await getUserOrders(userId)
    // 3. `userCartItems` dari fungsi `getUserCartItems`
    const userCartItems = await getUserCartItems(userId)

    // return data
    return {
      userInfo,
      userOrders,
      userCartItems
    }
  } catch (error) {
    return null
  }
}

function main() {
  getUserData(1).then(console.log);
  getUserData(-1).then(console.log); // seharusnya mencetak "null"
}

main();