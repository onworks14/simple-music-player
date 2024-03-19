function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class CardProfile extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      index: 3,
      currentTime: '0:00',
      musicList: [
        {
          name: "By Your Side",
          author: "Jonas Blue",
          img: "https://colddb.netlify.app/images/by_your_side.jpg",
          audio: "https://colddb.netlify.app/audio/by_your_side.mp3",
        },
        {
          name: "CONTIGO",
          author: "KAROL G",
          img: "https://colddb.netlify.app/images/contigo.jpg",
          audio: "https://colddb.netlify.app/audio/contigo.mp3",

        },
        {
          name: "Baby I Need You",
          author: "sped up 8282&Joosiq",
          img: "https://colddb.netlify.app/images/baby_i_need_you.jpg",
          audio: "https://colddb.netlify.app/audio/baby_i_need_you.mp3",

        },
        {
          name: "一个人想着一个人",
          author: "曾沛慈",
          img: "https://colddb.netlify.app/images/一个人想着一个人.jpg",
          audio: "https://colddb.netlify.app/audio/一个人想着一个人.mp3",

        },
        {
          name: "秘密",
          author: "蓝又时",
          img: "https://colddb.netlify.app/images/秘密_蓝又时.jpg",
          audio: "https://colddb.netlify.app/audio/秘密_蓝又时.mp3",

        },
        {
          name: "Gone",
          author: "Rose",
          img: "https://colddb.netlify.app/images/gone_rose.jpg",
          audio: "https://colddb.netlify.app/audio/gone_rose.mp3",

        },
        {
          name: "手放开",
          author: "李圣杰",
          img: "https://colddb.netlify.app/images/手放开.jpg",
          audio: "https://colddb.netlify.app/audio/手放开.mp3",

        },
        {
          name: "情人",
          author: "杜德伟",
          img: "https://colddb.netlify.app/images/情人_杜德伟.jpg",
          audio: "https://colddb.netlify.app/audio/情人_杜德伟.mp3",

        },
        {
          name: "听见下雨的声音",
          author: "周杰伦",
          img: "https://colddb.netlify.app/images/听见下雨的声音.jpg",
          audio: "https://colddb.netlify.app/audio/听见下雨的声音.mp3",

        },
        {
          name: "胆小鬼",
          author: "梁咏琪",
          img: "https://colddb.netlify.app/images/胆小鬼_梁咏琪.jpg",
          audio: "https://colddb.netlify.app/audio/胆小鬼_梁咏琪.mp3",

        },
        {
          name: "梦寐以求",
          author: "王力宏",
          img: "https://colddb.netlify.app/images/梦寐以求.jpg",
          audio: "https://colddb.netlify.app/audio/梦寐以求.mp3",

        },
        {
          name: "致爱(Your Song)",
          author: "鹿晗",
          img: "https://colddb.netlify.app/images/致爱_your_song.jpg",
          audio: "https://colddb.netlify.app/audio/致爱_your_song.mp3",

        },
        {
          name: "Party",
          author: "少女时代",
          img: "https://colddb.netlify.app/images/love_is_gone.jpg",
          audio: "https://colddb.netlify.app/audio/party_少女时代.mp3",

        },
        {
          name: "目及皆是你",
          author: "小蓝背心",
          img: "https://colddb.netlify.app/images/目及皆是你.jpg",
          audio: "https://colddb.netlify.app/audio/目及皆是你.mp3",

        },
        {
          name: "静悄悄",
          author: "陈泫孝",
          img: "https://colddb.netlify.app/images/静悄悄.jpg",
          audio: "https://colddb.netlify.app/audio/静悄悄.mp3",

        },
        {
          name: "Ringa Linga",
          author: "太阳",
          img: "https://colddb.netlify.app/images/ringa_linga.jpg",
          audio: "https://colddb.netlify.app/audio/ringa_linga.mp3",

        },
        {
          name: "超级冠军",
          author: "鹿晗",
          img: "https://colddb.netlify.app/images/超级冠军.jpg",
          audio: "https://colddb.netlify.app/audio/超级冠军.mp3",

        },
        {
          name: "On My Own",
          author: "Ashes Remain",
          img: "https://colddb.netlify.app/images/on_my_own.jpg",
          audio: "https://colddb.netlify.app/audio/on_my_own.mp3",

        },
        {
          name: "明天你好",
          author: "牛奶咖啡",
          img: "https://colddb.netlify.app/images/明天你好_牛奶咖啡.jpg",
          audio: "https://colddb.netlify.app/audio/明天你好_牛奶咖啡.mp3",

        },
        {
          name: "半岛铁盒",
          author: "周杰伦",
          img: "https://colddb.netlify.app/images/半岛铁盒.jpg",
          audio: "https://colddb.netlify.app/audio/半岛铁盒.mp3",

        },
        {
          name: "超级风格",
          author: "SpeXial",
          img: "https://colddb.netlify.app/images/超级风格.jpg",
          audio: "https://colddb.netlify.app/audio/超级风格.mp3",

        },
        {
          name: "鸭梨大",
          author: "至上励合",
          img: "https://colddb.netlify.app/images/鸭梨大.jpg",
          audio: "https://colddb.netlify.app/audio/鸭梨大.mp3",

        },
        {
          name: "Anti Hero",
          author: "Taylor Swift",
          img: "https://colddb.netlify.app/images/anti_hero.jpg",
          audio: "https://colddb.netlify.app/audio/anti_hero.mp3",

        },
        {
          name: "Butterfly",
          author: "BTS",
          img: "https://colddb.netlify.app/images/butterfly_bts.jpg",
          audio: "https://colddb.netlify.app/audio/butterfly_bts.mp3",

        },
        {
          name: "Empty",
          author: "Winner",
          img: "https://colddb.netlify.app/images/empty_winner.jpg",
          audio: "https://colddb.netlify.app/audio/empty_winner.mp3",

        },
        {
          name: "How You Like That",
          author: "BlackPink",
          img: "https://colddb.netlify.app/images/how_you_like_that.jpg",
          audio: "https://colddb.netlify.app/audio/how_you_like_that.mp3",

        },
        {
          name: "爱很简单",
          author: "陶喆",
          img: "https://colddb.netlify.app/images/爱很简单.jpg",
          audio: "https://colddb.netlify.app/audio/爱很简单.mp3",

        },
        {
          name: "寂寞烟火",
          author: "蓝心羽",
          img: "https://colddb.netlify.app/images/寂寞烟火.jpg",
          audio: "https://colddb.netlify.app/audio/寂寞烟火.mp3",

        },
        {
          name: "像鱼",
          author: "王贰浪",
          img: "https://colddb.netlify.app/images/像鱼.jpg",
          audio: "https://colddb.netlify.app/audio/像鱼.mp3",

        },
        {
          name: "侧脸",
          author: "于果",
          img: "https://colddb.netlify.app/images/侧脸.jpg",
          audio: "https://colddb.netlify.app/audio/侧脸.mp3",

        },
        {
          name: "可爱女人",
          author: "周杰伦",
          img: "https://colddb.netlify.app/images/可爱女人.jpg",
          audio: "https://colddb.netlify.app/audio/可爱女人.mp3",

        },
        {
          name: "Mojito",
          author: "周杰伦",
          img: "https://colddb.netlify.app/images/mojito.jpg",
          audio: "https://colddb.netlify.app/audio/mojito.mp3",

        },
        {
          name: "Workingman's Blues #2",
          author: "Bob Dylan",
          img: "https://colddb.netlify.app/images/workingmans_blues.jpg",
          audio: "https://colddb.netlify.app/audio/workingmans_blues.mp3",

        },
        {
          name: "风吹一夏",
          author: "DP龙猪",
          img: "https://colddb.netlify.app/images/风吹一夏.jpg",
          audio: "https://colddb.netlify.app/audio/风吹一夏.mp3",

        },
        {
          name: "Fragrance",
          author: "mahiru",
          img: "https://colddb.netlify.app/images/mahiru_fragrance.jpg",
          audio: "https://colddb.netlify.app/audio/mahiru_fragrance.mp3",

        },
        {
          name: "Like I Do",
          author: "J.Tajor",
          img: "https://colddb.netlify.app/images/like_i_do.jpg",
          audio: "https://colddb.netlify.app/audio/like_i_do.mp3",

        },
        {
          name: "心墙",
          author: "郭静",
          img: "https://colddb.netlify.app/images/心墙_郭静.jpg",
          audio: "https://colddb.netlify.app/audio/心墙_郭静.mp3",

        },
        {
          name: "Style",
          author: "Taylor Swift",
          img: "https://colddb.netlify.app/images/style_taylor.jpg",
          audio: "https://colddb.netlify.app/audio/style_taylor.mp3",

        },
        {
          name: "失落沙洲",
          author: "徐佳莹",
          img: "https://colddb.netlify.app/images/失落沙洲.jpg",
          audio: "https://colddb.netlify.app/audio/失落沙洲.mp3",

        },
        {
          name: "就是爱你",
          author: "陶喆",
          img: "https://colddb.netlify.app/images/就是爱你.jpg",
          audio: "https://colddb.netlify.app/audio/就是爱你.mp3",

        },
        {
          name: "练习",
          author: "刘德华",
          img: "https://colddb.netlify.app/images/练习.jpg",
          audio: "https://colddb.netlify.app/audio/练习.mp3",

        },
        {
          name: "第一次",
          author: "光良",
          img: "https://colddb.netlify.app/images/第一次.jpg",
          audio: "https://colddb.netlify.app/audio/第一次.mp3",

        },
        {
          name: "独家记忆",
          author: "陈小春",
          img: "https://colddb.netlify.app/images/独家记忆.jpg",
          audio: "https://colddb.netlify.app/audio/独家记忆.mp3",

        },
        {
          name: "醉清风",
          author: "弦子",
          img: "https://colddb.netlify.app/images/醉清风.jpg",
          audio: "https://colddb.netlify.app/audio/醉清风.mp3",

        },
        {
          name: "七里香",
          author: "周杰伦",
          img: "https://colddb.netlify.app/images/七里香.jpg",
          audio: "https://colddb.netlify.app/audio/七里香.mp3",

        },
        {
          name: "会呼吸的痛",
          author: "任雪晨",
          img: "https://colddb.netlify.app/images/会呼吸的痛.jpg",
          audio: "https://colddb.netlify.app/audio/会呼吸的痛.mp3",

        },
        {
          name: "囚鸟",
          author: "王小帅",
          img: "https://colddb.netlify.app/images/囚鸟.jpg",
          audio: "https://colddb.netlify.app/audio/囚鸟.mp3",

        },
        {
          name: "忽然之间",
          author: "莫文蔚",
          img: "https://colddb.netlify.app/images/忽然之间.jpg",
          audio: "https://colddb.netlify.app/audio/忽然之间.mp3",

        },
        {
          name: "情非得已",
          author: "庾澄庆",
          img: "https://colddb.netlify.app/images/情非得已.jpg",
          audio: "https://colddb.netlify.app/audio/情非得已.mp3",

        },
        {
          name: "背叛",
          author: "曹格",
          img: "https://colddb.netlify.app/images/背叛.jpg",
          audio: "https://colddb.netlify.app/audio/背叛.mp3",

        },
        {
          name: "永不失联的爱",
          author: "周兴哲",
          img: "https://colddb.netlify.app/images/永不失联的爱.jpg",
          audio: "https://colddb.netlify.app/audio/永不失联的爱.mp3",

        },
        {
          name: "Letting Go",
          author: "蔡健雅",
          img: "https://colddb.netlify.app/images/letting_go.jpg",
          audio: "https://colddb.netlify.app/audio/letting_go.mp3",

        },
        {
          name: "2am (feat. 茉ひる)",
          author: "VILLSHANA",
          img: "https://colddb.netlify.app/images/am2_feat.jpg",
          audio: "https://colddb.netlify.app/audio/am2_feat.mp3",

        },
        {
          name: "慢冷",
          author: "王一楠",
          img: "https://colddb.netlify.app/images/慢冷.jpg",
          audio: "https://colddb.netlify.app/audio/慢冷.mp3",

        },
        {
          name: "爱我别走",
          author: "张震岳",
          img: "https://colddb.netlify.app/images/爱我别走.jpg",
          audio: "https://colddb.netlify.app/audio/爱我别走.mp3",

        },
        {
          name: "听海",
          author: "张惠妹",
          img: "https://colddb.netlify.app/images/听海.jpg",
          audio: "https://colddb.netlify.app/audio/听海.mp3",

        },
        {
          name: "慢慢喜欢你",
          author: "莫文蔚",
          img: "https://colddb.netlify.app/images/慢慢喜欢你.jpg",
          audio: "https://colddb.netlify.app/audio/慢慢喜欢你.mp3",

        },
        {
          name: "恶作剧",
          author: "王蓝菌",
          img: "https://colddb.netlify.app/images/恶作剧.jpg",
          audio: "https://colddb.netlify.app/audio/恶作剧.mp3",

        },
        {
          name: "哭泣健康指南",
          author: "李幸倪",
          img: "https://colddb.netlify.app/images/哭泣健康指南.jpg",
          audio: "https://colddb.netlify.app/audio/哭泣健康指南.mp3",

        },
        {
          name: "唯一",
          author: "告五人",
          img: "https://colddb.netlify.app/images/唯一_告五人.jpg",
          audio: "https://colddb.netlify.app/audio/唯一_告五人.mp3",

        },
        {
          name: "浪费",
          author: "林宥嘉",
          img: "https://colddb.netlify.app/images/浪费.jpg",
          audio: "https://colddb.netlify.app/audio/浪费.mp3",

        },
        {
          name: "煎熬",
          author: "李佳薇",
          img: "https://colddb.netlify.app/images/煎熬.jpg",
          audio: "https://colddb.netlify.app/audio/煎熬.mp3",

        },
        {
          name: "你就不要想起我",
          author: "田馥甄",
          img: "https://colddb.netlify.app/images/你就不要想起我.jpg",
          audio: "https://colddb.netlify.app/audio/你就不要想起我.mp3",

        },
        {
          name: "年轮",
          author: "张碧晨",
          img: "https://colddb.netlify.app/images/年轮.jpg",
          audio: "https://colddb.netlify.app/audio/年轮.mp3",

        },
        {
          name: "以后别做朋友",
          author: "周兴哲",
          img: "https://colddb.netlify.app/images/以后别做朋友.jpg",
          audio: "https://colddb.netlify.app/audio/以后别做朋友.mp3",

        },
        {
          name: "关键词",
          author: "林俊杰",
          img: "https://colddb.netlify.app/images/关键词.jpg",
          audio: "https://colddb.netlify.app/audio/关键词.mp3",

        },
        {
          name: "不为谁而作的歌",
          author: "林俊杰",
          img: "https://colddb.netlify.app/images/不为谁而作的歌.jpg",
          audio: "https://colddb.netlify.app/audio/不为谁而作的歌.mp3",

        },
        {
          name: "Good bye",
          author: "HYOLYN",
          img: "https://colddb.netlify.app/images/hyolyn_goodbye.jpg",
          audio: "https://colddb.netlify.app/audio/hyolyn_goodbye.mp3",

        },
        {
          name: "爱上未来的你",
          author: "潘玮柏",
          img: "https://colddb.netlify.app/images/爱上未来的你.jpg",
          audio: "https://colddb.netlify.app/audio/爱上未来的你.mp3",

        },
        {
          name: "Need Conversation",
          author: "Jeong Hyo Bin&Joosiq",
          img: "https://colddb.netlify.app/images/need_conversation.jpg",
          audio: "https://colddb.netlify.app/audio/need_conversation.mp3",

        },
        {
          name: "More Than Words",
          author: "피아노맨&Joosiq",
          img: "https://colddb.netlify.app/images/more_than_words.jpg",
          audio: "https://colddb.netlify.app/audio/more_than_words.mp3",

        },
        {
          name: "Dear my X",
          author: "KyoungSeo",
          img: "https://colddb.netlify.app/images/dear_my_x.jpg",
          audio: "https://colddb.netlify.app/audio/dear_my_x.mp3",

        },
        {
          name: "天后",
          author: "陈势安",
          img: "https://colddb.netlify.app/images/天后.jpg",
          audio: "https://colddb.netlify.app/audio/天后.mp3",

        },
        {
          name: "exes",
          author: "Tate McRae",
          img: "https://colddb.netlify.app/images/exes.jpg",
          audio: "https://colddb.netlify.app/audio/exes.mp3",

        },
        {
          name: "greedy",
          author: "Tate McRae",
          img: "https://colddb.netlify.app/images/greedy.jpg",
          audio: "https://colddb.netlify.app/audio/greedy.mp3",

        },
        {
          name: "Better Off",
          author: "Alan Walker",
          img: "https://colddb.netlify.app/images/better_off.jpg",
          audio: "https://colddb.netlify.app/audio/better_off.mp3",

        },
        {
          name: "Alone",
          author: "Marshmello",
          img: "https://colddb.netlify.app/images/marshmello_alone.jpg",
          audio: "https://colddb.netlify.app/audio/marshmello_alone.mp3",

        },
        {
          name: "Work from Home",
          author: "Fifth Harmony",
          img: "https://colddb.netlify.app/images/work_from_home.jpg",
          audio: "https://colddb.netlify.app/audio/work_from_home.mp3",

        },
        {
          name: "Don't Start Now",
          author: "Dua Lipa",
          img: "https://colddb.netlify.app/images/dont_start_now.jpg",
          audio: "https://colddb.netlify.app/audio/dont_start_now.mp3",

        },
        {
          name: "Can't Feel My Face",
          author: "The Weeknd",
          img: "https://colddb.netlify.app/images/cant_feel_my_face.jpg",
          audio: "https://colddb.netlify.app/audio/cant_feel_my_face.mp3",

        },
        {
          name: "Monsters",
          author: "Katie Sky",
          img: "https://colddb.netlify.app/images/monsters.jpg",
          audio: "https://colddb.netlify.app/audio/monsters.mp3",

        },
        {
          name: "Titanium",
          author: "David Guetta",
          img: "https://colddb.netlify.app/images/titanium.jpg",
          audio: "https://colddb.netlify.app/audio/titanium.mp3",

        },
        {
          name: "Summer",
          author: "Calvin Harris",
          img: "https://colddb.netlify.app/images/summer_ch.jpg",
          audio: "https://colddb.netlify.app/audio/summer_ch.mp3",

        },
        {
          name: "Better Off Alone",
          author: "Josh Le Tissie",
          img: "https://colddb.netlify.app/images/better_off_alone.jpg",
          audio: "https://colddb.netlify.app/audio/better_off_alone.mp3",

        },
        {
          name: "Better Days",
          author: "Polo G",
          img: "https://colddb.netlify.app/images/better_days.jpg",
          audio: "https://colddb.netlify.app/audio/better_days.mp3",

        },
        {
          name: "Green Green Grass",
          author: "George Ezra",
          img: "https://colddb.netlify.app/images/green_green_grass.jpg",
          audio: "https://colddb.netlify.app/audio/green_green_grass.mp3",

        },
        {
          name: "Havana",
          author: "Camila Cabello",
          img: "https://colddb.netlify.app/images/havana.jpg",
          audio: "https://colddb.netlify.app/audio/havana.mp3",

        },
        {
          name: "Rather Be",
          author: "Clean Bandit",
          img: "https://colddb.netlify.app/images/rather_be.jpg",
          audio: "https://colddb.netlify.app/audio/rather_be.mp3",

        },
        {
          name: "Baby Don’t Hurt Me",
          author: "David Guetta",
          img: "https://colddb.netlify.app/images/baby_dont_hurt_me.jpg",
          audio: "https://colddb.netlify.app/audio/baby_dont_hurt_me.mp3",

        },
        {
          name: "Tik Tok",
          author: "Kesha",
          img: "https://colddb.netlify.app/images/tiktok.jpg",
          audio: "https://colddb.netlify.app/audio/tiktok.mp3",

        },
        {
          name: "Vampire",
          author: "Olivia Rodrigo",
          img: "https://colddb.netlify.app/images/vampire.jpg",
          audio: "https://colddb.netlify.app/audio/vampire.mp3",

        },
        {
          name: "Die Young",
          author: "Kesha",
          img: "https://colddb.netlify.app/images/die_young.jpg",
          audio: "https://colddb.netlify.app/audio/die_young.mp3",

        },
        {
          name: "Timber",
          author: "Kesha",
          img: "https://colddb.netlify.app/images/timber.jpg",
          audio: "https://colddb.netlify.app/audio/timber.mp3",

        },
        {
          name: "it is what it is",
          author: "Abe Parker",
          img: "https://colddb.netlify.app/images/it_is_what_it_is.jpg",
          audio: "https://colddb.netlify.app/audio/it_is_what_it_is.mp3",

        },
        {
          name: "Happier By Now",
          author: "Kai Wachi",
          img: "https://colddb.netlify.app/images/happier_by_now.jpg",
          audio: "https://colddb.netlify.app/audio/happier_by_now.mp3",

        },
        {
          name: "Levitating",
          author: "Dua Lipa",
          img: "https://colddb.netlify.app/images/levitating.jpg",
          audio: "https://colddb.netlify.app/audio/levitating.mp3",

        },
        {
          name: "Down",
          author: "Jay Sean",
          img: "https://colddb.netlify.app/images/down_js.jpg",
          audio: "https://colddb.netlify.app/audio/down_js.mp3",

        },
        {
          name: "Let Me Love You",
          author: "DJ Snake",
          img: "https://colddb.netlify.app/images/let_me_love_you.jpg",
          audio: "https://colddb.netlify.app/audio/let_me_love_you.mp3",

        },
        {
          name: "You Don't Know Me",
          author: "Ofenbach",
          img: "https://colddb.netlify.app/images/baby_you_dont_know_me.jpg",
          audio: "https://colddb.netlify.app/audio/baby_you_dont_know_me.mp3",

        },
        {
          name: "Diff.",
          author: "Gin Lee",
          img: "https://colddb.netlify.app/images/diff.jpg",
          audio: "https://colddb.netlify.app/audio/diff.mp3",

        },
        {
          name: "离开地球表面",
          author: "五月天",
          img: "https://colddb.netlify.app/images/离开地球表面.jpg",
          audio: "https://colddb.netlify.app/audio/离开地球表面.mp3",

        },
        {
          name: "让我留在你身边",
          author: "陈奕迅",
          img: "https://colddb.netlify.app/images/让我留在你身边.jpg",
          audio: "https://colddb.netlify.app/audio/让我留在你身边.mp3",

        },
        {
          name: "怒放",
          author: "G-Dragon",
          img: "https://colddb.netlify.app/images/怒放.jpg",
          audio: "https://colddb.netlify.app/audio/怒放.mp3",

        },
        {
          name: "Two at A Time",
          author: "AGA",
          img: "https://colddb.netlify.app/images/two_at_a_time.jpg",
          audio: "https://colddb.netlify.app/audio/two_at_a_time.mp3",

        },
        {
          name: "皮思苦",
          author: "陳瑞輝",
          img: "https://colddb.netlify.app/images/皮思苦.jpg",
          audio: "https://colddb.netlify.app/audio/皮思苦.mp3",

        },
        {
          name: "INYU",
          author: "TAEYEON",
          img: "https://colddb.netlify.app/images/inyu.jpg",
          audio: "https://colddb.netlify.app/audio/inyu.mp3",

        },
        {
          name: "Favourite Jeans",
          author: "moon tang",
          img: "https://colddb.netlify.app/images/favourite_jeans.jpg",
          audio: "https://colddb.netlify.app/audio/favourite_jeans.mp3",

        },
        {
          name: "万人邂逅",
          author: "陈咏桐",
          img: "https://colddb.netlify.app/images/万人邂逅.jpg",
          audio: "https://colddb.netlify.app/audio/万人邂逅.mp3",

        },
        {
          name: "abcdefu",
          author: "GAYLE",
          img: "https://colddb.netlify.app/images/abcdefu.jpg",
          audio: "https://colddb.netlify.app/audio/abcdefu.mp3",

        },
        {
          name: "Someone You Loved",
          author: "刘易斯·卡帕尔迪",
          img: "https://colddb.netlify.app/images/someone_you_loved.jpg",
          audio: "https://colddb.netlify.app/audio/someone_you_loved.mp3",

        },
        {
          name: "I Hate Myself Sometimes",
          author: "李浩瑋",
          img: "https://colddb.netlify.app/images/i_hate_myself_sometimes.jpg",
          audio: "https://colddb.netlify.app/audio/i_hate_myself_sometimes.mp3",

        },
        {
          name: "Sweet but Psycho",
          author: "Ava Max",
          img: "https://colddb.netlify.app/images/sweet_but_psycho.jpg",
          audio: "https://colddb.netlify.app/audio/sweet_but_psycho.mp3",

        },
        {
          name: "Love U Like That",
          author: "Lauv",
          img: "https://colddb.netlify.app/images/love_u_like_that.jpg",
          audio: "https://colddb.netlify.app/audio/love_u_like_that.mp3",

        },
        {
          name: "All Fails Down",
          author: "Alan Walker",
          img: "https://colddb.netlify.app/images/all_fails_down.jpg",
          audio: "https://colddb.netlify.app/audio/all_fails_down.mp3",

        },
        {
          name: "Savage Love",
          author: "Jawsh 685",
          img: "https://colddb.netlify.app/images/savage_love.jpg",
          audio: "https://colddb.netlify.app/audio/savage_love.mp3",

        },
        {
          name: "Price Tag",
          author: "Jessie J",
          img: "https://colddb.netlify.app/images/price_tag.jpg",
          audio: "https://colddb.netlify.app/audio/price_tag.mp3",

        },
        {
          name: "Counting Stars",
          author: "OneRepublic",
          img: "https://colddb.netlify.app/images/counting_stars.jpg",
          audio: "https://colddb.netlify.app/audio/counting_stars.mp3",

        },
        {
          name: "Love Is Gone",
          author: "SLANDER",
          img: "https://colddb.netlify.app/images/love_is_gone.jpg",
          audio: "https://colddb.netlify.app/audio/love_is_gone.mp3",

        },
        {
          name: "How To Love ft Sofia Reyes",
          author: "Cash Cash",
          img: "https://colddb.netlify.app/images/how_to_love_ft.jpg",
          audio: "https://colddb.netlify.app/audio/how_to_love_ft.mp3",

        },
        {
          name: "In The Name Of Love",
          author: "Martin Garrix",
          img: "https://colddb.netlify.app/images/in_the_name_of_love.jpg",
          audio: "https://colddb.netlify.app/audio/in_the_name_of_love.mp3",

        },
        {
          name: "Ghost",
          author: "Justin Bieber",
          img: "https://colddb.netlify.app/images/jb_ghost.jpg",
          audio: "https://colddb.netlify.app/audio/jb_ghost.mp3",

        },
        {
          name: "Why Don't We",
          author: "8 Letters",
          img: "https://colddb.netlify.app/images/why_dont_we.jpg",
          audio: "https://colddb.netlify.app/audio/why_dont_we.mp3",

        },
        {
          name: "Pretty Girl",
          author: "Maggie Lindemann",
          img: "https://colddb.netlify.app/images/pretty_girl.jpg",
          audio: "https://colddb.netlify.app/audio/pretty_girl.mp3",

        },
        {
          name: "The Middle",
          author: "Zedd, Maren",
          img: "https://colddb.netlify.app/images/the_middle.jpg",
          audio: "https://colddb.netlify.app/audio/the_middle.mp3",

        },
        {
          name: "Hall of Fame",
          author: "The Script",
          img: "https://colddb.netlify.app/images/hall_of_fame.jpg",
          audio: "https://colddb.netlify.app/audio/hall_of_fame.mp3",

        },
        {
          name: "Intentions",
          author: "Justin Bieber",
          img: "https://colddb.netlify.app/images/Intentions.jpg",
          audio: "https://colddb.netlify.app/audio/Intentions.mp3",

        },
        {
          name: "Roar",
          author: "Katy Perry",
          img: "https://colddb.netlify.app/images/Roar.jpg",
          audio: "https://colddb.netlify.app/audio/Roar.mp3",

        },
        {
          name: "The Nights",
          author: "Avicii",
          img: "https://colddb.netlify.app/images/the_nights.jpg",
          audio: "https://colddb.netlify.app/audio/the_nights.mp3",

        },
        {
          name: "Shake It Off",
          author: "Taylor Swift",
          img: "https://colddb.netlify.app/images/shake_it_off.jpg",
          audio: "https://colddb.netlify.app/audio/shake_it_off.mp3",

        },
        {
          name: "Love Me Like You Do",
          author: "Ellie Goulding",
          img: "https://colddb.netlify.app/images/love_me_like_you_do.jpg",
          audio: "https://colddb.netlify.app/audio/love_me_like_you_do.mp3",

        },
        {
          name: "Firework",
          author: "Katy Perry",
          img: "https://colddb.netlify.app/images/firework_kp.jpg",
          audio: "https://colddb.netlify.app/audio/firework_kp.mp3",

        },
        {
          name: "Dandelions",
          author: "Ruth B",
          img: "https://colddb.netlify.app/images/Dandelions_rb.jpg",
          audio: "https://colddb.netlify.app/audio/Dandelions_rb.mp3",

        },
        {
          name: "Habits",
          author: "Tove Lo",
          img: "https://colddb.netlify.app/images/habits_tl.jpg",
          audio: "https://colddb.netlify.app/audio/habits_tl.mp3",

        },


      ],
      pause: false
    });
    _defineProperty(this, "changeCurrentTime",
      e => {
        const duration = this.playerRef.duration;

        const playheadWidth = this.timelineRef.offsetWidth;
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;

        const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

        this.playheadRef.style.width = userClickWidhtInPercent + "%";
        this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
      });

    _defineProperty(this, "hoverTimeLine",

      e => {
        const duration = this.playerRef.duration;

        const playheadWidth = this.timelineRef.offsetWidth;

        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

        if (userClickWidhtInPercent <= 100) {
          this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
        }

        const time = duration * userClickWidhtInPercent / 100;

        if (time >= 0 && time <= duration) {
          this.hoverPlayheadRef.dataset.content = this.formatTime(time);
        }
      });

    _defineProperty(this, "resetTimeLine",

      () => {
        this.hoverPlayheadRef.style.width = 0;
      });
    _defineProperty(this, "timeUpdate",

      () => {
        const duration = this.playerRef.duration;
        const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
        const playPercent = 100 * (this.playerRef.currentTime / duration);
        this.playheadRef.style.width = playPercent + "%";
        const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
        this.setState({
          currentTime
        });

      });

    _defineProperty(this, "formatTime",

      currentTime => {
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);

        seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

        const formatTime = minutes + ":" + seconds;

        return formatTime;
      });

    _defineProperty(this, "updatePlayer",

      () => {
        const {
          musicList,
          index
        } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        this.playerRef.load();
      });

    _defineProperty(this, "nextSong",

      () => {
        const {
          musicList,
          index,
          pause
        } = this.state;

        this.setState({
          index: (index + 1) % musicList.length
        });

        this.updatePlayer();
        if (pause) {
          this.playerRef.play();
        }
      });

    _defineProperty(this, "prevSong",

      () => {
        const {
          musicList,
          index,
          pause
        } = this.state;

        this.setState({
          index: (index + musicList.length - 1) % musicList.length
        });

        this.updatePlayer();
        if (pause) {
          this.playerRef.play();
        }
      });

    _defineProperty(this, "playOrPause",


      () => {
        const {
          musicList,
          index,
          pause
        } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        if (!this.state.pause) {
          this.playerRef.play();
        } else {
          this.playerRef.pause();
        }
        this.setState({
          pause: !pause
        });

      });

    _defineProperty(this, "clickAudio",

      key => {
        const {
          pause
        } = this.state;

        this.setState({
          index: key
        });


        this.updatePlayer();
        if (pause) {
          this.playerRef.play();
        }
      });
  }
  componentDidMount() {
    this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
    this.playerRef.addEventListener("ended", this.nextSong, false);
    this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
    this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
    this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
  }
  componentWillUnmount() {
    this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
    this.playerRef.removeEventListener("ended", this.nextSong);
    this.timelineRef.removeEventListener("click", this.changeCurrentTime);
    this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
    this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
  }


  render() {
    const {
      musicList,
      index,
      currentTime,
      pause
    } = this.state;
    const currentSong = musicList[index];
    return (
      React.createElement("div", {
        className: "card"
      },
        React.createElement("div", {
          className: "current-song"
        },
          React.createElement("audio", {
            ref: ref => this.playerRef = ref
          },
            React.createElement("source", {
              src: currentSong.audio,
              type: "audio/ogg"
            }), "Your browser does not support the audio element."),


          React.createElement("div", {
            className: "img-wrap"
          },
            React.createElement("img", {
              src: currentSong.img
            })),

          React.createElement("span", {
            className: "song-name"
          }, currentSong.name),
          React.createElement("span", {
            className: "song-autor"
          }, currentSong.author),

          React.createElement("div", {
            className: "time"
          },
            React.createElement("div", {
              className: "current-time"
            }, currentTime),
            React.createElement("div", {
              className: "end-time"
            }, currentSong.duration)),


          React.createElement("div", {
            ref: ref => this.timelineRef = ref,
            id: "timeline"
          },
            React.createElement("div", {
              ref: ref => this.playheadRef = ref,
              id: "playhead"
            }),
            React.createElement("div", {
              ref: ref => this.hoverPlayheadRef = ref,
              class: "hover-playhead",
              "data-content": "0:00"
            })),


          React.createElement("div", {
            className: "controls"
          },
            React.createElement("button", {
              onClick: this.prevSong,
              className: "prev prev-next current-btn"
            }, React.createElement("i", {
              className: "fas fa-backward"
            })),

            React.createElement("button", {
              onClick: this.playOrPause,
              className: "play current-btn"
            },

              !pause ? React.createElement("i", {
                className: "fas fa-play"
              }) :
                React.createElement("i", {
                  class: "fas fa-pause"
                })),


            React.createElement("button", {
              onClick: this.nextSong,
              className: "next prev-next current-btn"
            }, React.createElement("i", {
              className: "fas fa-forward"
            })))),



        React.createElement("div", {
          className: "play-list"
        },
          musicList.map((music, key = 0) =>
            React.createElement("div", {
              key: key,
              onClick: () => this.clickAudio(key),
              className: "track " + (
                index === key && !pause ? 'current-audio' : '') + (
                  index === key && pause ? 'play-now' : '')
            },

              React.createElement("img", {
                className: "track-img",
                src: music.img
              }),
              React.createElement("div", {
                className: "track-discr"
              },
                React.createElement("span", {
                  className: "track-name"
                }, music.name),
                React.createElement("span", {
                  className: "track-author"
                }, music.author)),

              React.createElement("span", {
                className: "track-duration"
              },
                index === key ?
                  currentTime :
                  music.duration))))));


  }
}


ReactDOM.render(
  React.createElement(CardProfile, null),
  document.getElementById('root'));