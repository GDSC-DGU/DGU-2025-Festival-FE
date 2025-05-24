// scripts/downloadImages.js (확장자 .js)
const fs = require("fs");
const https = require("https");
const path = require("path");

// 다운로드할 이미지 URL 목록
const imageUrls = [
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/488794764_544834221573233_4653855467547291944_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QFyxQ3a7BB0erInALvB161EeoFCKmanz8ED6b4-17BRALyVkB4ElmlGIg_VpsXaJ8Y&_nc_ohc=hc6UVdsa3FAQ7kNvwFpAYu7&_nc_gid=WqAVSnKubU22cchw4b5yRw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfKvwG0H5bFUsU9-TCAbi8QsjrY7GNJGxNgjTcBPk9DaGg&oe=68378C83&_nc_sid=22de04",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/488198465_1314692119792192_1207646234923062068_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QHQJNkfe-cjkj3BHBVBgfSLUGPiYINaebPfHqOK8dcDGS-AKpZGY2b51nb-usia_FU&_nc_ohc=9B1CBrkvn8cQ7kNvwGbXQeT&_nc_gid=wOEVAJ7HiIrZmlmPoIfnNQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfLD-DukxxY8tkjrFnPf6PVaxvZ_Kp2Dz8tGdIO76U8fdQ&oe=68378297&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/52482136_383872918865121_4965313546607919104_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QHIwjf6_45fQjXGYHEy76APJqAYxV0sLxRUZtGR5hJSdOUjwrt7LQyYk-OuEFKAFS0&_nc_ohc=wJ1hfNoyTnYQ7kNvwFRlxMg&_nc_gid=6K5Uaw9YNiuCT9n2gy3fyw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfL6OfbnvQCYS0ve_RYrIOxlYCANzIHG8KKIurs5cMxmeg&oe=68377CBB&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/323340077_1227491567843142_9036400162783901772_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QH6mw45UQujxNbHUnuo-OM3-EfTBZcRKhlsAaPRsARBikti3K-ufTYFyEOJbOFVr1Q&_nc_ohc=xtXDolkbEXkQ7kNvwHUK4xz&_nc_gid=TAJYJ09Gq2EkShGZlOpv2Q&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfI55uSBgylIZ3dA7IOvPEU5T6beT6hV4j_ilZhHWQGkug&oe=68377CE7&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/277659149_2267314583431685_7743481397015271699_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QElaodxNXJNc04C1URos65y4C0BIc8v0wfz1ct8mC6mtMnCmMlLK77iTh1thAKWk_Y&_nc_ohc=_HVJ3O_3h40Q7kNvwFI5av1&_nc_gid=Hou_Wc1dsRIjfQaAElR-SA&edm=AHzjunoBAAAA&ccb=7-5&oh=00_AfJP09seostUzlMvyVWYNNvCDYLVBjp0IRHys7o9GQlfVA&oe=6837628E&_nc_sid=ba8368",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/402159826_888310492637120_6708511071815086286_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QGuYoT0IUEafn5p0M-XUvWH3QkSgjy1jq1WuCBGEs99YxUbibrXsDLLVL1B-lkyCE8&_nc_ohc=LBXSH0qid1IQ7kNvwGW4FmH&_nc_gid=2eZI3ED1UxJZqo3lhUsbGg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfLza3csxx2vGlsXlmP8PEK8yFu_rCbe-KUPr8NxdhMfpg&oe=683795E3&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/487981568_1157209085696047_5378426043478027795_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QHCTPANLV9jgxM0rYpmgGaNcWcJj4V2RASZLJFs-z9tzT2JF87LQdG3aKHtSne9upg&_nc_ohc=3HctP-4Rq4cQ7kNvwElw9Gv&_nc_gid=9LR9L7TFa2tz2HZT_aqaTA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfJDi_VO7omuDqC6PstUQxET3WlTHsNz4h-BRCm038OuRQ&oe=68376C83&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/334507049_130273579737815_6492031775316598276_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QETzS-fa4g0X_jKiSQjdKY79bNHMr89cWRZ0Q1ANw0pb9414NakiXcWmZkA1kda_NQ&_nc_ohc=EXAYtoW2jVgQ7kNvwF_350s&_nc_gid=HUJ8LrXbiayiiQ8QbJo5HA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfJWRLBVdjFBrSAC4XpiohK9-pG_AsZ3lFsWCFu50t5tJQ&oe=68377A30&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/288075197_138366015479683_2521542655253950286_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QEFGsV7iM8SAoCQV5o9yrQzwHtAGiQV8Nd70Y-CTwgHsZy49lhcdOWAmBeQa6N8k7s&_nc_ohc=lyaC1G7YNe4Q7kNvwGRiaSj&_nc_gid=slP4-uuB-PrTZzsQy1S-_Q&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfKMc0gAcSTbS8TWWPfrrznEqxVj2GapmS0wsVtnuqn0gg&oe=6837834B&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/152819016_155339763091734_7935767614661724791_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QFHB-CKkFF5EDubZtQk1zMdYZ22Ke0yOt5w_bn058YqTpiadKbxNNntpkKZzrlJHjE&_nc_ohc=hFwjpC-_xxgQ7kNvwFYp0z4&_nc_gid=lN8_XNnC-EFHGgM72Sz3DA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfLVHQM9siU3kR0ScMAtyNbLOpSnZiZGBShJIlB7sNnrWQ&oe=68376D26&_nc_sid=7a9f4b",
  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/275247479_1074375113111842_6924629499576128773_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2QGVP7amUaPbBDwXHIKgRanO-SdSRi31XQc0QVCKhDu8V5gDdcSEOUTT_rn2dRJjWUk&_nc_ohc=kqYkGV5VzAMQ7kNvwF6RdF6&_nc_gid=GEEPbjDi3iX4CXVAF4cceg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfLWgpPjtBcdu3wr33UPdidOeh6wy9PBSXpequ6CwQQS9A&oe=68378D1C&_nc_sid=7a9f4b",

  // 여기에 Instagram CDN 이미지 URL들 쭉 넣으세요
];

// 저장할 경로 (public/images 폴더)
const downloadDir = path.resolve(__dirname, "../public/images");

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

imageUrls.forEach((url, index) => {
  const filename = `image${index + 1}.jpg`;
  const filePath = path.join(downloadDir, filename);

  https
    .get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(
          `❌ Failed to download ${url} (status: ${res.statusCode})`
        );
        return;
      }

      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✅ Downloaded: ${filename}`);
      });
    })
    .on("error", (err) => {
      console.error(`⚠️ Error downloading ${url}:`, err.message);
    });
});
