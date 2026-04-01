"use server"

export async function checkout(data: {
  items: { id: number; quantity: number }[];
  userName: string;
  address: string;
}) {
  if (!data.userName || !data.address) {
    return { success: false, error: "请填写姓名和地址" }
  }
  
  if (data.items.length === 0) {
    return { success: false, error: "购物车是空的" }
  }

  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, orderId: Math.random().toString(36).slice(2) }
}