var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var cRect = canvas.getBoundingClientRect(); 
var canvasx = Math.round(cRect.left)
var canvasy = Math.round(cRect.top)
var Image = document.querySelector("#tileset-source");
var imagelist = ["https://www.loc.gov/static/classroom-materials/elections/images/march-on-washington-1963.jpg", "https://www.nps.gov/articles/images/Suffrage.png"]
var letterpixel = [[" ", 3.6],["a", 8.5], ["b", 8], ["c", 8], ["d", 8.5], ["e", 8], ["f", 4], ["g", 9], ["h", 8], ["i", 3.5], ["j", 4], ["k", 8], ["l", 3.5], ["m", 12.5], ["n", 8.5], ["o", 8], ["p", 9], ["q", 8], ["r", 5], ["s", 7.5], ["t", 4.5], ["u", 8], ["v", 8], ["w", 11], ["x", 8], ["y", 7], ["z", 8], [".", 4], ["?", 10], [",", 4], ["'", 3.5], [":", 4], ['"', 5], ["!", 4], ["-", 5], ["(", 5], [")", 5], ["/", 4], ["1", 8.5], ["2", 8], ["3", 8.5], ["4", 8], ["5", 8], ["6", 7], ["7", 8], ["8", 8.5], ["9", 8.5], ["0", 8], ["A", 9.5], ["B", 9.5], ["C", 10], ["D", 10.5], ["E", 9.5], ["F", 9], ["G", 10.5], ["H", 10], ["I", 3.5], ["J", 8], ["K", 9.5], ["L", 8], ["M", 12], ["N", 10.5], ["O", 11], ["P", 10], ["Q", 11], ["R", 10], ["S", 9.5], ["T", 9], ["U", 11], ["V", 10], ["W", 14.5], ["X", 9.5], ["Y", 9.5], ["Z", 8]]
var pixel = []
var letters = []
var templetter1 = "At first only white males who owned property(1/15 people) were the ones who had the power of voting, but over time it expanded to different groups and the restrictions were lifted. Even though the constitution guarantees these rights to everyone, the U.S. still had a lot of struggles to overcome to reach the point it is today. One factor of voting restrictions that most people don't know about is religious qualifications, which were only in place until the colonies got their independence and started getting together to guarantee rights to “everyone.” Because most people in power were Christian, you actually needed to say a declaration of belief to Christianity for some states to be able to vote. This didn't last very long, but it's only the start of the restrictions that were in place. Many of the other restrictions prevented black people and women from voting at all and it was very hard for certain immigrant groups to get the citizenship needed to vote. A great example of that is the Chinese Exclusion Act of 1882, which prevented the Chinese from getting citizenship, even though some of them had been in the U.S. for a very long timeframe and were paying taxes to the Government. In addition to all of that, groups like Native Americans weren't guaranteed the right to vote and weren't really able to become citizens until the Dawes Act was passed in 1887. This Act finally allowed Native Americans to become citizens as long as they renounced their tribal ways, which gave them a path to being able to vote. "; 
letters.push(templetter1);
var templetter2 = "Overtime some of these requirements started to disappear and the equal representation that America stands for, started to become a reality for people. One of the first things was 13th, 14th and 15th Amendments, which gave slaves their freedom, citizenship and the right to vote. Sadly the 15th Amendment wasn't enforced very strictly and states started adding rules that prevented black people from voting. One of the first rules that states did was literacy tests, which were these really complicated tests given in a short amount of time that were meant to test if people could read the ballots. Even though these tests were meant to test reading abilities, in reality they were just tools to prevent black people from having a chance to vote. In addition to that, states enforced a poll tax, which the poorer black people couldn't afford to pay, but the wealthier white people typically could. To make sure white people weren't affected by these, the states created a grandfather clause, which was basically a rule that if your grandfather voted, you didn't have to do all these things in order to vote. Since most of the black people's grandparents were slaves, they never had the chance to vote.";
letters.push(templetter2);
var templetter3 = "Eventually, Civil Rights Acts in the 1960s started stopping these rules and made it more possible for black people to vote. This was solidified in, when the 24th Amendment got rid of poll taxes, so even the poorer people could vote. The last restriction that was finally removed was the right for women to vote, which was given through the 19th Amendment.";
letters.push(templetter3);
var templetter4 = "When looking at voting behavior, we can see that many factors play a role in how a person votes and whether or not they will vote in the first place. A lot of the time, we think pretty simply of why people vote the way they do or that people do or don't vote because of a few small reasons. In reality though, there are such a long list of factors in play, that we will only be able to cover a portion of them. One of the biggest things is the person's role in the economy, which is the biggest reason people think of. If a person makes a lot of money or knows that one party will hurt their money in some way, it's a pretty good motivator for someone to go out and vote for the opposing party. Statistically speaking, the higher income someone makes, the more likely they are to vote, which matches up with this idea. The people that make less money won't want to vote as much, because they have less money at stake and don't see the impact of a political party as much on their source of money. The only way this differs is if a certain political party offers a lot of benefits for people of lower income, which could really incentivise them to go out and vote.";
letters.push(templetter4);
var templetter5 = "In addition to that, another factor is the age of the voter. People that are a lot older are more concerned about the job they've been at and their upcoming retirement, while younger people don't care much about others' retirement and are more concerned about being able to get a good job themselves. Last but not least, people that are married and have a family are more likely to vote than non-married people because they have a family to take care of and want the world to be a better place for their family. With having a family, you have a lot more reasons to be involved in the voting process and will get involved in the more local level of government.";
letters.push(templetter5);
var templetter6 = "Some political parties and politicians use tactics of influencing voter behavior to get people to vote for them. A common thing is to use political issues to make the other political party look worse and show how wrong their opinion on it is. Because of how voters don't always research the political parties prior to voting and instead rely on the information fed to them, political parties use forms of social media to help influence them. A great example of this is television ads, which talk about how a political figure has messed up in some way, which is their attempt to try and discredit them. In addition to that, political parties use information campaigns to put ideas into people's heads, which can be more positive centered. Many political parties will have social media platforms and will use them to release information both to support them and to oppose their opponents. A lot of this information will make it into the news, which increases its spread even more. Not only that, but many presidential and state candidates will actually go and visit places to meet people and give speeches. The political parties behind them will research which areas will like a candidate and which need more convincing, so that they know which areas are best to go too.";
letters.push(templetter6);
var templetter7 = "Many women were imprisoned for continuing to protest for Women's Rights, plus some extremist women, who were actually committing crimes, like arson or trespassing. Many of these women hated that they were stuck in prison and decided to go on multi-day long hunger strikes to help get public attention to their cause. After some women started going extreme amounts of time without food, authorities started releasing them to prevent any deaths from happening. A lot of the women got rearrested for the same reasons, which led to authorities using horrifing tactics. Authorities started force-feeding the women prisoners, by putting tubes down their throats and pouring food down the tubes.";
letters.push(templetter7);
var templetter8 = "This caused public outrage and the government passed the Prisoner's Act to make sure they weren't mistreated, which was nicknamed the " + '"Cat and Mouse Act"' + " These methods actually helped lead to women getting the right to vote and people that contributed were rewarded with medals by the WSPU(Women's Social and Political Union).";
letters.push(templetter8);
var templetter9 = "The famous song “Cheesecake”, which was made by Louis Armstrong, recently went viral across the nation. A resurgence of this song has caused hundreds of thousands of people to hear it. On Youtube, it has over 200k views and thanks to many highschools across the U.S., it has been growing at a good rate. After being asked what they thought about the song, Viktoria Quinn said, " + '"I LOVE IT!"' + " After being asked for a comment, there was just dead silence on Louis Armstrong's end."; 
letters.push(templetter9);
var templetter10 = "Have you ever wanted to play a more unique form of fantasy football. Well, now you can with the new gamemdoe called: Presidential Fantasy Football. In this gamemode, all players are U.S. Presidents and the structure of how it is run, is a lot different than the one most people are used to. After being on the market for only 3 weeks, it has already amassed over 45k people using it. It is highly rated with a total of 4.3 stars on the google app store. For more info visit the page given.";
letters.push(templetter10);
var templetter11 = "Have you ever wished fantasy football had more options? Thanks to this amazing new idea by Colin Ripperida, it’s finally become a reality with football with the presidents of the U.S. Can you imagine Abraham Lincoln dodging around George Washington and tackling JFK? The statistics of this new mode are shocking, with over 2 people playing it and an average playtime of 1 minute! The current MVP is JFK, which most people credit due to his past experience in football. Even after multiple illnesses and injuries that made his journey in football really tough, he still overcame it all and became the football player he is now. The person following closely behind is Gerald Ford, who also had past football experience. After an interview with Gerald Ford, he said he would have chosen himself as the MVP for the season, if it had been him deciding it. Gerald Ford has spent his post-football days coaching at Yale, which eventually led to him becoming President of the U.S. If Gerald Ford had accepted some pro-league football offers by the Green Bay Packers, he might not have made this list. If you consider factors like height and weight into play, it makes a difference on which players are best to put into your team. Abraham Lincoln is the tallest president with a total height of 6 feet 4 inches, while the shortest is James Madison, who is only 5 feet 4 inches. In the realm of weight, William Howard Taft was the largest, with a total weight of around 300 pounds. In addition to that, Taft was almost 6 feet tall, which are two really good factors for a professional football player.";
letters.push(templetter11);

