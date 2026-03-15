import Product from "./../models/Product.js";
import redisClient from "./../config/redis.js";

export const getProduct = async (req, res) => {
    console.log("API HIT");

  const id = req.params.id;

  try {

    const cache = await redisClient.get(`product:${id}`);

    if (cache) {
      console.log("⚡ Cache Hit");
      return res.status(200).json(JSON.parse(cache));
    }

    console.log("🐢 DB Hit");

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await redisClient.set(
      `product:${id}`,
      JSON.stringify(product),
      { EX: 60 }
    );

    res.status(200).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//DB optimization

async function  createEndexing (){
  await Product.collection.createIndex({Supc:1},{PogId:1},{Brand:1},{SubCategory:1},{Price:1});
  console.log("index created to optimized performance 1.PogId 2.Supc 3.Brand 4.Category 5.Price");

}
createEndexing();