import redis from 'redis';

const redisClient = redis.createClient();

redisClient.on("connect",()=>{
    console.log("Redis connected");
})
redisClient.connect().catch((err)=>{
    console.error("Redis connection error:",err);
});

export default redisClient;