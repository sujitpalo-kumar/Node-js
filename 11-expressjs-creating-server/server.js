const express = require('express');
const app =express();
const dotenv= require('dotenv');
const path = require('path');
dotenv.config({path:'./config/config.env'});

const hostname=process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/',(request,response)=>{
    response.send(`<h2>welcome to express js </h2>`)
})

app.get('/home',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'));

})


let githubProfile = {
    "login": "thenaveensaggam",
    "id": 25869485,
    "node_id": "MDQ6VXNlcjI1ODY5NDg1",
    "avatar_url": "https://avatars2.githubusercontent.com/u/25869485?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/thenaveensaggam",
    "html_url": "https://github.com/thenaveensaggam",
    "followers_url": "https://api.github.com/users/thenaveensaggam/followers",
    "following_url": "https://api.github.com/users/thenaveensaggam/following{/other_user}",
    "gists_url": "https://api.github.com/users/thenaveensaggam/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/thenaveensaggam/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/thenaveensaggam/subscriptions",
    "organizations_url": "https://api.github.com/users/thenaveensaggam/orgs",
    "repos_url": "https://api.github.com/users/thenaveensaggam/repos",
    "events_url": "https://api.github.com/users/thenaveensaggam/events{/privacy}",
    "received_events_url": "https://api.github.com/users/thenaveensaggam/received_events",
    "type": "User",
    "site_admin": false,
    "name": "NAVEEN SAGGAM",
    "company": "https://www.youtube.com/c/uibrains",
    "blog": "https://t.me/joinchat/H3ErUQ91InUKU50o1EIwCg",
    "location": "Hyderabad",
    "email": null,
    "hireable": null,
    "bio": "Enthusiastic Web Developer , Trainer and Blogger ",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 69,
    "followers": 1717,
    "following": 1,
    "created_at": "2017-02-18T18:44:26Z",
    "updated_at": "2020-08-06T00:39:54Z"
};
app.get('/json', (request , response) => {
    response.json(githubProfile);
});


app.get ('/notes',(request,response)=>(
    response.download(path.join(__dirname,'delivery.pdf'))
))

app.listen(port,hostname,() =>{
    console.log(`Express server is started att http://${hostname}:${port}`);
})



