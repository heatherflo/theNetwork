

export class Profile {
  constructor(data) {
    this.id = data.id || data._id
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg
    this.bio = data.bio
    this.graduated = data.graduated
    this.class = data.class
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume

  }
}