ctx.font = "15px Arial";
var page = 1;
var menu = "pages";
var colorwords = ["literacy tests", "poll taxes", "electorate", "Chinese Exclusion Act", "retirement", "social media", "force-feeding", "Louis Armstrong", "Abraham Lincoln"]
var descwords = [["These tests were given to people who didn't have a 5th grade eduation or higher, which were typically black people who couldn't afford the basic eduation"], ["In Texas at 1902, the typical poll tax was $1.50 - $1.75, which in today's money is $51-$61", "This is a pretty crazy amount of money for someone that could barely provide food for their family, plus their vote looks like such a small difference that it doesn't even seem worth it."], ["possible voting population"], ["This act was created because of the large amount of Chinese miners and workers that were coming into the west coast in California. The government was concerned that:", "The Chinese would start outweighing the Americans", "They would have too strong an impact on politics if they could vote"], ["The average age people retire at is 65, which comes from the 2021 Retirement Study by Boston College.", "Most college graduates retire 3 years later than non-college graduates, which might seem suprising since people with college eduations should have more money to retire earlier.",  "The reason is that jobs that need a college eduation are usually easier to maintain at a later age and don't require as much physical labor, so it's easier for a college-graduate to work for longer."],
["A common social media platform for politicians is twitter, but some politicians use almost every social media out there.", "According to a study by Pew Research, 1 / 5 adults get their political news from social media.", "Before social media, a lot of polticians used radio or televised talk-shows to communicate their messages, but now it's mostly done online.", "Barrack Obama is credited for making social media a big option for politics because of his big, viral political videos."], ["Marion Wallace Dunlop was the first women to utilize the hunger strike tactic to get people's attention in prison. After staying in prison for 91 hours without eating food, she was released.", "Many women followed pursuit and the government decided to start force-feeding them to keep from having to release them.", "This 'tactic' was actually taken from a hospital treatment method according to the government's response on this.", "One of the first women to be force-feed in prison was Mary Leigh.", "Some women were treated differentily after doing a hunger strike, mainly the ones that had a more powerful family background. Instead of being force-feed they were just released.", "To prove this difference in treatment, Lady Constance went under the fake identity of Jane Warton, a lower-class working women.", "After getting in prison again, she was now force-feed under this new identity, proving that the authorities favored people because of their status."], 
["An American trumpet player and singer for the jazz age", "Nicknamed Satchmo and born in New Orleans", "Considered one of most significant artists by the late 1930s, espically in the area of jazz music."], ["16th President of the U.S", "Had 4 kids and was married to Mary Todd Lincoln.", "He was a boatman, store clerk, surveyor, and militia soldier in New Salem, Illinois.", "He was in the Illinois Legislature from 1834 to 1842.", "Lincoln almost participated in a duel with James Shields. After publishing some articles in a newspaper that made fun of Shields, Shields challenged him to a duel.", "Lincoln accepted the duel and might have done it with Shields if some friends hadn't intervened between them and stopped them from doing it.", "Lincoln chose cavalry broadswords as the duel's weapons."]];
var clickers = []
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath(); 
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var textbox = function (x, y, sizex, sizey, text, gap) {
    wordslist = []
    wordtext = ""
    for (i = 0; i < text.length; i++) {
        if (text.charAt(i) === " ") {
            wordslist.push(wordtext)    
            wordtext = ""
        } else {
            if (((text.charAt(i) === "." && text.charAt(i + 1) === " ") === false) && ((text.charAt(i) === "," && text.charAt(i + 1) === " ") === false))
            wordtext = wordtext + text.charAt(i)
        }
    }
    xcoord = x
    if (gap) {
        xcoord = x + 20    
    }
    ycoord = y + 12
    spacecounter = 0
    spacecoord = 0
    numofspace = 0
    extraspace = 0
    letterlength = 0
    spacexthing = 0
    spaceything = 0
    colorcheck = 0;
    lastword = "";
    for (k = 0; k < text.length; k++) {
        for (j = 0; j < letterpixel.length; j++) {
            if (letterpixel[j][0] === text.charAt(k)) {
                spacereset = 0;
                if (numofspace === 0 || text.charAt(k) === " ") {
                    for (b = 0; b < colorwords.length; b++) {    
                        if (wordslist[numofspace + extraspace] === colorwords[b] || (wordslist[numofspace + extraspace] + " " + wordslist[numofspace + extraspace + 1]) === colorwords[b] || (wordslist[numofspace + extraspace] + " " + wordslist[numofspace + extraspace + 1] + " " + wordslist[numofspace + extraspace + 2]) === colorwords[b]) {
                            ctx.fillStyle = "blue"
                            letterlength = colorwords[b].length
                            spacereset = 1
                            colorcheck = 1
                            spaceything = ycoord
                            spacexcoord = xcoord + 3.6
                            lastword = colorwords[b];
                        }
                    }
                    if (letterlength === 0) {
                        ctx.fillStyle = "black"
                    }
                    numofspace += 1
                }
                ctx.fillText(text.charAt(k), xcoord, ycoord)
                if (letterlength > 0 && spacereset === 0) {
                    letterlength -= 1
                    spacexthing += letterpixel[j][1]
                } else if (colorcheck === 1 && spacereset === 0) {
                    clickers.push([spacexcoord, spacexthing, spaceything, lastword, page])
                    spacexthing = 0
                    colorcheck = 0
                }
                if (text.charAt(k) === " " || text.charAt(k + 1) === " ") {
                    spacecounter = 0
                    spacecoord = 0
                } else {
                    spacecounter += 1
                    spacecoord += letterpixel[j][1]
                }
                xcoord = xcoord + letterpixel[j][1]
                if ((xcoord < (sizex + x)) === false) {
                    ctx.clearRect(xcoord - spacecoord, ycoord - 12, spacecoord, 17)
                    xcoord = x
                    ycoord += 15
                    k -= spacecounter
                    if (colorcheck === 1) {
                        letterlength += spacecounter
                    }
                    if (spacexthing === spacecoord) {
                        spacexcoord = xcoord
                        spacexthing = 0
                        spaceything += 15
                    } else if (spacexthing > spacecoord) {
                        clickers.push([spacexcoord, spacexthing - spacecoord - 3.6, spaceything, lastword, page])
                        spacexcoord = xcoord
                        spacexthing = 0
                        spaceything += 15
                    }
                    if (text.charAt(k + 1) === " ") {
                        k += 1
                        extraspace += 1
                        letterlength -= 1
                    }
                    spacecounter = 0
                    spacecoord = 0
                }

            }    
        }
    }
}
var arrow = function () {
    ctx.beginPath();
    ctx.moveTo(37, 36);
    ctx.lineTo(45, 27);
    ctx.lineTo(45, 45);
    ctx.lineTo(37, 36);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(45, 32, 15, 8);
}
var clicking = function (event) {
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
    clickx = event.pageX - canvasx
    clicky = event.pageY - canvasy
    // ctx.clearRect(0, 50, 50, 60)
    // ctx.fillText("x: " + clickx, 10, 70);
    // ctx.fillText("y: " + clicky, 10, 90);
    if (menu === "pages") {
        if (clickx > 233 && clicky > 1461 && clickx < 316 && clicky < 1480 && page === 1) {
            page = 4;
            window.scrollTo(0, 0)
            pageloader();    
        } else if (clickx > 24 && clicky > 14 && clickx < 54 && clicky < 40 && page != 1) {
            page = 1;
            pageloader();
        } else if (clickx > 938 && clicky > 6 && clickx < 986 && clicky < 51) {
            menu = "?";
            ctx.fillStyle = "black"
            ctx.fillRect(250, 120, 500, 500)
            ctx.fillStyle = "white"
            ctx.fillRect(253, 123, 494, 494)
            ctx.fillStyle = "black"
            ctx.font = "40px Arial"
            ctx.fillText("X", 700, 170) 
            ctx.font = "30px Arial"
            ctx.fillText("Help Menu", 400, 170) 
            ctx.font = "20px Arial"
            ctx.fillText("- Click on the ", 270, 250) 
            ctx.fillStyle = "blue"
            ctx.fillText("blue text ", 391, 250) 
            ctx.fillStyle = "black"
            ctx.fillText("for bonus info", 473, 250) 
            ctx.fillText("- Click (See Page 4) to get to next page", 270, 300) 
        }
    } else if (menu === "?") {
        if (clickx > 703 && clicky > 140 && clickx < 726 && clicky < 170) {
        menu = "pages" 
        pageloader();   
        }    
    }
    if (menu === "def" && clickx > 37 && clicky > 26 && clickx < 62 && clicky < 45) {
        menu = "pages"
        pageloader();
    }
    for (i = 0; i < clickers.length; i++) {
        if (page === clickers[i][4] && (clickx > clickers[i][0] - 1) && (clicky > clickers[i][2] - 12) && (clicky < clickers[i][2] + 1) && (clickx < clickers[i][1] + clickers[i][0])) {
            menu = "def"
            ctx.clearRect(0, 0, width, height);
            ctx.font = "30px Arial";
            ctx.fillText(clickers[i][3].charAt(0).toUpperCase() + clickers[i][3].slice(1), 200, 50)
            ctx.lineWidth = 2.5 
            ctx.strokeRect(0, 0, width, height)
            arrow();
            ctx.font = "15px Arial"
            window.scrollTo(0, 0)
            tempdesc = descwords[colorwords.indexOf(clickers[i][3])]
            doubletime = 0;
            for (j = 0; j < tempdesc.length; j++) {
                if (tempdesc[j].length > 115) {
                    tempcheck = true
                    for (k = 0; (k < 120 && tempcheck === true); k++) {
                        if (tempdesc[j].charAt(120 - k) === " ") {
                            tempcheck = false
                            ctx.fillText(" - " + tempdesc[j].substr(0, 120 - k), 30, 100 + j * 20 + doubletime * 20)
                            ctx.fillText(tempdesc[j].substr((120 - k), tempdesc[j].length - (120 - k)), 41, 120 + j * 20 + doubletime * 20)
                            doubletime += 1;
                        }
                    }
                } else {
                    ctx.fillText(" - " + tempdesc[j], 30, 100 + j * 20 + doubletime * 20)
                }           
            }
        }
    }
}
$("body").click(clicking);

var pointerX = 0;
var pointerY = 0;
var clickyes = false
document.onmousemove = function(event) {
	pointerX = event.pageX - canvasx
    pointerY = event.pageY - canvasy
    if (pointerX > 233 && pointerY > 1461 && pointerX < 316 && pointerY < 1480 && page === 1) {
        ctx.clearRect(233, 1461, 83, 19)
        ctx.font = "16px Arial"
        ctx.fillStyle = "Grey"
        ctx.fillText("See page 4", 232, 1474)
        clickyes = true    
    } else if (clickyes === true && page === 1) {
        ctx.clearRect(233, 1461, 83, 19)
        clickyes = false 
        ctx.font = "16px Arial"
        ctx.fillStyle = "Black"
        ctx.fillText("See page 4", 232, 1474)   
    }
}

var line = function (linex, liney, linex2, liney2, color) {
    ctx.beginPath();
    ctx.moveTo(linex, liney);
    ctx.lineTo(linex2, liney2);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
}

var house = function () {
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.lineTo(40, 20);
    ctx.lineTo(50, 30);
    ctx.lineTo(30, 30);
    ctx.closePath();
    ctx.fill();
    ctx.fillRect(30, 30, 20, 10)
    ctx.fillStyle = "white"
    ctx.fillRect(37, 32, 6, 10)
    line(27, 27, 40, 15, "black")
    line(40, 15, 53, 27, "black")
}
var boxes = function (x, y) { // x = 500 / y = 300
    footballbox = [[197, 278, 120, 204, 173, 155, 237, 216, 103], [150, 127, 113, 101, 160, 138, 189, 109, 130], [193, 157, 170, 212, 120, 183, 240, 225, 167], [79, 115, 102, 60, 152, 89, 32, 47, 105], [70, 49, 53, 89, 32, 74, 97, 93, 63]]
    footbally = [y + 52, y + 80, y + 108, y + 134, y + 170, y + 206, y + 243, y + 290, y + 337]
    footballx = [0, 51, 102, 157, 225]
    ctx.strokeRect(x + 50, y, 400, 428)
    ctx.fillRect(x + 50, y + 30, 400, 3)
    ctx.fillRect(x + 170, y, 3, 354)
    ctx.fillRect(x + 220, y, 3, 354)
    ctx.fillRect(x + 270, y, 3, 354)
    ctx.fillRect(x + 322, y, 3, 354)
    ctx.fillRect(x + 380, y, 3, 354)
    ctx.fillRect(x + 50, y + 60, 400, 3)
    ctx.fillRect(x + 50, y + 87, 400, 3)
    ctx.fillRect(x + 50, y + 114, 400, 3)
    ctx.fillRect(x + 50, y + 141, 400, 3)
    ctx.fillRect(x + 50, y + 186, 400, 3)
    ctx.fillRect(x + 50, y + 212, 400, 3)
    ctx.fillRect(x + 50, y + 259, 400, 3)
    ctx.fillRect(x + 50, y + 306, 400, 3)
    ctx.fillRect(x + 50, y + 353, 400, 3)
    ctx.font = "18px Arial"
    ctx.fillText("Players", x + 80, y + 22)
    ctx.fillText("TD", x + 185, y + 22)
    ctx.fillText("Y/G", x + 230, y + 22)
    ctx.fillText("Wins", x + 278, y + 22)
    ctx.fillText("Loses", x + 328, y + 22)
    ctx.fillText("Rating", x + 389, y + 22)
    ctx.font = "15px Arial"
    ctx.fillText("Ronald Reagan", x + 58, y + 53)
    ctx.fillText("John F. Kennedy", x + 58, y + 80)
    ctx.fillText("George Bush", x + 65, y + 107)
    ctx.fillText("Barack Obama", x + 58, y + 134)
    ctx.fillText("Dwight D.", x + 78, y + 161)
    ctx.fillText("Eisenhower", x + 72, y + 179)
    ctx.fillText("Harry Truman", x + 60, y + 206)
    ctx.fillText("George", x + 82, y + 233)
    ctx.fillText("Washington", x + 71, y + 252)
    ctx.fillText("Theodore", x + 75, y + 280)
    ctx.fillText("Roosevelt", x + 74, y + 298)
    ctx.fillText("John Quincy", x + 68, y + 326)
    ctx.fillText("Adams", x + 82, y + 344)
    ctx.font = "17px Arial"
    ctx.fillText("TD = Touchdowns", x + 70, y + 375)
    ctx.fillText("Y/G = Yards per Game", x + 63, y + 395)
    ctx.fillText("Rating --> Number / 100", x + 63, y + 415)
    for (c = 0; c < footballbox.length; c++) {
        for (j = 0; j < footballbox[c].length; j++) {
            ctx.fillText(footballbox[c][j], x + 182 + footballx[c], footbally[j])    
        }
    }
}
var images = function () {
    Image.src = imagelist[0];
    Image.onload = function() {
        ctx.drawImage(Image, 326, 320)
        Image.src = imagelist[1];
        Image.onload = function() {ctx.drawImage(Image, 625, 716)
        }
    }
}
var pageloader = function () {
    ctx.clearRect(0, 0, width, height)
    ctx.lineWidth = 1 
    ctx.font = "45px Arial"
    ctx.fillText("?", 950, 45)
    circle(963, 29, 22, false)
    if (page != 1) {
        house();
    }
    if (page === 1) {
        ctx.strokeStyle = "black"
        images();
        ctx.font = "25px Arial"
        ctx.fillText("History of Voting", 70, 85)
        ctx.fillText("Restrictions", 85, 110)
        ctx.fillText("Voter Behavior", 730, 90)
        ctx.fillText("of the Modern World", 695, 120)
        ctx.fillText("What Tactics Are", 380, 548)
        ctx.fillText("Used in Politics?", 380, 575)
        ctx.fillText("Women Rights Activists", 670, 1110)
        ctx.fillText("Go On Hunger Strike", 685, 1140)
        ctx.fillText("Cheesecake Song", 365, 1100)
        ctx.fillText("Goes Viral", 405, 1125)
        ctx.fillText("New Fantasy", 75, 1230)
        ctx.fillText("Football Mode", 70, 1260)
        ctx.font = "15px Arial"
        textbox(15, 120, 300, 200, letters[0], true);
        textbox(15, 645, 300, 200, letters[1], true);
        textbox(15, 1050, 300, 200, letters[2], true);
        textbox(630, 140, 350, 200, letters[3], true);
        textbox(630, 470, 350, 200, letters[4], true);
        textbox(330, 590, 280, 200, letters[5], true);
        textbox(630, 1159, 350, 200, letters[6], true);
        textbox(630, 1369, 350, 200, letters[7], true);
        textbox(330, 1139, 280, 200, letters[8], true);
        textbox(15, 1279, 300, 200, letters[9], true);
        ctx.font = "18px Arial"
        ctx.fillText("Number #1 Rated Newspaper", 355, 90)
        ctx.fillText("For Political News", 400, 113)
        ctx.font = "16px Arial"
        ctx.fillText("Rated", 450, 145)
        ctx.font = "24px Arial"
        ctx.fillText('"4.5 Stars / 5"', 390, 175)
        ctx.fillText("Put Your Ad Here!", 370, 1380)
        ctx.fillText("Call 217-105-3764", 365, 1440)
        ctx.font = "18px Arial"
        ctx.fillText("- New York Times Critics", 370, 205)
        ctx.font = "16px Arial"
        ctx.fillText("9398 Courtland Rd. Spring Valley,", 360, 255)
        ctx.fillText("NY 10977", 440, 275)
        ctx.fillText("English Papers Publishing Co.", 374, 295)
        ctx.strokeRect(325, 62, 300, 259)
        ctx.strokeRect(10, 62, 315, 1140)
        ctx.strokeRect(625, 62, 365, 654)
        ctx.strokeRect(325, 520, 300, 550)
        ctx.strokeRect(625, 1020, 365, 469)
        ctx.strokeRect(625, 1020, 365, 469)
        ctx.strokeRect(325, 1070, 300, 260)
        ctx.strokeRect(10, 1202, 315, 287)
        ctx.strokeRect(325, 1330, 300, 159)
        ctx.strokeRect(325, 1330, 300, 159)
        ctx.fillText("See page 4", 232, 1474)
        ctx.font = "30px Arial"
        ctx.fillText("The English Papers", 350, 40)
        ctx.fillRect(0, 60, width, 3)
        ctx.lineWidth = 2.5 
        ctx.strokeRect(0, 0, width, height)
    } else if (page === 4) {
        ctx.lineWidth = 2.5 
        ctx.strokeRect(0, 0, width, height)
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.fillText("The English Papers", 350, 40)
        ctx.fillRect(0, 60, width, 3)
        ctx.font = "27px Arial"
        ctx.fillText("Presidential Sports Becomes A Thing", 280, 100)
        boxes(400,200)
        ctx.font = "15px Arial"
        ctx.fillText("For today's bonus article of the day, we have", 15, 205)
        ctx.fillText("a story by Todd Robert:", 15, 221)
        textbox(15, 227, 350, 200, letters[10], true);
        ctx.font = "22px Arial"
        ctx.fillText("New Fantasy", 125, 155)
        ctx.fillText("Football Mode", 120, 180)
        ctx.lineWidth = 1.5
        ctx.strokeRect(10, 135, 370, 565)
    }
}
pageloader();
