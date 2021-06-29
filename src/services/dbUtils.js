const URL = 'https://api.github.com/users'

export const getUser = async (user) => {
    const response = await fetch(
      `${URL}/${user}`
    );
  
    const userData = await response.json();

    const userMunge = {   
        userName: userData.login, //string
        userLink: userData.html_url, //string
        userRealName: userData.name, //string
        userRepos: userData.public_repos, //number
        userGists: userData.public_gists, //number
        userFollowers: userData.followers, //number
        userFollowing: userData.following, //number
        userCreation: userData.created_at, //string
    }

  return userMunge
  };