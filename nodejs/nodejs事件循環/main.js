// 引入events模塊
const events = require('events');
// 創建eventEmitter對象
const eventEmitter = new events.EventEmitter();

connectHandler = function connected() {
    console.log('connect success ');
    eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', () => {
    console.log('data received success');
});

eventEmitter.emit('connection');

console.log("program exec success");

/**
 * 1. 發送鏈接請求            需要創建連接請求的事件監聽器，幾響應函數
 * 2. 鏈接成功，執行讀取操作    當響應函數執行時，進行連接，並在連接成功之後調觸發數據接受事件
 * 3. 讀取成功，執行寫出操作    創建數據接受事件監聽器，並設置處理程序。
 * 4. 程序執行完畢。
 * nodejs 是怎麼執行的呢？
 * eventEmitter.emit觸發事件，會將回調函數作爲最後一個參數，而回調函數會把第一個參數作爲error 的處理函數。當error 發生時，會調用error函數
 */