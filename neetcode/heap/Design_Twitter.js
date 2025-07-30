class Tweet {
    constructor(tweetId, userId) {
        this.tweetId = tweetId;
        this.userId = userId;
    }
}

class Twitter {
    constructor() {
        this.tweets = [];
        this.userFollowing = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.tweets.push(new Tweet(tweetId, userId));
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let validIds = new Set();
        validIds.add(userId);
        
        if (this.userFollowing.has(userId)) {
            for (let followeeId of this.userFollowing.get(userId)) {
                validIds.add(followeeId);
            }
        }
        
        let res = [];
        for (let i = this.tweets.length - 1; i >= 0 && res.length < 10; i--) {
            if (validIds.has(this.tweets[i].userId)) {
                res.push(this.tweets[i].tweetId);
            }
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.userFollowing.has(followerId)) {
            this.userFollowing.set(followerId, new Set());
        }
        this.userFollowing.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (!this.userFollowing.has(followerId)) {
            this.userFollowing.set(followerId, new Set());
            return;
        }
        this.userFollowing.get(followerId).delete(followeeId);
    }
}
