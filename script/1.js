const Promise = require("bluebird");
const rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start)
const userIds = rangeArray(1,5) // return [0,1,2,3,4,5,6,7,8,9,10]
Promise.map(userIds,(id) => {
  return "user"+id;
}).then((users) => {
    return Promise.map(users,(user) => {
      const recordIds = rangeArray(1,20)
      return Promise.map(recordIds,(rid) => {
        return user + "的record" + rid + new Date().getMilliseconds();
      },{concurrency:5}).then((records) => {
          return {username : user,records:records}
      });
    });
}).then((result) => {
    console.log(">>>",result);
}).catch((err) =>{
  console.log('!!!',err);//
});
