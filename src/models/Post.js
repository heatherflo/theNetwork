
export class Post {
  constructor(data) {
    this.id = data.id || data._id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.likeIds = data.likeIds
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.likes = data.likes
  }
}

let data = {
  "_id": "65a1af9fb95e5e084faa8fea",
  "body": "Good Monkey",
  "imgUrl": "https://www.wipo.int/export/sites/www/wipo_magazine/images/en/2018/2018_01_art_7_1_400.jpg",
  "creatorId": "659f0e90b347ba8a9ce85673",
  "likeIds": [],
  "createdAt": "2024-01-12T21:31:11.828Z",
  "updatedAt": "2024-01-12T21:31:11.828Z",
  "__v": 0,
  "creator": {
    "_id": "659f0e90b347ba8a9ce85673",
    "subs": [
      "auth0|659f0e8f033bf133ad375061"
    ],
    "email": "nice@nice.com",
    "name": "nice",
    "picture": "https://s.gravatar.com/avatar/c3193eb3a2f007ed926f8d63fd538b47?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fni.png",
    "bio": "",
    "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    "github": "",
    "linkedin": "",
    "resume": "",
    "class": "",
    "graduated": false,
    "createdAt": "2024-01-10T21:40:59.150Z",
    "updatedAt": "2024-01-10T21:40:59.150Z",
    "__v": 0,
    "id": "659f0e90b347ba8a9ce85673"
  },
  "likes": [],
  "id": "65a1af9fb95e5e084faa8fea"
}