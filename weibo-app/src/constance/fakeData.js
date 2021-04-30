
const url1 = 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0112%2F9f44ed58p00q3zytw00rpc000u000jym.png&thumbnail=650x2147483647&quality=80&type=jpg';
const url2 = 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0112%2F6152bcb3p00q3zytw009cc000dw00jgm.png&thumbnail=650x2147483647&quality=80&type=jpg';
const create_at = '2016-01-01'
const screen_name = 'peter'
const text = '需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie'
let pic1 = { thumbnail_pic: url1 }
let pic2 = { thumbnail_pic: url2 }
let pic_urls = [pic1, pic1, pic1, pic2, pic2, pic2, pic1, pic1, pic1]

let fakeItem = {
    id: 3,
    text: text.slice(3),
    user: { profile_image_url: url2, screen_name: 'Cris' },
    created_at: create_at,
    source: '',
    pic_urls: [pic2],
    reposts_count: Math.floor(Math.random() * 400),
    attitudes_count: Math.floor(Math.random() * 400),
    comments_count: Math.floor(Math.random() * 400),
}

const fakeData = [
    {
        id: 1,
        text: text,
        user: { profile_image_url: url1, screen_name: screen_name },
        created_at: create_at,
        source: '',
        pic_urls: [pic1],
        reposts_count: Math.floor(Math.random() * 400),
        attitudes_count: Math.floor(Math.random() * 400),
        comments_count: Math.floor(Math.random() * 400),
        retweeted_status: fakeItem,
    },
    {
        id: 2,
        text: text,
        user: { profile_image_url: url2, screen_name: screen_name },
        created_at: create_at,
        source: '',
        pic_urls: pic_urls,
        reposts_count: Math.floor(Math.random() * 400),
        attitudes_count: Math.floor(Math.random() * 400),
        comments_count: Math.floor(Math.random() * 400),
    }, fakeItem, fakeItem, fakeItem, fakeItem
]



export default fakeData