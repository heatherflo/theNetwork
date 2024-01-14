export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.github = data.github
    this.graduated = data.graduated
    this.linkedin = data.linkedin
    this.bio = data.bio
    // TODO add additional properties if needed
  }
}
