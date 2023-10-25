class SocialNetwork {
    members = [];
    posts = [];

    constructor() {
        global.TikerObj.on("week", this.onWeek);
        global.TikerObj.on("year", this.onYear);
    }

    onWeek() {
        let count = Math.random() * 4;

        for(let i = 0; i < count; i++) {
            this.members.push(new Member().on("post", this.onNewPost));
        }
    }

    onNewPost(post) {
        this.posts.push(post);
        this.emit("social net post");
    }

    onYear() {
        console.log("Кількість учасників: " + this.members.length);
        console.log("Кількість публікацій: " + this.posts.length);

        let top3 = [top3[0], top3[1], top3[2]];
        let max = 0;

        this.posts.forEach(post => {
            if(post.likes > max) {
                max = post.likes;
                top3[2] = top3[1];
                top3[1] = top3[0];
                top3[0] = post;
            }
            else if(post.likes > top3[1].likes) {
                top3[2] = top3[1];
                top3[1] = post;
            }
            else if(post.likes > top3[2].likes) {
                top3[2] = post;
            }
        });
    }
}