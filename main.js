let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
  {
    name: "By Your Side",
    singer: "Jonas Blue",
    img: "https://colddb.netlify.app/images/by_your_side.jpg",
    path: "https://colddb.netlify.app/audio/by_your_side.mp3",

  },
  {
    name: "CONTIGO",
    singer: "KAROL G",
    img: "https://colddb.netlify.app/images/contigo.jpg",
    path: "https://colddb.netlify.app/audio/contigo.mp3",

  },
  {
    name: "Baby I Need You",
    singer: "sped up 8282&Joosiq",
    img: "https://colddb.netlify.app/images/baby_i_need_you.jpg",
    path: "https://colddb.netlify.app/audio/baby_i_need_you.mp3",

  },
  {
    name: "一个人想着一个人",
    singer: "曾沛慈",
    img: "https://colddb.netlify.app/images/一个人想着一个人.jpg",
    path: "https://colddb.netlify.app/audio/一个人想着一个人.mp3",

  },
  {
    name: "秘密",
    singer: "蓝又时",
    img: "https://colddb.netlify.app/images/秘密_蓝又时.jpg",
    path: "https://colddb.netlify.app/audio/秘密_蓝又时.mp3",

  },
  {
    name: "Gone",
    singer: "Rose",
    img: "https://colddb.netlify.app/images/gone_rose.jpg",
    path: "https://colddb.netlify.app/audio/gone_rose.mp3",

  },
  {
    name: "手放开",
    singer: "李圣杰",
    img: "https://colddb.netlify.app/images/手放开.jpg",
    path: "https://colddb.netlify.app/audio/手放开.mp3",

  },
  {
    name: "情人",
    singer: "杜德伟",
    img: "https://colddb.netlify.app/images/情人_杜德伟.jpg",
    path: "https://colddb.netlify.app/audio/情人_杜德伟.mp3",

  },
  {
    name: "听见下雨的声音",
    singer: "周杰伦",
    img: "https://colddb.netlify.app/images/听见下雨的声音.jpg",
    path: "https://colddb.netlify.app/audio/听见下雨的声音.mp3",

  },
  {
    name: "胆小鬼",
    singer: "梁咏琪",
    img: "https://colddb.netlify.app/images/胆小鬼_梁咏琪.jpg",
    path: "https://colddb.netlify.app/audio/胆小鬼_梁咏琪.mp3",

  },
  {
    name: "梦寐以求",
    singer: "王力宏",
    img: "https://colddb.netlify.app/images/梦寐以求.jpg",
    path: "https://colddb.netlify.app/audio/梦寐以求.mp3",

  },
  {
    name: "致爱(Your Song)",
    singer: "鹿晗",
    img: "https://colddb.netlify.app/images/致爱_your_song.jpg",
    path: "https://colddb.netlify.app/audio/致爱_your_song.mp3",

  },
  {
    name: "Party",
    singer: "少女时代",
    img: "https://colddb.netlify.app/images/love_is_gone.jpg",
    path: "https://colddb.netlify.app/audio/party_少女时代.mp3",

  },
  {
    name: "目及皆是你",
    singer: "小蓝背心",
    img: "https://colddb.netlify.app/images/目及皆是你.jpg",
    path: "https://colddb.netlify.app/audio/目及皆是你.mp3",

  },
  {
    name: "静悄悄",
    singer: "陈泫孝",
    img: "https://colddb.netlify.app/images/静悄悄.jpg",
    path: "https://colddb.netlify.app/audio/静悄悄.mp3",

  },
  {
    name: "Ringa Linga",
    singer: "太阳",
    img: "https://colddb.netlify.app/images/ringa_linga.jpg",
    path: "https://colddb.netlify.app/audio/ringa_linga.mp3",

  },
  {
    name: "超级冠军",
    singer: "鹿晗",
    img: "https://colddb.netlify.app/images/超级冠军.jpg",
    path: "https://colddb.netlify.app/audio/超级冠军.mp3",

  },
  {
    name: "On My Own",
    singer: "Ashes Remain",
    img: "https://colddb.netlify.app/images/on_my_own.jpg",
    path: "https://colddb.netlify.app/audio/on_my_own.mp3",

  },
  {
    name: "明天你好",
    singer: "牛奶咖啡",
    img: "https://colddb.netlify.app/images/明天你好_牛奶咖啡.jpg",
    path: "https://colddb.netlify.app/audio/明天你好_牛奶咖啡.mp3",

  },
  {
    name: "半岛铁盒",
    singer: "周杰伦",
    img: "https://colddb.netlify.app/images/半岛铁盒.jpg",
    path: "https://colddb.netlify.app/audio/半岛铁盒.mp3",

  },
  {
    name: "超级风格",
    singer: "SpeXial",
    img: "https://colddb.netlify.app/images/超级风格.jpg",
    path: "https://colddb.netlify.app/audio/超级风格.mp3",

  },
  {
    name: "鸭梨大",
    singer: "至上励合",
    img: "https://colddb.netlify.app/images/鸭梨大.jpg",
    path: "https://colddb.netlify.app/audio/鸭梨大.mp3",

  },
  {
    name: "Anti Hero",
    singer: "Taylor Swift",
    img: "https://colddb.netlify.app/images/anti_hero.jpg",
    path: "https://colddb.netlify.app/audio/anti_hero.mp3",

  },
  {
    name: "Butterfly",
    singer: "BTS",
    img: "https://colddb.netlify.app/images/butterfly_bts.jpg",
    path: "https://colddb.netlify.app/audio/butterfly_bts.mp3",

  },
  {
    name: "Empty",
    singer: "Winner",
    img: "https://colddb.netlify.app/images/empty_winner.jpg",
    path: "https://colddb.netlify.app/audio/empty_winner.mp3",

  },
  {
    name: "How You Like That",
    singer: "BlackPink",
    img: "https://colddb.netlify.app/images/how_you_like_that.jpg",
    path: "https://colddb.netlify.app/audio/how_you_like_that.mp3",

  },
  {
    name: "爱很简单",
    singer: "陶喆",
    img: "https://colddb.netlify.app/images/爱很简单.jpg",
    path: "https://colddb.netlify.app/audio/爱很简单.mp3",

  },
  {
    name: "寂寞烟火",
    singer: "蓝心羽",
    img: "https://colddb.netlify.app/images/寂寞烟火.jpg",
    path: "https://colddb.netlify.app/audio/寂寞烟火.mp3",

  },
  {
    name: "像鱼",
    singer: "王贰浪",
    img: "https://colddb.netlify.app/images/像鱼.jpg",
    path: "https://colddb.netlify.app/audio/像鱼.mp3",

  },
  {
    name: "侧脸",
    singer: "于果",
    img: "https://colddb.netlify.app/images/侧脸.jpg",
    path: "https://colddb.netlify.app/audio/侧脸.mp3",

  },
  {
    name: "可爱女人",
    singer: "周杰伦",
    img: "https://colddb.netlify.app/images/可爱女人.jpg",
    path: "https://colddb.netlify.app/audio/可爱女人.mp3",

  },
  {
    name: "Mojito",
    singer: "周杰伦",
    img: "https://colddb.netlify.app/images/mojito.jpg",
    path: "https://colddb.netlify.app/audio/mojito.mp3",

  },
  {
    name: "Workingman's Blues #2",
    singer: "Bob Dylan",
    img: "https://colddb.netlify.app/images/workingmans_blues.jpg",
    path: "https://colddb.netlify.app/audio/workingmans_blues.mp3",

  },
  {
    name: "风吹一夏",
    singer: "DP龙猪",
    img: "https://colddb.netlify.app/images/风吹一夏.jpg",
    path: "https://colddb.netlify.app/audio/风吹一夏.mp3",

  },
  {
    name: "Fragrance",
    singer: "mahiru",
    img: "https://colddb.netlify.app/images/mahiru_fragrance.jpg",
    path: "https://colddb.netlify.app/audio/mahiru_fragrance.mp3",

  },
  {
    name: "Like I Do",
    singer: "J.Tajor",
    img: "https://colddb.netlify.app/images/like_i_do.jpg",
    path: "https://colddb.netlify.app/audio/like_i_do.mp3",

  },
  {
    name: "心墙",
    singer: "郭静",
    img: "https://colddb.netlify.app/images/心墙_郭静.jpg",
    path: "https://colddb.netlify.app/audio/心墙_郭静.mp3",

  },
  {
    name: "Style",
    singer: "Taylor Swift",
    img: "https://colddb.netlify.app/images/style_taylor.jpg",
    path: "https://colddb.netlify.app/audio/style_taylor.mp3",

  },
  {
    name: "失落沙洲",
    singer: "徐佳莹",
    img: "https://colddb.netlify.app/images/失落沙洲.jpg",
    path: "https://colddb.netlify.app/audio/失落沙洲.mp3",

  },
  {
    name: "就是爱你",
    singer: "陶喆",
    img: "https://colddb.netlify.app/images/就是爱你.jpg",
    path: "https://colddb.netlify.app/audio/就是爱你.mp3",

  },
  {
    name: "练习",
    singer: "刘德华",
    img: "https://colddb.netlify.app/images/练习.jpg",
    path: "https://colddb.netlify.app/audio/练习.mp3",

  },
  {
    name: "第一次",
    singer: "光良",
    img: "https://colddb.netlify.app/images/第一次.jpg",
    path: "https://colddb.netlify.app/audio/第一次.mp3",

  },
  {
    name: "独家记忆",
    singer: "陈小春",
    img: "https://colddb.netlify.app/images/独家记忆.jpg",
    path: "https://colddb.netlify.app/audio/独家记忆.mp3",

  },
  {
    name: "醉清风",
    singer: "弦子",
    img: "https://colddb.netlify.app/images/醉清风.jpg",
    path: "https://colddb.netlify.app/audio/醉清风.mp3",

  },
  {
    name: "七里香",
    singer: "周杰伦",
    img: "https://colddb.netlify.app/images/七里香.jpg",
    path: "https://colddb.netlify.app/audio/七里香.mp3",

  },
  {
    name: "会呼吸的痛",
    singer: "任雪晨",
    img: "https://colddb.netlify.app/images/会呼吸的痛.jpg",
    path: "https://colddb.netlify.app/audio/会呼吸的痛.mp3",

  },
  {
    name: "囚鸟",
    singer: "王小帅",
    img: "https://colddb.netlify.app/images/囚鸟.jpg",
    path: "https://colddb.netlify.app/audio/囚鸟.mp3",

  },
  {
    name: "忽然之间",
    singer: "莫文蔚",
    img: "https://colddb.netlify.app/images/忽然之间.jpg",
    path: "https://colddb.netlify.app/audio/忽然之间.mp3",

  },
  {
    name: "情非得已",
    singer: "庾澄庆",
    img: "https://colddb.netlify.app/images/情非得已.jpg",
    path: "https://colddb.netlify.app/audio/情非得已.mp3",

  },
  {
    name: "背叛",
    singer: "曹格",
    img: "https://colddb.netlify.app/images/背叛.jpg",
    path: "https://colddb.netlify.app/audio/背叛.mp3",

  },
  {
    name: "永不失联的爱",
    singer: "周兴哲",
    img: "https://colddb.netlify.app/images/永不失联的爱.jpg",
    path: "https://colddb.netlify.app/audio/永不失联的爱.mp3",

  },
  {
    name: "Letting Go",
    singer: "蔡健雅",
    img: "https://colddb.netlify.app/images/letting_go.jpg",
    path: "https://colddb.netlify.app/audio/letting_go.mp3",

  },
  {
    name: "2am (feat. 茉ひる)",
    singer: "VILLSHANA",
    img: "https://colddb.netlify.app/images/am2_feat.jpg",
    path: "https://colddb.netlify.app/audio/am2_feat.mp3",

  },
  {
    name: "慢冷",
    singer: "王一楠",
    img: "https://colddb.netlify.app/images/慢冷.jpg",
    path: "https://colddb.netlify.app/audio/慢冷.mp3",

  },
  {
    name: "爱我别走",
    singer: "张震岳",
    img: "https://colddb.netlify.app/images/爱我别走.jpg",
    path: "https://colddb.netlify.app/audio/爱我别走.mp3",

  },
  {
    name: "听海",
    singer: "张惠妹",
    img: "https://colddb.netlify.app/images/听海.jpg",
    path: "https://colddb.netlify.app/audio/听海.mp3",

  },
  {
    name: "慢慢喜欢你",
    singer: "莫文蔚",
    img: "https://colddb.netlify.app/images/慢慢喜欢你.jpg",
    path: "https://colddb.netlify.app/audio/慢慢喜欢你.mp3",

  },
  {
    name: "恶作剧",
    singer: "王蓝菌",
    img: "https://colddb.netlify.app/images/恶作剧.jpg",
    path: "https://colddb.netlify.app/audio/恶作剧.mp3",

  },
  {
    name: "哭泣健康指南",
    singer: "李幸倪",
    img: "https://colddb.netlify.app/images/哭泣健康指南.jpg",
    path: "https://colddb.netlify.app/audio/哭泣健康指南.mp3",

  },
  {
    name: "唯一",
    singer: "告五人",
    img: "https://colddb.netlify.app/images/唯一_告五人.jpg",
    path: "https://colddb.netlify.app/audio/唯一_告五人.mp3",

  },
  {
    name: "浪费",
    singer: "林宥嘉",
    img: "https://colddb.netlify.app/images/浪费.jpg",
    path: "https://colddb.netlify.app/audio/浪费.mp3",

  },
  {
    name: "煎熬",
    singer: "李佳薇",
    img: "https://colddb.netlify.app/images/煎熬.jpg",
    path: "https://colddb.netlify.app/audio/煎熬.mp3",

  },
  {
    name: "你就不要想起我",
    singer: "田馥甄",
    img: "https://colddb.netlify.app/images/你就不要想起我.jpg",
    path: "https://colddb.netlify.app/audio/你就不要想起我.mp3",

  },
  {
    name: "年轮",
    singer: "张碧晨",
    img: "https://colddb.netlify.app/images/年轮.jpg",
    path: "https://colddb.netlify.app/audio/年轮.mp3",

  },
  {
    name: "以后别做朋友",
    singer: "周兴哲",
    img: "https://colddb.netlify.app/images/以后别做朋友.jpg",
    path: "https://colddb.netlify.app/audio/以后别做朋友.mp3",

  },
  {
    name: "关键词",
    singer: "林俊杰",
    img: "https://colddb.netlify.app/images/关键词.jpg",
    path: "https://colddb.netlify.app/audio/关键词.mp3",

  },
  {
    name: "不为谁而作的歌",
    singer: "林俊杰",
    img: "https://colddb.netlify.app/images/不为谁而作的歌.jpg",
    path: "https://colddb.netlify.app/audio/不为谁而作的歌.mp3",

  },
  {
    name: "Good bye",
    singer: "HYOLYN",
    img: "https://colddb.netlify.app/images/hyolyn_goodbye.jpg",
    path: "https://colddb.netlify.app/audio/hyolyn_goodbye.mp3",

  },
  {
    name: "爱上未来的你",
    singer: "潘玮柏",
    img: "https://colddb.netlify.app/images/爱上未来的你.jpg",
    path: "https://colddb.netlify.app/audio/爱上未来的你.mp3",

  },
  {
    name: "Need Conversation",
    singer: "Jeong Hyo Bin&Joosiq",
    img: "https://colddb.netlify.app/images/need_conversation.jpg",
    path: "https://colddb.netlify.app/audio/need_conversation.mp3",

  },
  {
    name: "More Than Words",
    singer: "피아노맨&Joosiq",
    img: "https://colddb.netlify.app/images/more_than_words.jpg",
    path: "https://colddb.netlify.app/audio/more_than_words.mp3",

  },
  {
    name: "Dear my X",
    singer: "KyoungSeo",
    img: "https://colddb.netlify.app/images/dear_my_x.jpg",
    path: "https://colddb.netlify.app/audio/dear_my_x.mp3",

  },
  {
    name: "天后",
    singer: "陈势安",
    img: "https://colddb.netlify.app/images/天后.jpg",
    path: "https://colddb.netlify.app/audio/天后.mp3",

  },
  {
    name: "exes",
    singer: "Tate McRae",
    img: "https://colddb.netlify.app/images/exes.jpg",
    path: "https://colddb.netlify.app/audio/exes.mp3",

  },
  {
    name: "greedy",
    singer: "Tate McRae",
    img: "https://colddb.netlify.app/images/greedy.jpg",
    path: "https://colddb.netlify.app/audio/greedy.mp3",

  },
  {
    name: "Better Off",
    singer: "Alan Walker",
    img: "https://colddb.netlify.app/images/better_off.jpg",
    path: "https://colddb.netlify.app/audio/better_off.mp3",

  },
  {
    name: "Alone",
    singer: "Marshmello",
    img: "https://colddb.netlify.app/images/marshmello_alone.jpg",
    path: "https://colddb.netlify.app/audio/marshmello_alone.mp3",

  },
  {
    name: "Work from Home",
    singer: "Fifth Harmony",
    img: "https://colddb.netlify.app/images/work_from_home.jpg",
    path: "https://colddb.netlify.app/audio/work_from_home.mp3",

  },
  {
    name: "Don't Start Now",
    singer: "Dua Lipa",
    img: "https://colddb.netlify.app/images/dont_start_now.jpg",
    path: "https://colddb.netlify.app/audio/dont_start_now.mp3",

  },
  {
    name: "Can't Feel My Face",
    singer: "The Weeknd",
    img: "https://colddb.netlify.app/images/cant_feel_my_face.jpg",
    path: "https://colddb.netlify.app/audio/cant_feel_my_face.mp3",

  },
  {
    name: "Monsters",
    singer: "Katie Sky",
    img: "https://colddb.netlify.app/images/monsters.jpg",
    path: "https://colddb.netlify.app/audio/monsters.mp3",

  },
  {
    name: "Titanium",
    singer: "David Guetta",
    img: "https://colddb.netlify.app/images/titanium.jpg",
    path: "https://colddb.netlify.app/audio/titanium.mp3",

  },
  {
    name: "Summer",
    singer: "Calvin Harris",
    img: "https://colddb.netlify.app/images/summer_ch.jpg",
    path: "https://colddb.netlify.app/audio/summer_ch.mp3",

  },
  {
    name: "Better Off Alone",
    singer: "Josh Le Tissie",
    img: "https://colddb.netlify.app/images/better_off_alone.jpg",
    path: "https://colddb.netlify.app/audio/better_off_alone.mp3",

  },
  {
    name: "Better Days",
    singer: "Polo G",
    img: "https://colddb.netlify.app/images/better_days.jpg",
    path: "https://colddb.netlify.app/audio/better_days.mp3",

  },
  {
    name: "Green Green Grass",
    singer: "George Ezra",
    img: "https://colddb.netlify.app/images/green_green_grass.jpg",
    path: "https://colddb.netlify.app/audio/green_green_grass.mp3",

  },
  {
    name: "Havana",
    singer: "Camila Cabello",
    img: "https://colddb.netlify.app/images/havana.jpg",
    path: "https://colddb.netlify.app/audio/havana.mp3",

  },
  {
    name: "Rather Be",
    singer: "Clean Bandit",
    img: "https://colddb.netlify.app/images/rather_be.jpg",
    path: "https://colddb.netlify.app/audio/rather_be.mp3",

  },
  {
    name: "Baby Don’t Hurt Me",
    singer: "David Guetta",
    img: "https://colddb.netlify.app/images/baby_dont_hurt_me.jpg",
    path: "https://colddb.netlify.app/audio/baby_dont_hurt_me.mp3",

  },
  {
    name: "Tik Tok",
    singer: "Kesha",
    img: "https://colddb.netlify.app/images/tiktok.jpg",
    path: "https://colddb.netlify.app/audio/tiktok.mp3",

  },
  {
    name: "Vampire",
    singer: "Olivia Rodrigo",
    img: "https://colddb.netlify.app/images/vampire.jpg",
    path: "https://colddb.netlify.app/audio/vampire.mp3",

  },
  {
    name: "Die Young",
    singer: "Kesha",
    img: "https://colddb.netlify.app/images/die_young.jpg",
    path: "https://colddb.netlify.app/audio/die_young.mp3",

  },
  {
    name: "Timber",
    singer: "Kesha",
    img: "https://colddb.netlify.app/images/timber.jpg",
    path: "https://colddb.netlify.app/audio/timber.mp3",

  },
  {
    name: "it is what it is",
    singer: "Abe Parker",
    img: "https://colddb.netlify.app/images/it_is_what_it_is.jpg",
    path: "https://colddb.netlify.app/audio/it_is_what_it_is.mp3",

  },
  {
    name: "Happier By Now",
    singer: "Kai Wachi",
    img: "https://colddb.netlify.app/images/happier_by_now.jpg",
    path: "https://colddb.netlify.app/audio/happier_by_now.mp3",

  },
  {
    name: "Levitating",
    singer: "Dua Lipa",
    img: "https://colddb.netlify.app/images/levitating.jpg",
    path: "https://colddb.netlify.app/audio/levitating.mp3",

  },
  {
    name: "Down",
    singer: "Jay Sean",
    img: "https://colddb.netlify.app/images/down_js.jpg",
    path: "https://colddb.netlify.app/audio/down_js.mp3",

  },
  {
    name: "Let Me Love You",
    singer: "DJ Snake",
    img: "https://colddb.netlify.app/images/let_me_love_you.jpg",
    path: "https://colddb.netlify.app/audio/let_me_love_you.mp3",

  },
  {
    name: "You Don't Know Me",
    singer: "Ofenbach",
    img: "https://colddb.netlify.app/images/baby_you_dont_know_me.jpg",
    path: "https://colddb.netlify.app/audio/baby_you_dont_know_me.mp3",

  },
  {
    name: "Diff.",
    singer: "Gin Lee",
    img: "https://colddb.netlify.app/images/diff.jpg",
    path: "https://colddb.netlify.app/audio/diff.mp3",

  },
  {
    name: "离开地球表面",
    singer: "五月天",
    img: "https://colddb.netlify.app/images/离开地球表面.jpg",
    path: "https://colddb.netlify.app/audio/离开地球表面.mp3",

  },
  {
    name: "让我留在你身边",
    singer: "陈奕迅",
    img: "https://colddb.netlify.app/images/让我留在你身边.jpg",
    path: "https://colddb.netlify.app/audio/让我留在你身边.mp3",

  },
  {
    name: "怒放",
    singer: "G-Dragon",
    img: "https://colddb.netlify.app/images/怒放.jpg",
    path: "https://colddb.netlify.app/audio/怒放.mp3",

  },
  {
    name: "Two at A Time",
    singer: "AGA",
    img: "https://colddb.netlify.app/images/two_at_a_time.jpg",
    path: "https://colddb.netlify.app/audio/two_at_a_time.mp3",

  },
  {
    name: "皮思苦",
    singer: "陳瑞輝",
    img: "https://colddb.netlify.app/images/皮思苦.jpg",
    path: "https://colddb.netlify.app/audio/皮思苦.mp3",

  },
  {
    name: "INYU",
    singer: "TAEYEON",
    img: "https://colddb.netlify.app/images/inyu.jpg",
    path: "https://colddb.netlify.app/audio/inyu.mp3",

  },
  {
    name: "Favourite Jeans",
    singer: "moon tang",
    img: "https://colddb.netlify.app/images/favourite_jeans.jpg",
    path: "https://colddb.netlify.app/audio/favourite_jeans.mp3",

  },
  {
    name: "万人邂逅",
    singer: "陈咏桐",
    img: "https://colddb.netlify.app/images/万人邂逅.jpg",
    path: "https://colddb.netlify.app/audio/万人邂逅.mp3",

  },
  {
    name: "abcdefu",
    singer: "GAYLE",
    img: "https://colddb.netlify.app/images/abcdefu.jpg",
    path: "https://colddb.netlify.app/audio/abcdefu.mp3",

  },
  {
    name: "Someone You Loved",
    singer: "刘易斯·卡帕尔迪",
    img: "https://colddb.netlify.app/images/someone_you_loved.jpg",
    path: "https://colddb.netlify.app/audio/someone_you_loved.mp3",

  },
  {
    name: "I Hate Myself Sometimes",
    singer: "李浩瑋",
    img: "https://colddb.netlify.app/images/i_hate_myself_sometimes.jpg",
    path: "https://colddb.netlify.app/audio/i_hate_myself_sometimes.mp3",

  },
  {
    name: "Sweet but Psycho",
    singer: "Ava Max",
    img: "https://colddb.netlify.app/images/sweet_but_psycho.jpg",
    path: "https://colddb.netlify.app/audio/sweet_but_psycho.mp3",

  },
  {
    name: "Love U Like That",
    singer: "Lauv",
    img: "https://colddb.netlify.app/images/love_u_like_that.jpg",
    path: "https://colddb.netlify.app/audio/love_u_like_that.mp3",

  },
  {
    name: "All Fails Down",
    singer: "Alan Walker",
    img: "https://colddb.netlify.app/images/all_fails_down.jpg",
    path: "https://colddb.netlify.app/audio/all_fails_down.mp3",

  },
  {
    name: "Savage Love",
    singer: "Jawsh 685",
    img: "https://colddb.netlify.app/images/savage_love.jpg",
    path: "https://colddb.netlify.app/audio/savage_love.mp3",

  },
  {
    name: "Price Tag",
    singer: "Jessie J",
    img: "https://colddb.netlify.app/images/price_tag.jpg",
    path: "https://colddb.netlify.app/audio/price_tag.mp3",

  },
  {
    name: "Counting Stars",
    singer: "OneRepublic",
    img: "https://colddb.netlify.app/images/counting_stars.jpg",
    path: "https://colddb.netlify.app/audio/counting_stars.mp3",

  },
  {
    name: "Love Is Gone",
    singer: "SLANDER",
    img: "https://colddb.netlify.app/images/love_is_gone.jpg",
    path: "https://colddb.netlify.app/audio/love_is_gone.mp3",

  },
  {
    name: "How To Love ft Sofia Reyes",
    singer: "Cash Cash",
    img: "https://colddb.netlify.app/images/how_to_love_ft.jpg",
    path: "https://colddb.netlify.app/audio/how_to_love_ft.mp3",

  },
  {
    name: "In The Name Of Love",
    singer: "Martin Garrix",
    img: "https://colddb.netlify.app/images/in_the_name_of_love.jpg",
    path: "https://colddb.netlify.app/audio/in_the_name_of_love.mp3",

  },
  {
    name: "Ghost",
    singer: "Justin Bieber",
    img: "https://colddb.netlify.app/images/jb_ghost.jpg",
    path: "https://colddb.netlify.app/audio/jb_ghost.mp3",

  },
  {
    name: "Why Don't We",
    singer: "8 Letters",
    img: "https://colddb.netlify.app/images/why_dont_we.jpg",
    path: "https://colddb.netlify.app/audio/why_dont_we.mp3",

  },
  {
    name: "Pretty Girl",
    singer: "Maggie Lindemann",
    img: "https://colddb.netlify.app/images/pretty_girl.jpg",
    path: "https://colddb.netlify.app/audio/pretty_girl.mp3",

  },
  {
    name: "The Middle",
    singer: "Zedd, Maren",
    img: "https://colddb.netlify.app/images/the_middle.jpg",
    path: "https://colddb.netlify.app/audio/the_middle.mp3",

  },
  {
    name: "Hall of Fame",
    singer: "The Script",
    img: "https://colddb.netlify.app/images/hall_of_fame.jpg",
    path: "https://colddb.netlify.app/audio/hall_of_fame.mp3",

  },
  {
    name: "Intentions",
    singer: "Justin Bieber",
    img: "https://colddb.netlify.app/images/Intentions.jpg",
    path: "https://colddb.netlify.app/audio/Intentions.mp3",

  },
  {
    name: "Roar",
    singer: "Katy Perry",
    img: "https://colddb.netlify.app/images/Roar.jpg",
    path: "https://colddb.netlify.app/audio/Roar.mp3",

  },
  {
    name: "The Nights",
    singer: "Avicii",
    img: "https://colddb.netlify.app/images/the_nights.jpg",
    path: "https://colddb.netlify.app/audio/the_nights.mp3",

  },
  {
    name: "Shake It Off",
    singer: "Taylor Swift",
    img: "https://colddb.netlify.app/images/shake_it_off.jpg",
    path: "https://colddb.netlify.app/audio/shake_it_off.mp3",

  },
  {
    name: "Love Me Like You Do",
    singer: "Ellie Goulding",
    img: "https://colddb.netlify.app/images/love_me_like_you_do.jpg",
    path: "https://colddb.netlify.app/audio/love_me_like_you_do.mp3",

  },
  {
    name: "Firework",
    singer: "Katy Perry",
    img: "https://colddb.netlify.app/images/firework_kp.jpg",
    path: "https://colddb.netlify.app/audio/firework_kp.mp3",

  },
  {
    name: "Dandelions",
    singer: "Ruth B",
    img: "https://colddb.netlify.app/images/Dandelions_rb.jpg",
    path: "https://colddb.netlify.app/audio/Dandelions_rb.mp3",

  },
  {
    name: "Habits",
    singer: "Tove Lo",
    img: "https://colddb.netlify.app/images/habits_tl.jpg",
    path: "https://colddb.netlify.app/audio/habits_tl.mp3",

  },
]

// All functions

// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }