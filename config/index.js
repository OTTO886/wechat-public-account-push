export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx7d846ea509f6b9c9",
    // 公众号appSecret
    appSecret: "42956261dc194d59a57385a5ac1afdda",
    // 模板消息id
    templateId: "hTKKIaglVKTn1AEMEPsKyLEC2xI4oXC9IiLJi7qnsnA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oYycI6FynpxShAGOW7hezPWMoNl0"],
     
    // 信息配置
    // 所在省份
    province: "贵州",
    // 所在城市
    city: "遵义",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1999", "date": "12-17", "type": 'r'},
      {"name": "老公", "year": "1995", "date": "09-13", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-07-12",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
