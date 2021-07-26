require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('discord.js');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.post('/message', function(req, res) {
    // should save channel_id from other part of lifecycle
    // const channel = client.channels.cache.get(<channel_id>);
    // channel.send('<content>');

    // should save user_id from other part of lifecycle
    // <client>.users.cache.get('<user_id>');
    // user.send('<content>');
});

app.listen(process.env.HTTP_PORT);

const client = new Client();

client.on('ready',() => {
    console.log('连接成功')
    client.user.setActivity(" chatbot");
});

client.on('message',(msg)=>{
    if(msg.author == client.user){
        return;//自己说的不用回复
    }
    // 如果输入hello，则返回 hi,xxx
    if(msg.content == 'hello'){
        msg.channel.send('hi,' + msg.author.toString())
    }
});

// xxx是刚才bot界面的那个token
client.login(process.env.DISCORD_TOKEN);
