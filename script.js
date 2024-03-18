/*
js-code by - https://codepen.io/JavaScriptJunkie/pen/qBWrRyg?editors=1000
design by Filip Legierski.
design: https://dribbble.com/shots/9338617-Simple-Music-Player
*/

var app = new Vue({
  el: "#app",
  data: {
    audio: "",
    imgLoaded: false,
    currentlyPlaying: false,
    currentlyStopped: false,
    currentTime: 0,
    checkingCurrentPositionInTrack: "",
    trackDuration: 0,
    currentProgressBar: 0,
    isPlaylistActive: false,
    currentSong: 0,
    debug: false,
    musicPlaylist:  [
        {
          artist: "By Your Side",
          title: "Jonas Blue",
          image: "https://colddb.netlify.app/images/by_your_side.jpg",
          url: "https://colddb.netlify.app/audio/by_your_side.mp3",

        },
        {
          artist: "CONTIGO",
          title: "KAROL G",
          image: "https://colddb.netlify.app/images/contigo.jpg",
          url: "https://colddb.netlify.app/audio/contigo.mp3",

        },
        {
          artist: "Baby I Need You",
          title: "sped up 8282&Joosiq",
          image: "https://colddb.netlify.app/images/baby_i_need_you.jpg",
          url: "https://colddb.netlify.app/audio/baby_i_need_you.mp3",

        },
        {
          artist: "一个人想着一个人",
          title: "曾沛慈",
          image: "https://colddb.netlify.app/images/一个人想着一个人.jpg",
          url: "https://colddb.netlify.app/audio/一个人想着一个人.mp3",

        },
        {
          artist: "秘密",
          title: "蓝又时",
          image: "https://colddb.netlify.app/images/秘密_蓝又时.jpg",
          url: "https://colddb.netlify.app/audio/秘密_蓝又时.mp3",

        },
        {
          artist: "Gone",
          title: "Rose",
          image: "https://colddb.netlify.app/images/gone_rose.jpg",
          url: "https://colddb.netlify.app/audio/gone_rose.mp3",

        },
        {
          artist: "手放开",
          title: "李圣杰",
          image: "https://colddb.netlify.app/images/手放开.jpg",
          url: "https://colddb.netlify.app/audio/手放开.mp3",

        },
        {
          artist: "情人",
          title: "杜德伟",
          image: "https://colddb.netlify.app/images/情人_杜德伟.jpg",
          url: "https://colddb.netlify.app/audio/情人_杜德伟.mp3",

        },
        {
          artist: "听见下雨的声音",
          title: "周杰伦",
          image: "https://colddb.netlify.app/images/听见下雨的声音.jpg",
          url: "https://colddb.netlify.app/audio/听见下雨的声音.mp3",

        },
        {
          artist: "胆小鬼",
          title: "梁咏琪",
          image: "https://colddb.netlify.app/images/胆小鬼_梁咏琪.jpg",
          url: "https://colddb.netlify.app/audio/胆小鬼_梁咏琪.mp3",

        },
        {
          artist: "梦寐以求",
          title: "王力宏",
          image: "https://colddb.netlify.app/images/梦寐以求.jpg",
          url: "https://colddb.netlify.app/audio/梦寐以求.mp3",

        },
        {
          artist: "致爱(Your Song)",
          title: "鹿晗",
          image: "https://colddb.netlify.app/images/致爱_your_song.jpg",
          url: "https://colddb.netlify.app/audio/致爱_your_song.mp3",

        },
        {
          artist: "Party",
          title: "少女时代",
          image: "https://colddb.netlify.app/images/love_is_gone.jpg",
          url: "https://colddb.netlify.app/audio/party_少女时代.mp3",

        },
        {
          artist: "目及皆是你",
          title: "小蓝背心",
          image: "https://colddb.netlify.app/images/目及皆是你.jpg",
          url: "https://colddb.netlify.app/audio/目及皆是你.mp3",

        },
        {
          artist: "静悄悄",
          title: "陈泫孝",
          image: "https://colddb.netlify.app/images/静悄悄.jpg",
          url: "https://colddb.netlify.app/audio/静悄悄.mp3",

        },
        {
          artist: "Ringa Linga",
          title: "太阳",
          image: "https://colddb.netlify.app/images/ringa_linga.jpg",
          url: "https://colddb.netlify.app/audio/ringa_linga.mp3",

        },
        {
          artist: "超级冠军",
          title: "鹿晗",
          image: "https://colddb.netlify.app/images/超级冠军.jpg",
          url: "https://colddb.netlify.app/audio/超级冠军.mp3",

        },
        {
          artist: "On My Own",
          title: "Ashes Remain",
          image: "https://colddb.netlify.app/images/on_my_own.jpg",
          url: "https://colddb.netlify.app/audio/on_my_own.mp3",

        },
        {
          artist: "明天你好",
          title: "牛奶咖啡",
          image: "https://colddb.netlify.app/images/明天你好_牛奶咖啡.jpg",
          url: "https://colddb.netlify.app/audio/明天你好_牛奶咖啡.mp3",

        },
        {
          artist: "半岛铁盒",
          title: "周杰伦",
          image: "https://colddb.netlify.app/images/半岛铁盒.jpg",
          url: "https://colddb.netlify.app/audio/半岛铁盒.mp3",

        },
        {
          artist: "超级风格",
          title: "SpeXial",
          image: "https://colddb.netlify.app/images/超级风格.jpg",
          url: "https://colddb.netlify.app/audio/超级风格.mp3",

        },
        {
          artist: "鸭梨大",
          title: "至上励合",
          image: "https://colddb.netlify.app/images/鸭梨大.jpg",
          url: "https://colddb.netlify.app/audio/鸭梨大.mp3",

        },
        {
          artist: "Anti Hero",
          title: "Taylor Swift",
          image: "https://colddb.netlify.app/images/anti_hero.jpg",
          url: "https://colddb.netlify.app/audio/anti_hero.mp3",

        },
        {
          artist: "Butterfly",
          title: "BTS",
          image: "https://colddb.netlify.app/images/butterfly_bts.jpg",
          url: "https://colddb.netlify.app/audio/butterfly_bts.mp3",

        },
        {
          artist: "Empty",
          title: "Winner",
          image: "https://colddb.netlify.app/images/empty_winner.jpg",
          url: "https://colddb.netlify.app/audio/empty_winner.mp3",

        },
        {
          artist: "How You Like That",
          title: "BlackPink",
          image: "https://colddb.netlify.app/images/how_you_like_that.jpg",
          url: "https://colddb.netlify.app/audio/how_you_like_that.mp3",

        },
        {
          artist: "爱很简单",
          title: "陶喆",
          image: "https://colddb.netlify.app/images/爱很简单.jpg",
          url: "https://colddb.netlify.app/audio/爱很简单.mp3",

        },
        {
          artist: "寂寞烟火",
          title: "蓝心羽",
          image: "https://colddb.netlify.app/images/寂寞烟火.jpg",
          url: "https://colddb.netlify.app/audio/寂寞烟火.mp3",

        },
        {
          artist: "像鱼",
          title: "王贰浪",
          image: "https://colddb.netlify.app/images/像鱼.jpg",
          url: "https://colddb.netlify.app/audio/像鱼.mp3",

        },
        {
          artist: "侧脸",
          title: "于果",
          image: "https://colddb.netlify.app/images/侧脸.jpg",
          url: "https://colddb.netlify.app/audio/侧脸.mp3",

        },
        {
          artist: "可爱女人",
          title: "周杰伦",
          image: "https://colddb.netlify.app/images/可爱女人.jpg",
          url: "https://colddb.netlify.app/audio/可爱女人.mp3",

        },
        {
          artist: "Mojito",
          title: "周杰伦",
          image: "https://colddb.netlify.app/images/mojito.jpg",
          url: "https://colddb.netlify.app/audio/mojito.mp3",

        },
        {
          artist: "Workingman's Blues #2",
          title: "Bob Dylan",
          image: "https://colddb.netlify.app/images/workingmans_blues.jpg",
          url: "https://colddb.netlify.app/audio/workingmans_blues.mp3",

        },
        {
          artist: "风吹一夏",
          title: "DP龙猪",
          image: "https://colddb.netlify.app/images/风吹一夏.jpg",
          url: "https://colddb.netlify.app/audio/风吹一夏.mp3",

        },
        {
          artist: "Fragrance",
          title: "mahiru",
          image: "https://colddb.netlify.app/images/mahiru_fragrance.jpg",
          url: "https://colddb.netlify.app/audio/mahiru_fragrance.mp3",

        },
        {
          artist: "Like I Do",
          title: "J.Tajor",
          image: "https://colddb.netlify.app/images/like_i_do.jpg",
          url: "https://colddb.netlify.app/audio/like_i_do.mp3",

        },
        {
          artist: "心墙",
          title: "郭静",
          image: "https://colddb.netlify.app/images/心墙_郭静.jpg",
          url: "https://colddb.netlify.app/audio/心墙_郭静.mp3",

        },
        {
          artist: "Style",
          title: "Taylor Swift",
          image: "https://colddb.netlify.app/images/style_taylor.jpg",
          url: "https://colddb.netlify.app/audio/style_taylor.mp3",

        },
        {
          artist: "失落沙洲",
          title: "徐佳莹",
          image: "https://colddb.netlify.app/images/失落沙洲.jpg",
          url: "https://colddb.netlify.app/audio/失落沙洲.mp3",

        },
        {
          artist: "就是爱你",
          title: "陶喆",
          image: "https://colddb.netlify.app/images/就是爱你.jpg",
          url: "https://colddb.netlify.app/audio/就是爱你.mp3",

        },
        {
          artist: "练习",
          title: "刘德华",
          image: "https://colddb.netlify.app/images/练习.jpg",
          url: "https://colddb.netlify.app/audio/练习.mp3",

        },
        {
          artist: "第一次",
          title: "光良",
          image: "https://colddb.netlify.app/images/第一次.jpg",
          url: "https://colddb.netlify.app/audio/第一次.mp3",

        },
        {
          artist: "独家记忆",
          title: "陈小春",
          image: "https://colddb.netlify.app/images/独家记忆.jpg",
          url: "https://colddb.netlify.app/audio/独家记忆.mp3",

        },
        {
          artist: "醉清风",
          title: "弦子",
          image: "https://colddb.netlify.app/images/醉清风.jpg",
          url: "https://colddb.netlify.app/audio/醉清风.mp3",

        },
        {
          artist: "七里香",
          title: "周杰伦",
          image: "https://colddb.netlify.app/images/七里香.jpg",
          url: "https://colddb.netlify.app/audio/七里香.mp3",

        },
        {
          artist: "会呼吸的痛",
          title: "任雪晨",
          image: "https://colddb.netlify.app/images/会呼吸的痛.jpg",
          url: "https://colddb.netlify.app/audio/会呼吸的痛.mp3",

        },
        {
          artist: "囚鸟",
          title: "王小帅",
          image: "https://colddb.netlify.app/images/囚鸟.jpg",
          url: "https://colddb.netlify.app/audio/囚鸟.mp3",

        },
        {
          artist: "忽然之间",
          title: "莫文蔚",
          image: "https://colddb.netlify.app/images/忽然之间.jpg",
          url: "https://colddb.netlify.app/audio/忽然之间.mp3",

        },
        {
          artist: "情非得已",
          title: "庾澄庆",
          image: "https://colddb.netlify.app/images/情非得已.jpg",
          url: "https://colddb.netlify.app/audio/情非得已.mp3",

        },
        {
          artist: "背叛",
          title: "曹格",
          image: "https://colddb.netlify.app/images/背叛.jpg",
          url: "https://colddb.netlify.app/audio/背叛.mp3",

        },
        {
          artist: "永不失联的爱",
          title: "周兴哲",
          image: "https://colddb.netlify.app/images/永不失联的爱.jpg",
          url: "https://colddb.netlify.app/audio/永不失联的爱.mp3",

        },
        {
          artist: "Letting Go",
          title: "蔡健雅",
          image: "https://colddb.netlify.app/images/letting_go.jpg",
          url: "https://colddb.netlify.app/audio/letting_go.mp3",

        },
        {
          artist: "2am (feat. 茉ひる)",
          title: "VILLSHANA",
          image: "https://colddb.netlify.app/images/am2_feat.jpg",
          url: "https://colddb.netlify.app/audio/am2_feat.mp3",

        },
        {
          artist: "慢冷",
          title: "王一楠",
          image: "https://colddb.netlify.app/images/慢冷.jpg",
          url: "https://colddb.netlify.app/audio/慢冷.mp3",

        },
        {
          artist: "爱我别走",
          title: "张震岳",
          image: "https://colddb.netlify.app/images/爱我别走.jpg",
          url: "https://colddb.netlify.app/audio/爱我别走.mp3",

        },
        {
          artist: "听海",
          title: "张惠妹",
          image: "https://colddb.netlify.app/images/听海.jpg",
          url: "https://colddb.netlify.app/audio/听海.mp3",

        },
        {
          artist: "慢慢喜欢你",
          title: "莫文蔚",
          image: "https://colddb.netlify.app/images/慢慢喜欢你.jpg",
          url: "https://colddb.netlify.app/audio/慢慢喜欢你.mp3",

        },
        {
          artist: "恶作剧",
          title: "王蓝菌",
          image: "https://colddb.netlify.app/images/恶作剧.jpg",
          url: "https://colddb.netlify.app/audio/恶作剧.mp3",

        },
        {
          artist: "哭泣健康指南",
          title: "李幸倪",
          image: "https://colddb.netlify.app/images/哭泣健康指南.jpg",
          url: "https://colddb.netlify.app/audio/哭泣健康指南.mp3",

        },
        {
          artist: "唯一",
          title: "告五人",
          image: "https://colddb.netlify.app/images/唯一_告五人.jpg",
          url: "https://colddb.netlify.app/audio/唯一_告五人.mp3",

        },
        {
          artist: "浪费",
          title: "林宥嘉",
          image: "https://colddb.netlify.app/images/浪费.jpg",
          url: "https://colddb.netlify.app/audio/浪费.mp3",

        },
        {
          artist: "煎熬",
          title: "李佳薇",
          image: "https://colddb.netlify.app/images/煎熬.jpg",
          url: "https://colddb.netlify.app/audio/煎熬.mp3",

        },
        {
          artist: "你就不要想起我",
          title: "田馥甄",
          image: "https://colddb.netlify.app/images/你就不要想起我.jpg",
          url: "https://colddb.netlify.app/audio/你就不要想起我.mp3",

        },
        {
          artist: "年轮",
          title: "张碧晨",
          image: "https://colddb.netlify.app/images/年轮.jpg",
          url: "https://colddb.netlify.app/audio/年轮.mp3",

        },
        {
          artist: "以后别做朋友",
          title: "周兴哲",
          image: "https://colddb.netlify.app/images/以后别做朋友.jpg",
          url: "https://colddb.netlify.app/audio/以后别做朋友.mp3",

        },
        {
          artist: "关键词",
          title: "林俊杰",
          image: "https://colddb.netlify.app/images/关键词.jpg",
          url: "https://colddb.netlify.app/audio/关键词.mp3",

        },
        {
          artist: "不为谁而作的歌",
          title: "林俊杰",
          image: "https://colddb.netlify.app/images/不为谁而作的歌.jpg",
          url: "https://colddb.netlify.app/audio/不为谁而作的歌.mp3",

        },
        {
          artist: "Good bye",
          title: "HYOLYN",
          image: "https://colddb.netlify.app/images/hyolyn_goodbye.jpg",
          url: "https://colddb.netlify.app/audio/hyolyn_goodbye.mp3",

        },
        {
          artist: "爱上未来的你",
          title: "潘玮柏",
          image: "https://colddb.netlify.app/images/爱上未来的你.jpg",
          url: "https://colddb.netlify.app/audio/爱上未来的你.mp3",

        },
        {
          artist: "Need Conversation",
          title: "Jeong Hyo Bin&Joosiq",
          image: "https://colddb.netlify.app/images/need_conversation.jpg",
          url: "https://colddb.netlify.app/audio/need_conversation.mp3",

        },
        {
          artist: "More Than Words",
          title: "피아노맨&Joosiq",
          image: "https://colddb.netlify.app/images/more_than_words.jpg",
          url: "https://colddb.netlify.app/audio/more_than_words.mp3",

        },
        {
          artist: "Dear my X",
          title: "KyoungSeo",
          image: "https://colddb.netlify.app/images/dear_my_x.jpg",
          url: "https://colddb.netlify.app/audio/dear_my_x.mp3",

        },
        {
          artist: "天后",
          title: "陈势安",
          image: "https://colddb.netlify.app/images/天后.jpg",
          url: "https://colddb.netlify.app/audio/天后.mp3",

        },
        {
          artist: "exes",
          title: "Tate McRae",
          image: "https://colddb.netlify.app/images/exes.jpg",
          url: "https://colddb.netlify.app/audio/exes.mp3",

        },
        {
          artist: "greedy",
          title: "Tate McRae",
          image: "https://colddb.netlify.app/images/greedy.jpg",
          url: "https://colddb.netlify.app/audio/greedy.mp3",

        },
        {
          artist: "Better Off",
          title: "Alan Walker",
          image: "https://colddb.netlify.app/images/better_off.jpg",
          url: "https://colddb.netlify.app/audio/better_off.mp3",

        },
        {
          artist: "Alone",
          title: "Marshmello",
          image: "https://colddb.netlify.app/images/marshmello_alone.jpg",
          url: "https://colddb.netlify.app/audio/marshmello_alone.mp3",

        },
        {
          artist: "Work from Home",
          title: "Fifth Harmony",
          image: "https://colddb.netlify.app/images/work_from_home.jpg",
          url: "https://colddb.netlify.app/audio/work_from_home.mp3",

        },
        {
          artist: "Don't Start Now",
          title: "Dua Lipa",
          image: "https://colddb.netlify.app/images/dont_start_now.jpg",
          url: "https://colddb.netlify.app/audio/dont_start_now.mp3",

        },
        {
          artist: "Can't Feel My Face",
          title: "The Weeknd",
          image: "https://colddb.netlify.app/images/cant_feel_my_face.jpg",
          url: "https://colddb.netlify.app/audio/cant_feel_my_face.mp3",

        },
        {
          artist: "Monsters",
          title: "Katie Sky",
          image: "https://colddb.netlify.app/images/monsters.jpg",
          url: "https://colddb.netlify.app/audio/monsters.mp3",

        },
        {
          artist: "Titanium",
          title: "David Guetta",
          image: "https://colddb.netlify.app/images/titanium.jpg",
          url: "https://colddb.netlify.app/audio/titanium.mp3",

        },
        {
          artist: "Summer",
          title: "Calvin Harris",
          image: "https://colddb.netlify.app/images/summer_ch.jpg",
          url: "https://colddb.netlify.app/audio/summer_ch.mp3",

        },
        {
          artist: "Better Off Alone",
          title: "Josh Le Tissie",
          image: "https://colddb.netlify.app/images/better_off_alone.jpg",
          url: "https://colddb.netlify.app/audio/better_off_alone.mp3",

        },
        {
          artist: "Better Days",
          title: "Polo G",
          image: "https://colddb.netlify.app/images/better_days.jpg",
          url: "https://colddb.netlify.app/audio/better_days.mp3",

        },
        {
          artist: "Green Green Grass",
          title: "George Ezra",
          image: "https://colddb.netlify.app/images/green_green_grass.jpg",
          url: "https://colddb.netlify.app/audio/green_green_grass.mp3",

        },
        {
          artist: "Havana",
          title: "Camila Cabello",
          image: "https://colddb.netlify.app/images/havana.jpg",
          url: "https://colddb.netlify.app/audio/havana.mp3",

        },
        {
          artist: "Rather Be",
          title: "Clean Bandit",
          image: "https://colddb.netlify.app/images/rather_be.jpg",
          url: "https://colddb.netlify.app/audio/rather_be.mp3",

        },
        {
          artist: "Baby Don’t Hurt Me",
          title: "David Guetta",
          image: "https://colddb.netlify.app/images/baby_dont_hurt_me.jpg",
          url: "https://colddb.netlify.app/audio/baby_dont_hurt_me.mp3",

        },
        {
          artist: "Tik Tok",
          title: "Kesha",
          image: "https://colddb.netlify.app/images/tiktok.jpg",
          url: "https://colddb.netlify.app/audio/tiktok.mp3",

        },
        {
          artist: "Vampire",
          title: "Olivia Rodrigo",
          image: "https://colddb.netlify.app/images/vampire.jpg",
          url: "https://colddb.netlify.app/audio/vampire.mp3",

        },
        {
          artist: "Die Young",
          title: "Kesha",
          image: "https://colddb.netlify.app/images/die_young.jpg",
          url: "https://colddb.netlify.app/audio/die_young.mp3",

        },
        {
          artist: "Timber",
          title: "Kesha",
          image: "https://colddb.netlify.app/images/timber.jpg",
          url: "https://colddb.netlify.app/audio/timber.mp3",

        },
        {
          artist: "it is what it is",
          title: "Abe Parker",
          image: "https://colddb.netlify.app/images/it_is_what_it_is.jpg",
          url: "https://colddb.netlify.app/audio/it_is_what_it_is.mp3",

        },
        {
          artist: "Happier By Now",
          title: "Kai Wachi",
          image: "https://colddb.netlify.app/images/happier_by_now.jpg",
          url: "https://colddb.netlify.app/audio/happier_by_now.mp3",

        },
        {
          artist: "Levitating",
          title: "Dua Lipa",
          image: "https://colddb.netlify.app/images/levitating.jpg",
          url: "https://colddb.netlify.app/audio/levitating.mp3",

        },
        {
          artist: "Down",
          title: "Jay Sean",
          image: "https://colddb.netlify.app/images/down_js.jpg",
          url: "https://colddb.netlify.app/audio/down_js.mp3",

        },
        {
          artist: "Let Me Love You",
          title: "DJ Snake",
          image: "https://colddb.netlify.app/images/let_me_love_you.jpg",
          url: "https://colddb.netlify.app/audio/let_me_love_you.mp3",

        },
        {
          artist: "You Don't Know Me",
          title: "Ofenbach",
          image: "https://colddb.netlify.app/images/baby_you_dont_know_me.jpg",
          url: "https://colddb.netlify.app/audio/baby_you_dont_know_me.mp3",

        },
        {
          artist: "Diff.",
          title: "Gin Lee",
          image: "https://colddb.netlify.app/images/diff.jpg",
          url: "https://colddb.netlify.app/audio/diff.mp3",

        },
        {
          artist: "离开地球表面",
          title: "五月天",
          image: "https://colddb.netlify.app/images/离开地球表面.jpg",
          url: "https://colddb.netlify.app/audio/离开地球表面.mp3",

        },
        {
          artist: "让我留在你身边",
          title: "陈奕迅",
          image: "https://colddb.netlify.app/images/让我留在你身边.jpg",
          url: "https://colddb.netlify.app/audio/让我留在你身边.mp3",

        },
        {
          artist: "怒放",
          title: "G-Dragon",
          image: "https://colddb.netlify.app/images/怒放.jpg",
          url: "https://colddb.netlify.app/audio/怒放.mp3",

        },
        {
          artist: "Two at A Time",
          title: "AGA",
          image: "https://colddb.netlify.app/images/two_at_a_time.jpg",
          url: "https://colddb.netlify.app/audio/two_at_a_time.mp3",

        },
        {
          artist: "皮思苦",
          title: "陳瑞輝",
          image: "https://colddb.netlify.app/images/皮思苦.jpg",
          url: "https://colddb.netlify.app/audio/皮思苦.mp3",

        },
        {
          artist: "INYU",
          title: "TAEYEON",
          image: "https://colddb.netlify.app/images/inyu.jpg",
          url: "https://colddb.netlify.app/audio/inyu.mp3",

        },
        {
          artist: "Favourite Jeans",
          title: "moon tang",
          image: "https://colddb.netlify.app/images/favourite_jeans.jpg",
          url: "https://colddb.netlify.app/audio/favourite_jeans.mp3",

        },
        {
          artist: "万人邂逅",
          title: "陈咏桐",
          image: "https://colddb.netlify.app/images/万人邂逅.jpg",
          url: "https://colddb.netlify.app/audio/万人邂逅.mp3",

        },
        {
          artist: "abcdefu",
          title: "GAYLE",
          image: "https://colddb.netlify.app/images/abcdefu.jpg",
          url: "https://colddb.netlify.app/audio/abcdefu.mp3",

        },
        {
          artist: "Someone You Loved",
          title: "刘易斯·卡帕尔迪",
          image: "https://colddb.netlify.app/images/someone_you_loved.jpg",
          url: "https://colddb.netlify.app/audio/someone_you_loved.mp3",

        },
        {
          artist: "I Hate Myself Sometimes",
          title: "李浩瑋",
          image: "https://colddb.netlify.app/images/i_hate_myself_sometimes.jpg",
          url: "https://colddb.netlify.app/audio/i_hate_myself_sometimes.mp3",

        },
        {
          artist: "Sweet but Psycho",
          title: "Ava Max",
          image: "https://colddb.netlify.app/images/sweet_but_psycho.jpg",
          url: "https://colddb.netlify.app/audio/sweet_but_psycho.mp3",

        },
        {
          artist: "Love U Like That",
          title: "Lauv",
          image: "https://colddb.netlify.app/images/love_u_like_that.jpg",
          url: "https://colddb.netlify.app/audio/love_u_like_that.mp3",

        },
        {
          artist: "All Fails Down",
          title: "Alan Walker",
          image: "https://colddb.netlify.app/images/all_fails_down.jpg",
          url: "https://colddb.netlify.app/audio/all_fails_down.mp3",

        },
        {
          artist: "Savage Love",
          title: "Jawsh 685",
          image: "https://colddb.netlify.app/images/savage_love.jpg",
          url: "https://colddb.netlify.app/audio/savage_love.mp3",

        },
        {
          artist: "Price Tag",
          title: "Jessie J",
          image: "https://colddb.netlify.app/images/price_tag.jpg",
          url: "https://colddb.netlify.app/audio/price_tag.mp3",

        },
        {
          artist: "Counting Stars",
          title: "OneRepublic",
          image: "https://colddb.netlify.app/images/counting_stars.jpg",
          url: "https://colddb.netlify.app/audio/counting_stars.mp3",

        },
        {
          artist: "Love Is Gone",
          title: "SLANDER",
          image: "https://colddb.netlify.app/images/love_is_gone.jpg",
          url: "https://colddb.netlify.app/audio/love_is_gone.mp3",

        },
        {
          artist: "How To Love ft Sofia Reyes",
          title: "Cash Cash",
          image: "https://colddb.netlify.app/images/how_to_love_ft.jpg",
          url: "https://colddb.netlify.app/audio/how_to_love_ft.mp3",

        },
        {
          artist: "In The artist Of Love",
          title: "Martin Garrix",
          image: "https://colddb.netlify.app/images/in_the_artist_of_love.jpg",
          url: "https://colddb.netlify.app/audio/in_the_artist_of_love.mp3",

        },
        {
          artist: "Ghost",
          title: "Justin Bieber",
          image: "https://colddb.netlify.app/images/jb_ghost.jpg",
          url: "https://colddb.netlify.app/audio/jb_ghost.mp3",

        },
        {
          artist: "Why Don't We",
          title: "8 Letters",
          image: "https://colddb.netlify.app/images/why_dont_we.jpg",
          url: "https://colddb.netlify.app/audio/why_dont_we.mp3",

        },
        {
          artist: "Pretty Girl",
          title: "Maggie Lindemann",
          image: "https://colddb.netlify.app/images/pretty_girl.jpg",
          url: "https://colddb.netlify.app/audio/pretty_girl.mp3",

        },
        {
          artist: "The Middle",
          title: "Zedd, Maren",
          image: "https://colddb.netlify.app/images/the_middle.jpg",
          url: "https://colddb.netlify.app/audio/the_middle.mp3",

        },
        {
          artist: "Hall of Fame",
          title: "The Script",
          image: "https://colddb.netlify.app/images/hall_of_fame.jpg",
          url: "https://colddb.netlify.app/audio/hall_of_fame.mp3",

        },
        {
          artist: "Intentions",
          title: "Justin Bieber",
          image: "https://colddb.netlify.app/images/Intentions.jpg",
          url: "https://colddb.netlify.app/audio/Intentions.mp3",

        },
        {
          artist: "Roar",
          title: "Katy Perry",
          image: "https://colddb.netlify.app/images/Roar.jpg",
          url: "https://colddb.netlify.app/audio/Roar.mp3",

        },
        {
          artist: "The Nights",
          title: "Avicii",
          image: "https://colddb.netlify.app/images/the_nights.jpg",
          url: "https://colddb.netlify.app/audio/the_nights.mp3",

        },
        {
          artist: "Shake It Off",
          title: "Taylor Swift",
          image: "https://colddb.netlify.app/images/shake_it_off.jpg",
          url: "https://colddb.netlify.app/audio/shake_it_off.mp3",

        },
        {
          artist: "Love Me Like You Do",
          title: "Ellie Goulding",
          image: "https://colddb.netlify.app/images/love_me_like_you_do.jpg",
          url: "https://colddb.netlify.app/audio/love_me_like_you_do.mp3",

        },
        {
          artist: "Firework",
          title: "Katy Perry",
          image: "https://colddb.netlify.app/images/firework_kp.jpg",
          url: "https://colddb.netlify.app/audio/firework_kp.mp3",

        },
        {
          artist: "Dandelions",
          title: "Ruth B",
          image: "https://colddb.netlify.app/images/Dandelions_rb.jpg",
          url: "https://colddb.netlify.app/audio/Dandelions_rb.mp3",

        },
        {
          artist: "Habits",
          title: "Tove Lo",
          image: "https://colddb.netlify.app/images/habits_tl.jpg",
          url: "https://colddb.netlify.app/audio/habits_tl.mp3",

        },
      ],
    audioFile: ""
  },
  mounted: function() {
    this.changeSong();
    this.audio.loop = false;
  },
  filters: {
    fancyTimeFormat: function(s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    }
  },
  methods: {
    togglePlaylist: function() {
      this.isPlaylistActive = !this.isPlaylistActive;
    },
    nextSong: function() {
      if (this.currentSong < this.musicPlaylist.length - 1)
        this.changeSong(this.currentSong + 1);
    },
    prevSong: function() {
      if (this.currentSong > 0) this.changeSong(this.currentSong - 1);
    },
    changeSong: function(index) {
      var wasPlaying = this.currentlyPlaying;
      this.imageLoaded = false;
      if (index !== undefined) {
        this.stopAudio();
        this.currentSong = index;
      }
      this.audioFile = this.musicPlaylist[this.currentSong].url;
      this.audio = new Audio(this.audioFile);
      var localThis = this;
      this.audio.addEventListener("loadedmetadata", function() {
        localThis.trackDuration = Math.round(this.duration);
      });
      this.audio.addEventListener("ended", this.handleEnded);
      if (wasPlaying) {
        this.playAudio();
      }
    },
    isCurrentSong: function(index) {
      if (this.currentSong == index) {
        return true;
      }
      return false;
    },
    getCurrentSong: function(currentSong) {
      return this.musicPlaylist[currentSong].url;
    },
    playAudio: function() {
      if (
        this.currentlyStopped == true &&
        this.currentSong + 1 == this.musicPlaylist.length
      ) {
        this.currentSong = 0;
        this.changeSong();
      }
      if (!this.currentlyPlaying) {
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },
    stopAudio: function() {
      this.audio.pause();
      this.currentlyPlaying = false;
      this.pausedMusic();
    },
    handleEnded: function() {
      if (this.currentSong + 1 == this.musicPlaylist.length) {
        this.stopAudio();
        this.currentlyPlaying = false;
        this.currentlyStopped = true;
      } else {
        this.currentlyPlaying = false;
        this.currentSong++;
        this.changeSong();
        this.playAudio();
      }
    },
    onImageLoaded: function() {
      this.imgLoaded = true;
    },
    getCurrentTimeEverySecond: function(startStop) {
      var localThis = this;
      this.checkingCurrentPositionInTrack = setTimeout(
        function() {
          localThis.currentTime = localThis.audio.currentTime;
          localThis.currentProgressBar =
            localThis.audio.currentTime / localThis.trackDuration * 100;
          localThis.getCurrentTimeEverySecond(true);
        }.bind(this),
        1000
      );
    },
    pausedMusic: function() {
      clearTimeout(this.checkingCurrentPositionInTrack);
    },
    toggleDebug: function(){
      this.debug=!this.debug;
      document.body.classList.toggle('debug');
    }
  },
  watch: {
    currentTime: function() {
      this.currentTime = Math.round(this.currentTime);
    }
  },
  beforeDestroy: function() {
    this.audio.removeEventListener("ended", this.handleEnded);
    this.audio.removeEventListener("loadedmetadata", this.handleEnded);

    clearTimeout(this.checkingCurrentPositionInTrack);
  }
});