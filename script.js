
const startbtn = document.getElementById("startbtn");
const pText = document.getElementById("result");
const container = document.getElementById("container");
const foodlist = [
    "南食堂自选",
    "南食堂饺子",
    "南食堂麻辣烫",
    "南食堂猪脚饭",
    "南食堂意大利面",
    "南食堂小炒牛肉",
    "南食堂烤盘饭",
    "南食堂小面",
    "南食堂麻麻鸡",
    "南食堂汉堡炸鸡",
    "北食堂自选",
    "北食堂饺子",
    "北食堂烧烤",
    "北食堂麻辣烫",
    "北食堂麻辣拌",
    "北食堂云吞",
    "北食堂烤盘饭",
    "北食堂意大利面",
    "北食堂豆花饭",
    "北食堂花甲粉",
    "清真食堂自选",
    "清真食堂大鸡腿",
    "清真食堂木桶饭",
    "清真食堂麻辣烫",
    "清真食堂麻辣拌",
    "清真食堂小面",
    "疏桐7d冒菜",
    "疏桐7d老妈蹄花",
    "疏桐7d猪脚饭",
    "疏桐7d云吞",
    "疏桐7d小面",
    "疏桐7d炸鸡",
    "疏桐7d卤肉卷",
    "疏桐7d铁板烧",
    "东食堂自选",
    "东食堂烤鱼",
    "东食堂鸡腿饭",
    "东食堂麻辣烫",
    "东食堂麻辣拌",
    "东食堂冒菜",
    "东食堂小面",
    "东食堂火锅",
    "东食堂芝士焗饭",
    "东食堂黄焖鸡",
    "东食堂烤鸭",
    "东食堂馋嘴饭",
    "东食堂煎饼果子",
    "东食堂面包",
    "火炉火",
    "费大厨",
    "迷你椰",
    "麦当劳",
    "肯德基",
    "烧烤",
    "蜀三娘",
    "青年公社",
    "火烧云",
    "麻六记",
    "海底捞",
    "沁原",
    "玺發發",
    "猪肚鸡",
    "拌将",
    "华莱士",
    "新疆炒米粉",
    "比格披萨",
    "干拌粿条加牛肉",
    "窑鸡",
    "螺蛳粉",
    "肉蟹煲",
    "莎莉亚",
    "小菜园",
    "达美乐",
    "袁记云饺",
    "跷脚牛肉",
    "甲乙饼",
    "半天妖",
    "他二哥炒鸡",
    "临榆炸鸡腿",
    "吉野家",
    "呷哺呷哺",
    "鱼你在一起",
    "赛百味",
    "寿司",
    "比格披萨",
    "川渝辣妹子",
    "宏状元",
    "醉面",
    "米村拌饭",
    "蛙状元",
    "熊猫来了",
    "熏拌鸡架凉面"
];

function pickFood() {
    const randomIndex = Math.floor(Math.random() * foodlist.length);
    const finalFood = foodlist[randomIndex];
    pText.style.opacity = 0;
    setTimeout(() => {
        pText.innerHTML = `让本小皇帝帮你想想！(*^▽^*)`;
        pText.style.opacity = 1;
    }, 500);
    setTimeout(() => {
        pText.style.opacity = 0;
        setTimeout(() => {
            pText.innerHTML = `吃什么呢？(O_o)??`;
            pText.style.opacity = 1;
        }, 500);
    }, 1000);
    setTimeout(() => {
        pText.style.opacity = 0;
        setTimeout(() => {
            pText.innerHTML = `想到了！╰(*°▽°*)╯`;
            pText.style.opacity = 1;
        }, 500);
    }, 1500);
    setTimeout(() => {
        pText.style.opacity = 0;
        setTimeout(() => {
            pText.innerHTML = `今天吃！！！`;
            pText.style.opacity = 1;
        }, 500);
    }, 2000);
    setTimeout(() => {
        pText.style.opacity = 0;
        setTimeout(() => {
            pText.innerHTML = `${finalFood}`;
            pText.style.opacity = 1;
        }, 500);
    }, 2500);
    startbtn.innerHTML = restart();
}

function restart() {
    return `不满意！我要再选一次！`;
}

function createStars() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 5}s`;
        document.body.appendChild(star);
    }
}

createStars();
