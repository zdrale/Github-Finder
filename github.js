class GitHub {
  constructor () {
    this.client_id = '0f2a50632105fc9c8cab';
    this.client_secret = 'fc39006e75ab7a73122128c54b1a1b4829cb2795';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);
  
    const profileData = await profileResponse.json(); 

    return {
       profile
    } 
  }
}